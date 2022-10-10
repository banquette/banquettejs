/**
 * Represent an error in a component.
 *
 * It can be a validation error automatically created by the validation package
 * or any type of error you want.
 *
 * Adding a form error to a component will automatically make it invalid, as well as its parents.
 * Removing all errors will have the opposite effect.
 */
export declare class FormError {
    /**
     * The path of the component to which the error belongs.
     */
    readonly path: string;
    /**
     * The type of error, can be any string.
     */
    readonly type: string;
    /**
     * An optional error description.
     */
    readonly message: string | null;
    constructor(path: string, type: string, message?: string | null);
}
