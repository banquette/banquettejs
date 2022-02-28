import { MutationType } from "./constant";

/**
 * Represent a single mutation of an observed object.
 */
export class Mutation {
    /**
     * The absolute path to the property, as a string.
     */
    public get path(): string {
        return '/' + this.pathParts.join('/');
    }

    public constructor(
        /**
        * The type of change that has been observed.
        */
       public readonly type: MutationType,

        /**
         * Array of properties' names that form a path from the root object being observed and the attribute that mutated.
         */
        public readonly pathParts: string[],

        /**
         * The value of the property before the mutation.
         */
        public readonly oldValue: any,

        /**
         * The value of the property after the mutation.
         */
        public readonly newValue: any) {
    }
}
