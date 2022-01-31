import { Directive } from "@banquette/vue-typescript/decorator/directive.decorator";
import { DirectiveBinding } from "vue";

@Directive('bt-teleport-tab')
export default class TeleportTabDirective {
    public updated(el: HTMLElement, bindings: DirectiveBinding): void {
        this.updateTabs(el, bindings);
    }

    private updateTabs(el: HTMLElement, bindings: DirectiveBinding) {
        const tabs = bindings.value();
        while (el.firstElementChild) {
            el.firstElementChild.remove();
        }
        for (const tab of tabs) {
            el.append(tab.$refs.toggle);
        }
    }
}
