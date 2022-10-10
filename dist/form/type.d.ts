import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { BasicState, CallContext, ContextualizedState, InverseState, ValidationStrategy } from "./constant";
import { FormError } from "./form-error";
declare type ValidatorsTreeValue = ValidatorsTree | ValidatorInterface | undefined;
/**
 * An object defining what validators to apply on a FormObject.
 */
export declare type ValidatorsObject = {
    self?: ValidatorInterface;
    children?: {
        [member: string]: ValidatorsTreeValue;
    } | Array<ValidatorsTreeValue>;
};
/**
 * An object defining what validators to apply on a FormArray.
 */
export declare type ValidatorsArray = ValidatorsTreeValue[];
/**
 * An object defining what validators to apply on any group.
 */
export declare type ValidatorsTree = ValidatorsObject | ValidatorsArray;
/**
 * An item of the context stack, defining the context of call of a contextualized method.
 */
export declare type ContextStackItem = {
    context: CallContext;
    component: number;
};
/**
 * A subtype of ValidationStrategy excluding the "ValidationStrategy.Inherit" possibility.
 */
export declare type ConcreteValidationStrategy = Exclude<ValidationStrategy, ValidationStrategy.Inherit>;
/**
 * Regroup all different types of states a component can take.
 */
export declare type State = BasicState | ContextualizedState | InverseState;
/**
 * Filters used while iterating over the children of a group.
 */
export declare type ForEachFilters = Partial<Record<State, boolean>>;
/**
 * A FormError with no path.
 */
export declare type UnassignedFormError = Omit<FormError, 'path' | 'message'> & {
    message?: string | null;
};
export {};
