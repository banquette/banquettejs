import { VarHolder } from '@banquette/utils-misc';
import { DispatchResult } from '../dispatch-result';
import { EventArg } from '../event-arg';

export class SequenceContext extends EventArg {
    /**
     * A generic storage where you can store data to share between subscribers.
     */
    public bag: VarHolder = new VarHolder<any, any>();

    /**
     * The current event being dispatched in the sequence.
     */
    public event!: symbol;

    /**
     * Is the sequence stopped?
     *
     * This is different from `stopPropagation` which only stops the current event in the sequence.
     */
    public readonly sequenceStopped: boolean = false;

    public constructor(
        public sequence: string,
        public result: DispatchResult,
        public parent: SequenceContext | null = null
    ) {
        super();
    }

    /**
     * Stop the whole sequence, no more events will be dispatched at all for this sequence.
     *
     * If `recursive` is `true`, parent sequences will also be stopped.
     */
    public stopSequence(recursive: boolean = false): void {
        // Stopping the sequence also means stopping the propagation of the current event.
        this.stopPropagation();

        (this as any /* Writeable<SequenceContext> */).sequenceStopped = true;
        if (recursive && this.parent) {
            this.parent.stopSequence(true);
        }
    }
}
