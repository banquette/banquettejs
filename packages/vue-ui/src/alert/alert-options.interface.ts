import { StackPosition } from "./constant";

export interface AlertOptionsInterface {
    /**
     * Variant to apply to the alert.
     */
    variant: string;

    /**
     * The main message of the alert.
     */
    message: string;

    /**
     * If defined, shows a header with the title above the message.
     *
     * You can also override the `title` slot for a custom layout or HTML support.
     */
    title: string|null;

    /**
     * The icon to show.
     *
     * Possible values are:
     *
     *   `string`: name of a Vue component,
     *   `null`: no icon is shown.
     *
     * You can also override the `icon` slot if you want a custom svg.
     */
    icon: string|null;

    /**
     * Time to live.
     * If set to a value > 0, defines the number of milliseconds the alert will stay alive.
     */
    ttl: number|null;

    /**
     * If `true` the alert will be closable by the user.
     */
    closable: boolean;

    /**
     * Identifier of the stack to add the alert into.
     */
    stack?: string;

    /**
     * If `true`, evaluate the HTML code present in the message and title.
     *
     * Disabled by default.
     */
    allowHtml?: boolean;

    /**
     * Position of the alert in the stack's space.
     * Only applicable if the alert is in a stack.
     */
    position?: StackPosition;
}
