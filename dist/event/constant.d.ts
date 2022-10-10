export declare enum SequenceErrorBasicBehavior {
    /**
     * The default behavior.
     * An undefined behavior means the pipeline will fallback to the parent item, if no parent the default behavior is used.
     */
    Undefined = 0,
    /**
     * The error is ignored, following events are executed as if nothing happened.
     */
    Ignore = 1,
    /**
     * The current sequence is stopped, but parent sequences will continue as is.
     */
    StopSequence = 2,
    /**
     * Stop every the current sequence and all sequences related to it.
     */
    StopAll = 3
}
/**
 * So the sequence name can be omitted for single sequence pipeline.
 */
export declare const DefaultSequenceName = "default";
/**
 * The default behavior of the pipeline when a sequence item fails to execute.
 */
export declare const DefaultSequenceErrorBehavior = SequenceErrorBasicBehavior.StopAll;
