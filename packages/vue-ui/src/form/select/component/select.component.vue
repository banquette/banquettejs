<style src="./select.component.css" scoped></style>
<template src="./select.component.html" ></template>
<script lang="ts">
import { HttpMethod } from "@banquette/http";
import {SearchType, ChoicesPropResolver, SearchParamName, ChoiceOrigin, SelectedChoice, RemoteModuleRequestEventArg, RemoteModuleResponseEventArg} from "@banquette/ui";
import { ensureInEnum } from "@banquette/utils-array";
import { debounce } from "@banquette/utils-misc";
import { getObjectKeys } from "@banquette/utils-object";
import { isArray, isUndefined, VoidCallback, Primitive } from "@banquette/utils-type";
import { IRemixCloseCircle } from "@banquette/vue-remix-icons";
import { Component, Expose, Import, Prop, TemplateRef, Themeable, Watch, ImmediateStrategy, BindThemeDirective } from "@banquette/vue-typescript";
import { useResizeObserver, ResizeObserverEntry } from "@vueuse/core";
import { PropType } from "vue";
import { BtDropdown } from "../../../dropdown";
import { ClickOutsideDirective } from "../../../misc";
import { BtProgressCircular } from "../../../progress/progress-circular";
import { BtTag } from "../../../tag";
import { BtAbstractVueForm } from "../../abstract-vue-form.component";
import { BtFormBaseInput } from "../../base-input";
import { BaseInputComposable } from "../../base-input/base-input.composable";
import { ViewModelEvents } from "../../constant";
import { BeforeSlotOrigin, AfterSlotOrigin, PropOrigin } from "../constant";
import BtChoiceSlotWrapper from "./choice-slot-wrapper.component";
import BtFormSelectChoice from "./choice/choice.component.vue";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";
import { SelectViewDataInterface } from "./select-view-data.interface";
import { SelectViewModel } from "./select.view-model";
import { ThemeConfiguration } from "./theme-configuration";
import { WrappedSelectedChoice } from "./wrapped-selected-choice";
import BtFormSelectGroup from "./group/group.component.vue";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-select',
    components: [BtFormBaseInput, BtFormSelectChoice, BtFormSelectGroup, BtChoiceSlotWrapper, BtTag, BtDropdown, BtProgressCircular, IRemixCloseCircle],
    directives: [ClickOutsideDirective, BindThemeDirective],
    emits: ['focus', 'blur', 'change', 'remote-request', 'remote-response']
})
export default class BtFormSelect extends BtAbstractVueForm<SelectViewDataInterface, SelectViewModel> {
    // To get autocompletion in the view.
    declare v: SelectViewDataInterface;

    /**
     * Array of elements to use as choices.
     * They are cumulative with other sources (like the "choices" slot or an ajax request).
     */
    @Prop({type: Array as PropType<any[]|null>, default: null}) public choices!: any[]|null;

    /**
     * Defines how to resolve the choices' labels, identifiers, values, disabled status and groups.
     * Can be:
     *   - the name of the property to use when the input is an object.
     *   - a function that takes the raw input and returns the value to use.
     */
    @Prop({type: [String, Function] as PropType<ChoicesPropResolver<string>>, default: 'label'}) public choicesLabel!: ChoicesPropResolver<string>;
    @Prop({type: [String, Function] as PropType<ChoicesPropResolver<Primitive>>, default: 'id'}) public choicesIdentifier!: ChoicesPropResolver<Primitive>;
    @Prop({type: [String, Function] as PropType<ChoicesPropResolver<any>>, default: null}) public choicesValue!: ChoicesPropResolver<any>;
    @Prop({type: [String, Function] as PropType<ChoicesPropResolver<boolean>>, default: 'disabled'}) public choicesDisabled!: ChoicesPropResolver<boolean>;
    @Prop({type: [String, Function] as PropType<ChoicesPropResolver<string>>, default: 'group'}) public choicesGroup!: ChoicesPropResolver<string>;

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
     * If `true`, the user can clear the value of the select.
     */
    @Prop({type: Boolean, default: false}) public clearable!: boolean;

