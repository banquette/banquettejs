import { Constructor } from "@banquette/utils-type/types";
import { ComponentPublicInstance } from "vue";
import { ComponentMetadataInterface } from "../decorator/component-metadata.interface";
import { VccOpts, DecoratedComponentInstance, DecoratedComponentConstructor } from "../type";
import { Vue } from "../vue";
/**
 * Try to get vcc options from a constructor function.
 * Can fail and return `null` if the constructor is not decorated.
 */
export declare function ctorToVccOpts(ctor: Constructor): VccOpts | null;
/**
 * Try to get the metadata of a component from its class constructor.
 * Can return `null` if the constructor is not decorated.
 */
export declare function ctorToMetadata(inst: Constructor): ComponentMetadataInterface | null;
/**
 * Get the vcc options of a component instance (Vue native object or ts class inheriting Vue).
 */
export declare function vueInstToVccOpts(inst: DecoratedComponentInstance | Vue): VccOpts;
/**
 * Get the Typescript class behind a component instance.
 */
export declare function vueInstToTsInst(inst: DecoratedComponentInstance): DecoratedComponentInstance;
/**
 * Try to resolve the Vue Typescript component class behind a Vue instance.
 * If the Vue instance is not using Vue Typescript, return it as is.
 */
export declare function maybeResolveTsInst(inst: ComponentPublicInstance): ComponentPublicInstance;
/**
 * Get the constructor function behind vcc options.
 */
export declare function vccOptsToCtor(opts: VccOpts): DecoratedComponentConstructor;
/**
 * Get the constructor function of a component.
 */
export declare function vueInstToCtor(inst: DecoratedComponentInstance): DecoratedComponentConstructor;
/**
 * Get the component's metadata from its vcc options.
 */
export declare function vccOptsToMetadata(opts: VccOpts): ComponentMetadataInterface;
/**
 * Get the component's metadata from its vcc options.
 */
export declare function vueInstToMetadata(inst: DecoratedComponentInstance): ComponentMetadataInterface;
/**
 * Ensure the constructor is returned in case the input is the export of a SFC.
 */
export declare function c<T extends Constructor = Constructor<any>>(input: any): T;
/**
 * Will try to get the vcc options of a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
export declare function anyToVccOpts(input: any): VccOpts | null;
/**
 * Will try to get the Vue Typescript's instance of a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
export declare function anyToTsInst(input: any): any;
/**
 * Will try to get the Vue Typescript's instance of a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
export declare function anyToComponentCtor(input: any): DecoratedComponentConstructor | null;
/**
 * Will try to get the metadata a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
export declare function anyToComponentMetadata(input: any): ComponentMetadataInterface | null;
