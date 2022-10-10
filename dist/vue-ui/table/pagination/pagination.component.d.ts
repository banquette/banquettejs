import { FormObject } from "@banquette/form/form-object";
import { TableViewModel } from "@banquette/ui/table/table-view-model";
import { Vue } from "@banquette/vue-typescript/vue";
export default class PaginationComponent extends Vue {
    vm: TableViewModel;
    get isOffset(): boolean;
    form: FormObject;
    /**
     * Events' unsubscribe callbacks.
     */
    private unsubscribeCallbacks;
    /**
     * Vue lifecycle hook.
     */
    mounted(): void;
    /**
     * Vue lifecycle hook.
     */
    unmounted(): void;
    /**
     * Called when the user press a key with the page input text focused.
     */
    onPageTextControlKeyDown(event: KeyboardEvent): void;
    /**
     * Set the default value and observe the control that defines the current page number.
     */
    private bindPageControl;
    /**
     * Set the default value and observe the control that defines the number of items per page.
     */
    private bindItemsPerPageControl;
    /**
     * Observe external updates and act accordingly.
     */
    private observeUpdates;
    /**
     * Synchronize the value of the form with the current state of the pagination.
     */
    private syncForm;
}
