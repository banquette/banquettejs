/**
 * Represent an error in a component.
 *
 * It can be a validation error automatically created by the validation package
 * or any type of error you want.
 *
 * Adding a form error to a component will automatically make it invalid, as well as its parents.
 * Removing all errors will have the opposite effect.
 */
export class FormError {
    /**
     * The path of the component to which the error belongs.
     */
    public readonly path: string;

    /**
     * The type of error, can be any string.
     */
    public readonly type: string;

    /**
     * An optional error description.
     */
    public readonly message: string|null;

    public constructor(path: string, type: string, message: string|null = null) {
        this.path = path;
        this.type = type;
        this.message = message;
    }
}
