import { ModelBidirectionalExtendedIdentifier } from "@banquette/api/type";
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
 * Shorthand types.
 */
export type AnyModel = ModelExtendedIdentifier | ModelBidirectionalExtendedIdentifier;
export type AnyModelOptional = AnyModel | null;

/**
 * Custom models factory function.
 */
export type ModelFactory<T> = (...args: any[]) => T;
