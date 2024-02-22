<script lang="ts">
import { UsageException } from "@banquette/exception";
import { Foreach, Valid, ValidatorInterface } from "@banquette/validation";
import { Component, Render } from "@banquette/vue-typescript";
import {renderSlot, VNode} from "vue";
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

    @Render() public render(context: any): VNode {
        return renderSlot(context.$slots, 'default');
    }
}
</script>
<template></template>
