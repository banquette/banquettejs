import { FontFamilyOptions } from "@tiptap/extension-font-family";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../..";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        fontFamily: {
            tiptap?: Partial<FontFamilyOptions>;
            availableFonts: string[];
        };
    }
}
export default class FontFamilyComponent extends AbstractTiptapModule<ModuleInterface['fontFamily']> {
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    selectedFont: string;
    get availableFonts(): Array<{
        font: string;
        available: boolean;
    }>;
    private lastCursorPosition;
    /**
     * @inheritDoc
     */
    beforeMount(): void;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    setFont(font: string): void;
    unsetFont(): void;
    toggleFont(font: string): void;
    setSelectedFont(font: string): boolean;
    resetSelectedFont(): boolean;
    isActive(type: string, params: any): boolean;
    /**
     * @inheritDoc
     */
    onTransaction: import("@banquette/utils-type/types").GenericCallback<any, any>;
    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["fontFamily"]>;
}
