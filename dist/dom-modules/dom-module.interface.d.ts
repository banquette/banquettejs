import { Pojo } from "@banquette/utils-type/types";
export interface DomModuleInterface {
    /**
     * Sets the HTML element associated with the module.
     */
    setElement(element: HTMLElement): void;
    /**
     * Initialize the module.
     */
    initialize(options: Pojo): void;
    /**
     * Get the name of the option to use when a scalar value is passed
     * to the html attribute, like: dom-my-module="2".
     */
    getDefaultOptionName(): string | null;
}
