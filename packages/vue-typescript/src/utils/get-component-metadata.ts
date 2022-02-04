import { isConstructor } from "@banquette/utils-type/is-constructor";
import { DECORATORS_OPTIONS_HOLDER_NAME } from "../constants";
import { ComponentMetadataInterface } from "../decorator/component-metadata.interface";

/**
 * Get the object used to store the metadata defined through components' decorators, or return null if none is found.
 */
export function getComponentMetadata(ctorOrPrototype: any): ComponentMetadataInterface|null {
    if (isConstructor(ctorOrPrototype)) {
        ctorOrPrototype = ctorOrPrototype.prototype;
    }
    return ctorOrPrototype[DECORATORS_OPTIONS_HOLDER_NAME] || null;
}
