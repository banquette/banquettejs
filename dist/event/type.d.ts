import { SequenceErrorBasicBehavior } from "./constant";
import { SequenceItemInterface } from "./pipeline/sequence-item.interface";
import { SequenceInterface } from "./pipeline/sequence.interface";
/**
 * Signature of the unsubscribe function returned when a subscription is made to the event dispatcher.
 */
export declare type UnsubscribeFunction = () => void;
/**
 * Sequences related types.
 */
export declare type SequenceLink = string | string[];
export declare type SequencesMap = Record<string, SequenceInterface>;
export declare type SequenceErrorBehavior = SequenceErrorBasicBehavior | SequenceLink;
/**
 * Partial types for arguments.
 */
export declare type PartialSequenceItem = symbol | Partial<SequenceItemInterface> | SequenceLink;
export declare type PartialSequence = PartialSequenceItem | PartialSequenceItem[];
export declare type PartialSequencesMap = Record<string, PartialSequence>;
