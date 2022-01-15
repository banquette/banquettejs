import { isUndefined } from "@banquette/utils-type/is-undefined";
import { VariantMetadataInterface } from "../variant-metadata.interface";
import { VueThemeVariant } from "../vue-theme-variant";

const variantsMetadata: WeakMap<VueThemeVariant, VariantMetadataInterface> = new WeakMap<VueThemeVariant, VariantMetadataInterface>();

/**
 * Get or create the metadata object of a variant.
 */
export function getVariantMetadata(variant: VueThemeVariant): VariantMetadataInterface {
    let metadata = variantsMetadata.get(variant);
    if (isUndefined(metadata)) {
        metadata = {useCount: 0, stylesEl: null, invalidated: false};
        variantsMetadata.set(variant, metadata);
    }
    return metadata;
}
