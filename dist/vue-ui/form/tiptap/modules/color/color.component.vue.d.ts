import { HighlightOptions } from "@tiptap/extension-highlight";
import { ColorOptions } from "@tiptap/extension-color";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../..";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { VariantsInterface } from "./variants.interface";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        color: {
            color?: Partial<ColorOptions>;
            highlight?: Partial<HighlightOptions>;
            textColors?: string[][];
            backgroundColors?: string[][];
        };
    }
}
export default class UnderlineComponent extends AbstractTiptapModule<ModuleInterface["color"]> {
    /**
     * Sub components variants.
     */
    variants: VariantsInterface;
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    get textColorsPalettes(): string[][];
    get backgroundColorsPalettes(): string[][];
    get hasBackgroundColorsPalettes(): boolean;
    get hasTextColorsPalettes(): boolean;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    setColor(color: string): void;
    unsetColor(): void;
    setHighlight(color: string): void;
    unsetHighlight(): void;
    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["color"]>;
}
