import { DispatchResult } from "../dispatch-result";
import { SequenceLink, SequenceErrorBehavior, PartialSequencesMap, PartialSequence } from "../type";
/**
 * Define a list of events to execute sequentially.
 */
export declare class EventPipeline {
    /**
     * Map of sequences, indexed by name.
     */
    private sequences;
    /**
     * The internal event dispatcher that is used to dispatch all events of the pipeline.
     */
    private dispatcher;
    /**
     * Array of unsubscribe functions indexed by event type.
     */
    private unsubscribeFunctions;
    /**
     * Add one or multiple sequences to the pipeline.
     * If the sequence already exist, the input will be merged with it, nothing is removed here.
     */
    add(sequencesMap: PartialSequencesMap): EventPipeline;
    add(sequenceLink: SequenceLink, name?: string, onError?: SequenceErrorBehavior): EventPipeline;
    add(sequence: PartialSequence, name?: string, onError?: SequenceErrorBehavior): EventPipeline;
    /**
     * Remove one or multiple events from a sequence.
     */
    remove(event: symbol | symbol[] | SequenceLink, sequenceName?: string, unsubscribe?: boolean): EventPipeline;
    /**
     * Subscribe to an event of the pipeline.
     */
    subscribe(event: symbol, callback: any, priority?: number): this;
    /**
     * Start the pipeline.
     */
    start(sequence?: string | string[]): DispatchResult;
    /**
     * Stop the pipeline.
     */
    stop(): void;
    /**
     * Prepare the object for removal, cleaning all sequences and subscribers.
     */
    dispose(): void;
    /**
     * Execute multiple sequences sequentially.
     */
    private runSequences;
    /**
     * Run all items of a sequence sequentially.
     */
    private runSequence;
    /**
     * Remove all subscribers of a type of event if it is not found in any sequence.
     */
    private unsubscribeIfUnused;
}
