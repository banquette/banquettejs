import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { ensureArray } from "@banquette/utils-type";
import { isFunction } from "@banquette/utils-type";
import { isObject } from "@banquette/utils-type";
import { isUndefined } from "@banquette/utils-type";
import { Directive } from "@banquette/vue-typescript";
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

interface TeleportedItemInterface {
    /**
     * The element being teleported.
     */
    el: HTMLElement;

    /**
     * A comment placed where the element originally was, so we can restore it.
     */
    comment: Comment;
}

/**
 * A simple directive that will teleport a ref of a component (or array of components) into the host.
 */
@Directive('bt-teleport')
export class TeleportDirective {
    private teleported: TeleportedItemInterface[] = [];

    public created(el: HTMLElement, bindings: DirectiveBinding): void {
        this.doTeleport(el, bindings);
    }

    public updated(el: HTMLElement, bindings: DirectiveBinding): void {
        this.doTeleport(el, bindings);
    }

    public unmounted(): void {
        for (const item of this.teleported) {
            item.comment.replaceWith(item.el);
        }
        this.teleported = [];
    }

    private doTeleport(el: HTMLElement, bindings: DirectiveBinding) {
        const options = this.resolveOptions(bindings);
        const components = ensureArray(options.target);
        const teleported: TeleportedItemInterface[] = [];

        for (const component of components) {
            if (!isUndefined(component)) {
                const componentEl = options.ref !== null ? component.$refs[options.ref] : null;
                if (componentEl instanceof HTMLElement) {
                    let idx = this.teleported.findIndex((i) => i.el === componentEl);
                    let commentEl: Comment;
                    if (idx > -1) {
                        commentEl = this.teleported[idx].comment;
                    } else {
                        commentEl = document.createComment('bt-teleport');
                        componentEl.replaceWith(commentEl);
                        el.appendChild(componentEl);
                    }
                    teleported.push({
                        el: componentEl,
                        comment: commentEl
                    });
                } else {
                    console.warn(`Ref "${options.ref}" not found.`);
                }
            }
        }
        for (const previousTeleported of this.teleported) {
            if (teleported.findIndex((i) => i.el === previousTeleported.el) < 0) {
                previousTeleported.comment.replaceWith(previousTeleported.el);
            }
        }
        this.teleported = teleported;
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
