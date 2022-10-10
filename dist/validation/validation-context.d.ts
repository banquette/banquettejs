import { ValidateOptionsInterface } from "./validate-options.interface";
import { ValidationContextInterface } from "./validation-context.interface";
import { ValidationResult } from "./validation-result";
import { ValidatorInterface } from "./validator.interface";
export declare class ValidationContext implements ValidationContextInterface {
    readonly parent: ValidationContextInterface | null;
    readonly name: string | null;
    readonly value: any;
    readonly groups: string[];
    readonly path: string;
    readonly result: ValidationResult;
    readonly children: ValidationContextInterface[];
    readonly masks: string[];
    private maskMatchResults;
    /**
     * Create a ValidationContext object.
     *
     * @param parent ValidationContext|null The parent context (if applicable).
     * @param name   string                 The name of the attribute being validated.
     * @param value  any                    The value being validated.
     * @param masks  string[]               (optional, default: []) One or multiple patterns limiting the validators that will be executed.
     * @param groups string[]               (optional, default: []]) The validation groups the validators will have to match.
     */
    constructor(parent: ValidationContextInterface | null, name: string | null, value: any, masks?: string[], groups?: string[]);
    /**
     * Register a child context.
     */
    addChild(context: ValidationContextInterface): void;
    /**
     * Get the whole list of children.
     */
    getChildren(): ValidationContextInterface[];
    /**
     * Get a child by name.
     */
    getChild(name: string): ValidationContextInterface | null;
    /**
     * Add one or multiple validation masks to the existing ones.
     */
    addMask(mask: string | string[]): void;
    /**
     * Set the whole list of masks.
     */
    setMasks(masks: string[]): void;
    /**
     * Get the root context.
     */
    getRoot(): ValidationContextInterface;
    /**
     * Check if a validator should be validated.
     */
    shouldValidate(validator: ValidatorInterface): boolean;
    /**
     * Try to get the value of another context.
     * The path can be relative or absolute (by starting with a `/`).
     */
    getOtherValue(path: string, defaultValue?: any): any;
    /**
     * Try to get another context by its path.
     * The path can be relative or absolute (by starting with a /).
     */
    getOtherContext(path: string): ValidationContextInterface | null;
    /**
     * Convert a path relative to the current context in a path is relative to the root context.
     */
    getAbsolutePath(path: string): string;
    /**
     * Create a child context for this context.
     */
    createSubContext(name: string | null, value: any, masks?: string[], groups?: string[]): ValidationContextInterface;
    /**
     * Test if the validation should be performed for the current context.
     * The match can be partial, in which case only container validators must be executed.
     *
     * If a validator is given as context, the result will be cached.
     */
    private matchMask;
    private getAbsolutePathParts;
    /**
     * Ensure a ValidationContext object is returned from a ValidatorInterface signature.
     */
    static EnsureValidationContext(value: any, maskOrContext?: ValidateOptionsInterface | ValidationContextInterface): ValidationContextInterface;
}
