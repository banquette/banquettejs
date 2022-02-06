import { DECORATORS_METADATA } from "../constants";
import { ComponentMetadataInterface } from "../decorator/component-metadata.interface";

/**
 * Get or create the object used to store the metadata defined through components' decorators.
 */
export function getOrCreateComponentMetadata(prototype: any): ComponentMetadataInterface {
    if (!prototype.hasOwnProperty(DECORATORS_METADATA)) {
        Object.defineProperty(prototype, DECORATORS_METADATA, {
            configurable: true,
            enumerable: false,
            writable: false,
            value: {
                props: {},
                computed: {},
                reactive: [],
                exposed: {},
                hooks: {},
                watch: [],
                imports: {},
                templateRefs: {},
                provided: {},
                injected: {},
                renderMethod: null,
                themeable: null,
                themeVars: {}
            } as Partial<ComponentMetadataInterface>
        });
    }
    return prototype[DECORATORS_METADATA];
}
