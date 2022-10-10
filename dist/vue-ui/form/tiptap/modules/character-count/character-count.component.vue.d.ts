import { CharacterCountOptions } from "@tiptap/extension-character-count";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        characterCount: {
            tiptap?: Partial<CharacterCountOptions>;
            showCharacters?: boolean;
            showWords?: boolean;
        };
    }
}
export default class CharacterCountComponent extends AbstractTiptapModule<ModuleInterface["characterCount"]> {
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    get charactersText(): string;
    get wordsText(): string;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["characterCount"]>;
}
