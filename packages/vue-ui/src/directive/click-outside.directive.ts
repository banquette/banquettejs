import { proxy } from "@banquette/utils-misc/proxy";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Directive } from "@banquette/vue-typescript/decorator/directive.decorator";
import { DirectiveBinding } from "vue";

/**
 * A click handler that will only trigger if the click is performed outside of the host element.
 */
@Directive('bt-click-outside')
export default class ClickOutsideDirective {
    private el!: HTMLElement;
    private enabled: boolean = true;
    private callback: ((event: MouseEvent, el: Element) => void)|null = null;
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
            this.bindHandler();
        } else {
            this.unbindHandler();
        }
    }

    public unmounted(): void {
        this.unbindHandler();
    }

    private bindHandler(): void {
        if (this.handlerProxy !== null) {
            return ;
        }
        console.log('%cbindHandler', 'color: lime', this.el);
        this.handlerProxy = proxy(this.onClick, this);
        document.body.addEventListener('click', this.handlerProxy);
    }

    private unbindHandler(): void {
        if (this.handlerProxy !== null) {
            console.log('%cunbindHandler', 'color: red', this.el);
            document.body.removeEventListener('click', this.handlerProxy);
            this.handlerProxy = null;
        }
    }

    private onClick(event: MouseEvent): void {
        let target: EventTarget|null = event.target;
        if (this.callback !== null && target instanceof Element && this.el !== event.target && !this.el.contains(target)) {
            console.warn('bt-click-outisde', target, this.el);
            this.callback(event, this.el);
        }
    }
}
