<script lang="ts">
import {Callback, ValidatorInterface} from "@banquette/validation";
import { Component, Prop } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";
import {ValidationCallback} from "@banquette/validation";

@Component('bt-validate-callback')
export default class BtValidateCallback extends BtValidator {
    @Prop({type: Function, required: true}) public callback!: ValidationCallback;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Callback(this.callback, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
