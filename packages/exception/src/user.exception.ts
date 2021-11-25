import { SystemException } from "./system.exception";

/**
 * Special kind of exception applicable when the error originates from the behavior of the client.
 *
 * This type of error should have a message in the user's language because it may be shown to them.
 */
export abstract class UserException extends SystemException {

}
