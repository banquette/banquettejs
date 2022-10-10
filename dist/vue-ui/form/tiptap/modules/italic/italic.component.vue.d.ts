import { ModuleInterface } from "../../../";
import { ItalicOptions } from "@tiptap/extension-italic";
import { Extensions } from "@tiptap/vue-3";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        italic: {
            tiptap?: Partial<ItalicOptions>;
        };
    }
}
export default class ItalicComponent extends AbstractTiptapModule<ModuleInterface["italic"]> {
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
