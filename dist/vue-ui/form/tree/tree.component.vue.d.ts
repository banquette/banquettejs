import { NodePropResolver } from "@banquette/ui/tree/constant";
import { Node } from "@banquette/ui/tree/node";
import { Primitive } from "@banquette/utils-type/types";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { CheckboxDataInterface } from "./checkbox-data.interface";
import { TreeViewDataInterface } from "./tree-view-data.interface";
import { TreeViewModel } from "./tree.view-model";
export default class FormTreeComponent extends AbstractVueFormComponent<TreeViewDataInterface, TreeViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    base: BaseInputComposable;
    /**
     * Defines how to resolve the nodes' value.
     * Can be:
     *   - the name of the property to use when the input is an object,
     *   - a function that takes the raw input and returns the value to use,
     *   - `null` to use the original value of the node.
     */
    nodesValue: NodePropResolver<any>;
    /**
     * Define the name of the property (or get the value if a function) to use as identifier for the value.
     * Required if the value is not a primitive because a primitive is required to preselect items
     * of the tree from the value of the FormControl.
     */
    valueIdentifier: NodePropResolver<Primitive>;
    v: TreeViewDataInterface;
    /**
     * Map of checkboxes data, indexed by Node id.
     */
    private checkboxesData;
    private unsubscribeFunctions;
    private nodesSelectionUpdateStack;
    /**
     * Vue lifecycle.
     */
    beforeMount(): void;
    /**
     * Vue lifecycle.
     */
    beforeUnmount(): void;
    /**
     * Get the control corresponding to a Node.
     */
    getCheckboxData(node: Node): CheckboxDataInterface;
    /**
     * @inheritDoc
     */
    protected setupViewModel(): TreeViewModel;
    /**
     * Add the value of a Node to the FormControl.
     */
    private addNodeValueToSelection;
    /**
     * Remove the value of a Node from the FormControl.
     */
    private removeNodeValueFromSelection;
    private createCheckboxDataForNode;
    /**
     * Update the selection state of the children of a node.
     */
    private updateChildNodes;
    /**
     * Update the selection state of the parents of a node.
     */
    private updateParentNodes;
    /**
     * Confront a node value against the selected values in the FormControl,
     * and returns `true` if a match is found (meaning the node is selected).
     */
    private getNodeValueIndexInFormControlValue;
    /**
     * Get the value to assign to the FormControl for a Node.
     */
    private extractNodeValue;
    /**
     * Extract from a Node object the value to use to compare it with other nodes.
     */
    private extractNodeComparableValue;
    /**
     * Try to get the identifier from an object value.
     */
    private extractValueIdentifier;
}
