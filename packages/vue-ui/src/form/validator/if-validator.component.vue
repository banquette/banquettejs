<script lang="ts">
import { UsageException } from "@banquette/exception";
import { If, Valid, ValidatorInterface } from "@banquette/validation";
import { Component, Prop, Render } from "@banquette/vue-typescript";
import { VNodeChild } from "@vue/runtime-core";
import { renderSlot } from "vue";
import { BtContainerValidator } from "./container-validator.component";

@Component('bt-validate-if')
export default class BtValidateIf extends BtContainerValidator {
    @Prop({type: Function, required: true}) public condition!: () => boolean;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        const children: ValidatorInterface[] = this.children;
        if (children.length > 1) {
            throw new UsageException(`"validate-if" can only have 1 child.`);
        }
        if (children.length > 0) {
            return If(this.condition, children[0]);
        }
        return Valid();
    }

    @Render() public render(context: any): VNodeChild {
        return renderSlot(context.$slots, 'default');
    }
}
</script>
<template></template>
