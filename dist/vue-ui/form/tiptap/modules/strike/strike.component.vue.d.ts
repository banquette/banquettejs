import { ModuleInterface } from "../../../";
import { StrikeOptions } from "@tiptap/extension-strike";
import { Extensions } from "@tiptap/vue-3";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        strike: {
            tiptap?: Partial<StrikeOptions>;
        };
    }
}
export default class StrikeComponent extends AbstractTiptapModule<ModuleInterface["strike"]> {
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
