import { Component, Prop, Provide, Render, Vue } from "@banquette/vue-typescript";
import { renderSlot } from "vue";

@Component({
    name: 'choice-slot-wrapper',
    group: null // We don't want this component in the VueBuilder.
})
export default class BtChoiceSlotWrapper extends Vue {
    /**
     * The position is provided to child components using the provide/inject pattern
     * because child components are defined in the userland so we can't forward the position using a prop.
     */
    @Provide()
    @Prop({type: String, required: true}) public position!: string;

    /**
     * Renderless component, we forward the rendering to the default slot.
     */
    @Render()
    public render(context: any): any {
        return renderSlot(context.$slots, 'default');
    }
}
