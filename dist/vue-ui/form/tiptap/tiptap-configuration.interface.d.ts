import { ModuleInterface } from "@banquette/vue-ui/form/tiptap";
import { Extensions } from "@tiptap/vue-3";
export interface TiptapConfigurationInterface {
    /**
     * Array of toolbars, each array is separate toolbar.
     * Each toolbar contains an array of modules to use, in order.
     */
    toolbars?: Array<Array<keyof ModuleInterface>>;
    /**
     * Define the modules to use and with what configuration.
     *
     * If a module is already assigned to a toolbar it is not required to define it here,
     * except if you need to customize its configuration object.
     */
    modules?: Partial<ModuleInterface>;
    /**
     * Raw array of tiptap extensions for which you don't want to create a Vue component.
     */
    extensions?: Extensions;
}