    /**
     * If `true`: the dropdown is always closed when a selection is made.
     * If `false`: the dropdown is never closed when a selection is made.
     * If `auto`: the dropdown is only closed when the select is not multiple.
     */
    @Prop({type: [String, Boolean] as PropType<boolean|'auto'>, default: 'auto'}) public closeOnSelection!: 'auto'|boolean;

    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, false) public baseComposable!: BaseInputComposable;

    /**
     * Model type of the choices.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public model!: string|null;

    /**
     * Remote related props.
     */
    @Prop({name: 'remoteUrl', type: String, default: null}) public url!: string|null;
    @Prop({name: 'remoteEndpoint', type: String, default: null}) public endpoint!: string|null;
    @Prop({name: 'remoteMethod', type: String, default: HttpMethod.GET, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.GET)}) public method!: HttpMethod;
    @Prop({name: 'remoteUrlParams', type: Object, default: {}}) public urlParams!: Record<string, Primitive>;
    @Prop({name: 'remoteHeaders', type: Object, default: {}}) public headers!: Record<string, Primitive>;
    @Prop({name: 'remoteCacheInMemory', type: Boolean, default: false}) public cacheInMemory!: boolean;

    /**
     * Search related props.
     */
    @Prop({name: 'searchType', type: String, transform: (value: any) => ensureInEnum(value, SearchType, SearchType.None) }) public searchType!: SearchType;
    @Prop({name: 'searchRemoteParamName', type: [String, Array], default: 'search'}) public searchRemoteParamName!: SearchParamName;
    @Prop({name: 'searchMinLength', type: Number, default: 0}) public searchMinLength!: number;

    /**
     * Dropdown related props.
     */
    @Prop({name: 'dropdownTeleport', type: [Object, String], default: null}) public dropdownTeleport!: HTMLElement|string|null;
    @Prop({name: 'dropdownZIndex', type: [Number, String], default: undefined, transform: (v) => !isUndefined(v) ? parseInt(v, 10) : undefined}) public dropdownZIndex!: number|undefined;

    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    @Expose() public dropdownWidth: number = 0;
    @Expose() public dropdownTarget!: HTMLElement;

    @TemplateRef('input') private inputEl!: HTMLElement;
    @TemplateRef('inputWrapper') private inputWrapperEl!: HTMLElement|null;
    @TemplateRef('tagSelectionWrapper') private tagSelectionWrapperEl!: HTMLElement|null;

    private inputWrapperResizeUnsubscribe: VoidCallback|null = null;
    private lastSelectChoiceTime: number = 0;
    private lastKeyStrokeTime: number = 0;

    public constructor() {
        super();
        // For the execution of all props watchers before the proxy is initialized
        // to ensure everything is configured before the proxy calls `updateValueFromControl`
        // to assign the value of the control.
        this.eventPipeline.subscribe(ViewModelEvents.Configure, () => {
            this.onBasePropsChange();
            this.syncChoices();
            this.updateSearchConfiguration();
            this.updateSelectionVisibilityTracking();
        });
    }

    /**
     * Vue lifecycle.
     */
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
        this.lastKeyStrokeTime = (new Date()).getTime();
        this.vm.onKeyDown(event);
        this.updateInput();
        if (event.key === 'Enter' && this.allowCreation) {
            this.v.inputValue = this.v.creationBuffer = '';
        }
    }

    @Expose() public selectChoice(choice: any): void {
        this.vm.selectChoice(choice);
        this.lastSelectChoiceTime = (new Date()).getTime();
        this.inputEl.blur();
    }

    @Expose() public deselectChoice(choice: SelectedChoice|Primitive): void {
        this.vm.deselectChoice(choice);
    }

    @Expose() public deselectAll(): void {
        this.vm.deselectAll();
        this.v.base.placeholder = this.baseComposable.placeholder;
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
        if (this.v.isInputFocused) {
            return ;
        }
        this.inputEl.focus();
        this.vm.showChoices();
        this.updateInput();
    }

    @Expose() public onInputFocus(): void {
        // When clicking to select a choice, an onInputBlur is wrongly triggered on the mousedown.
        // Then, when the mouse is released, the click event on the input trigger a focus.
        // So the dropdown doesn't disappear when a selection is made.
        // To avoid that, we check if a select choice has been done in the last 150ms, and if so, we blur the input again.
        if ((new Date()).getTime() - this.lastSelectChoiceTime < 150) {
            this.inputEl.blur();
            return ;
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

        // Check that the vm is still defined because this event can occur
        // while the component is being unmounted in certain edge cases.
        if (!isUndefined(this.vm)) {
            this.vm.hideChoices();
        }
    }

    @Expose() public onInputChange = debounce(() => {
        if (!this.v.isInputReadonly) {
            this.vm.setSearchString(this.v.inputValue);
        }
        if (this.v.inputValue) {
            this.v.base.placeholder = '';
        } else {
            this.v.base.placeholder = this.baseComposable.placeholder;
        }
        if (this.vm.allowCreation) {
            this.v.creationBuffer = this.v.inputValue;
        }
    }, 100);

    /**
     * @inheritDoc
     */
    protected setupViewModel(): SelectViewModel {
        const vm = new SelectViewModel(this.proxy, this.baseComposable);
        vm.choicesOriginOrdering = [
            BeforeSlotOrigin,
            ChoiceOrigin.User,
            PropOrigin,
            ChoiceOrigin.Default,
            ChoiceOrigin.Remote,
            AfterSlotOrigin
        ];
        this.unsubscribeCallbacks.push(vm.remote.onRequest((event: RemoteModuleRequestEventArg) => {
            this.$emit('remote-request', event.request);
        }));
        this.unsubscribeCallbacks.push(vm.remote.onResponse((event: RemoteModuleResponseEventArg) => {
            this.$emit('remote-response', event.response);
        }));
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
        'model',
        'choicesLabel',
        'choicesIdentifier',
        'choicesValue',
        'choicesDisabled',
        'choicesGroup',
        'closeOnSelection',
        'dropdownTeleport',
        'dropdownZIndex'
    ], {immediate: false})
    private onBasePropsChange(): void {
        this.vm.modelType = this.model;
        this.vm.choicesLabel = this.choicesLabel;
        this.vm.choicesIdentifier = this.choicesIdentifier;
        this.vm.choicesValue = this.choicesValue;
        this.vm.choicesDisabled = this.choicesDisabled;
        this.vm.choicesGroup = this.choicesGroup;
        this.vm.closeOnSelection = this.closeOnSelection;
        this.v.dropdownTeleport = this.dropdownTeleport;
        this.v.dropdownZIndex = this.dropdownZIndex;
    }

    @Watch('choices', {immediate: false})
    private syncChoices(): void {
        this.vm.setChoices(this.choices || [], PropOrigin);
    }

    @Watch('v.control.value')
    private onSelectionChange(): void {
        /**
         * Ugly tricky to only blur the input when the value has been selected using the mouse.
         * Keep the field focus for keyboard input.
         */
        if ((new Date()).getTime() - this.lastKeyStrokeTime > 50 && !this.v.multiple && this.inputEl) {
            this.inputEl.blur();
        }
        this.updateInput();
        this.updateSelected();
        setTimeout(() => {
            this.updateTagsVisibility();
        });
        this.$emit('change', this.v.control.value);
    }

    @Watch('v.choicesVisible', {immediate: ImmediateStrategy.BeforeMount})
    private onChoiceVisibilityChange(newValue: boolean): void {
        if (newValue && !this.v.isInputReadonly) {
            this.v.inputValue = this.v.searchBuffer;
            this.v.base.placeholder = '';
        } else if (!newValue) {
            if (this.v.inputValue === this.v.searchBuffer) {
                this.v.inputValue = '';
            }
            this.v.base.placeholder = this.baseComposable.placeholder;
        }
    }

    /**
     * Reconfigure the view model to match the new search configuration.
     */
    @Watch(['searchType', 'searchRemoteParamName', 'searchMinLength', 'allowCreation', 'multiple'], {immediate: false})
    public updateSearchConfiguration(): void {
        this.v.multiple = this.multiple;
        this.vm.searchType = this.searchType;
        this.vm.searchRemoteParamName = this.searchRemoteParamName;
        this.vm.searchMinLength = this.searchMinLength;
        this.vm.allowCreation = this.allowCreation;
        this.v.isInputReadonly = this.vm.searchType === SearchType.None && !this.allowCreation;
    }

    @Watch(['model', 'remoteUrl', 'remoteEndpoint', 'remoteMethod', 'remoteUrlParams', 'remoteHeaders', 'cacheInMemory'], {immediate: ImmediateStrategy.BeforeMount})
    private syncRemoteProps(): void {
        this.vm.remote.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            headers: this.headers,
            model: this.model,
            cacheInMemory: this.cacheInMemory
        });
    }

    /**
     * Reconfigure the view and the value to match the couple multiple/lockHeight configuration.
     */
    @Watch(['multiple', 'lockHeight'], {immediate: false})
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
            if (!this.v.isInputReadonly && this.v.isInputFocused && this.v.choicesVisible && viewValue === this.v.inputValue && this.v.searchBuffer !== viewValue) {
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
            setTimeout(this.$forceUpdate);
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
            if (!isUndefined(unsubscribe)) {
                unsubscribe();
            }
            this.inputWrapperResizeUnsubscribe = null;
        };
        if (this.inputWrapperEl) {
            this.dropdownTarget = this.inputWrapperEl.parentElement as HTMLElement;
            unsubscribe = useResizeObserver(this.dropdownTarget, cb).stop;
        }
    }
}
</script>
