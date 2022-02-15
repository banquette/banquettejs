import { OrderingDirection } from "@banquette/ui/table/ordering/constant";
import { OrderingModule } from "@banquette/ui/table/ordering/ordering.module";
import { Composable } from "@banquette/vue-typescript/decorator/composable.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";

@Composable()
export class OrderingComposable {
    /**
     * @see OrderingModule
     */
    @Prop({type: String, default: null}) public name!: string|null;
    @Prop({type: String, default: null}) public direction!: OrderingDirection|null;

    /**
     * The actual module instance.
     */
    public module!: OrderingModule;

    @Watch(['name', 'direction'], {immediate: ImmediateStrategy.NextTick})
    protected syncPaginationConfigurationProps(): void {
        this.module.columnName = this.name;
        this.module.direction = this.direction;
    }
}
