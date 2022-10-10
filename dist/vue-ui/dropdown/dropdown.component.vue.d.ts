import { Vue } from "@banquette/vue-typescript/vue";
export default class DropdownComponent extends Vue {
    /**
     * The element to make the dropdown show under.
     */
    target: HTMLElement | string | null;
    realTarget: HTMLElement | string | null;
    onTargetChange(): void;
}
