import { MutationType } from "./constant";
/**
 * Represent a single mutation of an observed object.
 */
export declare class Mutation {
    /**
    * The type of change that has been observed.
    */
    readonly type: MutationType;
    /**
     * Array of properties' names that form a path from the root object being observed and the attribute that mutated.
     */
    readonly pathParts: string[];
    /**
     * The value of the property before the mutation.
     */
    readonly oldValue: any;
    /**
     * The value of the property after the mutation.
     */
    readonly newValue: any;
    /**
     * Object on which the change has occurred.
     */
    readonly target: any;
    /**
     * The absolute path to the property, as a string.
     */
    get path(): string;
    constructor(
    /**
    * The type of change that has been observed.
    */
    type: MutationType, 
    /**
     * Array of properties' names that form a path from the root object being observed and the attribute that mutated.
     */
    pathParts: string[], 
    /**
     * The value of the property before the mutation.
     */
    oldValue: any, 
    /**
     * The value of the property after the mutation.
     */
    newValue: any, 
    /**
     * Object on which the change has occurred.
     */
    target: any);
}
