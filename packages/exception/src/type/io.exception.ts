import { SystemException } from "../system.exception";

/**
 * Exception thrown when an error relative to reading/writing files occurs.
 */
export class IOException extends SystemException {
    public slug: string = 'io';
}
