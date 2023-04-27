import { arrayIntersect } from "@banquette/utils-array";
import { isFunction, Primitive } from "@banquette/utils-type";
import { ComponentMetadataInterface } from "../../decorator/component-metadata.interface";
import { maybeResolveTsInst } from "../../utils/converters";
import { getOrCreateComponentMetadata } from "../../utils/get-or-create-component-metadata";
import { isDecoratedComponentConstructor } from "../../utils/guards";
import { VariantWildcard, PropCallback, AttrCallback } from "../constant";
import { VariantSelectorCandidateInterface } from "../variant-selector-candidate.interface";
import { VueThemeVariant } from "../vue-theme-variant";
import { splitVariantString } from "./split-variant-string";

function matchVariantSelector(selector: VariantSelectorCandidateInterface,
                              expectedVariants: string[],
                              actualVariants: string[],
                              expectedProps: Record<string, Primitive|PropCallback>|null,
                              expectedAttrs: Record<string, Primitive|AttrCallback>|null,
                              componentInst: any): boolean {

    // Variant
    if (expectedVariants.length > 0) {
        if (arrayIntersect(expectedVariants, actualVariants).length !== expectedVariants.length) {
            return false;
        }
    }

    // Props
    if (expectedProps !== null) {
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
    }

    // Attrs
    if (expectedAttrs !== null && componentInst.$el) {
        const $el = componentInst.$el;
        for (const key of Object.keys(expectedAttrs)) {
            const candidate = expectedAttrs[key];
            const attrValue: any = $el.getAttribute(key);
            if (isFunction(candidate)) {
                if (!candidate(attrValue)) {
                    return false;
                }
            } else if (expectedAttrs[key] !== attrValue) {
                return false;
            }
        }
    }

    // Parent
    if (selector.parents.length > 0) {
        for (const parentSelectorCandidate of selector.parents) {
            let $parent = componentInst.$resolvedParent;
            while ($parent) {
                const $parentInst: any = maybeResolveTsInst($parent);
                if ($parentInst.constructor && $parentInst.constructor.prototype && isDecoratedComponentConstructor($parentInst.constructor)) {
                    const decoratorsData: ComponentMetadataInterface = getOrCreateComponentMetadata($parentInst.constructor.prototype);

                    // Check parent name
                    if (parentSelectorCandidate.name === decoratorsData.component.name) {
                        const parentCandidateVariants = parentSelectorCandidate.variants.filter((i) => i !== VariantWildcard);
                        const parentExpectedVariants = decoratorsData.themeable !== null ?
                            splitVariantString($parentInst[decoratorsData.themeable.prop] || '') :
                            [];
                        if (matchVariantSelector(
                            parentSelectorCandidate,
                            parentCandidateVariants,
                            parentExpectedVariants,
                            parentSelectorCandidate.props,
                            parentSelectorCandidate.attrs,
                            $parentInst
                        )) {
                            return true;
                        }
                    }
                }
                $parent = $parent.$parent;
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
            selectorCandidate.attrs,
            componentInst
        )) {
            return true;
        }
    }
    return false;
}
