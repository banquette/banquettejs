import { HttpMethod } from "@banquette/http/constants";
import { SearchType } from "@banquette/ui/form/select/constant";
import { ChoiceOrigin } from "@banquette/ui/form/select/constant";
import { SelectedChoice } from "@banquette/ui/form/select/selected-choice";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { debounce } from "@banquette/utils-misc/debounce";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { isArray } from "@banquette/utils-type/is-array";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { VoidCallback } from "@banquette/utils-type/types";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { TemplateRef } from "@banquette/vue-typescript/decorator/template-ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { useResizeObserver, ResizeObserverEntry } from "@vueuse/core";
import { DropdownComponent } from "../../../dropdown";
import { ClickOutsideDirective } from "../../../misc";
import { ProgressCircularComponent } from "../../../progress/progress-circular";
import { TagComponent } from "../../../tag";
import { BaseInputComposable } from "../../base-input/base-input.composable";
import { ViewModelEvents } from "../../constant";
import { ErrorComponent } from "../../error";
import { NewAbstractVueFormComponent } from "../../new-abstract-vue-form.component";
import { BeforeSlotOrigin, AfterSlotOrigin, PropOrigin } from "../constant";
import ChoiceSlotWrapperComponent from "./choice-slot-wrapper.component";
import ChoiceComponent from "./choice/choice.component.vue";
import { SelectViewDataInterface } from "./select-view-data.interface";
import { SelectViewModel } from "./select.view-model";
import { ThemeConfiguration } from "./theme-configuration";
import { WrappedSelectedChoice } from "./wrapped-selected-choice";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-select',
    components: [ChoiceComponent, ChoiceSlotWrapperComponent, TagComponent, DropdownComponent, ErrorComponent, ProgressCircularComponent],
    directives: [ClickOutsideDirective]
})
export default class SelectComponent extends NewAbstractVueFormComponent<SelectViewDataInterface, SelectViewModel> {
    /**
     * Array of elements to use as choices.
     * They are cumulative with other sources (like the "choices" slot or an ajax request).
     */
    @Prop({type: Array, default: null}) public choices!: any[]|null;

    /**
     * Define how the string label is extracted from object choices.
     */
    @Prop({type: String, default: null}) public choicesLabelProperty!: string|null;
    @Prop({type: String, default: null}) public choicesLabelPropertyExpr!: string|null;

    /**
     * Name of the property to use as identifier when a choice is an object.
     */
    @Prop({type: String, default: null}) public choicesIdentifierProperty!: string|null;

    /**
     * Name of the property to use as value when a choice is an object.
     */
    @Prop({type: String, default: null}) public choicesValueProperty!: string|null;

    /**
     * Name of the property to use as disabled flag when a choice is an object.
     */
    @Prop({type: String, default: null}) public choicesDisabledProperty!: string|null;

    /**
     * Name of the property to use as group when a choice is an object.
     */
    @Prop({type: String, default: null}) public choicesGroupProperty!: string|null;

    /**
     * If `true` the select allow for multiple values.
     */
    @Prop({type: Boolean, default: false}) public multiple!: boolean;

    /**
     * If `true`, the height of the select will never grow.
     */
    @Prop({type: Boolean, default: false}) public lockHeight!: boolean;

