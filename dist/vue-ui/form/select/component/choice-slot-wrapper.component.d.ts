import { Vue } from "@banquette/vue-typescript/vue";
export default class ChoiceSlotWrapperComponent extends Vue {
    /**
     * The position is provided to child components using the provide/inject pattern
     * because child components are defined in the userland so we can't forward the position using a prop.
     */
    position: string;
    /**
     * Renderless component, we forward the rendering to the default slot.
     */
    render(context: any): any;
}
