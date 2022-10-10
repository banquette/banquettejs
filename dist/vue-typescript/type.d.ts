import { Constructor } from "@banquette/utils-type/types";
import { ComponentCustomProperties } from "@vue/runtime-core";
import { ComponentOptionsWithObjectProps, ComponentPublicInstance } from "vue";
import { DECORATORS_METADATA, VUE_CLASS_COMPONENT_OPTIONS, COMPONENT_TS_INSTANCE, COMPONENT_CTOR } from "./constants";
import { ComponentMetadataInterface } from "./decorator/component-metadata.interface";
/**
 * Define a prefix.
 */
export declare type Prefix = string | false | null;
/**
 * A map between original names and aliases.
 */
export declare type AliasesMap = Record<string, string | false>;
/**
 * A function converting an original name into an alias.
 */
export declare type AliasResolver = (name: string) => string | false;
/**
 * Regroup all types of alias definition.
 */
export declare type Alias = AliasResolver | AliasesMap;
/**
 * Regroup all types of prefix/alias definition.
 */
export declare type PrefixOrAlias = Prefix | Alias;
/**
 * __vccOpts object type.
 * That's the object expected by Vue to define class components.
 */
export declare type VccOpts = ComponentOptionsWithObjectProps & {
    props: {
        [key: string]: {
            propertyName: string;
        };
    };
    [COMPONENT_CTOR]: DecoratedComponentConstructor;
};
/**
 * A prototype extended with Vue Typescript's component metadata.
 */
export declare type DecoratedComponentPrototype = {
    [DECORATORS_METADATA]: ComponentMetadataInterface;
    constructor: DecoratedComponentConstructor;
};
/**
 * A constructor extended with Vue class component options.
 */
export declare type DecoratedComponentConstructor = Constructor & {
    [VUE_CLASS_COMPONENT_OPTIONS]: VccOpts;
    prototype: DecoratedComponentPrototype;
};
/**
 * A Vue component instance decorated with Vue Typescript's metadata.
 */
export declare type DecoratedComponentInstance = ComponentPublicInstance & {
    $: {
        type: VccOpts;
        [COMPONENT_TS_INSTANCE]: DecoratedComponentInstance;
    };
    $resolvedParent: ComponentPublicInstance | null;
    $plugins: ComponentCustomProperties;
};
