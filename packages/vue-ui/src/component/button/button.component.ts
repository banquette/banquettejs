import { proxy } from "@banquette/utils-misc/proxy";
import { VoidCallback } from "@banquette/utils-type/types";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Lifecycle } from "@banquette/vue-typescript/decorator/lifecycle.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Ref } from "@banquette/vue-typescript/decorator/ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import ClickOutsideDirective from "../../directive/click-outside.directive";

@Themeable({
    vars: {
        padding: 'duk5ypj7',
        fontSize: 'rbqdeb2b',
        fontWeight: 'x7zq5fu1',
        borderRadius: 'n7vo0li2',
        borderColor: 'bki79qph',
        background: 'hp8t4g7n',
        color: 'w061g1oc',
        hover: {
            background: 'f32skrbh',
            color: 'ao5pftk1'
        },
        active: {
            background: 'a24mj78i',
            color: 'b63ysblr'
        },
        focus: {
            background: 'hhzhcf6g',
            color: 'j2djeyiw'
        },
        disabled: {
            background: 'qylxhsrv',
            color: 'jdc6v419',
            borderColor: 'vysj1nxl',
            svg: {
                fill: 'dw6rtsj7'
            }
        },
        svg: {
            color: 'r8bjara5'
        }
    }
})
@Component({
    name: 'bt-button',
    directives: [ClickOutsideDirective]
})
export default class ButtonComponent extends Vue {
    /**
     * The URL to redirect to when the button is clicked.
     * If defined, the root component will be a `<a>` instead of a `<button>`.
     */
    @Prop({type: String, default: null}) public href!: string;

    /**
     * Define the "target" attribute of the root element.
     * Only applicable if `href` is defined and thus the root element is a `<a>`.
     */
    @Prop({type: String, default: null}) public target!: string;

    /**
     * When `true`, the button is grayed out and non-interactive.
     */
    @Prop({type: Boolean, default: false}) public disabled!: true|null;

    /**
     * When `true` the button is disabled and indicates that it's doing something by replacing its content by a loader.
     */
    @Prop({type: Boolean, default: false}) public working!: boolean;

    /**
     * A text to show next to the loader when the button is working.
     */
    @Prop({type: String, default: null}) public workingText!: string|null;

    /**
     * Percentage of progress to pass to the loader when the button is working.
     * If `null` (the default value), the loader progress is undetermined.
     */
    @Prop({type: Number, default: null}) public workingProgress!: number|null;

    /**
     * The variants to pass to the `<bt-progress-circular>` component in the default
     * content of the `working` slot.
     */
    @Prop({type: String, default: ''}) public workingProgressVariant!: string;

    /**
     * External toggle status for the "toggle" slot.
     */
    @Prop({name: 'toggled', type: Boolean, default: null}) public toggledProp!: boolean|null;

    @Expose() public active: boolean = false;

    @Computed() public get tag(): string {
        return this.href !== null ? 'a' : 'button';
    }

    @Computed() public get disabledAttr(): true|null {
        // `null` instead of false so Vue will generate an empty `disabled` attribute instead of setting `disabled="false"`.
        return this.disabled || this.working ? true : null;
    }

    @Computed() public get isToggleSlotVisible(): boolean {
        if (this.toggledProp !== null) {
            return this.toggledProp;
        }
        return this.toggledAttr;
    }

    @Computed() public get isWorkingTextSlotVisible(): boolean {
        return !!this.workingText || this.hasSlot('working-text');
    }

    /**
     * Internal toggle status for the the "toggle" slot.
     */
    @Ref() private toggledAttr: boolean = false;

    /**
     * A reference to the callback that will be called when keyboard events are listened to.
     */
    @Ref() private keydownListener: VoidCallback|null = null;

    /**
     * Show/hide the "toggle" slot (if defined).
     */
    @Expose() public toggle(event: MouseEvent): void {
        if (!this.$refs.root.contains(event.target) || this.disabled) {
            return ;
        }
        if (this.hasSlot('toggle')) {
            this.toggledAttr = !this.toggledAttr;
        } else {
            this.toggledAttr = false;
        }
    }

    @Expose() public hideToggle(): void {
        this.toggledAttr = false;
    }

    @Expose() public onFocus(): void {
        if (this.keydownListener === null && !this.disabled) {
            this.keydownListener = proxy(this.onKeyDown, this);
            this.$el.addEventListener('keydown', this.keydownListener);
        }
    }

    @Expose() public onBlur(): void {
        if (this.keydownListener !== null) {
            this.$el.removeEventListener('keydown', this.keydownListener);
            this.keydownListener = null;
        }
    }

    @Lifecycle('beforeUnmount')
    public dispose(): void {
        this.onBlur();
    }

    private onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !this.active && !this.toggledAttr && !this.disabled) {
            this.active = true;
            window.setTimeout(() => {
                this.active = false;
            }, 100);
        }
    }
}
