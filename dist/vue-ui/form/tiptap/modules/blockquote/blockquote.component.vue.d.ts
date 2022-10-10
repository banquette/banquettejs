import { BlockquoteOptions } from "@tiptap/extension-blockquote";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        blockquote: {
            tiptap?: Partial<BlockquoteOptions>;
        };
    }
}
export default class BlockquoteComponent extends AbstractTiptapModule<ModuleInterface["blockquote"]> {
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    toggle(): void;
}
