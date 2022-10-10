import { ModuleInterface } from "../../../";
import { Extensions } from "@tiptap/vue-3";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { BoldOptions } from "@tiptap/extension-bold";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        bold: {
            tiptap?: Partial<BoldOptions>;
        };
    }
}
export default class BoldComponent extends AbstractTiptapModule<ModuleInterface["bold"]> {
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
