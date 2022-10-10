import { VarHolder } from "@banquette/utils-misc/var-holder";
import { DispatchResult } from "../dispatch-result";
import { EventArg } from "../event-arg";
export declare class SequenceContext extends EventArg {
    sequence: string;
    result: DispatchResult;
    parent: SequenceContext | null;
    /**
     * A generic storage where you can store data to share between subscribers.
     */
    bag: VarHolder;
    /**
     * The current event being dispatched in the sequence.
     */
    event: symbol;
    /**
     * Is the sequence stopped?
     *
     * This is different from `stopPropagation` which only stops the current event in the sequence.
     */
    readonly sequenceStopped: boolean;
    constructor(sequence: string, result: DispatchResult, parent?: SequenceContext | null);
    /**
     * Stop the whole sequence, no more events will be dispatched at all for this sequence.
     *
     * If `recursive` is `true`, parent sequences will also be stopped.
     */
    stopSequence(recursive?: boolean): void;
}
