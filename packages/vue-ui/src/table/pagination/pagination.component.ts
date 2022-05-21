import { BasicState } from "@banquette/form/constant";
import { BeforeValueChangeFormEvent } from "@banquette/form/event/before-value-change.form-event";
import { StateChangedFormEvent } from "@banquette/form/event/state-changed.form-event";
import { ValueChangedFormEvent } from "@banquette/form/event/value-changed.form-event";
import { FormControl } from "@banquette/form/form-control";
import { FormObject } from "@banquette/form/form-object";
import { FormFactory } from "@banquette/form/form.factory";
import { TableEvents } from "@banquette/ui/table/constant";
import { PaginationStrategy } from "@banquette/ui/table/pagination/constant";
import { TableViewModel } from "@banquette/ui/table/table-view-model";
import { proxy } from "@banquette/utils-misc/proxy";
import { ensureInteger } from "@banquette/utils-type/ensure-integer";
import { GenericCallback } from "@banquette/utils-type/types";
import { IconMaterialKeyboardBackspace } from "@banquette/vue-icons/material/keyboard-backspace";
import { IconMaterialChevronLeft } from "@banquette/vue-icons/material/chevron-left";
import { IconMaterialChevronRight } from "@banquette/vue-icons/material/chevron-right";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { SelectComponent } from "../../form/select";
import { TextComponent } from "../../form/text";

@Component({
    name: 'bt-table-pagination',
    components: [TextComponent, SelectComponent, IconMaterialChevronRight, IconMaterialChevronLeft, IconMaterialKeyboardBackspace],
})
export default class PaginationComponent extends Vue {
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
