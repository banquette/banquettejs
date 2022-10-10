import { DirectiveBinding } from "vue";
/**
 * A click handler that will only trigger if an event is detected outside the host element.
 */
export declare class ClickOutsideDirective {
    private el;
    private enabled;
    private callback;
    private unbindHandler;
    beforeMount(el: HTMLElement, bindings: DirectiveBinding): void;
    updated(el: HTMLElement, bindings: DirectiveBinding): void;
    unmounted(): void;
    private bindHandler;
    private unbind;
    private onTrigger;
    private resolveHandlerType;
    private isOutside;
}
