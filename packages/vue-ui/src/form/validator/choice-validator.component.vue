<script lang="ts">
import { ensureArray } from "@banquette/utils-type";
import { Choice } from "@banquette/validation";
import { ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-choice')
export default class BtValidateChoice extends BtValidator {
    @Prop({type: Array, required: true, transform: (value) => ensureArray(value)}) public choices!: any[];

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Choice(this.choices, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
