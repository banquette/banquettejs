import { Vue } from "@banquette/vue-typescript/vue";
import { VNode } from "vue";
export default class ClientOnlyComponent extends Vue {
    placeholderTag: string;
    placeholder: string;
    private isMounted;
    /**
     * Vue lifecycle.
     */
    mounted(): void;
    render(): VNode | VNode[];
}
