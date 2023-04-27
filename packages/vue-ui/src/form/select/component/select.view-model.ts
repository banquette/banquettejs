import { FormViewControlInterface } from "@banquette/form";
import { HeadlessSelectViewModel } from "@banquette/ui";
import { extend } from "@banquette/utils-object";
import { BaseInputComposable } from "../../base-input/base-input.composable";
import { SelectViewDataInterface } from "./select-view-data.interface";

export class SelectViewModel extends HeadlessSelectViewModel<SelectViewDataInterface> {
    public constructor(control: FormViewControlInterface, private base: BaseInputComposable) {
        super(control);
        const that = this;
        this.viewData.base = base.viewData;
        extend(this.viewData, {
            selected: {},
            selectedInPopover: [],
            selectedPopoverVisible: false,
            isHeightLocked: false,
            isInputReadonly: true,
            inputValue: '',
            inputPlaceholder: '',
            isInputFocused: false,
            get needsSelectionPopover() {
                return that.viewData.multiple && that.viewData.isHeightLocked;
            }
        });
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: SelectViewDataInterface): void {
        super.setViewData(viewData);
        this.base.setViewData(viewData.base);
    }
}
