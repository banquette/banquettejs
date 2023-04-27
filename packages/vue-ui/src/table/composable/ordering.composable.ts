import { OrderingDirection } from "@banquette/ui";
import { OrderingModule } from "@banquette/ui";
import { Composable } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript";
import { PropType } from "vue";

@Composable()
export class OrderingComposable {
    /**
     * @see OrderingModule
     */
    @Prop({type: String as PropType<String | null>, default: null}) public name!: string|null;
    @Prop({type: String as PropType<String | null>, default: null}) public direction!: OrderingDirection|null;
    @Prop({type: [Boolean, String] as PropType<boolean|'auto'>, default: 'auto'}) public remote!: boolean|'auto';

    /**
     * The actual module instance.
     */
    public module!: OrderingModule;

    @Watch(['name', 'direction', 'remote'], {immediate: ImmediateStrategy.BeforeMount})
    protected syncPaginationConfigurationProps(): void {
        this.module.columnName = this.name;
        this.module.direction = this.direction;
        this.module.remote = this.remote;
    }
}
