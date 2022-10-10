import { DirectiveBinding } from "vue";
/**
 * A simple directive that will teleport a ref of a component (or array of components) into the host.
 */
export declare class TeleportDirective {
    private teleported;
    created(el: HTMLElement, bindings: DirectiveBinding): void;
    updated(el: HTMLElement, bindings: DirectiveBinding): void;
    unmounted(): void;
    private doTeleport;
    /**
     * Try to extract the options from the binding or throw.
     */
    private resolveOptions;
    /**
     * Type guard for the binding value.
     */
    private isOptionsInterface;
}
