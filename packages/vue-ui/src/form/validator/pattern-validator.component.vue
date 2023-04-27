<script lang="ts">
import { Pattern } from "@banquette/validation";
import { ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-pattern')
export default class BtValidatePattern extends BtValidator {
    @Prop({type: String, required: true}) public pattern!: string;
    @Prop({type: String, default: undefined}) public flags?: string;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Pattern(new RegExp(this.pattern, this.flags), {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
