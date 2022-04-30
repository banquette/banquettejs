import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { TemplateRef } from "@banquette/vue-typescript/decorator/template-ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { BaseInputComponent } from "../base-input";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { TextViewDataInterface } from "./text-view-data.interface";
import { TextViewModel } from "./text.view-model";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-text',
    components: [BaseInputComponent],
    directives: [BindThemeDirective]
})
export default class TextComponent extends AbstractVueFormComponent<TextViewDataInterface, TextViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, false) public base!: BaseInputComposable;

    /**
     * If `true` the text input is a textarea.
     */
    @Prop({type: Boolean, default: false}) public multiline!: boolean;

    /**
     * Input type.
     * Only applicable if not multiline.
     */
    @Prop({type: String, default: 'text'}) public type!: string;

    /**
     * The value of the `autocomplete` HTML attribute.
     */
    @Prop({type: String, default: 'off'}) public autoComplete!: string;

    /**
     * Define the number of rows of the textarea.
     * Only applicable if multiline.
     */
    @Prop({type: Number, default: null, transform: (v: any) => v !== null ? parseInt(v, 10) : null}) public rows!: number|null;

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
        const that: TextComponent & {__fakeInput?: HTMLInputElement} = this;
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
    @Watch(['multiline', 'type', 'rows', 'autocomplete'], {immediate: ImmediateStrategy.BeforeMount})
    protected syncConfigurationProps(): void {
        this.v.multiline = this.multiline;
        this.v.type = this.type;
        this.v.rows = this.rows;
        this.v.autoComplete = this.autoComplete;
    }
}
