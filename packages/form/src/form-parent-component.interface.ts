import { FormComponentInterface } from "./form-component.interface";
import { FormControlInterface } from "./form-control.interface";
import { FormGroupInterface } from "./form-group.interface";
import { ConcreteValidationStrategy } from "./type";
import { BasicState } from "./constant";
import { FormEvent } from "./event/form-event";

/**
 * Bridge between a two form component in the direction "Child -> Parent".
 */
export interface FormParentComponentInterface {
    /**
     * The actual instance of the component.
     */
    readonly decorated: FormGroupInterface<string|number>;

    /**
     * The absolute path of the component from the root of the form.
     */
    readonly path: string;

    /**
     * The root instance of the form.
     */
    readonly root: FormComponentInterface;

    /**
     * The form control currently on focus.
     */
    activeControl: FormControlInterface|null;

    /**
     * Remove a component from the list of children.
     */
    remove(component: FormComponentInterface): void;

    /**
     * Get the "usable" validation strategy by resolving the inherit if set.
     */
    getConcreteValidationStrategy(): ConcreteValidationStrategy;

    /**
     * Ask the parent component to update its value using the value of its children.
     */
    updateValue(): void;

    /**
     * Add a component id to the basic states object of all the parents until the root node.
     */
    markBasicState(state: BasicState|BasicState[], id: number): void;

    /**
     * Remove a component id from the basic states object of all the parents until the root node.
     */
    unmarkBasicState(state: BasicState|BasicState[], id: number): void;

    /**
     * Change the `virtual` state of the component and its parent to `true`.
     */
    markAsVirtual(): void;

    /**
     * Change the `virtual` state of the component and its parent to `false`.
     */
    markAsConcrete(): void;

    /**
     * Dispatch an event.
     */
    dispatch(type: symbol, event: FormEvent|(() => FormEvent)): void;
}