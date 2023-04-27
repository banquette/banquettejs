<style src="./tree.component.css" scoped></style>
<template src="./tree.component.html" ></template>
<script lang="ts">
import { UnsubscribeFunction } from "@banquette/event";
import { ValueChangedFormEvent, FormControl } from "@banquette/form";
import { NodePropResolver, Node } from "@banquette/ui";
import { areEqual } from "@banquette/utils-misc";
import { ensureArray, isFunction, isObject, isPrimitive, isUndefined, Primitive } from "@banquette/utils-type";
import { Component, Expose, Import, Prop, Ref, Themeable, BindThemeDirective } from "@banquette/vue-typescript";
import { BtTree } from "../../tree";
import { BtAbstractVueForm } from "../abstract-vue-form.component";
import { BtFormBaseInput } from "../base-input";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { UndefinedValue } from "../constant";
import { CheckboxDataInterface } from "./checkbox-data.interface";
import { ThemeConfiguration } from "./theme-configuration";
import { TreeViewDataInterface } from "./tree-view-data.interface";
import { TreeViewModel } from "./tree.view-model";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-tree',
    components: [BtFormBaseInput, BtTree],
    directives: [BindThemeDirective]
})
export default class BtFormTree extends BtAbstractVueForm<TreeViewDataInterface, TreeViewModel> {
    // To get autocompletion in the view.
    declare v: TreeViewDataInterface;

    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, {
        floatingLabel: false
    }) public base!: BaseInputComposable;

    /**
     * Defines how to resolve the nodes' value.
     * Can be:
     *   - the name of the property to use when the input is an object,
     *   - a function that takes the raw input and returns the value to use,
     *   - `null` to use the original value of the node.
     */
    @Prop({type: [String, Function], default: null}) public nodesValue!: NodePropResolver<any>;

    /**
     * Define the name of the property (or get the value if a function) to use as identifier for the value.
     * Required if the value is not a primitive because a primitive is required to preselect items
     * of the tree from the value of the FormControl.
     */
    @Prop({type: [String, Function], default: null}) public valueIdentifier!: NodePropResolver<Primitive>;

    /**
     * Map of checkboxes data, indexed by Node id.
     */
    @Ref() private checkboxesData: Record<number, CheckboxDataInterface> = {};
    private unsubscribeFunctions: UnsubscribeFunction[] = [];
    private nodesSelectionUpdateStack: number[] = [];

    /**
     * Vue lifecycle.
     */
    public beforeMount() {
        this.proxy.onReady(() => {
            this.v.control.value = !isUndefined(this.v.control.value) && this.v.control.value !== UndefinedValue ? ensureArray(this.v.control.value) : [];
        });
        this.base.floatingLabel = false;
    }

    /**
     * Vue lifecycle.
     */
    public beforeUnmount() {
        super.beforeUnmount();
        for (const fn of this.unsubscribeFunctions) {
            fn();
        }
        this.unsubscribeFunctions = [];
    }

    /**
     * Get the control corresponding to a Node.
     */
    @Expose() public getCheckboxData(node: Node): CheckboxDataInterface {
        if (isUndefined(this.checkboxesData[node.id])) {
            this.checkboxesData[node.id] = this.createCheckboxDataForNode(node);
        }
        return this.checkboxesData[node.id];
    }

    /**
     * @inheritDoc
     */
    protected setupViewModel(): TreeViewModel {
        return new TreeViewModel(this.proxy, this.base);
    }

    /**
     * Add the value of a Node to the FormControl.
     */
    private addNodeValueToSelection(node: Node): void {
        const index = this.getNodeValueIndexInFormControlValue(node);
        if (index < 0) {
            const extractedValue = this.extractNodeValue(node);
            if (!isUndefined(extractedValue)) {
                this.v.control.value.push(extractedValue);
                this.v.control.value = this.v.control.value.slice(0);
            }
        }
    }

    /**
     * Remove the value of a Node from the FormControl.
     */
    private removeNodeValueFromSelection(node: Node): void {
        const index = this.getNodeValueIndexInFormControlValue(node);
        if (index > -1) {
            this.v.control.value.splice(index, 1);
            this.v.control.value = this.v.control.value.slice(0);
        }
    }

    private createCheckboxDataForNode(node: Node): CheckboxDataInterface {
        const control = new FormControl();
        this.unsubscribeFunctions.push(control.onValueChanged((event: ValueChangedFormEvent) => {
            if (event.newValue) {
                this.addNodeValueToSelection(node);
            } else {
                this.removeNodeValueFromSelection(node);
            }
            this.updateChildNodes(node);
            this.updateParentNodes(node);
        }));
        // Delay the check to let time for the node to finish its registering.
        queueMicrotask(() => {
            if (this.getNodeValueIndexInFormControlValue(node) > -1 || (node.parent && !isUndefined(this.checkboxesData[node.parent.id]) && this.checkboxesData[node.parent.id].control.value)) {
                control.setValue(true);
            }
        });
        return {control, indeterminate: false};
    }

    /**
     * Update the selection state of the children of a node.
     */
    private updateChildNodes(node: Node): void {
        if (isUndefined(this.checkboxesData[node.id]) || this.nodesSelectionUpdateStack.indexOf(node.id) > -1) {
            return ;
        }
        const checked = this.checkboxesData[node.id].control.value;
        this.nodesSelectionUpdateStack.push(node.id);
        for (const child of node.children) {
            if (isUndefined(this.checkboxesData[child.id])) {
                continue ;
            }
            // We need to check the child checkbox.
            // If it is not checked yet, just check it.
            if (this.checkboxesData[child.id].control.value !== checked) {
                this.checkboxesData[child.id].control.setValue(checked);
            } else {
                // Otherwise, we need to update the selection of related nodes
                // manually before the `onValueChanged` event would not trigger.
                this.updateChildNodes(child);
                this.updateParentNodes(node);
            }
        }
        this.nodesSelectionUpdateStack.pop();
    }

    /**
     * Update the selection state of the parents of a node.
     */
    private updateParentNodes(node: Node): void {
        if (isUndefined(this.checkboxesData[node.id]) || this.nodesSelectionUpdateStack.indexOf(node.id) > -1) {
            return ;
        }
        this.nodesSelectionUpdateStack.push(node.id);
        let parent = node.parent;
        while (parent) {
            if (!isUndefined(this.checkboxesData[parent.id])) {
                let selectedCount = 0;
                let indeterminateCount = 0;
                let unselectedCount = 0;

                for (const child of parent.children) {
                    if (isUndefined(this.checkboxesData[child.id])) {
                        continue;
                    }
                    if (this.checkboxesData[child.id].indeterminate) {
                        indeterminateCount++;
                    } else if (this.checkboxesData[child.id].control.value) {
                        ++selectedCount;
                    } else {
                        ++unselectedCount;
                    }
                }
                this.checkboxesData[parent.id].indeterminate = false;
                if (selectedCount && !unselectedCount && !indeterminateCount) {
                    this.checkboxesData[parent.id].control.setValue(true);
                } else {
                    this.nodesSelectionUpdateStack.push(parent.id);
                    this.checkboxesData[parent.id].indeterminate = indeterminateCount > 0 || (selectedCount > 0 && unselectedCount > 0);
                    this.checkboxesData[parent.id].control.setValue(false);
                    this.nodesSelectionUpdateStack.pop();
                }
            }
            parent = parent.parent;
        }
        this.nodesSelectionUpdateStack.pop();
    }

    /**
     * Confront a node value against the selected values in the FormControl,
     * and returns `true` if a match is found (meaning the node is selected).
     */
    private getNodeValueIndexInFormControlValue(node: Node): number {
        const nodeValue = this.extractNodeComparableValue(node);
        for (let i = 0; i < this.v.control.value.length; ++i) {
            const candidate: any = this.v.control.value[i];
            if (isPrimitive(candidate)) {
                if (nodeValue === candidate) {
                    return i;
                }
            } else {
                const identifier = this.extractValueIdentifier(candidate);
                if (identifier !== null) {
                    if (identifier === nodeValue) {
                        return i;
                    }
                } else if (areEqual(candidate, nodeValue)) {
                    return i;
                }
            }
        }
        return -1;
    }

    /**
     * Get the value to assign to the FormControl for a Node.
     */
    private extractNodeValue(node: Node): any {
        if (isFunction(this.nodesValue)) {
            return this.nodesValue ? this.nodesValue(node.originalValue) : null;
        }
        if (!isObject(node.originalValue) || !this.nodesValue) {
            return node.originalValue;
        }
        return node.originalValue[this.nodesValue];
    }

    /**
     * Extract from a Node object the value to use to compare it with other nodes.
     */
    private extractNodeComparableValue(node: Node): any {
        const value = this.extractNodeValue(node);
        if (isPrimitive(value)) {
            return value;
        }
        const identifier = this.extractValueIdentifier(value);
        if (identifier !== null) {
            return identifier
        }
        return value;
    }

    /**
     * Try to get the identifier from an object value.
     */
    private extractValueIdentifier(value: any): any {
        if (isFunction(this.valueIdentifier)) {
            return this.valueIdentifier!(value);
        }
        if (!this.valueIdentifier || !isPrimitive(value[this.valueIdentifier])) {
            return null;
        }
        return value[this.valueIdentifier];
    }
}
</script>
