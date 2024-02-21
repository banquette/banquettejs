import { UsageException } from "@banquette/exception";
import { isConstructor, isObject, isUndefined, Constructor } from "@banquette/utils-type";
import { ComponentPublicInstance } from "vue";
import { VUE_CLASS_COMPONENT_OPTIONS, COMPONENT_TS_INSTANCE, COMPONENT_CTOR, DECORATORS_METADATA } from "../constants";
import { ComponentMetadataInterface } from "../decorator/component-metadata.interface";
import { VccOpts, DecoratedComponentInstance, DecoratedComponentConstructor } from "../type";
import { Vue } from "../vue";
import { isDecoratedComponentConstructor, isDecoratedComponentInstance, isComponentInstance, isVccOpts } from "./guards";

/**
 * Try to get vcc options from a constructor function.
 * Can fail and return `null` if the constructor is not decorated.
 */
export function ctorToVccOpts(ctor: Constructor): VccOpts|null {
    if (isDecoratedComponentConstructor(ctor)) {
        return ctor[VUE_CLASS_COMPONENT_OPTIONS] || null;
    }
    return null;
}

/**
 * Try to get the metadata of a component from its class constructor.
 * Can return `null` if the constructor is not decorated.
 */
export function ctorToMetadata(inst: Constructor): ComponentMetadataInterface|null {
    const opts = ctorToVccOpts(inst);
    return opts !== null ? vccOptsToMetadata(opts) : null;
}

/**
 * Get the vcc options of a component instance (Vue native object or ts class inheriting Vue).
 */
export function vueInstToVccOpts(inst: DecoratedComponentInstance|Vue): VccOpts {
    return inst.$.type;
}

/**
 * Get the Typescript class behind a component instance.
 */
export function vueInstToTsInst(inst: DecoratedComponentInstance): DecoratedComponentInstance {
    return inst.$[COMPONENT_TS_INSTANCE];
}

/**
 * Try to resolve the Vue Typescript component class behind a Vue instance.
 * If the Vue instance is not using Vue Typescript, return it as is.
 */
export function maybeResolveTsInst(inst: ComponentPublicInstance): ComponentPublicInstance {
    if (isDecoratedComponentInstance(inst)) {
        return vueInstToTsInst(inst);
    }
    return inst;
}

/**
 * Get the constructor function behind vcc options.
 */
export function vccOptsToCtor(opts: VccOpts): DecoratedComponentConstructor {
    return opts[COMPONENT_CTOR];
}

/**
 * Get the constructor function of a component.
 */
export function vueInstToCtor(inst: DecoratedComponentInstance): DecoratedComponentConstructor {
    return inst.$.type[COMPONENT_CTOR];
}

/**
 * Get the component's metadata from its vcc options.
 */
export function vccOptsToMetadata(opts: VccOpts): ComponentMetadataInterface {
    return vccOptsToCtor(opts).prototype[DECORATORS_METADATA];
}

/**
 * Get the component's metadata from its vcc options.
 */
export function vueInstToMetadata(inst: DecoratedComponentInstance): ComponentMetadataInterface {
    return vccOptsToMetadata(vueInstToVccOpts(inst));
}

/**
 * Ensure the constructor is returned in case the input is the export of a SFC.
 */
export function c<T extends Constructor = Constructor<any>>(input: any): T {
    if (isVccOpts(input)) {
        return vccOptsToCtor(input) as any;
    }
    if (!isConstructor(input)) {
        throw new UsageException('Bad input for c(), expecting vcc options or a constructor.');
    }
    return input as T;
}

/**
 * Will try to get the vcc options of a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
export function anyToVccOpts(input: any): VccOpts|null {
    if (isVccOpts(input)) {
        return input;
    }
    if (isComponentInstance(input)) {
        return isVccOpts(input.$.type) ? input.$.type : null;
    }
    if (isDecoratedComponentConstructor(input)) {
        return input[VUE_CLASS_COMPONENT_OPTIONS];
    }
    return null;
}

/**
 * Will try to get the Vue Typescript's instance of a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
export function anyToTsInst(input: any): any {
    if (COMPONENT_TS_INSTANCE in input) {
        return input[COMPONENT_TS_INSTANCE];
    }
    if (isDecoratedComponentInstance(input)) {
        return vueInstToTsInst(input);
    }
    if (isObject(input) && !isUndefined(input.__vueParentComponent) && isObject(input.__vueParentComponent[COMPONENT_TS_INSTANCE])) {
        return input.__vueParentComponent[COMPONENT_TS_INSTANCE];
    }
    return null;
}

/**
 * Will try to get the Vue Typescript's instance of a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
export function anyToComponentCtor(input: any): DecoratedComponentConstructor|null {
    if (isDecoratedComponentConstructor(input)) {
        return input;
    }
    if (isVccOpts(input)) {
        return vccOptsToCtor(input);
    }
    if (isDecoratedComponentInstance(input)) {
        return vueInstToCtor(input);
    }
    return null;
}

/**
 * Will try to get the metadata a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
export function anyToComponentMetadata(input: any): ComponentMetadataInterface|null {
    if (isVccOpts(input)) {
        return vccOptsToMetadata(input);
    }
    if (isDecoratedComponentInstance(input)) {
        return vueInstToMetadata(input);
    }
    if (isDecoratedComponentConstructor(input)) {
        return ctorToMetadata(input);
    }
    if (isComponentInstance(input) && isVccOpts(input.$.type)) {
        return vccOptsToMetadata(input.$.type);
    }
    return null;
}
