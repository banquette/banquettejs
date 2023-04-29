<script lang="ts">
import { Equal, ValidatorInterface } from "@banquette/validation";
import { Component, Prop } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-equal')
export default class BtValidateEqual extends BtValidator {
    @Prop({required: true}) public value!: any;
    @Prop({type: Boolean, default: true}) public strict!: boolean;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Equal(this.value, this.strict, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
