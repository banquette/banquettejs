import { ValidatorInterface } from "@banquette/validation";
import { BasicState, CallContext, ContextualizedState, InverseState, ValidationStrategy } from "./constant";

type ValidatorsTreeValue = ValidatorsTree | ValidatorInterface | undefined;

/**
 * An object defining what validators to apply on a FormObject.
 */
export type ValidatorsObject = {self?: ValidatorInterface, children?: {[member: string]: ValidatorsTreeValue} | Array<ValidatorsTreeValue>};

/**
 * An object defining what validators to apply on a FormArray.
 */
export type ValidatorsArray = ValidatorsTreeValue[];

/**
 * An object defining what validators to apply on any group.
 */
export type ValidatorsTree = ValidatorsObject | ValidatorsArray;

/**
 * An item of the context stack, defining the context of call of a contextualized method.
 */
export type ContextStackItem = {context: CallContext, component: number};

/**
 * A subtype of ValidationStrategy excluding the "ValidationStrategy.Inherit" possibility.
 */
export type ConcreteValidationStrategy = Exclude<ValidationStrategy, ValidationStrategy.Inherit>;

/**
 * Regroup all different types of states a component can take.
 */
export type State = BasicState | ContextualizedState | InverseState;

/**
 * Filters used while iterating over the children of a group.
 */
export type ForEachFilters = Partial<Record<State, boolean>>;
