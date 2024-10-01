import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "./type";

export interface TiptapConfigurationInterface {
    /**
     * Array of toolbars, each array is separate toolbar.
     * Each toolbar contains an array of modules to use, in order.
     */
    toolbars?: ModuleInterface[][];

    /**
     * Array of tiptap modules, that are not part of the toolbar.
     */
    modules?: ModuleInterface[];

    /**
     * Raw array of tiptap extensions for which you don't want to create a Vue component.
     */
    extensions?: Extensions;
}
