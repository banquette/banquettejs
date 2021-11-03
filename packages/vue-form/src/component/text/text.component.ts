import { ComposableViewModelInterface, TextViewModel } from "@banquette/form";
import { ensureString, isNullOrUndefined, isUndefined } from "@banquette/utils-type";
import { Component, Prop, TemplateRef } from "@banquette/vue-typescript";
import { GenericVueFormComponent } from "../../generic-vue-form.component";

/**
 * A generic text component the uses the generic view model from the `@banquette/form` package.
 */
@Component('form-text')
export default class TextComponent extends GenericVueFormComponent {
    // Props
    @Prop({type: Boolean, default: false}) public multiline!: boolean;

    // Template refs
    @TemplateRef('input') private input!: HTMLElement|null;
    @TemplateRef('textarea') private textarea!: HTMLElement|null;

    get activeElement(): HTMLElement {
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
    protected setupViewModel(): ComposableViewModelInterface {
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
}
