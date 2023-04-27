<script lang="ts">
import { SameAs } from "@banquette/validation";
import { ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-same-as')
export default class BtValidateSameAs extends BtValidator {
    @Prop({type: String, required: true}) public path!: string;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return SameAs(this.path, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
