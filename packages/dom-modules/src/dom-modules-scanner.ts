import { ExceptionFactory, Injector, UsageException } from "@banquette/core";
import { camelCase, getSymbolDescription, isNullOrUndefined, isUndefined, kebabCase, trim } from "@banquette/utils";
import { injectable } from "inversify";
import { DomModule } from "./dom-module";
import { DomModuleDataInterface } from "./dom-module-data.interface";

/**
 * Manages modules created using [dom-*] attributes in the DOM.
 */
@injectable()
export class DomModulesScanner {
    private static MODULES_HTML_ATTRIBUTES_PREFIX = "dom-";

    /**
     * List of attributes selectors with the symbol of their associated module.
     */
    private modulesAttributeSelectors: {[key: string]: symbol}|null = null;

    /**
     * List of instantiated modules.
     */
    private modules: DomModuleDataInterface[] = [];

    /**
     * Map DOM elements to their associated DomModule instances.
     */
    private existingModules: WeakMap<HTMLElement, Record<string, DomModule>> = new WeakMap<HTMLElement, Record<string, DomModule>>();

    /**
     * Scan the DOM in the search of [dom-*] attributes and create the corresponding modules.
     */
    public scan(): void {
        const that = this;
        if (this.modulesAttributeSelectors === null) {
            this.modulesAttributeSelectors = this.computeModulesAttributeSelectors();
        }
        for (const selector in this.modulesAttributeSelectors) {
            if (!this.modulesAttributeSelectors.hasOwnProperty(selector)) {
                continue ;
            }
            document.querySelectorAll(`[${selector}]`).forEach((function(attrName: string, moduleSymbol: symbol) {
                return function (element: Element) {
                    if (!(element instanceof HTMLElement)) {
                        return ;
                    }
                    let attrValue: string|null = element.getAttribute(attrName);
                    if (attrValue !== null) {
                        attrValue = trim(attrValue);
                    }
                    const dataName = camelCase(attrName);
                    const moduleInstance: DomModule = Injector.Get<DomModule>(moduleSymbol);
                    let options: any = {};

                    let existingModules = that.existingModules.get(element);
                    if (isNullOrUndefined(existingModules)) {
                        existingModules = {};
                        that.existingModules.set(element, existingModules);
                    }
                    if (!isUndefined(existingModules[attrName])) {
                        throw new UsageException(`Multiple initialization of the jQuery module "${getSymbolDescription(moduleSymbol)}".`);
                    }
                    if (attrValue) {
                        if (attrValue[0] === "{") {
                            try {
                                options = JSON.parse(attrValue);
                                if (typeof (options) !== "object") {
                                    options = {};
                                }
                            } catch (e) {
                                throw new UsageException(
                                    `Failed to decode options of the jQuery module "${getSymbolDescription(moduleSymbol)}". `+
                                    `Please provide a valid JSON object.`,
                                    ExceptionFactory.EnsureException(e)
                                );
                            }
                        } else {
                            const defaultOptionName: string|null = moduleInstance.getDefaultOptionName();
                            if (defaultOptionName === null) {
                                throw new UsageException(`No default option name has been defined for the jQuery module "${getSymbolDescription(moduleSymbol)}".`);
                            }
                            options[defaultOptionName] = attrValue;
                        }
                    }
                    element.removeAttribute(attrName);
                    moduleInstance.setElement(element);
                    moduleInstance.initialize(options);
                    existingModules[dataName] = moduleInstance;
                    that.modules.push({
                        element: element,
                        dataName,
                        instance: moduleInstance,
                        selector: attrName,
                        symbol: moduleSymbol,
                    });
                };
            })(selector, this.modulesAttributeSelectors[selector]));
        }
    }

    /**
     * Create an object containing:
     *   - as key: an HTML attribute
     *   - as value: the symbol corresponding to the module that should be created if the HTML attribute is found.
     *
     * @returns {object}
     */
    private computeModulesAttributeSelectors(): {[key: string]: symbol} {
        const output: {[key: string]: symbol} = {};
        const symbols: symbol[] = Injector.GetModulesSymbols();
        for (const item of symbols) {
            const attrName: string = DomModulesScanner.MODULES_HTML_ATTRIBUTES_PREFIX + kebabCase(getSymbolDescription(item));
            output[attrName] = item;
        }
        return output;
    }
}

export const DomModulesScannerSymbol = Symbol("DomModulesScanner");
Injector.RegisterService(DomModulesScannerSymbol, DomModulesScanner);
