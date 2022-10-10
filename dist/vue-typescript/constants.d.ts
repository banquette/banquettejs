import { LifecycleHook } from "./decorator/lifecycle.decorator";
/**
 * __vccOpts is an object Vue is looking for when dealing with class components.
 * So the name cannot be changed.
 */
export declare const VUE_CLASS_COMPONENT_OPTIONS = "__vccOpts";
/**
 * Holds all the metadata written by the different decorators of vue-typescript.
 */
export declare const DECORATORS_METADATA = "__bvcMetadata";
/**
 * Cache of DECORATORS_METADATA to avoid recalculating everything at each update.
 */
export declare const DECORATORS_METADATA_CACHE = "__bvcCache";
/**
 * A reference on the component's constructor.
 */
export declare const COMPONENT_CTOR = "__bvcCtor";
/**
 * A reference on the Typescript instance of the component, stored in the Vue instance.
 * Used to get the parent component instance.
 */
export declare const COMPONENT_TS_INSTANCE = "__bvctsInst";
/**
 * A reference on the proxified Vue instance of a component.
 *
 * This is necessary because the instance returned by `getCurrentInstance()` in the setup method
 * is not proxified yet. Meaning that it will not resolve plugins.
 *
 * If we only keep a reference on the non-proxified object, doing for example `this.$router`
 * in a Typescript instance, will fail.
 *
 * This reference is add to the Typescript instance via the `beforeCreate()` hook.
 */
export declare const COMPONENT_VUE_INSTANCE = "__bvcvInst";
/**
 * Holds the list of active theme variants.
 */
export declare const ACTIVE_VARIANTS = "__bvcVariants";
/**
 * Vue lifecycle hooks.
 * @link https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html#lifecycle-hooks
 */
export declare const HOOKS: readonly ["beforeMount", "mounted", "beforeUnmount", "unmounted", "beforeUpdate", "updated", "activated", "deactivated", "errorCaptured", "serverPrefetch"];
/**
 * Hooks that are triggered before the component setup is done.
 */
export declare const PRE_CONSTRUCTION_HOOKS: string[];
export declare const HOOKS_MAP: Record<LifecycleHook, Function>;
