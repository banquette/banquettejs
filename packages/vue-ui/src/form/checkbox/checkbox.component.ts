import { VoidCallback } from "@banquette/utils-type/types";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { TemplateRef } from "@banquette/vue-typescript/decorator/template-ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { ViewModelEvents } from "../constant";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { CheckboxViewDataInterface } from "./checkbox-view-data.interface";
import { CheckboxViewModel } from "./checkbox.view-model";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-checkbox',
    directives: [BindThemeDirective]
})
export default class CheckboxComponent extends AbstractVueFormComponent<CheckboxViewDataInterface, CheckboxViewModel> {
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
    @Prop({type: String, default: null}) public label!: string|null;

    /**
     * If `true` or `false` the checkbox will be checked or unchecked respectively
     * upon initialization or when a change is detected on the prop.
     */
    @Prop({type: Boolean, default: null}) public checked!: boolean|null;

    /**
     * The value to set to the control when the checkbox is checked.
     */
    @Prop({default: true}) public checkedValue!: any;

    /**
     * The value to set to the control when the checkbox is unchecked.
     */
    @Prop() public uncheckedValue!: any;

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
    @Prop({type: String, default: null}) public group!: string|null;

    @Computed() public get hasDefaultSlot(): boolean {
        return this.hasNonEmptySlot('default');
    }

    @Computed() public get hasLabelSlot(): boolean {
        return this.hasNonEmptySlot('label');
    }

    @TemplateRef('inputWrapper') public inputWrapper!: HTMLElement;

    // Override the type to get autocompletion in the view.
    public vm!: CheckboxViewModel;
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
        this.vm.toggle();
    }

    /**
     * @inheritDoc
     */
    protected setupViewModel(): CheckboxViewModel {
        return new CheckboxViewModel(this.proxy, this.base);
    }

    /**
     * Copy applicable props into the view data.
     */
    @Watch(['label', 'checkedValue', 'uncheckedValue', 'uncheckable'], {immediate: ImmediateStrategy.BeforeMount})
    protected syncConfigurationProps(): void {
        this.v.label = this.label;
        this.vm.checkedValue = this.checkedValue;
        this.vm.uncheckedValue = this.uncheckedValue;
        this.vm.uncheckable = this.uncheckable;
    }

    @Watch('checked', {immediate: ImmediateStrategy.BeforeMount})
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
