import { EditorEvents } from "@tiptap/core/dist/packages/core/src/types";
import { Editor, Extensions } from "@tiptap/vue-3";
export interface TiptapModuleInterface {
    /**
     * Array of extensions to include in the tiptap editor.
     */
    getExtensions(): Extensions;
    /**
     * Set the editor to use.
     */
    setEditor(editor: Editor): void;
    /**
     * Enable the module.
     * `setEditor` is guaranteed to be called before `enable()`.
     */
    enable(): void;
    /**
     * Disable the module.
     */
    disable(): void;
    /**
     * Tiptap editor's event handlers.
     */
    onBeforeCreate: (props: EditorEvents['beforeCreate']) => void;
    onCreate: (props: EditorEvents['create']) => void;
    onUpdate: (props: EditorEvents['update']) => void;
    onSelectionUpdate: (props: EditorEvents['selectionUpdate']) => void;
    onTransaction: (props: EditorEvents['transaction']) => void;
    onFocus: (props: EditorEvents['focus']) => void;
    onBlur: (props: EditorEvents['blur']) => void;
    onDestroy: (props: EditorEvents['destroy']) => void;
}
