import { ValidatorInterface } from "../validator.interface";
/**
 * A validator doing nothing.
 * It will never create a violation.
 */
export declare const Valid: (tags?: string[]) => ValidatorInterface;
