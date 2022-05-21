<style src="./alerts-stack.component.css" scoped></style>
<template src="./alerts-stack.component.html" ></template>
<script lang="ts">
import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { enumToArray } from "@banquette/utils-array/enum-to-array";
import { proxy } from "@banquette/utils-misc/proxy";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { AlertOptionsInterface } from "../../alert-options.interface";
import { StackPosition, AlertEvents } from "../../constant";
import { ShowAlertEvent } from "../../event/show-alert.event";
import { AlertComponent } from "../alert";

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

    /**
     * Optional identifier of the stack.
     * Only alerts matching the id will be added to the stack.
     */
    @Prop({type: String, default: null}) public id!: string|null;

    /**
     * Css position of the stack.
     * If `true` the stack will be fixed in the window.
     * If `false` it will be relative to its first relative parent.
     */
    @Prop({type: Boolean, default: true}) public fixed!: boolean;

    /**
     * Array of alerts added using the EventDispatcher.
     */
    @Expose() public stack: Record<StackPosition, Array<AlertOptionsInterface & {id: number, visible: boolean}>>;

    public constructor(@Inject(EventDispatcherService) private eventDispatcher: EventDispatcherService) {
        super();
        this.stack = Object.fromEntries(enumToArray(StackPosition).map((k) => [k, []])) as any;
        this.eventDispatcher.subscribe(AlertEvents.Show, proxy(this.onShow, this));
        this.eventDispatcher.subscribe(AlertEvents.HideAll, proxy(this.onHideAll, this));
    }

    /**
     * Remove an alert by id.
     */
    @Expose() public remove(id: number): void {
        for (const position of getObjectKeys(this.stack)) {
            let visibleCount = 0;
            for (let i = 0; i < this.stack[position].length; ++i) {
                if (this.stack[position][i].id === id) {
                    this.stack[position][i].visible = false;
                } else if (this.stack[position][i].visible) {
                    ++visibleCount;
                }
            }
            if (!visibleCount) {
                this.stack[position] = [];
            }
        }
    }

    /**
     * Add an alert to the alerts stack.
     */
    private onShow(event: ShowAlertEvent): boolean {
        if ((!this.id && !event.options.stack) || this.id === event.options.stack) {
            const position = ensureInEnum(event.options.position, StackPosition, StackPosition.TopRight);
            this.stack[position].push(Object.assign(event.options, {id: ++AlertsStackComponent.MaxId, visible: true}));
            return true;
        }
        return false;
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
            // const removed = this.stack.pop();
            // if (!isUndefined(removed)) {
            //     const target = this.$refs[`a${removed.id}`];
            //     if (target) {
            //         target.destroy();
            //         hideNext();
            //     }
            // }
        };
        hideNext();
    }
}
</script>
