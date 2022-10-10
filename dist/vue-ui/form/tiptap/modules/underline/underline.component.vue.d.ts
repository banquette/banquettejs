import { ModuleInterface } from "../../../";
import { UnderlineOptions } from "@tiptap/extension-underline";
import { Extensions } from "@tiptap/vue-3";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        underline: {
            tiptap?: Partial<UnderlineOptions>;
        };
    }
}
export default class UnderlineComponent extends AbstractTiptapModule<ModuleInterface["underline"]> {
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
