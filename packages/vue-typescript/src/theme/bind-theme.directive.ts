import { UnsubscribeFunction } from "@banquette/event/type";
import { UsageException } from "@banquette/exception/usage.exception";
import { proxy } from "@banquette/utils-misc/proxy";
import { DirectiveBinding } from "vue";
import { ACTIVE_VARIANTS } from "../constants";
import { ComponentMetadataInterface } from "../decorator/component-metadata.interface";
import { Directive } from "../decorator/directive.decorator";
import { ThemeableMetadata } from "../decorator/themeable.decorator";
import { anyToTsInst, anyToComponentMetadata } from "../utils/converters";
import { Vue } from "../vue";
import { getThemesForComponent } from "./utils/get-themes-for-component";
import { matchVariant } from "./utils/match-variants";
import { splitVariantString } from "./utils/split-variant-string";
import { VueTheme } from "./vue-theme";
import { VueThemes } from "./vue-themes";

interface ThemeParentsTracker {
    theme: VueTheme;
    trackedParentComponents: string[];
}

@Directive('bt-bind-theme')
export class BindThemeDirective extends Vue {
    /**
     * The Typescript class instance of the component.
     */
    private instance!: any;

    /**
     * The global object that holds all the metadata of the component.
     */
    private metadata!: ComponentMetadataInterface;

    /**
     * A ref on `metadata.themeable` to avoid having to check if it's not null on every use.
     */
    private configuration!: ThemeableMetadata;

    /**
     * Array of themes to notify when the component mutates.
     */
    private trackingThemes: VueTheme[] = [];

    /**
     * Sorted list of active variants UIDs, joined as a string for quick comparison.
     */
    private activeVariantsAttributesStr: string = '';

    /**
     * Centralize the unsubscribe functions of all subscribed events.
     */
    private unsubscribeFns: UnsubscribeFunction[] = [];

    /**
     * Vue lifecycle.
     */
    public created(el: Element, bindings: DirectiveBinding) {
        this.instance = anyToTsInst(bindings.instance);
        const metadata = anyToComponentMetadata(this.instance);
        const configuration = metadata ? metadata.themeable : null;
        if (!this.instance || !metadata || !configuration) {
            throw new UsageException('The "v-bt-bind-theme" directive can only be used on vue-typescript components.');
        }
        this.metadata = metadata;
        this.configuration = configuration;
        VueThemes.OnChanged(() => {
            this.computeChanges(el);
        });
        this.computeChanges(el);
    }

    /**
     * Vue lifecycle.
     */
    public beforeUpdate(el: Element) {
        this.computeChanges(el);
    }

    /**
     * Vue lifecycle.
     */
    public updated() {
        for (const theme of this.trackingThemes) {
            // Notify the theme we have changed so other components can react to it.
            theme.notifyComponentChange(this.metadata.component.name);
        }
    }

    /**
     * Vue lifecycle.
     */
    public unmounted(): void {
        for (const fn of this.unsubscribeFns) {
            fn();
        }
        this.unsubscribeFns = [];
    }

    /**
     * Rematch all themes and variants for the component.
     */
    private computeChanges(el: Element): void {
        const themes = getThemesForComponent(this.instance);
        const themesParentsTrackers: ThemeParentsTracker[] = [];
        const activeVariantsAttributes: string[] = [];
        let expectedVariants: string[] = splitVariantString(this.instance[this.configuration.prop] || '');

        this.instance[ACTIVE_VARIANTS] = [];

        // Find relevant variants for the state of the component.
        for (const theme of themes) {
            const variantsCandidates = theme.getVariants(this.metadata.component.name);
            const themeParentsTracker: ThemeParentsTracker = {theme, trackedParentComponents: []};
            for (const variantCandidate of variantsCandidates) {
                if (matchVariant(variantCandidate, expectedVariants, this.instance)) {
                    this.instance[ACTIVE_VARIANTS].push(variantCandidate);
                    activeVariantsAttributes.push(variantCandidate.uid);
                    if (variantCandidate.applyIds.length > 0) {
                        this.instance[ACTIVE_VARIANTS] = this.instance[ACTIVE_VARIANTS].concat(variantsCandidates.filter((v) => {
                            if (v.publicId !== null && variantCandidate.applyIds.indexOf(v.publicId) > -1 && this.instance[ACTIVE_VARIANTS].indexOf(v) < 0) {
                                activeVariantsAttributes.push(v.uid);
                                return true;
                            }
                            return false;
                        }));
                    }
                    variantCandidate.use(this.instance, this.configuration);
                }

                // Find if the variant depends on parent components.
                for (const variantSelectorCandidate of variantCandidate.selector.candidates) {
                    for (const parentSelector of variantSelectorCandidate.parents) {
                        if (parentSelector.name !== this.metadata.component.name /* To prevent infinite loop */ &&
                            themeParentsTracker.trackedParentComponents.indexOf(parentSelector.name) < 0) {
                            themeParentsTracker.trackedParentComponents.push(parentSelector.name);
                        }
                    }
                }
            }
            if (themeParentsTracker.trackedParentComponents.length > 0) {
                themesParentsTrackers.push(themeParentsTracker);
            }
        }

        // Check for changes and apply them if there are.
        const activeVariantsAttributesStr = activeVariantsAttributes.sort().join('#');
        if (this.activeVariantsAttributesStr !== activeVariantsAttributesStr) {
            // Reset previous state
            this.trackingThemes = [];

            for (const unsubscribeFn of this.unsubscribeFns) {
                unsubscribeFn();
            }

            const lastActiveVariantsAttributes = this.activeVariantsAttributesStr.split('#');
            for (const lastActiveAttribute of lastActiveVariantsAttributes) {
                if (lastActiveAttribute) {
                    el.removeAttribute('data-' + lastActiveAttribute);
                }
            }

            // Apply changes to the DOM
            for (const item of this.instance[ACTIVE_VARIANTS]) {
                el.setAttribute('data-' + item.uid, '');
                this.unsubscribeFns.push(item.onChange(proxy(this.scheduleForceUpdate, this)));
            }

            for (const item of themesParentsTrackers) {
                // Subscribe to changes of other components.
                this.unsubscribeFns.push(item.theme.onComponentsChange(item.trackedParentComponents, () => {
                    this.computeChanges(el);
                }));

                this.trackingThemes.push(item.theme);
            }

            this.activeVariantsAttributesStr = activeVariantsAttributesStr;
        }
    }

    /**
     * Force the update of everything in the current instance.
     */
    private forceUpdate() {
        this.instance.$forceUpdateComputed();
        this.instance.$forceUpdate();
    }

    /**
     * Schedule a force update for the next tick while ensuring only one is made.
     */
    private scheduleForceUpdate = (() => {
        let scheduled = false;
        return () => {
            if (!scheduled) {
                scheduled = true;
                this.instance.$nextTick(() => {
                    this.forceUpdate();
                    scheduled = false;
                });
            }
        };
    })();
}
