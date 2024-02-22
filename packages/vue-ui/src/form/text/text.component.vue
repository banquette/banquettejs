<style src="./text.component.css" scoped></style>
<template src="./text.component.html"></template>
<script lang="ts">
import { isNullOrUndefined, isUndefined } from "@banquette/utils-type";
import { IRemixCloseCircle } from "@banquette/vue-remix-icons";
import { Component, Computed, Import, Prop, TemplateRef, Themeable, Watch, ImmediateStrategy, BindThemeDirective } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { BtAbstractVueForm } from "../abstract-vue-form.component";
import { BtFormBaseInput } from "../base-input";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { TextViewDataInterface } from "./text-view-data.interface";
import { TextViewModel } from "./text.view-model";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-text',
    components: [BtFormBaseInput, IRemixCloseCircle],
    directives: [BindThemeDirective]
})
export default class BtFormText extends BtAbstractVueForm<TextViewDataInterface, TextViewModel> {
    // To get autocompletion in the view.
    declare v: TextViewDataInterface;

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
    @Prop({type: [String, Number] as PropType<string|number|null>, default: null, transform: (v: any) => v !== null ? parseInt(v, 10) : null}) public rows!: number|null;

    /**
     * Define the minimum number of rows of the textarea.
     * Only applicable if type === "textarea".
     */
    @Prop({type: [String, Number] as PropType<string|number|null>, default: null, transform: (v: any) => v !== null ? parseInt(v, 10) : null}) public minRows!: number|null;

    /**
     * Define the maximum number of rows of the textarea.
     * Only applicable if type === "textarea".
     */
    @Prop({type: [String, Number] as PropType<string|number|null>, default: null, transform: (v: any) => v !== null ? parseInt(v, 10) : null}) public maxRows!: number|null;

    // Template refs
    @TemplateRef('inputWrapper') public inputWrapper!: HTMLElement|null;
    @TemplateRef('input') private input!: HTMLElement|null;
    @TemplateRef('textarea') private textarea!: HTMLElement|null;

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
        const that: BtFormText & {__fakeInput?: HTMLInputElement} = this;
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
