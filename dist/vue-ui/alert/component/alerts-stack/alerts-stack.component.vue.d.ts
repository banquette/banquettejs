import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { Vue } from "@banquette/vue-typescript/vue";
import { AlertOptionsInterface } from "../../alert-options.interface";
import { StackPosition } from "../../constant";
export default class AlertsStackComponent extends Vue {
    private eventDispatcher;
    /**
     * Id increment for the alerts.
     */
    private static MaxId;
    /**
     * Optional identifier of the stack.
     * Only alerts matching the id will be added to the stack.
     */
    id: string | null;
    /**
     * Css position of the stack.
     * If `true` the stack will be fixed in the window.
     * If `false` it will be relative to its first relative parent.
     */
    fixed: boolean;
    /**
     * Array of alerts added using the EventDispatcher.
     */
    stack: Record<StackPosition, Array<AlertOptionsInterface & {
        id: number;
        visible: boolean;
    }>>;
    constructor(eventDispatcher: EventDispatcherService);
    /**
     * Remove an alert by id.
     */
    remove(id: number): void;
    /**
     * Add an alert to the alerts stack.
     */
    private onShow;
    /**
     * Clear all alerts that have been added using the event dispatcher.
     */
    private onHideAll;
}
