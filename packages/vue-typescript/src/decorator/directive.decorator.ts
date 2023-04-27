import { UsageException } from "@banquette/exception";
import { noop } from "@banquette/utils-misc";
import { kebabCase, isNonEmptyString } from "@banquette/utils-string";
import { isFunction, isString, isUndefined, Constructor } from "@banquette/utils-type";
import { DirectiveBinding, DirectiveHook, VNode } from "vue";
import { VueBuilder } from "../vue-builder";

export interface DirectiveDecoratorOptions {
    /**
     * Name of the directive for VueJS.
     * @see https://v3.vuejs.org/guide/component-registration.html#component-names
     */
    name: string;

    /**
     * Group(s) on which the component should be registered in the VueBuilder.
     */
    group?: string|string[]|null;

    /**
     * Function to call to create an instance of the directive.
     * If not defined, the constructor is simply called without any parameters.
     */
    factory: (() => any);
}

type ExtendedCtor = Constructor & {__bvcDirCtorId?: number};
type ExtendedElement = Element & {__bvcDirInst?: number};

let maxId: number = 0;
const uidMap: Record<string, any> = {};

function getOrCreateInstance(ctor: ExtendedCtor, factory: () => any, el: ExtendedElement): any {
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

function getInstanceUid(ctor: ExtendedCtor, el: ExtendedElement): string|null {
    if (!isUndefined(ctor.__bvcDirCtorId) && !isUndefined(el.__bvcDirInst)) {
        return el.__bvcDirInst as number + '_' + ctor.__bvcDirCtorId;
    }
    return null;
}

function removeInstance(ctor: ExtendedCtor, el: ExtendedElement): void {
    const uid = getInstanceUid(ctor, el);
    if (uid && !isUndefined(uidMap[uid])) {
        delete uidMap[uid];
    }
}

function defineProxy(ctor: Constructor, options: DirectiveDecoratorOptions, hook: string): DirectiveHook {
    if (isUndefined(ctor.prototype[hook])) {
        return noop;
    }
    return (...args: [Element, DirectiveBinding, VNode, VNode|null]) => {
        const inst = getOrCreateInstance(ctor, options.factory, args[0]);
        return inst[hook].apply(inst, args);
    };
}

/**
 * Define a class as a Vue directive.
 * Each usage of the directive will have its own Typescript instance.
 */
export function Directive(name: string): any;
export function Directive(options: Partial<DirectiveDecoratorOptions>): any;
export function Directive(optionsOrName: Partial<DirectiveDecoratorOptions>|string = {}): any {
    return (ctor: Constructor) => {
        const options: any = isString(optionsOrName) ? {name: optionsOrName} : optionsOrName;
        if (isUndefined(options.name)) {
            if (!isNonEmptyString(ctor.name)) {
                throw new UsageException(
                    `Unable get the directive name. Please set the "name" option in the "@Directive" decorator ` +
                    `or ensure that constructors names are kept when you build your project for production.`
                );
            }
            options.name = kebabCase(ctor.name) as string;
        }
        options.group = options.group || undefined;
        options.factory = isFunction(options.factory) ? options.factory : () => new ctor();
        VueBuilder.RegisterDirective(options.name, {
            created: defineProxy(ctor, options, 'created'),
            beforeMount: defineProxy(ctor, options, 'beforeMount'),
            mounted: defineProxy(ctor, options, 'mounted'),
            beforeUpdate: defineProxy(ctor, options, 'beforeUpdate'),
            updated: defineProxy(ctor, options, 'updated'),
            beforeUnmount: defineProxy(ctor, options, 'beforeUnmount'),
            getSSRProps: defineProxy(ctor, options, 'getSSRProps') as any,
            unmounted: (() => {
                const userCallback = defineProxy(ctor, options, 'unmounted');
                return (...args: [Element, DirectiveBinding, VNode, VNode | null]) => {
                    const inst = getOrCreateInstance(ctor, options.factory, args[0]);
                    if (inst.__watchStopHandle) {
                        inst.__watchStopHandle();
                    }
                    userCallback.apply(null, args);
                    removeInstance(ctor, args[0]);
                };
            })()
        }, options.group, ctor);
    };
}
