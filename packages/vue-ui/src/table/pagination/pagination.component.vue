<style src="./overrides.css"></style>
<style src="./pagination.component.css" scoped></style>
<template src="./pagination.component.html" ></template>
<script lang="ts">
import { BasicState, BeforeValueChangeFormEvent, StateChangedFormEvent, ValueChangedFormEvent, FormControl, FormObject, FormFactory } from "@banquette/form";
import { TableEvents, PaginationStrategy, TableViewModel } from "@banquette/ui";
import { proxy } from "@banquette/utils-misc";
import { ensureInteger, GenericCallback } from "@banquette/utils-type";
import { IMaterialKeyboardBackspace, IMaterialChevronLeft, IMaterialChevronRight } from "@banquette/vue-material-icons";
import { Component, Computed, Expose, Prop, Vue } from "@banquette/vue-typescript";
import { BtFormSelect } from "../../form/select";
import BtFormText from "../../form/text/text.component.vue";

@Component({
    name: 'bt-table-pagination',
    components: [BtFormText, BtFormSelect, IMaterialChevronRight, IMaterialChevronLeft, IMaterialKeyboardBackspace],
})
export default class BtPagination extends Vue {
    @Prop({type: Object, required: true}) public vm!: TableViewModel;

    @Computed()
    public get isOffset(): boolean {
        return this.vm.pagination.strategy === PaginationStrategy.Offset;
    }

    @Expose()
    public form: FormObject = FormFactory.Create({
        page: 1,
        itemsPerPage: 20
    }) as FormObject;

    /**
     * Events' unsubscribe callbacks.
     */
    private unsubscribeCallbacks: GenericCallback[] = [];

    /**
     * Vue lifecycle hook.
     */
    public mounted(): void {
        this.bindPageControl();
        this.bindItemsPerPageControl();
        this.observeUpdates();
    }

    /**
     * Vue lifecycle hook.
     */
    public unmounted(): void {
        for (const cb of this.unsubscribeCallbacks) {
            cb();
        }
        this.unsubscribeCallbacks = [];
    }

    /**
     * Called when the user press a key with the page input text focused.
     */
    @Expose() public onPageTextControlKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' && event.target instanceof HTMLElement) {
            event.target.blur();
        }
    }

    /**
     * Set the default value and observe the control that defines the current page number.
     */
    private bindPageControl(): void {
        const control: FormControl = this.form.get('page');

        control.setValue(this.vm.pagination.page);
        this.unsubscribeCallbacks.push(control.onStateChanged((event: StateChangedFormEvent) => {
            if (event.state === BasicState.Focused && !event.newValue && event.source.value) {
                this.vm.pagination.goTo(ensureInteger(event.source.value));
            }
        }));
        this.unsubscribeCallbacks.push(control.onBeforeValueChange((event: BeforeValueChangeFormEvent) => {
            event.newValue = String(event.newValue).replace(/\s*/, '');
            if (event.newValue) {
                if (!String(event.newValue).match(/^[0-9]+$/)) {
                    event.refuse();
                } else {
                    event.newValue = Math.max(1, ensureInteger(event.newValue));
                    if (this.vm.pagination.currentState) {
                        event.newValue = Math.min(event.newValue, this.vm.pagination.currentState.totalPagesCount);
                    }
                    if (event.newValue === event.source.value) {
                        event.refuse();
                    }
                }
            }
        }));
    }

    /**
     * Set the default value and observe the control that defines the number of items per page.
     */
    private bindItemsPerPageControl(): void {
        const control: FormControl = this.form.get('itemsPerPage');

        control.setValue(this.vm.pagination.itemsPerPage);
        this.unsubscribeCallbacks.push(control.onValueChanged((event: ValueChangedFormEvent) => {
            this.vm.pagination.itemsPerPage = ensureInteger(event.newValue);
        }));
    }

    /**
     * Observe external updates and act accordingly.
     */
    private observeUpdates(): void {
        this.unsubscribeCallbacks.push(this.vm.localDispatcher.subscribe(TableEvents.UpdateView, () => {
            this.$forceUpdate();
        }));
        this.unsubscribeCallbacks.push(this.vm.pagination.onChange(proxy(this.syncForm, this)));
        this.unsubscribeCallbacks.push(this.vm.pagination.onInvalidate(proxy(this.syncForm, this)));
    }

    /**
     * Synchronize the value of the form with the current state of the pagination.
     */
    private syncForm(): void {
        this.form.get('page').setValue(this.vm.pagination.page);
        this.form.get('itemsPerPage').setValue(this.vm.pagination.itemsPerPage);
    }
}
</script>
