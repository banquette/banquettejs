import { cloneDeep } from "@banquette/utils-object/clone-deep";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isArray } from "@banquette/utils-type/is-array";
import { isInteger } from "@banquette/utils-type/is-integer";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isSymbol } from "@banquette/utils-type/is-symbol";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { DefaultSequenceName, DefaultSequenceErrorBehavior, SequenceErrorBasicBehavior } from "../constant";
import { DispatchResult } from "../dispatch-result";
import { EventDispatcher } from "../event-dispatcher";
import {
    UnsubscribeFunction,
    SequenceLink,
    SequenceErrorBehavior,
    PartialSequencesMap,
    SequencesMap,
    PartialSequenceItem, PartialSequence
} from "../type";
import { SequenceContext } from "./sequence-context";
import { SequenceItemInterface } from "./sequence-item.interface";
import { SequenceInterface } from "./sequence.interface";

/**
 * Define a list of events to execute sequentially.
 */
export class EventPipeline {
    /**
     * Map of sequences, indexed by name.
     */
    private sequences: SequencesMap = {};

    /**
     * The internal event dispatcher that is used to dispatch all events of the pipeline.
     */
    private dispatcher = new EventDispatcher();

    /**
     * Array of unsubscribe functions indexed by event type.
     */
    private unsubscribeFunctions: Record<symbol, UnsubscribeFunction[]> = {};

    /**
     * Add one or multiple sequences to the pipeline.
     * If the sequence already exist, the input will be merged with it, nothing is removed here.
     */
    public add(sequencesMap: PartialSequencesMap): EventPipeline;
    public add(sequenceLink: SequenceLink, name?: string, onError?: SequenceErrorBehavior): EventPipeline;
    public add(sequence: PartialSequence, name?: string, onError?: SequenceErrorBehavior): EventPipeline;
    public add(mixedInput: PartialSequence|PartialSequencesMap|SequenceLink, name: string = DefaultSequenceName, onError: SequenceErrorBehavior = SequenceErrorBasicBehavior.StopAll): EventPipeline {
        if (isString(mixedInput) || isSymbol(mixedInput) || isType<PartialSequenceItem>(mixedInput, (v) => isObject(v) && (!isUndefined(v.event) || !isUndefined(v.sequences)))) {
            mixedInput = [mixedInput];
        }
        if (isArray(mixedInput)) {
            mixedInput = {[name]: mixedInput};
        }
        const map = mixedInput as SequencesMap;
        for (const sequenceName of Object.keys(map)) {
            if (isUndefined(this.sequences[sequenceName])) {
                this.sequences[sequenceName] = {items: [], onError};
            }
            const partialSequence = ensureArray(map[sequenceName]);
            for (let item of partialSequence) {
                if (isString(item)) {
                    item = [item];
                }
                if (isSymbol(item)) {
                    item = {event: item};
                }
                const itemErrorBehavior = item.onError || onError;
                this.sequences[sequenceName].items.push({
                    event: item.event || null,
                    sequences: isArray(item) ? item : (item.sequences || null),
                    priority: item.priority || 0,
                    onError: isInteger(itemErrorBehavior) ? itemErrorBehavior : ensureArray(itemErrorBehavior)
                });
            }
            this.sequences[sequenceName].items.sort((a: SequenceItemInterface, b: SequenceItemInterface) => {
                return b.priority - a.priority;
            });
        }
        return this;
    }

    /**
     * Remove one or multiple events from a sequence.
     */
    public remove(event: symbol|symbol[]|SequenceLink, sequenceName: string = DefaultSequenceName, unsubscribe: boolean = true): EventPipeline {
        if (isUndefined(this.sequences[sequenceName])) {
            return this;
        }
        const events: symbol[] = ensureArray(event);
        for (const event of events) {
            for (let i = 0; i < this.sequences[sequenceName].items.length; ++i) {
                const sequence = this.sequences[sequenceName].items[i];
                if ((isSymbol(event) && sequence.event === event) ||
                    (isString(event) && sequence.sequences !== null && sequence.sequences.indexOf(event) > -1)){
                    this.sequences[sequenceName].items.splice(i--, 1);
                }
            }
            if (unsubscribe) {
                this.unsubscribeIfUnused(event);
            }
        }
        return this;
    }

