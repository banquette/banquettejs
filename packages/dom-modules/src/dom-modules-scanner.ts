import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { InjectableMetadataInterface } from "@banquette/dependency-injection/injectable-metadata.interface";
import { Injector } from "@banquette/dependency-injection/injector";
import { MetadataContainer } from "@banquette/dependency-injection/metadata.container";
import { ExceptionFactory } from "@banquette/exception/exception.factory";
import { UsageException } from "@banquette/exception/usage.exception";
import { camelCase } from "@banquette/utils-string/case/camel-case";
import { kebabCase } from "@banquette/utils-string/case/kebab-case";
import { trim } from "@banquette/utils-string/format/trim";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { AbstractDomModule } from "./abstract.dom-module";
import { DomModuleConstructor, ModuleInjectorTag, MODULE_NAME_CTOR_ATTR } from "./constant";

/**
 * Manages modules created using [dom-*] attributes in the DOM.
 */
@Service()
export class DomModulesScanner {
    private static MODULES_HTML_ATTRIBUTES_PREFIX = "dom-";

    /**
     * List of attributes selectors with the symbol of their associated module.
     */
    private modulesAttributeSelectors: {[key: string]: DomModuleConstructor}|null = null;

    /**
     * Map DOM elements to their associated DomModule instances.
     */
    private existingModules: WeakMap<HTMLElement, Record<string, AbstractDomModule>> = new WeakMap<HTMLElement, Record<string, AbstractDomModule>>();

    /**
     * Scan the DOM in the search of [dom-*] attributes and create the corresponding modules.
     */
    public scan(): void {
        const that = this;
        if (this.modulesAttributeSelectors === null) {
            this.modulesAttributeSelectors = this.computeModulesAttributeSelectors();
        }
        for (const selector of Object.keys(this.modulesAttributeSelectors)) {
            document.querySelectorAll(`[${selector}]`).forEach((function(attrName: string, moduleCtor: DomModuleConstructor) {
                return function (element: Element) {
                    if (!(element instanceof HTMLElement)) {
                        return ;
                    }
                    let attrValue: string|null = element.getAttribute(attrName);
                    if (attrValue !== null) {
                        attrValue = trim(attrValue);
                    }
                    const dataName = camelCase(attrName);
                    const moduleInstance: AbstractDomModule = Injector.Get(moduleCtor as Constructor<any>);
                    let options: any = {};

                    let existingModules = that.existingModules.get(element);
                    if (isNullOrUndefined(existingModules)) {
                        existingModules = {};
                        that.existingModules.set(element, existingModules);
                    }
                    if (!isUndefined(existingModules[attrName])) {
                        throw new UsageException(`Multiple initialization of the jQuery module "${moduleCtor[MODULE_NAME_CTOR_ATTR]}".`);
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
                                    `Failed to decode options of the jQuery module "${moduleCtor[MODULE_NAME_CTOR_ATTR]}". `+
                                    `Please provide a valid JSON object.`,
                                    ExceptionFactory.EnsureException(e)
                                );
                            }
                        } else {
                            const defaultOptionName: string|null = moduleInstance.getDefaultOptionName();
                            if (defaultOptionName === null) {
                                throw new UsageException(`No default option name has been defined for the jQuery module "${moduleCtor[MODULE_NAME_CTOR_ATTR]}".`);
                            }
                            options[defaultOptionName] = attrValue;
                        }
                    }
                    element.removeAttribute(attrName);
                    moduleInstance.setElement(element);
                    moduleInstance.initialize(options);
                    existingModules[dataName] = moduleInstance;
                };
            })(selector, this.modulesAttributeSelectors[selector]));
        }
    }

    /**
     * Create an object containing:
     *   - as key: an HTML attribute
     *   - as value: the constructor of the module that should be created if the HTML attribute is found.
     *
     * @returns {object}
     */
    private computeModulesAttributeSelectors(): {[key: string]: DomModuleConstructor} {
        const output: {[key: string]: DomModuleConstructor} = {};
        const metadata: InjectableMetadataInterface[] = MetadataContainer.GetForTag(ModuleInjectorTag);
        const ctors: DomModuleConstructor[] = metadata.reduce((acc: DomModuleConstructor[], item: InjectableMetadataInterface) => {
            if (item.tags.indexOf(ModuleInjectorTag) > -1 && !isUndefined((item.ctor as any)[MODULE_NAME_CTOR_ATTR])) {
                acc.push(item.ctor as DomModuleConstructor);
            }
            return acc;
        }, []);
        for (const ctor of ctors) {
            const attrName: string = DomModulesScanner.MODULES_HTML_ATTRIBUTES_PREFIX + kebabCase(ctor[MODULE_NAME_CTOR_ATTR]);
            output[attrName] = ctor;
        }
        return output;
    }
}
