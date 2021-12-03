import { SequenceErrorBasicBehavior } from "./constant";
import { SequenceItemInterface } from "./pipeline/sequence-item.interface";
import { SequenceInterface } from "./pipeline/sequence.interface";

/**
 * Signature of the unsubscribe function returned when a subscription is made to the event dispatcher.
 */
export type UnsubscribeFunction = () => void;

/**
 * Sequences related types.
 */
export type SequenceLink = string|string[];
export type SequencesMap = Record<string, SequenceInterface>;
export type SequenceErrorBehavior = SequenceErrorBasicBehavior|SequenceLink;

/**
 * Partial types for arguments.
 */
export type PartialSequenceItem = symbol|Partial<SequenceItemInterface>|SequenceLink;
export type PartialSequence = PartialSequenceItem|PartialSequenceItem[];
export type PartialSequencesMap = Record<string, PartialSequence>;
