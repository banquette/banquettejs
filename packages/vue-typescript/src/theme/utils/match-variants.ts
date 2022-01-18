import { arrayIntersect } from "@banquette/utils-array/array-intersect";
import { isFunction } from "@banquette/utils-type/is-function";
import { Primitive } from "@banquette/utils-type/types";
import { DecoratorsDataInterface } from "../../decorator/decorators-data.interface";
import { getDecoratorsData } from "../../utils/get-decorators-data";
import { isDecorated } from "../../utils/is-decorated";
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
            let $parentInst = componentInst.$parent;
            while ($parentInst && $parentInst.constructor && $parentInst.constructor.prototype) {
                if (isDecorated($parentInst.constructor.prototype)) {
                    const decoratorsData: DecoratorsDataInterface = getDecoratorsData($parentInst.constructor.prototype);

                    // Check parent name
                    if (parentSelectorCandidate.name !== decoratorsData.component.name) {
                        $parentInst = $parentInst.$parent;
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
                        $parentInst = $parentInst.$parent;
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
