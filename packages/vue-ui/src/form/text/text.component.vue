<style src="./text.component.css" scoped></style>
<template src="./text.component.html"></template>
<script lang="ts">
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { IconRemixCloseCircle } from "@banquette/vue-remix-icons/close-circle";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { TemplateRef } from "@banquette/vue-typescript/decorator/template-ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { BaseFormInputComponent } from "../base-input";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { TextViewDataInterface } from "./text-view-data.interface";
import { TextViewModel } from "./text.view-model";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-text',
    components: [BaseFormInputComponent, IconRemixCloseCircle],
    directives: [BindThemeDirective]
})
export default class FormTextComponent extends AbstractVueFormComponent<TextViewDataInterface, TextViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, false) public base!: BaseInputComposable;

    /**
     * Input type.
     */
    @Prop({type: String, default: 'text'}) public type!: string;

    /**
     * The value of the `autocomplete` HTML attribute.
     */
    @Prop({type: String, default: 'off'}) public autoComplete!: string;

    /**
     * If `true`, the view value "rows" will be automatically adjusted
     * based on the number of line breaks in the control's value.
     */
    @Prop({type: Boolean, default: false}) public autoSize!: boolean;

    /**
     * If `true`, the user can clear the value of the input via an icon.
     */
    @Prop({type: Boolean, default: false}) public clearable!: boolean;

    /**
     * Control the manual resizing of the textarea.
     * If `autoSize` is `true`, the resize is automatically disabled.
     * Only applicable if type === "textarea".
     */
    @Prop({type: Boolean, default: false}) public resizable!: boolean;

    /**
     * Define a specific number of rows.
     * Only applicable if type === "textarea".
     */
    @Prop({type: Number, default: null, transform: (v: any) => v !== null ? parseInt(v, 10) : null}) public rows!: number|null;

    /**
     * Define the minimum number of rows of the textarea.
     * Only applicable if type === "textarea".
     */
    @Prop({type: Number, default: null, transform: (v: any) => v !== null ? parseInt(v, 10) : null}) public minRows!: number|null;

    /**
     * Define the maximum number of rows of the textarea.
     * Only applicable if type === "textarea".
     */
    @Prop({type: Number, default: null, transform: (v: any) => v !== null ? parseInt(v, 10) : null}) public maxRows!: number|null;

    // Template refs
    @TemplateRef('inputWrapper') public inputWrapper!: HTMLElement|null;
    @TemplateRef('input') private input!: HTMLElement|null;
    @TemplateRef('textarea') private textarea!: HTMLElement|null;

    // Override the type to get autocompletion in the view.
    @Expose() public v!: TextViewDataInterface;

    @Computed() public get activeElement(): HTMLElement {
        if (!isNullOrUndefined(this.input)) {
            return this.input;
        }
        if (!isNullOrUndefined(this.textarea)) {
            return this.textarea;
        }
        // There should always be one of the references defined.
        // This is for the rare cases where there is a type switch and the getter is called before the new ref is set.
        // So we don't have to check if there is an active element everytime we need to access it.
        const that: FormTextComponent & {__fakeInput?: HTMLInputElement} = this;
        if (isUndefined(that.__fakeInput)) {
            that.__fakeInput = document.createElement('input') as HTMLInputElement;
        }
        return that.__fakeInput;
    }

    /**
     * @inheritDoc
     */
    protected setupViewModel(): TextViewModel {
        return new TextViewModel(this.proxy, this.base);
    }

    /**
     * @inheritDoc
     */
    public focus(): void {
        this.activeElement.focus();
    }

    /**
     * @inheritDoc
     */
    public blur(): void {
        this.activeElement.blur();
    }

    /**
     * Copy applicable props into the view data.
     */
    @Watch(['type', 'rows', 'minRows', 'maxRows', 'autocomplete', 'autoSize', 'resizable'], {immediate: ImmediateStrategy.BeforeMount})
    protected syncConfigurationProps(): void {
        this.v.type = this.type;
        this.v.rows = this.rows;
        this.v.autoComplete = this.autoComplete;
        this.vm.minRows = this.minRows;
        this.vm.maxRows = this.maxRows;
        this.vm.autoSize = this.autoSize;
        this.vm.resizable = this.resizable;
    }
}
</script>
