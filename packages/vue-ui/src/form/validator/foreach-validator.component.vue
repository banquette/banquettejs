<script lang="ts">
import { UsageException } from "@banquette/exception";
import { Foreach } from "@banquette/validation";
import { Valid } from "@banquette/validation";
import { ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { Render } from "@banquette/vue-typescript";
import { VNodeChild } from "@vue/runtime-core";
import { renderSlot } from "vue";
import { BtContainerValidator } from "./container-validator.component";

@Component('bt-validate-foreach')
export default class BtValidateForeach extends BtContainerValidator {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        const children: ValidatorInterface[] = this.children;
        if (children.length > 1) {
            throw new UsageException(`"validate-foreach" can only have 1 child.`);
        }
        if (children.length > 0) {
            return Foreach(children[0]);
        }
        return Valid();
    }

    @Render() public render(context: any): VNodeChild {
        return renderSlot(context.$slots, 'default');
    }
}
</script>
<template></template>
