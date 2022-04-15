import { proxy } from "@banquette/utils-misc/proxy";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Directive } from "@banquette/vue-typescript/decorator/directive.decorator";
import { DirectiveBinding } from "vue";

type EventType = 'click' | 'mousedown';

/**
 * A click handler that will only trigger if an event is detected outside of the host element.
 */
@Directive('bt-click-outside')
export class ClickOutsideDirective {
    private el!: HTMLElement;
    private enabled: boolean = true;
    private callback: ((event: MouseEvent, el: Element) => void)|null = null;
    private handlerType: EventType = 'click';
    private handlerProxy: ((event: MouseEvent) => void)|null = null;

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
        if (this.enabled && isFunction(this.callback)) {
            this.bindHandler(this.resolveHandlerType(bindings));
        } else {
            this.unbindHandler();
        }
    }

    public unmounted(): void {
        this.unbindHandler();
    }

    private bindHandler(eventType: EventType): void {
        if (this.handlerProxy !== null) {
            if (this.handlerType === eventType) {
                return;
            }
            this.unbindHandler();
        }
        this.handlerType = eventType;
        this.handlerProxy = proxy(this.onTrigger, this);
        window.addEventListener(eventType, this.handlerProxy);
    }

    private unbindHandler(): void {
        if (this.handlerProxy !== null) {
            window.removeEventListener(this.handlerType, this.handlerProxy);
            this.handlerProxy = null;
        }
    }

    private onTrigger(event: MouseEvent): void {
        let target: EventTarget|null = event.target;
        if (this.callback !== null && target instanceof Element && this.el !== event.target && !this.el.contains(target)) {
            this.callback(event, this.el);
        }
    }

    private resolveHandlerType(bindings: DirectiveBinding): EventType {
        if (isObject(bindings.value)) {
            if (bindings.value.eventType === 'mousedown') {
                return 'mousedown';
            }
        }
        return 'click';
    }
}
