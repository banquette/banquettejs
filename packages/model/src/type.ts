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
 * Custom models factory function.
 */
export type ModelFactory<T> = (...args: any[]) => T;
