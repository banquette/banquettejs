<script lang="ts">
import { ensureNumber } from "@banquette/utils-type";
import { Min } from "@banquette/validation";
import { ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-min')
export default class BtValidateMin extends BtValidator {
    @Prop({type: [Number, String], required: true, transform: (input: string|number) => ensureNumber(input)}) public count!: number;
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
        return Min(this.count, {treatAs: this.treatAs, message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
