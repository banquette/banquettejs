import { Vue } from "@banquette/vue-typescript/vue";
import { EditorEvents } from "@tiptap/core/dist/packages/core/src/types";
import { Editor, Extensions } from "@tiptap/vue-3";
import FormTiptapComponent from "../tiptap.component.vue";
import { TiptapModuleInterface } from "./tiptap-module.interface";
export declare abstract class AbstractTiptapModule<Conf = any> extends Vue implements TiptapModuleInterface {
    /**
     * Module's configuration.
     */
    configuration: Conf;
    /**
     * `true` if the module is ready to be used.
     */
    enabled: boolean;
    /**
     * The editor instance.
     */
    editor: Editor;
    /**
     * Parent tiptap component instance.
     */
    protected parent: InstanceType<typeof FormTiptapComponent>;
    /**
     * Vue lifecycle method.
     */
    beforeMount(): void;
    /**
     * Vue lifecycle method.
     */
    beforeUnmount(): void;
    /**
     * @inheritDoc
     */
    setEditor(editor: Editor): void;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    /**
     * @inheritDoc
     */
    disable(): void;
    /**
     * @inheritDoc
     */
    enable(): void;
    /**
     * Tiptap's events handlers.
     */
    onBeforeCreate(props: EditorEvents['beforeCreate']): void;
    onCreate(props: EditorEvents['create']): void;
    onUpdate(props: EditorEvents['update']): void;
    onSelectionUpdate(props: EditorEvents['selectionUpdate']): void;
    onTransaction(props: EditorEvents['transaction']): void;
    onFocus(props: EditorEvents['focus']): void;
    onBlur(props: EditorEvents['blur']): void;
    onDestroy(props: EditorEvents['destroy']): void;
    /**
     * Default configuration values.
     * They will be merged with the ones coming as input.
     */
    protected getDefaultConfiguration(): Partial<Conf>;
}
