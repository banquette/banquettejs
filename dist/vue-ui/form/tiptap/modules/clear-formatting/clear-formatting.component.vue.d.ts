import { ModuleInterface } from "../../../";
import { Extensions } from "@tiptap/vue-3";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        clearFormatting: never;
    }
}
export default class ClearFormattingComponent extends AbstractTiptapModule<ModuleInterface["clearFormatting"]> {
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    clearFormatting(): void;
}
