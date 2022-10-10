import { BulletListOptions } from "@tiptap/extension-bullet-list";
import { ListItemOptions } from "@tiptap/extension-list-item";
import { OrderedListOptions } from "@tiptap/extension-ordered-list";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        listItem: {
            tiptap?: Partial<ListItemOptions>;
            bulletedList?: Partial<BulletListOptions>;
            orderedList?: Partial<OrderedListOptions>;
            showListBulleted?: boolean;
            showListNumbered?: boolean;
            showIdent?: boolean;
        };
    }
}
export default class TextAlignComponent extends AbstractTiptapModule<ModuleInterface["listItem"]> {
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    get showListBulleted(): boolean;
    get showListNumbered(): boolean;
    get showIdent(): boolean;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    toggleBulletedList(): void;
    toggleNumberedList(): void;
    increaseIndent(): void;
    decreaseIndent(): void;
    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["listItem"]>;
}