    /**
     * If `true`, the user can enter custom values using the input, they will be added to the selected
     * values even if not available in the list of choices.
     */
    @Prop({type: Boolean, default: false}) public allowCreation!: boolean;

    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, false) public baseComposable!: BaseInputComposable;

    /**
     * Remote related props.
     */
    @Prop({name: 'remote:url', type: String, default: null}) public url!: string|null;
    @Prop({name: 'remote:endpoint', type: String, default: null}) public endpoint!: string|null;
    @Prop({name: 'remote:model', type: String, default: null}) public model!: string|null;
    @Prop({name: 'remote:method', type: String, default: HttpMethod.GET, validate: (value) => ensureInEnum(value, HttpMethod, HttpMethod.GET)}) public method!: string|null;
    @Prop({name: 'remote:urlParams', type: Object, default: {}}) public urlParams!: Record<string, string>;

    /**
     * Search related props.
     */
    @Prop({name: 'search:type', type: String, validate: (value: any) => ensureInEnum(value, SearchType, SearchType.None) }) public searchType!: SearchType;
    @Prop({name: 'search:remoteParamName', type: [String, Array], default: 'search'}) public searchRemoteParamName!: string|string[];
    @Prop({name: 'search:minLength', type: Number, default: 0}) public searchMinLength!: number;

    // Override the type to get autocompletion in the view.
    @Expose() public v!: SelectViewDataInterface;
    @Expose() public dropdownWidth: number = 0;
    @Expose() public dropdownTarget!: HTMLElement;

    @TemplateRef('input') private inputEl!: HTMLElement;
    @TemplateRef('inputWrapper') private inputWrapperEl!: HTMLElement|null;
    @TemplateRef('tagSelectionWrapper') private tagSelectionWrapperEl!: HTMLElement|null;

    private inputWrapperResizeUnsubscribe: VoidCallback|null = null;

    public constructor() {
        super();
        this.eventPipeline.subscribe(ViewModelEvents.Ready, () => {});
    }

    public mounted() {
        super.mounted();
        this.observerInputWrapperSize((entries: readonly ResizeObserverEntry[]) => {
            this.dropdownWidth = entries[0].contentRect.width;
            this.updateTagsVisibility();
        });
    }

    /**
     * Vue lifecycle.
     */
    public beforeUnmount() {
        super.beforeUnmount();
        if (this.inputWrapperResizeUnsubscribe) {
            this.inputWrapperResizeUnsubscribe();
        }
    }

    @Expose() public onKeyDown(event: KeyboardEvent): void {
        this.vm.onKeyDown(event);
        this.updateInput();
    }

    @Expose() public deselectChoice(choice: SelectedChoice): void {
        this.vm.deselectChoice(choice);
    }

    @Expose() public deselectAll(): void {
        this.vm.deselectAll();
    }

    @Expose() public removeItem(item: SelectedChoice): void {
        for (let i = 0; i < this.v.control.value.length; ++i) {
            if (this.v.control.value[i].identifier === item.identifier) {
                this.v.control.value.splice(i, 1);
            }
        }
    }

    @Expose() public toggleSelectedPopover(): void {
        this.v.selectedPopoverVisible = !this.v.selectedPopoverVisible;
    }

    @Expose() public hideSelectedPopover(): void {
        this.v.selectedPopoverVisible = false;
    }

    @Expose() public onInputWrapperClick(): void {
        this.inputEl.focus();
        this.vm.showChoices();
        this.updateInput();
    }

    @Expose() public onInputFocus(): void {
        if (!this.v.isInputReadonly) {
            this.v.inputValue = '';
        }
        this.v.control.onFocus();
        this.v.isInputFocused = true;
    }

    @Expose() public onInputBlur(): void {
        if (!this.v.isInputReadonly) {
            this.v.inputValue = this.v.inputPlaceholder;
        }
        this.v.control.onBlur();
        this.v.isInputFocused = false;
    }

    @Expose() public onInputChange = debounce(() => {
        if (!this.v.isInputReadonly) {
            this.vm.setSearchString(this.v.inputValue);
        }
    }, 100);

    /**
     * @inheritDoc
     */
    protected setupViewModel(): SelectViewModel {
        const vm = new SelectViewModel(this.proxy, this.baseComposable);
        vm.choicesOriginOrdering = [
            BeforeSlotOrigin,
            PropOrigin,
            ChoiceOrigin.Default,
            ChoiceOrigin.Remote,
            AfterSlotOrigin
        ];
        return vm;
    }

    /**
     * @inheritDoc
     */
    protected onFocusChanged(newValue: boolean): void {
        super.onFocusChanged(newValue);
        if (newValue) {
            this.v.selectedPopoverVisible = false;
        }
    }

    @Watch([
        'choicesLabelProperty',
        'choicesLabelPropertyExpr',
        'choicesIdentifierProperty',
        'choicesValueProperty',
        'choicesDisabledProperty',
        'choicesGroupProperty'
    ], {immediate: ImmediateStrategy.BeforeMount})
    private onBasePropsChange(): void {
        this.vm.choicesLabelProperty = this.choicesLabelProperty;
        this.vm.choicesLabelPropertyExpr = this.choicesLabelPropertyExpr;
        this.vm.choicesIdentifierProperty = this.choicesIdentifierProperty;
        this.vm.choicesValueProperty = this.choicesValueProperty;
        this.vm.choicesDisabledProperty = this.choicesDisabledProperty;
        this.vm.choicesGroupProperty = this.choicesGroupProperty;
    }

    @Watch('choices', {immediate: ImmediateStrategy.BeforeMount})
    private syncChoices(): void {
        this.vm.setChoices(this.choices || [], PropOrigin);
    }

    @Watch('v.control.value')
    private onSelectionChange(): void {
        this.updateInput();
        this.updateSelected();
        this.vm.setSearchString('');
        if (this.v.multiple) {
            this.v.inputValue = '';
            this.v.inputPlaceholder = '';
        }
        window.requestAnimationFrame(() => {
            this.updateTagsVisibility();
        });
    }

    /**
     * Reconfigure the view model to match the new search configuration.
     */
    @Watch(['searchType', 'searchRemoteParamName', 'searchMinLength', 'allowCreation'], {immediate: ImmediateStrategy.BeforeMount})
    public updateSearchConfiguration(): void {
        this.vm.searchType = this.searchType;
        this.vm.searchRemoteParamName = this.searchRemoteParamName;
        this.vm.searchMinLength = this.searchMinLength;
        this.vm.allowCreation = this.allowCreation;
        this.v.isInputReadonly = this.vm.searchType === SearchType.None && !this.allowCreation;
    }

    @Watch(['url', 'endpoint', 'method', 'model', 'urlParams'], {immediate: ImmediateStrategy.BeforeMount})
    private syncRemoteProps(): void {
        this.vm.remote.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: ensureInEnum(this.method, HttpMethod, HttpMethod.GET),
            urlParams: this.urlParams,
            model: this.model
        });
    }

    /**
     * Reconfigure the view and the value to match the couple multiple/lockHeight configuration.
     */
    @Watch(['multiple', 'lockHeight'], {immediate: ImmediateStrategy.Mounted})
    private updateSelectionVisibilityTracking(): void {
        this.v.multiple = this.multiple;
        this.v.isHeightLocked = this.lockHeight;
        if (!this.v.needsSelectionPopover) {
            for (const id of getObjectKeys(this.v.selected)) {
                this.v.selected[id].visible = true;
            }
            this.v.selectedPopoverVisible = false;
            this.v.selectedInPopover = [];
        }
        if (this.v.multiple) {
            if (!isArray(this.v.control.value)) {
                this.v.control.value = !isUndefined(this.v.control.value) ? [this.v.control.value] : [];
            }
            this.onSelectionChange();
        } else if (isArray(this.v.control.value)) {
            this.v.control.value = this.v.control.value.length > 0 ? this.v.control.value[0] : undefined;
        }
        if (this.v.multiple) {
            this.v.inputValue = '';
            this.v.inputPlaceholder = '';
        }
    }

    /**
     * Update the value of the input that holds the selection.
     */
    private updateInput(): void {
        if (!this.multiple) {
            const viewValue = this.v.control.value instanceof SelectedChoice ? this.v.control.value.label : '';
            this.v.inputPlaceholder = viewValue;
            if (!this.v.isInputReadonly && this.v.isInputFocused && this.v.choicesVisible && viewValue === this.v.inputValue && this.vm.searchBuffer !== viewValue) {
                this.v.inputValue = '';
            } else if (!this.v.choicesVisible) {
                this.v.inputValue = viewValue;
            }
        }
    }

    /**
     * Duplicate the current selection into an array of `WrappedSelectedChoice`
     * that adds a `visible` attribute, specific to this implementation of the component.
     */
    private updateSelected() {
        const selected: Record<number, WrappedSelectedChoice> = {};
        if (isArray(this.v.control.value)) {
            for (const item of this.v.control.value) {
                if (isUndefined(this.v.selected[item.id])) {
                    selected[item.id] = new WrappedSelectedChoice(item, !this.v.needsSelectionPopover);
                } else {
                    selected[item.id] = this.v.selected[item.id];
                }
            }
        }
        this.v.selected = selected;
    }

    /**
     * Check for each tag in the view if it must be moved in the popover or not.
     * Only relevant if the selection is multiple and the height is locked.
     */
    private updateTagsVisibility(): void {
        if (!this.v.needsSelectionPopover || !this.tagSelectionWrapperEl || !isArray(this.v.control.value)) {
            return ;
        }
        // The size taken by the '+ N" tag so it doesn't overlap with other tags.
        // This size can be very small because the text doesn't change much.
        const additionalTagWidth = 55;
        let previousId: number = 0;
        const selectionRect = this.tagSelectionWrapperEl.getBoundingClientRect();
        const childrenCount = this.tagSelectionWrapperEl.children.length;
        this.v.selectedInPopover = [];

        for (let i = 0; i < childrenCount; ++i) {
            const child = this.tagSelectionWrapperEl.children[i];
            const childId = parseInt(child.getAttribute('data-id') || '0', 10);
            if (isUndefined(this.v.selected[childId])) {
                continue ;
            }
            const childRect = child.getBoundingClientRect();
            if (((i < childrenCount - 1 && selectionRect.right - childRect.right <= additionalTagWidth) ||
                (i === childrenCount - 1 && selectionRect.right - childRect.right < 0))) {
                this.v.selected[childId].visible = false;

                if (i === childrenCount - 1 && childRect.width < additionalTagWidth && previousId > 0 && this.v.selected[previousId].visible) {
                    this.v.selected[previousId].visible = false;
                    this.v.selectedInPopover.push(this.v.selected[previousId].choice);
                }
                this.v.selectedInPopover.push(this.v.selected[childId].choice);
            } else {
                this.v.selected[childId].visible = true;
            }
            previousId = childId;
        }
        if (!this.v.selectedInPopover.length) {
            this.v.selectedPopoverVisible = false;
        } else if (!this.$refs.additionalTagsAggregator) {
            //
            // Ugly fix to ensure the ref "additionalTagsAggregator" is updated in the view.
            // The ref is properly resolved in the component but not available in the view randomly.
            //
            // TODO: Investigate this issue for a proper fix.
            //
            window.setTimeout(this.$forceUpdate);
        }
    }

    /**
     * Observe size changes of the input wrapper to update tags visibility.
     * Only relevant if the selection is multiple and the height is locked.
     */
    private observerInputWrapperSize(cb: (entries: readonly ResizeObserverEntry[]) => void): void {
        if (this.inputWrapperResizeUnsubscribe) {
            this.inputWrapperResizeUnsubscribe();
        }
        let unsubscribe: VoidCallback;
        this.inputWrapperResizeUnsubscribe = () => {
            unsubscribe();
            this.inputWrapperResizeUnsubscribe = null;
        };
        if (this.inputWrapperEl) {
            this.dropdownTarget = this.inputWrapperEl.parentElement as HTMLElement;
            unsubscribe = useResizeObserver(this.dropdownTarget, cb).stop;
        }
    }
}
