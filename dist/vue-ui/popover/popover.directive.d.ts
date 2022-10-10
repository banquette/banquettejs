import { DirectiveBinding } from "vue";
export declare class PopoverDirective {
    private static Groups;
    private instance;
    created(el: Element, bindings: DirectiveBinding): void;
    updated(el: Element, bindings: DirectiveBinding): void;
    unmounted(): void;
    private getOrCreateInstance;
    private createInstance;
    private addToGroup;
    private removeFromGroup;
    private resolveOptions;
}
