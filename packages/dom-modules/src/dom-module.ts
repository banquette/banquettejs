import { UsageException } from "@banquette/core";
import { areEqual, Pojo } from '@banquette/utils';
import { injectable } from "inversify";

@injectable()
export class DomModule {
    /**
     * Module options.
     */
    protected options: Pojo;

    /**
     * Reference on the DOM element the module is bound to.
     */
    protected element!: HTMLElement;

    /**
     * Queue of deferred objects waiting for the component to be ready.
     */
    private ready: boolean = false;
    private onReadyPromise: Promise<void>|null = null;
    private onReadyPromiseResolve: (() => void)|null = null;

    public constructor() {
        this.options = this.getDefaultOptions();
    }

    /**
     * Gets the jQuery element associated with the module.
     *
     * @returns jQuery
     */
    public getElement(): HTMLElement {
        return this.element;
    }

    /**
     * Sets the jQuery element associated with the module.
     */
    public setElement(element: HTMLElement): void {
        this.element = element;
    }

    /**
     * Initialize the module.
     */
    /* final */ public initialize(options?: Pojo): void {
        this.setOptions(options || {});
        Promise.all([this.doInit()]).then(() => {
            if (this.onReadyPromiseResolve !== null) {
                this.onReadyPromiseResolve();
                this.onReadyPromiseResolve = null;
            }
            this.ready = true;
            this.afterInit();
        });
    }

    /**
     * Call the promise when the component has been initialized.
     */
    public onReady(): Promise<void> {
        if (this.onReadyPromise === null) {
            this.onReadyPromise = new Promise((resolve) => {
                this.onReadyPromiseResolve = resolve;
            });
            if (this.isReady() && this.onReadyPromiseResolve !== null) {
                this.onReadyPromiseResolve();
            }
        }
        return this.onReadyPromise;
    }

    /**
     * Test if the module is ready to be used.
     *
     * @returns {boolean}
     */
    public isReady(): boolean {
        return this.ready;
    }

    /**
     * Gets an option by name.
     */
    public getOption(name: string, defaultValue: any = null): any {
        if (this.hasOption(name)) {
            return this.options[name];
        }
        return defaultValue;
    }

    /**
     * Sets an option by name.
     */
    public setOption(name: string, value: any): void {
        const hasOption: boolean = this.hasOption(name);
        const oldValue: any = hasOption ? this.options[name] : null;
        this.options[name] = value;
        if (this.isReady() && hasOption && !areEqual(oldValue, value)) {
            this.onOptionChange(name, oldValue, value);
        }
    }

    /**
     * Merge an object of options into the internal one.
     *
     * @param {object}  options
     * @param {boolean} clearOther (optional, default: false) if true, the internal object is cleared before setting new options.
     *                  By default, new options are merged with existing ones.
     */
    public setOptions(options: {[key: string]: any}, clearOther: boolean = false): void {
        if (clearOther) {
            this.options = {};
        }
        for (const name in options) {
            if (options.hasOwnProperty(name)) {
                this.setOption(name, options[name]);
            }
        }
    }

    /**
     * Tests if an option is defined.
     */
    public hasOption(name: string): boolean {
        return this.options[name] !== void 0;
    }

    /**
     * Get the name of the option to use when a scalar value is passed
     * to the html attribute, like: dom-my-module="2".
     */
    public getDefaultOptionName(): string|null {
        return null;
    }

    /**
     * Initialization method.
     */
    protected doInit(): any {
        if (!this.element) {
            throw new UsageException("You must set the root DOM element of a DOM plugin by calling setElement().");
        }
    }

    /**
     * Create DOM bindings.
     */
    protected bind(): void {
        // Override me
    }

    /**
     * Remove DOM bindings.
     */
    protected unbind(): void {
        // Override me
    }

    /**
     * Method called after the initialization is done.
     */
    protected afterInit(): void {
        this.bind();
    }

    /**
     * Gets the whole object of options.
     */
    protected getOptions(): any {
        return this.options;
    }

    /**
     * Called when the value of an option changes.
     * Note, this method is not called while the initialization is not finished.
     */
    protected onOptionChange(optionName: string, oldValue: any, newValue: any): void {
        // Override me
    }

    /**
     * Gets the default options object.
     * Override this to add custom options.
     */
    protected getDefaultOptions(): any {
        return {};
    }
}
