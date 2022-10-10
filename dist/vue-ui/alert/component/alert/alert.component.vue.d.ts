import { Vue } from "@banquette/vue-typescript/vue";
export default class AlertComponent extends Vue {
    /**
     * An optional title to show above the content.
     * You can also override the "title" slot.
     */
    title: string | null;
    /**
     * The name of the icon to show, or `null` to show none.
     */
    icon: string | null;
    /**
     * The name of set of icon to get the icon from.
     */
    iconSet: string;
    /**
     * Time to live.
     * If > 0, defines the number of milliseconds the alert will stay alive.
     */
    ttl: number | null;
    /**
     * If `true` the end-user can close the alert by themselves.
     */
    closable: boolean;
    /**
     * If `true`, evaluate the HTML code present in the message and title.
     */
    allowHtml: boolean;
    /**
     * Name of the transition to apply when an alert is shown / hidden.
     * If `false`, disable the transition.
     */
    transition: string | false | undefined;
    /**
     * Bi-directional visibility control.
     */
    visible: boolean | null;
    /**
     * Bidirectional binding for the visibility so the dialog can be closed
     * both from the inside and outside the component.
     */
    get isVisible(): boolean;
    set isVisible(value: boolean);
    /**
     * Number of milliseconds the alert has left before it is destroyed.
     * Only defined if `ttl` has a value.
     */
    timeLeft: number | null;
    /**
     * Internals.
     */
    private internalVisible;
    private ttlStartTime;
    private ttlTimeoutId;
    hasSlot(name: string): boolean;
    /**
     * Vue lifecycle.
     */
    mounted(): void;
    /**
     * Show the alert.
     */
    show(): void;
    /**
     * Hide the alert.
     */
    close(): void;
    onAfterLeave(): void;
    onTTLChange(newValue: number | null): void;
    private onVisibilityChange;
    /**
     * Animate the ttl.
     */
    private updateTimeLeft;
}
