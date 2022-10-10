import { FormGroupInterface } from "@banquette/form/form-group.interface";
import { EditorEvents } from "@tiptap/core/dist/packages/core/src/types";
import { LinkOptions } from "@tiptap/extension-link";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
import { VariantsInterface } from "./variants.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        link: {
            tiptap?: Partial<LinkOptions>;
        };
    }
}
export default class LinkComponent extends AbstractTiptapModule<ModuleInterface["link"]> {
    /**
     * Sub components variants.
     */
    variants: VariantsInterface;
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    form: FormGroupInterface;
    dialogVisible: boolean;
    beforeMount(): void;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    onTransaction: (props: EditorEvents["transaction"]) => void;
    /**
     * Show the configuration dialog.
     */
    showDialog(): void;
    /**
     * Apply the configuration into the wysiwyg.
     */
    apply(): boolean;
    remove(): void;
    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<any>;
    private resolveFocusedLink;
}
