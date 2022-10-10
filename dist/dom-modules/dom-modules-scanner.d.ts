/**
 * Manages modules created using [dom-*] attributes in the DOM.
 */
export declare class DomModulesScannerService {
    private static MODULES_HTML_ATTRIBUTES_PREFIX;
    /**
     * List of attributes selectors with the symbol of their associated module.
     */
    private modulesAttributeSelectors;
    /**
     * Map DOM elements to their associated DomModule instances.
     */
    private existingModules;
    /**
     * Scan the DOM in the search of [dom-*] attributes and create the corresponding modules.
     */
    scan(): void;
    /**
     * Create an object containing:
     *   - as key: an HTML attribute
     *   - as value: the constructor of the module that should be created if the HTML attribute is found.
     *
     * @returns {object}
     */
    private computeModulesAttributeSelectors;
}
