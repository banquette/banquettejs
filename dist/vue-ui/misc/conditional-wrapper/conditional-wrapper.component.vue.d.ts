import { Vue } from "@banquette/vue-typescript/vue";
import { VNodeChild } from "@vue/runtime-core";
export default class ConditionalWrapperComponent extends Vue {
    type: string;
    enabled: boolean;
    render(context: any): VNodeChild;
}
