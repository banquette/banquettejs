import { ComposableViewData } from "./composable-view-data";

/**
 * The object exposed by composable plugins that contains everything needed for the template to render properly.
 */
export interface ComposablePluginViewData {
    /**
     * View data can contain any value but have some reserved keys.
     */
    [index: string]: any;

    /**
     * A reference on the root composable data object.
     */
    composable: ComposableViewData;

    /**
     * Contain the view data of plugins.
     */
    plugins: Record<string, ComposablePluginViewData>;
}