    /**
     * Subscribe to an event of the pipeline.
     */
    public subscribe(event: symbol, callback: any, priority?: number): this {
        if (isUndefined(this.unsubscribeFunctions[event])) {
            this.unsubscribeFunctions[event] = [];
        }
        this.unsubscribeFunctions[event].push(this.dispatcher.subscribe(event, callback, priority));
        return this;
    }

    /**
     * Start the pipeline.
     */
    public start(sequence: string|string[] = DefaultSequenceName): DispatchResult {
        // To hide the `parentContext` argument from the public signature.
        return this.runSequences(ensureArray(sequence));
    }

    /**
     * Stop the pipeline.
     */
    public stop(): void {

    }

    /**
     * Prepare the object for removal, cleaning all sequences and subscribers.
     */
    public dispose(): void {
        this.sequences = {};
        this.unsubscribeFunctions = {};
        this.dispatcher.clear();
    }

    /**
     * Execute multiple sequences sequentially.
     */
    private runSequences(names: string[], parentContext?: SequenceContext): DispatchResult {
        let index = -1;
        const result = new DispatchResult();
        const next = () => {
            const name = ++index < names.length ? names[index] : null;
            if (!name || isUndefined(this.sequences[name])) {
                return result;
            }
            const context = new SequenceContext(name, parentContext || null);
            const subResult = this.runSequence(cloneDeep(this.sequences[name]), context);
            if (subResult.promise !== null) {
                result.delayResponse(subResult.promise);
            }
        };
        next();
        return result;
    }

    /**
     * Run all items of a sequence sequentially.
     */
    private runSequence(sequence: SequenceInterface, context: SequenceContext): DispatchResult {
        let index = -1;
        const result = new DispatchResult();
        const onError = (reason: any, item: SequenceItemInterface, onFinish: () => void) => {
            if (item.onError === SequenceErrorBasicBehavior.Undefined) {
                item.onError = sequence.onError || DefaultSequenceErrorBehavior;
            }
            if (isArray(item.onError)) {
                dispatchItem({
                    event: null,
                    sequences: item.onError,
                    priority: 0,
                    onError: SequenceErrorBasicBehavior.Undefined
                }, onFinish);
                return ;
            }
            if (item.onError === SequenceErrorBasicBehavior.StopSequence) {
                context.stopSequence(false);
            } else if (item.onError === SequenceErrorBasicBehavior.StopAll) {
                context.stopSequence(true);
            }
            // Else is the behavior "Ignore", so we do nothing.
            onFinish();
        }
        const dispatchItem = (item: SequenceItemInterface, onFinish: () => void) => {
            try {
                let subResult: DispatchResult | null = null;
                if (item.event !== null) {
                    context.event = item.event;
                    subResult = this.dispatcher.dispatch(item.event, context, true);
                } else if (item.sequences !== null) {
                    subResult = this.runSequences(item.sequences, context);
                }
                if (subResult !== null && subResult.promise !== null) {
                    result.delayResponse(subResult.promise);
                    (result.localPromise as Promise<any>).then(() => {
                        // The promise of the sub result will always resolve, even on error.
                        // The error is contained in the DispatchResult object.
                        const result = subResult as DispatchResult;
                        if (result.error) {
                            onError(result.errorDetail, item, onFinish);
                        } else {
                            onFinish();
                        }
                    });
                } else {
                    onFinish();
                }
            } catch (e) {
                onError(e, item, onFinish);
            }
        };
        const next = () => {
            if (++index >= sequence.items.length || context.sequenceStopped) {
                return ;
            }
            const item = sequence.items[index];
            dispatchItem(item, next);
        };
        next();
        return result;
    }

    /**
     * Remove all subscribers of a type of event if it is not found in any sequence.
     */
    private unsubscribeIfUnused(event: symbol): void {
        if (isUndefined(this.unsubscribeFunctions[event]) || !this.unsubscribeFunctions[event].length) {
            return ;
        }
        ext:
        for (const sequenceName of Object.keys(this.sequences)) {
            const sequence = this.sequences[sequenceName];
            for (const item of sequence.items) {
                if (item.event === event) {
                    continue ext;
                }
            }
            for (const fn of this.unsubscribeFunctions[event]) {
                fn();
            }
            delete this.unsubscribeFunctions[event];
        }
    }
}