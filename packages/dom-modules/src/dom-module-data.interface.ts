import { DomModule } from "./dom-module";

export interface DomModuleDataInterface {
    /**
     * Root element of the module.
     */
    element: HTMLElement;

    /**
     * Instance of the module.
     */
    instance: DomModule;

    /**
     * Name of the module in the data object of $element.
     */
    dataName: string;

    /**
     * HTML 5 attribute selector for the module.
     */
    selector: string;

    /**
     * Unique symbol associated to the module type
     */
    symbol: symbol;
}
