import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { proxy } from "@banquette/utils-misc/proxy";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { AlertEvents } from "../../alert/constant";
import { ShowAlertEvent } from "../../alert/event/show-alert.event";
import AlertComponent from "../alert/alert.component";
import { AlertOptionsInterface } from "./alert-options.interface";
import { StackPosition } from "./constant";

@Module()
@Component({
    name: 'bt-alerts-stack',
    components: [AlertComponent],
    factory: () => Injector.Get(AlertsStackComponent)
})
export default class AlertsStackComponent extends Vue {
    /**
     * Id increment for the alerts.
     */
    private static MaxId: number = 0;

    @Prop({
        type: String,
        default: StackPosition.TopRight,
        validate: (value) => ensureInEnum(value, StackPosition, StackPosition.TopRight)
    }) public position!: StackPosition;

    /**
     * Css position of the stack.
     * If `true` the stack will be fixed in the window.
     * If `false` it will be relative to its first relative parent.
     */
    @Prop({type: Boolean, default: true }) public fixed!: boolean;

    /**
     * Maximum number of alerts the stack can hold at one time.
     */
    @Prop({type: Number, default: 0}) public maxCount!: number;

    /**
     * Array of alerts added using the EventDispatcher.
     */
    @Expose() public stack: Array<AlertOptionsInterface & {id: number, visible: boolean}> = [];

    public constructor(@Inject(EventDispatcherService) private eventDispatcher: EventDispatcherService) {
        super();
        this.eventDispatcher.subscribe(AlertEvents.Show, proxy(this.onShow, this));
        this.eventDispatcher.subscribe(AlertEvents.HideAll, proxy(this.onHideAll, this));
    }

    /**
     * Remove an alert by id.
     */
    @Expose() public remove(id: number): void {
        let visibleCount = 0;
        for (let i = 0; i < this.stack.length; ++i) {
            if (this.stack[i].id === id) {
                this.stack[i].visible = false;
            } else {
                ++visibleCount;
            }
        }
        if (!visibleCount) {
            this.stack = [];
        }
    }

    /**
     * Add an alert to the alerts stack.
     */
    private onShow(event: ShowAlertEvent): boolean {
        this.stack.push(Object.assign(event.options, {id: ++AlertsStackComponent.MaxId, visible: true}));
        return true;
    }

    /**
     * Clear all alerts that have been added using the event dispatcher.
     */
    private onHideAll(): void {
        /**
         * Do not do a for loop here, because for each destroy() called here, the `remove()` method is called
         * from the child, which modifies the stack.
         */
        const hideNext = () => {
            const removed = this.stack.pop();
            if (!isUndefined(removed)) {
                const target = this.$refs[`a${removed.id}`];
                if (target) {
                    target.destroy();
                    hideNext();
                }
            }
        };
        hideNext();
    }
}
