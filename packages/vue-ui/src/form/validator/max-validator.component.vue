<script lang="ts">
import { Max, ValidatorInterface } from "@banquette/validation";
import { Component, Prop } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-max')
export default class BtValidateMax extends BtValidator {
    @Prop({type: Number, required: true}) public count!: number;
    @Prop({type: String, default: 'auto', transform: (value) => {
        if (['string', 'number', 'auto'].indexOf(value) < 0) {
            return 'auto';
        }
        return value;
    }}) public treatAs!: 'string'|'number'|'auto';

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Max(this.count, {treatAs: this.treatAs, message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
