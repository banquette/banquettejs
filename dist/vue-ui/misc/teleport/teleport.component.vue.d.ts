import { Vue } from "@banquette/vue-typescript/vue";
import { VNodeChild } from "@vue/runtime-core";
export default class TeleportComponent extends Vue {
    static MaxId: number;
    /**
     * Required. Specify target container.
     * Can either be a selector or an actual element.
     */
    to: string | HTMLElement | null;
    disabled: boolean;
    private wrapperId;
    render(context: any): VNodeChild;
}
