import { Exception } from "../exception";
/**
 * Exception thrown to clearly notify an implementation is missing.
 */
export declare class NotImplementedException extends Exception {
    slug: string;
    constructor(message?: string);
}
