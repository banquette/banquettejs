import { Constructor } from "@banquette/utils-type/types";

/**
 * Alternative way of identifying a model to access its metadata.
 */
export type ModelAlias = string|symbol;

/**
 * The real identifier type of a model.
 */
export type ModelIdentifier = Constructor;

/**
 * Group any type of identifier acceptable for a model.
 */
export type ModelExtendedIdentifier = ModelIdentifier | ModelAlias;

/**
 * A couple of model identifiers that define explicitly the type of model
 * to use from client to server and vice versa.
 */
export type ModelBidirectionalExtendedIdentifier = [
    ModelExtendedIdentifier, // Used in the direction client => server (request)
    ModelExtendedIdentifier  // Used in the direction server => client (response)
];

/**
 * Shorthand types.
 */
export type AnyModel = ModelExtendedIdentifier | ModelBidirectionalExtendedIdentifier;
export type AnyModelOptional = AnyModel | null;

/**
 * Custom models factory function.
 */
export type ModelFactory<T> = (...args: any[]) => T;
