import { TextViewModel } from "@banquette/ui/form/text/text.view-model";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { TemplateRef } from "@banquette/vue-typescript/decorator/template-ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { ProgressCircularComponent } from "../../progress/progress-circular";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { ErrorComponent } from "../error";

/**
 * A generic text component the uses the generic view model from the `@banquette/form` package.
 */
@Themeable({
    vars: {
        color: 'slvxvxoa',
        outlineWidth: 'm4vweagr',
        outlineColor: 'aqqhi16f',
        padding: 'x73pwbop',
        borderRadius: 'b0whwn2z',
        boxShadow: 'ejw144jm',
        background: 'fafhipdb',
        fontSize: 'yvwfinhn',

        label: {
            color: 'hjoqe90v',
            margin: 'r60agvhh',
            fontSize: 'xb4919f6',
            fontWeight: 'cfvnkwve'
        },

        placeholder: {
            color: 'qdw6a9fh',
            fontSize: 'bec4uu9b'
        },

        focused: {
            outlineWidth: 'e2xlw36v',
            outlineColor: 'b1hj6140',
            background: 'nfwwjp5t',
            boxShadow: 'd6zvc2x5'
        },

        error: {
            outlineWidth: 'x63if0mt',
            outlineColor: 'q30w5vdm',
            background: 'fv3912g0',
            boxShadow: 'cub29qik',

            focused: {
                outlineWidth: 'i5th4lyv'
            }
        },

        disabled: {
            outline: 'fa2n3mu4',
            background: 'w0bfunmz',
            boxShadow: 'nqf8p3jj',

            label: {
                color: 'b9gdkbqj',
                fontWeight: 'h9nc2z49'
            }
        },

        help: {
            color: 'fpv8mky0'
        }
    }
})
@Component({
    name: 'bt-form-text',
    components: [ProgressCircularComponent, ErrorComponent]
})
export default class TextComponent extends AbstractVueFormComponent<TextViewModel> {
    /**
     * The label of the field.
     */
    @Prop({type: String, default: null}) public label!: string|null;

    /**
     * A placeholder value to show when there is no value selected.
     */
    @Prop({type: String, default: null}) public placeholder!: string|null;

    /**
     * A help text to show to the user.
     */
    @Prop({type: String, default: null}) public help!: string|null;

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
     * Define the number of rows of the textarea.
     * Only applicable if multiline.
     */
    @Prop({type: [String, Number], default: null}) public rows!: string|number|null;

    /**
     * If `true` the label will float and take the place of the placeholder when possible.
     */
    @Prop({type: Boolean, default: true}) public floatingLabel!: boolean;

    /**
     * Where to show the errors tooltip relative to the input.
     */
    @Prop({type: String, default: 'bottom-start'}) public errorPlacement!: string;

    // Template refs
    @TemplateRef('inputWrapper') public inputWrapper!: HTMLElement|null;
    @TemplateRef('input') private input!: HTMLElement|null;
    @TemplateRef('textarea') private textarea!: HTMLElement|null;

    // Override the type to get autocompletion in the view.
    public vm!: TextViewModel;

    @Expose() public get activeElement(): HTMLElement {
        if (!isNullOrUndefined(this.input)) {
            return this.input;
        }
        if (!isNullOrUndefined(this.textarea)) {
            return this.textarea;
        }
        // There should always be one of the references defined.
        // This is for the rare cases where there is a type switch and the getter is called before the new ref is set.
        // So we don't have to check if there is an active element everywhere we need to access it.
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
        return new TextViewModel(this.proxy, {
            controlToView: ensureString,
            viewToControl: (value: any): any => value
        });
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
    @Watch(['label', 'placeholder', 'help', 'multiline', 'type', 'rows', 'floatingLabel'], {immediate: ImmediateStrategy.NextTick})
    protected syncConfigurationProps(): void {
        this.vm.label = this.label;
        this.vm.placeholder = this.placeholder;
        this.vm.help = this.help;
        this.vm.multiline = this.multiline;
        this.vm.type = this.type;
        this.vm.rows = String(this.rows);
        this.vm.floatingLabel = this.floatingLabel;
    }
}
