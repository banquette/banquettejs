<template src="./filter.component.html"></template>
<script lang="ts">
import { UsageException } from "@banquette/exception";
import { Component, Computed, Prop, Vue } from "@banquette/vue-typescript";

@Component('bt-table-filter')
export default class BtFilter extends Vue {
    /**
     * Public id of the column to add the filter to.
     */
    @Prop({type: String, required: true}) public column!: string;

    /**
     * If `false`, the slot is not rendered.
     */
    @Computed()
    public get readyToRender(): boolean {
        return !!this.parent && this.parent.vm.ready;
    }

    public parent!: any /* BtTable */;

    /**
     * @inheritDoc
     */
    public mounted(): void {
        const parent = this.getParent('bt-table' as any);
        if (!parent) {
            throw new UsageException(`A "<bt-table-filter>" component must be placed inside a "<bt-table>".`);
        }
        this.parent = parent;
        this.parent.addFilter(this.column, this);
    }
}
</script>
