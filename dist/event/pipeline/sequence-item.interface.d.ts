import { SequenceErrorBasicBehavior } from "../constant";
import { SequenceLink } from "../type";
export interface SequenceItemInterface {
    /**
     * Symbol of the event to dispatch for this item.
     */
    event: symbol | null;
    /**
     * Array of sequences' names to execute.
     */
    sequences: string[] | null;
    /**
     * Priority in the sequence.
     * The higher the priority the sooner the event will be dispatched.
     */
    priority: number;
    /**
     * Define the behavior in case one of the subscriber fails.
     * Can be one of the basic behaviors (defined in SequenceErrorBasicBehavior) or one or multiple sequences to execute.
     */
    onError: SequenceErrorBasicBehavior | SequenceLink;
}
