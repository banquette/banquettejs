import { ControlViewDataInterface } from "./control-view-data.interface";
/**
 * View data of the base headless view model of form components.
 */
export interface HeadlessControlViewDataInterface<ValueType = any> {
    /**
     * The view data object of the headless control module.
     */
    control: ControlViewDataInterface<ValueType>;
}
