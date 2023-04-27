<script lang="ts">
import { Or } from "@banquette/validation";
import { Valid } from "@banquette/validation";
import { ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { Render } from "@banquette/vue-typescript";
import { VNodeChild } from "@vue/runtime-core";
import { renderSlot } from "vue";
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

    @Render() public render(context: any): VNodeChild {
        return renderSlot(context.$slots, 'default');
    }
}
</script>
<template></template>
