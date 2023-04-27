<script lang="ts">
import { NotEqual } from "@banquette/validation";
import { ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-not-equal')
export default class BtValidateNotEqual extends BtValidator {
    @Prop({required: true}) public value!: any;
    @Prop({type: Boolean, default: true}) public strict!: boolean;
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return NotEqual(this.value, this.strict, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
