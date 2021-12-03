import { SequenceErrorBehavior } from "../type";
import { SequenceItemInterface } from "./sequence-item.interface";

export interface SequenceInterface {
    /**
     * The items of the sequence.
     */
    items: SequenceItemInterface[];

    /**
     * Define the fallback behavior in case one of the subscriber fails and has no error behavior defined.
     */
    onError: SequenceErrorBehavior;
}
