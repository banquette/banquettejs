import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when any type of transform failed as the transform service level.
 */
export declare class TransformFailedException extends SystemException {
    slug: string;
}
