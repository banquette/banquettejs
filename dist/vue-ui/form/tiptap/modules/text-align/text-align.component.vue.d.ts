import { TextAlignOptions } from "@tiptap/extension-text-align";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        textAlign: {
            tiptap?: Partial<TextAlignOptions>;
        };
    }
}
export default class TextAlignComponent extends AbstractTiptapModule<ModuleInterface["textAlign"]> {
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    get alignLeft(): boolean;
    get alignCenter(): boolean;
    get alignRight(): boolean;
    get alignJustify(): boolean;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    toggle(alignment: string): void;
    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["textAlign"]>;
}
