<style src="./column.component.css" scoped></style>
<template src="./column.component.html" ></template>
<script lang="ts">
import { UsageException } from "@banquette/exception";
import { isNumber } from "@banquette/utils-type";
import { Component } from "@banquette/vue-typescript";
import { Computed } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { Ref } from "@banquette/vue-typescript";
import { Vue } from "@banquette/vue-typescript";
import { PropType } from "vue";

@Component('bt-table-column')
export default class BtColumn extends Vue {
    /**
     * Unique id of the column.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public id!: string|null;

    /**
     * Public name of the column.
     */
    @Prop({type: String, default: ''}) public title!: string;

    /**
     * Name that will appear in http request when ordering with the column.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public orderingName!: string|null;

    /**
     * Define if the column is visible by default.
     *
     * **Warning**, if hideable is `true`, this can be overridden by the user if they hide it manually.
     * So even if you set this to `true`, the column can be invisible.
     */
    @Prop({type: Boolean, default: true}) public visible!: boolean;

    /**
     * Define if the column can be hidden by the user.
     */
    @Prop({type: Boolean, default: true}) public hideable!: boolean;

    /**
     * Width of the column.
     */
    @Prop({type: [String, Number] as PropType<string|number|null>, default: null, transform: (v) => isNumber(v) ? (v + 'px') : v}) public width!: string;

    /**
     * If `false`, the slot is not rendered.
     * This is used in the initialization phase of the list, when columns are being registered.
     */
    @Computed()
    public get readyToRender(): boolean {
        return !!this.parent && this.parent.vm.ready;
    }

    @Ref() public parent!: any;

    /**
     * @inheritDoc
     */
    public mounted(): void {
        const parent = this.getParent('bt-table' as any);
        if (!parent) {
            throw new UsageException(`A "<bt-table-column>" component must be placed inside a "<bt-table>".`);
        }
        this.parent = parent;
        if (this.parent.vm.initializing) {
            this.parent.vm.addColumn({
                id: this.id,
                title: this.title,
                orderingName: this.orderingName,
                visible: this.visible,
                hideable: this.hideable,
                width: this.width
            });
        }
    }
}
</script>
