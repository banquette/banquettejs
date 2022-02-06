import { arrayIntersect } from "@banquette/utils-array/array-intersect";
import { isFunction } from "@banquette/utils-type/is-function";
import { Primitive } from "@banquette/utils-type/types";
import { ComponentMetadataInterface } from "../../decorator/component-metadata.interface";
import { getOrCreateComponentMetadata } from "../../utils/get-or-create-component-metadata";
import { isDecoratedComponentConstructor } from "../../utils/guards";
import { VariantWildcard, PropCallback } from "../constant";
import { VariantSelectorCandidateInterface } from "../variant-selector-candidate.interface";
import { VueThemeVariant } from "../vue-theme-variant";
import { splitVariantString } from "./split-variant-string";

function matchVariantSelector(selector: VariantSelectorCandidateInterface,
                              expectedVariants: string[],
                              actualVariants: string[],
                              expectedProps: Record<string, Primitive|PropCallback>,
                              componentInst: any): boolean {

    // Variant
    if (expectedVariants.length > 0) {
        if (arrayIntersect(expectedVariants, actualVariants).length !== expectedVariants.length) {
            return false;
        }
    }

    // Props
    for (const key of Object.keys(expectedProps)) {
        const candidate = expectedProps[key];
        if (isFunction(candidate)) {
            if (!candidate(componentInst[key])) {
                return false;
            }
        } else if (expectedProps[key] !== componentInst[key]) {
            return false;
        }
    }

    // Parent
    if (selector.parents.length > 0) {
        for (const parentSelectorCandidate of selector.parents) {
            let $parentInst = componentInst.$resolvedParent;
            while ($parentInst && $parentInst.constructor && $parentInst.constructor.prototype) {
                if (isDecoratedComponentConstructor($parentInst.constructor)) {
                    const decoratorsData: ComponentMetadataInterface = getOrCreateComponentMetadata($parentInst.constructor.prototype);

                    // Check parent name
                    if (parentSelectorCandidate.name !== decoratorsData.component.name) {
                        $parentInst = $parentInst.$resolvedParent;
                        continue ;
                    }

                    const parentCandidateVariants = parentSelectorCandidate.variants.filter((i) => i !== VariantWildcard);
                    const parentExpectedVariants = decoratorsData.themeable !== null ?
                        splitVariantString($parentInst[decoratorsData.themeable.prop] || '') :
                        [];
                    if (!matchVariantSelector(
                        parentSelectorCandidate,
                        parentCandidateVariants,
                        parentExpectedVariants,
                        parentSelectorCandidate.props,
                        $parentInst
                    )) {
                        $parentInst = $parentInst.$resolvedParent;
                        continue ;
                    }
                    return true;
                }
            }
        }
        return false;
    }
    return true;
}

export function matchVariant(variant: VueThemeVariant, expectedVariants: string[], componentInst: any): boolean {
    for (const selectorCandidate of variant.selector.candidates) {
        const candidateVariants = selectorCandidate.variants.filter((i) => i !== VariantWildcard);

        if (matchVariantSelector(
            selectorCandidate,
            candidateVariants,
            expectedVariants,
            selectorCandidate.props,
            componentInst
        )) {
            return true;
        }
    }
    return false;
}
