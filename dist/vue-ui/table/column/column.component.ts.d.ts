import { Vue } from "@banquette/vue-typescript/vue";
export default class ColumnComponent extends Vue {
    /**
     * Unique id of the column.
     */
    id: string | null;
    /**
     * Public name of the column.
     */
    title: string;
    /**
     * Name that will appear in http request when ordering with the column.
     */
    orderingName: string | null;
    /**
     * Define if the column is visible by default.
     *
     * **Warning**, if hideable is `true`, this can be overridden by the user if they hide it manually.
     * So even if you set this to `true`, the column can be invisible.
     */
    visible: boolean;
    /**
     * Define if the column can be hidden by the user.
     */
    hideable: boolean;
    /**
     * Width of the column.
     */
    width: string;
    /**
     * If `false`, the slot is not rendered.
     * This is used in the initialization phase of the list, when columns are being registered.
     */
    get readyToRender(): boolean;
    parent: any;
    /**
     * @inheritDoc
     */
    mounted(): void;
}
