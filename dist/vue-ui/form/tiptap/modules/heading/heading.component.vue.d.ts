import { HeadingOptions, Level } from "@tiptap/extension-heading";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        heading: {
            tiptap?: Partial<HeadingOptions>;
        };
    }
}
export default class HeadingComponent extends AbstractTiptapModule<ModuleInterface["heading"]> {
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    get availableLevels(): Level[];
    selectedLevel: Level | null;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    toggleHeading(level: Level): void;
    unsetHeading(): void;
    protected getDefaultConfiguration(): Partial<ModuleInterface["heading"]>;
}
