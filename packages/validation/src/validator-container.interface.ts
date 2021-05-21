import { ValidatorInterface } from "./validator.interface";

export interface ValidatorContainerInterface extends ValidatorInterface {
    /**
     * Register a new validator into the container or one of its children.
     */
    set(path: string, validator: ValidatorInterface): void;

    /**
     * Test if a validator has been registered for a given path.
     */
    has(path: string): boolean;

    /**
     * Remove a validator from the container or one of its children.
     */
    remove(path: string): void;
}
