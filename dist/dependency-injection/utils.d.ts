import { Constructor } from "@banquette/utils-type/types";
import { InjectableMetadataInterface } from "./injectable-metadata.interface";
import { InjectableIdentifier } from "./type/injectable-identifier.type";
import { InjectableType } from "./type/injectable.type";
import { LazyInjectableIdentifier } from "./type/lazy-injectable-identifier";
/**
 * Create the metadata object defining the type and dependencies of an injectable.
 */
export declare function buildInjectableMetadata(ctor: Constructor): InjectableMetadataInterface;
/**
 * Build the array of dependencies to inject in the constructor of an injectable.
 */
export declare function registerImplicitDependencies(ctor: Constructor): InjectableMetadataInterface;
export declare function registerExplicitDependency(ctor: Constructor, identifier: InjectableIdentifier | LazyInjectableIdentifier | symbol | symbol[], lazy?: boolean, propertyName?: string, parameterIndex?: number): InjectableMetadataInterface;
/**
 * Convert an InjectableIdentifier into an InjectableType.
 */
export declare function getInjectableType(identifier: InjectableIdentifier | LazyInjectableIdentifier | symbol | symbol[], lazy?: boolean): InjectableType;
