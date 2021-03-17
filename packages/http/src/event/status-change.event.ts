import { RequestProgressEvent } from "./request-progress.event";

/**
 * Separate type of event so it's easier to distinguish on the user side.
 */
export class StatusChangeEvent extends RequestProgressEvent {

}
