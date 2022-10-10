import { Constructor } from "@banquette/utils-type/types";
/**
 * Alternative way of identifying a model to access its metadata.
 */
export declare type ModelAlias = string | symbol;
/**
 * The real identifier type of a model.
 */
export declare type ModelIdentifier = Constructor;
/**
 * Group any type of identifier acceptable for a model.
 */
export declare type ModelExtendedIdentifier = ModelIdentifier | ModelAlias;
/**
 * A couple of model identifiers that define explicitly the type of model
 * to use from client to server and vice versa.
 */
export declare type ModelBidirectionalExtendedIdentifier = [
    ModelExtendedIdentifier,
    ModelExtendedIdentifier
];
/**
 * Shorthand types.
 */
export declare type AnyModel = ModelExtendedIdentifier | ModelBidirectionalExtendedIdentifier;
export declare type AnyModelOptional = AnyModel | null;
/**
 * Custom models factory function.
 */
export declare type ModelFactory<T> = (...args: any[]) => T;
