import { DECORATORS_OPTIONS_HOLDER_NAME } from "../constants";
import { DecoratorsDataInterface } from "../decorator/decorators-data.interface";
import { DecoratedConstructor } from "../type";
import { isDecorated } from "./is-decorated";

/**
 * Get or create the object used to store decorators' data.
 */
export function getDecoratorsData(prototype: any | DecoratedConstructor): DecoratorsDataInterface {
    if (!isDecorated(prototype)) {
        Object.defineProperty(prototype, DECORATORS_OPTIONS_HOLDER_NAME, {
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
            } as Partial<DecoratorsDataInterface>
        });
    }
    return (prototype as DecoratedConstructor)[DECORATORS_OPTIONS_HOLDER_NAME];
}
