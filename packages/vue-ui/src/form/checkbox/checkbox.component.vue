<style src="./checkbox.component.css" scoped></style>
<template src="./checkbox.component.html" ></template>
<script lang="ts">
import { FormControl } from "@banquette/form";
import { ValueIdentifierResolver } from "@banquette/ui";
import { isObject, VoidCallback, Primitive } from "@banquette/utils-type";
import { Component, Computed, Expose, Import, Prop, TemplateRef, Themeable, Watch, ImmediateStrategy, BindThemeDirective } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { BtAbstractVueForm } from "../abstract-vue-form.component";
import { BtFormBaseInput } from "../base-input";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { ViewModelEvents, UndefinedValue } from "../constant";
import { CheckboxViewDataInterface } from "./checkbox-view-data.interface";
import { CheckboxViewModel } from "./checkbox.view-model";
import { ThemeConfiguration } from "./theme-configuration";

const ModelValuesMap = new WeakMap<any, FormControl>();

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-checkbox',
    components: [BtFormBaseInput],
    directives: [BindThemeDirective]
})
export default class BtFormCheckbox extends BtAbstractVueForm<CheckboxViewDataInterface, CheckboxViewModel> {
    // To get autocompletion in the view.
    declare v: CheckboxViewDataInterface;

    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, {label: false}) public base!: BaseInputComposable;

    /**
     * The text to show next to the checkbox.
     *
     * The label of the composable is not used to voluntarily to keep it undefined
     * so the label can be shown in the checkbox component's template instead.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public label!: string|null;

    /**
     * If `true` or `false` the checkbox will be checked or unchecked respectively
     * upon initialization or when a change is detected on the prop.
     */
    @Prop({type: Boolean as PropType<boolean|null>, default: null}) public checked!: boolean|null;

    /**
     * The value to set to the control when the checkbox is checked.
     */
    @Prop({default: true}) public checkedValue!: any;

    /**
     * The value to set to the control when the checkbox is unchecked.
     */
    @Prop() public uncheckedValue!: any;

    /**
     * Defines how to resolve the checked value identifier when it's an object.
     * Can be:
     *   - the name of a property in the object.
     *   - a function that takes the object and returns the value to use.
     */
    @Prop({type: [String, Function] as PropType<ValueIdentifierResolver<Primitive>>, default: 'id'}) public valueIdentifier!: ValueIdentifierResolver<Primitive>;

    /**
     * If `true`, force the checkbox to be visually indeterminate.
     *
     * The indeterminate status will be lost each time the checkbox changes state,
     * and will be restored if the prop changes to `true`.
     */
    @Prop({type: Boolean, default: false}) public indeterminate!: boolean;

    /**
     * If `true` a radio group can be totally unchecked.
     */
    @Prop({type: Boolean, default: false}) public uncheckable!: any;

    /**
     * If defined the component will behave like a radio button.
     * Only one value can be selected for a given group.
     *
     * If `null` the component will behave like a checkbox.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public group!: string|null;

    @Computed() public get hasDefaultSlot(): boolean {
        return this.hasNonEmptySlot('default');
    }

    @Computed() public get hasLabelSlot(): boolean {
        return this.hasNonEmptySlot('label');
    }

    @TemplateRef('inputWrapper') public inputWrapper!: HTMLElement;

    private unsubscribeMethods: VoidCallback[] = [];

    public constructor() {
        super();
        this.eventPipeline.subscribe(ViewModelEvents.Ready, () => {
            this.unsubscribeMethods.push(this.proxy.onReady(() => {
                this.vm.group = this.group;
            }));
            this.unsubscribeMethods.push(this.proxy.onDetach(() => {
                this.vm.removeGroup();
            }));
            if (this.checked) {
                this.vm.check();
            }
            if (this.indeterminate) {
                this.vm.indeterminate = true;
            }
        });
    }

    /**
     * @inheritDoc
     */
    public beforeUnmount() {
        super.beforeUnmount();
        for (const fn of this.unsubscribeMethods) {
            fn();
        }
    }

    @Expose() public onKeyDown(event: KeyboardEvent): void {
        this.vm.onKeyDown(event);
    }

    @Expose() public toggle(): void {
        if (!this.disabled) {
            this.vm.toggle();
        }
    }

    /**
     * @inheritDoc
     */
    protected setupViewModel(): CheckboxViewModel {
        return new CheckboxViewModel(this.proxy, this.base);
    }

    /**
     * @inheritDoc
     */
    protected onModelValueChange(newValue: any): void {
        if (newValue === UndefinedValue) {
            return;
        }
        let control: FormControl;
        if (isObject(newValue)) {
            if (!ModelValuesMap.has(newValue)) {
                ModelValuesMap.set(newValue, this.proxy.getControl());
            }
            control = ModelValuesMap.get(newValue) as FormControl;
        } else {
            control = this.proxy.getControl();
        }
        this.proxy.setControl(control);
        control.setValue(newValue);
    }

    /**
     * Copy applicable props into the view data.
     */
    @Watch(['label', 'checkedValue', 'uncheckedValue', 'uncheckable', 'valueIdentifier'], {immediate: ImmediateStrategy.BeforeMount | ImmediateStrategy.SsrPrefetch})
    protected syncConfigurationProps(): void {
        this.v.label = this.label;
        this.vm.valueIdentifier = this.valueIdentifier;
        this.vm.checkedValue = this.checkedValue;
        this.vm.uncheckedValue = this.uncheckedValue;
        this.vm.uncheckable = this.uncheckable;
    }

    @Watch('checked', {immediate: ImmediateStrategy.BeforeMount | ImmediateStrategy.SsrPrefetch})
    private onCheckedChange(newValue: boolean|null): void {
        if (newValue) {
            this.vm.check();
        } else if (newValue === false) {
            this.vm.uncheck();
        }
    }

    @Watch('group', {immediate: false})
    private onGroupChange(newValue: string|null): void {
        // Only set the group if a control has been assigned.
        // Otherwise we can ignore because a callback is already registered to the `onReady` event of the proxy.
        if (this.proxy.ready) {
            this.vm.group = newValue;
        }
    }

    @Watch('indeterminate', {immediate: false})
    private onIndeterminateChange(newValue: boolean): void {
        this.vm.indeterminate = newValue;
    }
}
</script>
