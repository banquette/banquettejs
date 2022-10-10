import { Vue } from "@banquette/vue-typescript/vue";
export default class FilterComponent extends Vue {
    /**
     * Public id of the column to add the filter to.
     */
    column: string;
    /**
     * If `false`, the slot is not rendered.
     */
    get readyToRender(): boolean;
    parent: any;
    /**
     * @inheritDoc
     */
    mounted(): void;
}
