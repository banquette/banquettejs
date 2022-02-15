import { Directive } from "@banquette/vue-typescript/decorator/directive.decorator";
import { DirectiveBinding, VNode, h, resolveComponent, render } from "vue";

@Directive({name: 'bt-tooltip'})
export class TooltipDirective {
    public created(el: Element, bindings: DirectiveBinding, vNode: VNode, prevNode: VNode|null) {
        console.log('bind');
        const tooltipVnode = h(resolveComponent('bt-tooltip'));
        render(tooltipVnode, el);
        // el.appendChild(tooltipEl.el);
        // console.log(tooltipEl);
        // // createPopper(el, '', {
        // //     placement: 'left-start',
        // // });
    }
}
