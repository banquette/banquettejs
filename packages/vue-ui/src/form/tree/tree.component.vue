<style src="./tree.component.css" scoped></style>
<template src="./tree.component.html" ></template>
<script lang="ts">
import { UnsubscribeFunction } from "@banquette/event/type";
import { UsageException } from "@banquette/exception/usage.exception";
import { ValueChangedFormEvent } from "@banquette/form/event/value-changed.form-event";
import { FormControl } from "@banquette/form/form-control";
import { NodePropResolver } from "@banquette/ui/tree/constant";
import { Node } from "@banquette/ui/tree/node";
import { isArray } from "@banquette/utils-type/is-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isPrimitive } from "@banquette/utils-type/is-primitive";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Primitive } from "@banquette/utils-type/types";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Ref } from "@banquette/vue-typescript/decorator/ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { TreeComponent } from "../../tree";
import { BaseInputComponent } from "../base-input";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { CheckboxDataInterface } from "./checkbox-data.interface";
import { ThemeConfiguration } from "./theme-configuration";
import { TreeViewDataInterface } from "./tree-view-data.interface";
import { TreeViewModel } from "./tree.view-model";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-tree',
    components: [BaseInputComponent, TreeComponent],
    directives: [BindThemeDirective]
})
export default class FormTreeComponent extends AbstractVueFormComponent<TreeViewDataInterface, TreeViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, false) public base!: BaseInputComposable;

    /**
     * Defines how to resolve the nodes' value.
     * Can be:
     *   - the name of the property to use when the input is an object.
     *   - a function that takes the raw input and returns the value to use.
     */
    @Prop({type: [String, Function], default: null}) public nodesValue!: NodePropResolver<any>;

    /**
     * Define the name of the property (or get the value if a function) to use as identifier for the value.
     * Required if the value is not a primitive because a primitive is required to preselect items
     * of the tree from the value of the FormControl.
     */
    @Prop({type: [String, Function], default: null}) public valueIdentifier!: NodePropResolver<Primitive>;

    // Override the type to get autocompletion in the view.
    @Expose() public v!: TreeViewDataInterface;

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
        super.beforeMount();
        this.proxy.onReady(() => {
            if (!isArray(this.v.control.value)) {
                this.v.control.value = !isUndefined(this.v.control.value) ? [this.v.control.value] : [];
            }
        });
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
            this.v.control.value.push(this.extractNodeValue(node));
        }
    }

    /**
     * Remove the value of a Node from the FormControl.
     */
    private removeNodeValueFromSelection(node: Node): void {
        const index = this.getNodeValueIndexInFormControlValue(node);
        if (index > -1) {
            this.v.control.value.splice(index, 1);
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
                } else if (indeterminateCount || (selectedCount && unselectedCount)) {
                    this.checkboxesData[parent.id].indeterminate = true;
                } else {
                    this.checkboxesData[parent.id].control.setValue(false);
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
                if (identifier === nodeValue) {
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
            return this.nodesValue(node.rawValue);
        }
        if (!isObject(node.rawValue) || !this.nodesValue) {
            return node.rawValue;
        }
        return node.rawValue[this.nodesValue];
    }

    /**
     * Extract the value of a Node while ensuring to get a Primitive.
     * If the value is an object, the primitive will be extracted from it
     * using the "valueIdentifier" property.
     */
    private extractNodeComparableValue(node: Node): Primitive {
        const value = this.extractNodeValue(node);
        if (isPrimitive(value)) {
            return value;
        }
        return this.extractValueIdentifier(value);
    }

    /**
     * Get the identifier from an object value.
     *
     * This is only required if the value (the one stored in the FormControl) is an object.
     * In which case it is impossible to compare it with the value of a Node, the object reference
     * will certainly not be the same, even if both objects represent the same thing.
     *
     * The identifier is a Primitive type, so easily comparable.
     */
    private extractValueIdentifier(value: any): any {
        if (isFunction(this.valueIdentifier)) {
            return this.valueIdentifier(value);
        }
        if (!this.valueIdentifier || !isPrimitive(value[this.valueIdentifier])) {
            throw new UsageException(
                `You must define what property to use as identifier for the selected values if you store objects. ` +
                `Use the "value-identifier" prop.`
            );
        }
        return value[this.valueIdentifier];
    }
}
</script>
