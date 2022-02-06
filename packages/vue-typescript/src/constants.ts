import {
    onActivated,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onDeactivated,
    onErrorCaptured,
    onMounted,
    onServerPrefetch,
    onUnmounted,
    onUpdated
} from "vue";
import { LifecycleHook } from "./decorator/lifecycle.decorator";

/**
 * __vccOpts is an object Vue is looking for when dealing with class components.
 * So the name cannot be changed.
 */
export const VUE_CLASS_COMPONENT_OPTIONS = '__vccOpts';

/**
 * Holds all the metadata written by the different decorators of vue-typescript.
 */
export const DECORATORS_METADATA = '__bvcMetadata';

/**
 * Cache of DECORATORS_METADATA to avoid recalculating everything at each update.
 */
export const DECORATORS_METADATA_CACHE = '__bvcCache';

/**
 * A reference on the component's constructor.
 */
export const COMPONENT_CTOR = '__bvcCtor';

/**
 * Hidden attribute used to maintained a link between the Vue object and the real object instance.
 * Used to get the parent component instance.
 */
export const COMPONENT_INSTANCE = '__bvcInst';

/**
 * Vue lifecycle hooks.
 * @link https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html#lifecycle-hooks
 */
export const HOOKS = [
    // 'beforeCreate',  /* "onBeforeCreate" not available from the composition Api. */
    // 'created',       /* "onCreated" not available from the composition Api. */
    'beforeMount',
    'mounted',
    'beforeUnmount',
    'unmounted',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    // 'render',        /* "onRender" not available from the composition Api. */
    'errorCaptured',
    'serverPrefetch'
] as const;

/**
 * Hooks that are triggered before the component setup is done.
 */
export const PRE_CONSTRUCTION_HOOKS = [
    'beforeCreate',
    'created',
    'render'
];

export const HOOKS_MAP: Record<LifecycleHook, Function> = {
    beforeMount: onBeforeMount,
    mounted: onMounted,
    beforeUnmount: onBeforeUnmount,
    unmounted: onUnmounted,
    beforeUpdate: onBeforeUpdate,
    updated: onUpdated,
    activated: onActivated,
    deactivated: onDeactivated,
    errorCaptured: onErrorCaptured,
    serverPrefetch: onServerPrefetch
};
