<script lang="ts">
import { Or, Valid, ValidatorInterface } from "@banquette/validation";
import { Component, Render } from "@banquette/vue-typescript";
import {renderSlot, VNode} from "vue";
import { BtContainerValidator } from "./container-validator.component";

@Component('bt-validate-or')
export default class BtValidateOr extends BtContainerValidator {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        const children: ValidatorInterface[] = this.children;
        if (children.length > 0) {
            return Or.apply(null, children);
        }
        return Valid();
    }

    @Render() public render(context: any): VNode {
        return renderSlot(context.$slots, 'default');
    }
}
</script>
<template></template>
