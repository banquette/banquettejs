import { HistoryOptions } from "@tiptap/extension-history";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        history: {
            tiptap?: Partial<HistoryOptions>;
            showUndo?: boolean;
            showRedo?: boolean;
        };
    }
}
export default class HistoryComponent extends AbstractTiptapModule<ModuleInterface["history"]> {
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    undo(): void;
    redo(): void;
    protected getDefaultConfiguration(): Partial<ModuleInterface["history"]>;
}
