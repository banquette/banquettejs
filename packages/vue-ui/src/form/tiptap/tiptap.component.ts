import { FormViewModel } from "@banquette/ui/form/form-view-model";
import { proxy } from "@banquette/utils-misc/proxy";
import { trim } from "@banquette/utils-string/format/trim";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { TemplateRef } from "@banquette/vue-typescript/decorator/template-ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Link } from "@tiptap/extension-link";
import { Underline } from "@tiptap/extension-underline";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

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
    name: 'bt-form-tiptap',
    components: {'editor-content': EditorContent}
})
export default class TiptapComponent extends AbstractVueFormComponent<FormViewModel> {
    /**
     * Where to show the errors tooltip relative to the input.
     */
    @Prop({type: String, default: 'bottom-start'}) public errorPlacement!: string;

    @Expose() public editor!: Editor;

    // Template refs
    @TemplateRef('inputWrapper') public inputWrapper!: HTMLElement|null;

    /**
     * Vue lifecycle.
     */
    public mounted(): void {
        super.mounted();
        this.editor = new Editor({
            content: '',
            extensions: [
                StarterKit,
                Link,
                Underline
            ],
            onUpdate: () => {
                if (trim(this.editor.getText()).length > 0) {
                    this.vm.value = this.editor.getHTML();
                } else {
                    this.vm.value = '';
                }
            }
        });
    }

    /**
     * Vue lifecycle.
     */
    public beforeUnmount() {
        super.beforeUnmount();
        this.editor.destroy();
    }

    @Expose() public toggleBold(): void {
        this.editor.commands.toggleBold();
    }

    @Expose() public toggleItalic(): void {
        this.editor.commands.toggleItalic();
    }

    @Expose() public toggleUnderline(): void {
        this.editor.commands.toggleUnderline();
    }

    /**
     * @inheritDoc
     */
    protected setupViewModel(): FormViewModel {
        const vm = new FormViewModel(this.proxy, {
            controlToView: proxy(this.controlToView, this),
            viewToControl: proxy(this.viewToControl, this)
        });
        return vm;
    }

    private viewToControl(value: any): any {
        return value;
    }

    private controlToView(input: any): Date|null {
        if (this.editor.getHTML() !== input) {
            this.editor.commands.setContent(input, false);
        }
        return input;

    }
}
