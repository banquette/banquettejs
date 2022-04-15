import { UsageException } from "@banquette/exception/usage.exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Directive } from "@banquette/vue-typescript/decorator/directive.decorator";
import { DirectiveBinding } from "vue";

interface OptionsInterface {
    /**
     * Name of the target ref.
     * If `null`, the root element of the component is teleported instead.
     */
    ref: string|null;

    /**
     * One or multiple component instances to get the ref from.
     */
    target?: object|Array<object|undefined>;
}

/**
 * A simple directive that will teleport a ref of a component (or array of components) into the host.
 */
@Directive('bt-teleport')
export class TeleportDirective {
    public created(el: HTMLElement, bindings: DirectiveBinding): void {
        this.doTeleport(el, bindings);
    }

    public updated(el: HTMLElement, bindings: DirectiveBinding): void {
        this.doTeleport(el, bindings);
    }

    private doTeleport(el: HTMLElement, bindings: DirectiveBinding) {
        const options = this.resolveOptions(bindings);
        const components = ensureArray(options.target);

        for (const component of components) {
            if (!isUndefined(component)) {
                if (options.ref !== null && component.$refs[options.ref] instanceof HTMLElement) {
                    if (!el.contains(component.$refs[options.ref])) {
                        el.appendChild(component.$refs[options.ref]);
                    }
                } else {
                    console.warn(`Ref "${options.ref}" not found.`);
                }
            }
        }
    }

    /**
     * Try to extract the options from the binding or throw.
     */
    private resolveOptions(bindings: DirectiveBinding): OptionsInterface {
        let value = bindings.value;
        if (isFunction(value)) {
            value = value();
        }
        if (!this.isOptionsInterface(value)) {
            throw new UsageException('Invalid binding value for "bt-teleport".');
        }
        return value;
    }

    /**
     * Type guard for the binding value.
     */
    private isOptionsInterface(input: any): input is OptionsInterface {
        return isObject(input) && isNonEmptyString(input.ref);
    }
}
