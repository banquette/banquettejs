import { Pojo } from "@banquette/utils-type/types";
import { DomModuleInterface } from "./dom-module.interface";
export declare abstract class AbstractDomModule implements DomModuleInterface {
    /**
     * Module options.
     */
    protected options: Pojo;
    /**
     * Reference on the DOM element the module is bound to.
     */
    protected element: HTMLElement;
    /**
     * Queue of deferred objects waiting for the component to be ready.
     */
    private ready;
    private onReadyPromise;
    private onReadyPromiseResolve;
    constructor();
    /**
     * Gets the HTML element associated with the module.
     */
    getElement(): HTMLElement;
    /**
     * Sets the HTML element associated with the module.
     */
    setElement(element: HTMLElement): void;
    /**
     * Initialize the module.
     */
    initialize(options?: Pojo): void;
    /**
     * Call the promise when the component has been initialized.
     */
    onReady(): Promise<void>;
    /**
     * Test if the module is ready to be used.
     *
     * @returns {boolean}
     */
    isReady(): boolean;
    /**
     * Gets an option by name.
     */
    getOption(name: string, defaultValue?: any): any;
    /**
     * Sets an option by name.
     */
    setOption(name: string, value: any): void;
    /**
     * Merge an object of options into the internal one.
     *
     * @param {object}  options
     * @param {boolean} clearOther (optional, default: false) if true, the internal object is cleared before setting new options.
     *                  By default, new options are merged with existing ones.
     */
    setOptions(options: {
        [key: string]: any;
    }, clearOther?: boolean): void;
    /**
     * Tests if an option is defined.
     */
    hasOption(name: string): boolean;
    /**
     * Get the name of the option to use when a scalar value is passed
     * to the html attribute, like: dom-my-module="2".
     */
    getDefaultOptionName(): string | null;
    /**
     * Initialization method.
     */
    protected doInit(): any;
    /**
     * Create DOM bindings.
     */
    protected bind(): void;
    /**
     * Remove DOM bindings.
     */
    protected unbind(): void;
    /**
     * Method called after the initialization is done.
     */
    protected afterInit(): void;
    /**
     * Gets the whole object of options.
     */
    protected getOptions(): any;
    /**
     * Called when the value of an option changes.
     * Note, this method is not called while the initialization is not finished.
     */
    protected onOptionChange(optionName: string, oldValue: any, newValue: any): void;
    /**
     * Gets the default options object.
     * Override this to add custom options.
     */
    protected getDefaultOptions(): any;
}
