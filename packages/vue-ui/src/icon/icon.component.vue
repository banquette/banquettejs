<style src="./icon.component.css" scoped></style>
<script lang="ts">
import { IRemixQuestionMark } from "@banquette/vue-remix-icons";
import { Component, Themeable, BindThemeDirective, Vue, Render, Prop, Computed } from "@banquette/vue-typescript";
import { PropType, resolveDirective, withDirectives, openBlock, createBlock, mergeProps, Directive, ComponentPublicInstance } from "vue";
import { IconSet } from "./icon-set";
import { ThemeConfiguration } from "./theme-configuration";

declare const global: any;
let globalIconsIncluded: boolean = false;

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-icon',
    components: [IRemixQuestionMark],
    directives: [BindThemeDirective],
    inheritAttrs: false
})
export default class BtIcon extends Vue {
    /**
     * Name of the icon to display.
     */
    @Prop({type: String, required: true}) public name!: string;

    /**
     * Set into which the icon belongs (i.e. material, remix, ...).
     */
    @Prop({type: String, default: 'material'}) public set!: string;

    /**
     * Version of the icon, if applicable.
     * If `null`, the first available version will be used if the icon is rendered via local data.
     * Otherwise, the "real" icon component will be in charge of choosing the right version.
     */
    @Prop({type: String, default: null}) public version!: string;

    /**
     * Should the whitespaces around the illustration be removed?
     */
    @Prop({type: Boolean, default: false}) public crop!: string;

    /**
     * Width and height on which to render the icon.
     */
    @Prop({type: String as PropType<String | null>, default: null}) public width!: string|null;
    @Prop({type: String as PropType<String | null>, default: '1em'}) public height!: string|null;

    /**
     * Color to use as fill for the svg.
     */
    @Prop({type: String, default: 'currentColor'}) public color!: string;

    @Computed() public get icon(): ComponentPublicInstance|null {
        const set = IconSet.Get(this.set);
        if (!set) {
            return null;
        }
        return set.get(this.name);
    }

    public created(): void {
        if (!globalIconsIncluded) {
            let globalIcons: any = (typeof (window) !== 'undefined' ? window : global)?.__bt_icons__;
            for (const iconSet of Object.keys(globalIcons)) {
                IconSet.Append(iconSet, globalIcons[iconSet]);
            }
            globalIconsIncluded = true;
        }
    }

    /**
     * Try to render the icon's svg.
     */
    @Render() public render(context: any): any {
        if (!this.icon) {
            return '?'; // Unknown icon, put a question mark so user can see something.
        }
        return withDirectives((openBlock(), createBlock(this.icon, mergeProps({
            width: this.width,
            height: this.height,
            color: this.color,
            crop: this.crop,
            class: "bt-icon"
        }, context.$attrs), null, 16 /* FULL_PROPS */)), [
            [resolveDirective("bt-bind-theme") as Directive]
        ]);
    }
}
</script>
