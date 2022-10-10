import { FormGroupInterface } from "@banquette/form/form-group.interface";
import { ImageOptions } from "@tiptap/extension-image";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { VariantsInterface } from "./variants.interface";
import { I18nInterface } from "./i18n.interface";
import { BtImageOptions } from "./image.extension";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        image: {
            tiptap?: Partial<ImageOptions>;
        } & BtImageOptions;
    }
}
export default class ImageComponent extends AbstractTiptapModule<ModuleInterface["image"]> {
    /**
     * Sub components variants.
     */
    variants: VariantsInterface;
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    get availableSizes(): string[];
    form: FormGroupInterface;
    dialogVisible: boolean;
    beforeMount(): void;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    /**
     * Show the configuration dialog.
     */
    showDialog(): void;
    apply(): boolean;
    remove(): void;
    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["image"]>;
}
