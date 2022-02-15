import { UsageException } from "@banquette/exception/usage.exception";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Vue } from "@banquette/vue-typescript/vue";

@Component('bt-table-filter')
export default class FilterComponent extends Vue {
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

    public parent!: any /* TableComponent */;

    /**
     * @inheritDoc
     */
    public mounted(): void {
        const parent = this.getParent('bt-table');
        if (!parent) {
            throw new UsageException(`A "<bt-table-filter>" component must be placed inside a "<bt-table>".`);
        }
        this.parent = parent;
        this.parent.addFilter(this.column, this);
    }
}
