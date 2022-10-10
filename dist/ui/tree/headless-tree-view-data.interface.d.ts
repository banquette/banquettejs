import { Node } from "./node";
/**
 * Data exposed to the view by the headless tree view model.
 */
export interface HeadlessTreeViewDataInterface {
    /**
     * Root node of the tree.
     */
    root: Node;
}
