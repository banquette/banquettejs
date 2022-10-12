import { isServer } from "@banquette/utils-misc/is-server";
import { proxy } from "@banquette/utils-misc/proxy";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { VoidCallback } from "@banquette/utils-type/types";
import { Directive } from "@banquette/vue-typescript/decorator/directive.decorator";
import { DirectiveBinding } from "vue";

type EventType = 'click' | 'mousedown';

/**
 * A click handler that will only trigger if an event is detected outside the host element.
 */
@Directive('bt-click-outside')
export class ClickOutsideDirective {
    private el!: HTMLElement;
    private enabled: boolean = true;
    private callback: VoidCallback|null = null;
    private unbindHandler: VoidCallback|null = null;

    public beforeMount(el: HTMLElement, bindings: DirectiveBinding): void {
        this.updated(el, bindings);
    }

    public updated(el: HTMLElement, bindings: DirectiveBinding): void {
        this.el = el;
        if (isObject(bindings.value)) {
            this.enabled = !isUndefined(bindings.value.enabled) ? !!bindings.value.enabled : true;
            this.callback = bindings.value.callback || null;
        } else if (isFunction(bindings.value)) {
            this.callback = bindings.value;
        }
        if (this.enabled) {
            this.bindHandler(this.resolveHandlerType(bindings));
        } else {
            this.unbind();
        }
    }

    public unmounted(): void {
        this.unbind();
    }

    private bindHandler(eventType: EventType): void {
        this.unbind();
        const handler = proxy(this.onTrigger, this);
        window.addEventListener(eventType, handler);
        this.unbindHandler = () => window.removeEventListener(eventType, handler);
    }

    private unbind(): void {
        if (this.unbindHandler) {
            this.unbindHandler();
            this.unbindHandler = null;
        }
    }

    private onTrigger(event: MouseEvent): void {
        let target: EventTarget|null = event.target;

        if ((!(target instanceof HTMLElement) && !(target instanceof SVGElement)) || this.isOutside(target)) {
            if (this.callback !== null) {
                this.callback();
            }
            this.el.dispatchEvent(new CustomEvent('click-outside'));
        }
    }

    private resolveHandlerType(bindings: DirectiveBinding): EventType {
        return isObject(bindings.value) && bindings.value.eventType || 'mousedown';
    }

    private isOutside(target: HTMLElement|SVGElement): boolean {
        if (this.el === target || this.el.contains(target) || isServer()) {
            return false;
        }
        while (target) {
            if (target.dataset.teleportedFrom) {
                const virtualTarget = document.getElementById(target.dataset.teleportedFrom);
                return virtualTarget !== null && !this.el.contains(virtualTarget);
            }
            if (!target.parentElement) {
                break ;
            }
            target = target.parentElement;
        }
        return true;
    }
}
