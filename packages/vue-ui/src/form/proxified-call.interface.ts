import { FormViewControlInterface } from "@banquette/form";

/**
 * Represent a call to a form control.
 *
 * Because the call may not have been made yet, this object holds a reference on it so
 * we can save it and have a way to store the return value.
 */
export interface ProxifiedCallInterface<R = unknown> {
    /**
     * The method to call.
     */
    method: keyof FormViewControlInterface;

    /**
     * Has the call been made yet?
     */
    done: boolean;

    /**
     * The arguments to pass to the method when doing the call.
     */
    args: any[];

    /**
     * The return value of the call.
     */
    returnValue: R|undefined;

    /**
     * If `true`, only the last call will be performed if present multiple times in the stack.
     */
    skippable: boolean;

    /**
     * An optional callback to call with the return value when the method has been called.
     */
    callback?: ((returnValue: R) => void)|null;
}
