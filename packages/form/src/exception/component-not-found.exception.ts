import { Exception, SystemException } from "@banquette/exception";

/**
 * Exception thrown when a form component is not found in a group.
 */
export class ComponentNotFoundException extends SystemException {
    public constructor(public identifier: string|number, message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
