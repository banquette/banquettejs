import { Vue } from "@banquette/vue-typescript/vue";
export default class ButtonComponent extends Vue {
    /**
     * The URL to redirect to when the button is clicked.
     * If defined, the root component will be a `<a>` instead of a `<button>`.
     */
    href: string | null;
    /**
     * Define the "target" attribute of the root element.
     * Only applicable if `href` is defined and thus the root element is a `<a>`.
     */
    target: string | null;
    /**
     * When `true`, the button is grayed out and non-interactive.
     */
    disabled: true | null;
    /**
     * When `true` the button is disabled and indicates that it's doing something by replacing its content with a loader.
     */
    working: boolean;
    /**
     * A text to show next to the loader when the button is working.
     */
    workingText: string | null;
    /**
     * Percentage of progress to pass to the loader when the button is working.
     * If `null` (the default value), the loader progress is undetermined.
     */
    workingProgress: number | null;
    /**
     * External toggle status for the "toggle" slot.
     */
    toggledProp: boolean | null;
    /**
     * Name of the transition to apply when the toggle slot is shown / hidden.
     * If `false`, disable the transition.
     */
    toggleTransition: string | false | undefined;
    protected clickDuration: number;
    active: boolean;
    get tagName(): string;
    get hasToggleSlot(): boolean;
    get isToggleSlotVisible(): boolean;
    get isWorkingTextSlotVisible(): boolean;
    /**
     * Internal toggle status for the "toggle" slot.
     */
    private toggledAttr;
    /**
     * A reference to the callback that will be called when keyboard events are listened to.
     */
    private keydownListener;
    /**
     * Show/hide the "toggle" slot (if defined).
     */
    onClick(event: UIEvent): void;
    /**
     * Show/hide the "toggle" slot (if defined).
     */
    toggle(event: UIEvent): void;
    hideToggle(): void;
    onFocus(): void;
    onBlur(): void;
    dispose(): void;
    protected onKeyDown(event: KeyboardEvent): void;
}
