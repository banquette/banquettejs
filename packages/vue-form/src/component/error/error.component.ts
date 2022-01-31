import { FormError } from "@banquette/form/form-error";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Ref } from "@banquette/vue-typescript/decorator/ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import StickToDirective from "@banquette/vue-ui/directive/stick-to.directive";

@Themeable({
    vars: {
        color: 'zy1ry083',
        background: 'ij4ez5mn',
        padding: 'cms3942z',
        borderRadius: 'zcdug7rz',
        fontSize: 'k8jjjii5',
        fontWeight: 'f4hkdo42',
        zIndex: 'w44fz79z'
    }
})
@Component({
    name: 'bt-form-error',
    directives: [StickToDirective]
})
export default class ErrorComponent {
    /**
     * The errors to show.
     */
    @Prop({type: Array, default: []}) public errors!: FormError[];

    /**
     * The target element or ref name to attach the dropdown to.
     */
    @Prop({type: Object, default: null}) public target!: HTMLElement|null;

    /**
     * Where to position the error relative to its target.
     */
    @Prop({type: String, default: 'bottom-start'}) public placement!: string;

    @Ref() private ready: boolean = false;

    @Computed() public get options(): any {
        return {
            target: this.ready ? this.target : null,
            placement: this.placement,
            popper: {
                modifiers: [{name: 'offset', options: {offset: [0, 10]}}],
                arrow: {
                    enabled: true,
                    element: '.arrow'
                }
            }
        };
    }

    /**
     * VueJS lifecycle.
     */
    public mounted(): void {
        // Give time to the theme to apply.
        window.setTimeout(() => {
            this.ready = true;
        });
    }
}
