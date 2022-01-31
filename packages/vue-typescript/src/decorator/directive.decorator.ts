import { UsageException } from "@banquette/exception/usage.exception";
import { noop } from "@banquette/utils-misc/noop";
import { kebabCase } from "@banquette/utils-string/case/kebab-case";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { DirectiveBinding, DirectiveHook, VNode } from "vue";
import { VueBuilder } from "../vue-builder";

export interface DirectiveDecoratorOptions {
    /**
     * Name of the directive for VueJS.
     * @see https://v3.vuejs.org/guide/component-registration.html#component-names
     */
    name?: string;

    /**
     * Group(s) on which the component should be registered in the VueBuilder.
     */
    group?: string|string[]|null;

    /**
     * Function to call to create an instance of the directive.
     * If not defined, the constructor is simply called without any parameters.
     */
    factory?: (() => any)|null;
}

let maxId: number = 0;
const uidMap: Record<string, any> = {};

function getOrCreateInstance(ctor: Constructor & {__bvcDirCtorId?: number}, factory: () => any, el: Element & {__bvcDirInst?: number}): any {
    if (isUndefined(ctor.__bvcDirCtorId)) {
        Object.defineProperty(ctor, '__bvcDirCtorId', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: ++maxId
        });
    }
    if (isUndefined(el.__bvcDirInst)) {
        Object.defineProperty(el, '__bvcDirInst', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: ++maxId
        });
    }
    const identifier: string = el.__bvcDirInst as number + '_' + ctor.__bvcDirCtorId;
    if (isUndefined(uidMap[identifier])) {
        uidMap[identifier] = factory();
    }
    return uidMap[identifier];
}

function removeInstance(el: Element & {__bvcDirInst?: number}): void {
    if (!isUndefined(el.__bvcDirInst) && !isUndefined(uidMap[el.__bvcDirInst])) {
        delete uidMap[el.__bvcDirInst];
    }
}

function defineProxy(ctor: Constructor, options: DirectiveDecoratorOptions, hook: string): DirectiveHook {
    if (isUndefined(ctor.prototype[hook])) {
        return noop;
    }
    const factory = !isNullOrUndefined(options.factory) ? options.factory : () => new ctor();
    return (...args: [Element, DirectiveBinding, VNode, VNode|null]) => {
        const inst = getOrCreateInstance(ctor, factory, args[0]);
        return inst[hook].apply(inst, args);
    };
}

/**
 * Define a class as a Vue component.
 * You must put this on every class you want to be used like a Vue component.
 * The component will automatically be registered into the VueBuilder in the specified groups.
 */
export function Directive(name: string): any;
export function Directive(options: DirectiveDecoratorOptions): any;
export function Directive(optionsOrName: DirectiveDecoratorOptions|string = {}): any {
    return (ctor: Constructor) => {
        const options: DirectiveDecoratorOptions = isString(optionsOrName) ? {name: optionsOrName} : optionsOrName;
        if (isUndefined(options.name)) {
            if (!isNonEmptyString(ctor.name)) {
                throw new UsageException(
                    `Unable get the directive name. Please set the "name" option in the "@Directive" decorator ` +
                    `or ensure that constructors names are kept when you build your project for production.`
                );
            }
            options.name = kebabCase(ctor.name) as string;
        }
        VueBuilder.RegisterDirective(options.name, {
            created: defineProxy(ctor, options, 'created'),
            beforeMount: defineProxy(ctor, options, 'beforeMount'),
            mounted: defineProxy(ctor, options, 'mounted'),
            beforeUpdate: defineProxy(ctor, options, 'beforeUpdate'),
            updated: defineProxy(ctor, options, 'updated'),
            beforeUnmount: defineProxy(ctor, options, 'beforeUnmount'),
            unmounted: (() => {
                const userCallback = defineProxy(ctor, options, 'unmounted');
                return (...args: [Element, DirectiveBinding, VNode, VNode | null]) => {
                    userCallback.apply(null, args);
                    removeInstance(args[0]);
                };
            })()
        }, options.group, ctor);
    };
}
