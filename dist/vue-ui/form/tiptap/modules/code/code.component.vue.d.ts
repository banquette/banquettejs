import { ModuleInterface } from "../../../";
import { Extensions } from "@tiptap/vue-3";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { CodeOptions } from "@tiptap/extension-code";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        code: {
            tiptap?: Partial<CodeOptions>;
        };
    }
}
export default class CodeComponent extends AbstractTiptapModule<ModuleInterface["code"]> {
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
