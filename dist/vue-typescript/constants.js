/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated, onActivated, onDeactivated, onErrorCaptured, onServerPrefetch } from 'vue';

/**
 * __vccOpts is an object Vue is looking for when dealing with class components.
 * So the name cannot be changed.
 */
var VUE_CLASS_COMPONENT_OPTIONS = '__vccOpts';
/**
 * Holds all the metadata written by the different decorators of vue-typescript.
 */
var DECORATORS_METADATA = '__bvcMetadata';
/**
 * Cache of DECORATORS_METADATA to avoid recalculating everything at each update.
 */
var DECORATORS_METADATA_CACHE = '__bvcCache';
/**
 * A reference on the component's constructor.
 */
var COMPONENT_CTOR = '__bvcCtor';
/**
 * A reference on the Typescript instance of the component, stored in the Vue instance.
 * Used to get the parent component instance.
 */
var COMPONENT_TS_INSTANCE = '__bvctsInst';
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
var COMPONENT_VUE_INSTANCE = '__bvcvInst';
/**
 * Holds the list of active theme variants.
 */
var ACTIVE_VARIANTS = '__bvcVariants';
/**
 * Hooks that are triggered before the component setup is done.
 */
var PRE_CONSTRUCTION_HOOKS = [
    'beforeCreate',
    'created',
    'render'
];
var HOOKS_MAP = {
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

export { ACTIVE_VARIANTS, COMPONENT_CTOR, COMPONENT_TS_INSTANCE, COMPONENT_VUE_INSTANCE, DECORATORS_METADATA, DECORATORS_METADATA_CACHE, HOOKS_MAP, PRE_CONSTRUCTION_HOOKS, VUE_CLASS_COMPONENT_OPTIONS };
