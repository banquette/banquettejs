
export interface ViolationInterface {
    /**
     * The absolute path of the violation (e.g.: /category/name).
     */
    path: string;

    /**
     * The type of the validator that emitted the violation (e.g.: not-blank).
     */
    type: string;

    /**
     * The error message.
     */
    message?: string;
}
