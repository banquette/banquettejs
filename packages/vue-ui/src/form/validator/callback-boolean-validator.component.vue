<script lang="ts">
import {CallbackBoolean, ValidationCallbackBoolean, ValidatorInterface} from "@banquette/validation";
import {Component, Prop} from "@banquette/vue-typescript";
import {BtValidator} from "./validator.component";

@Component('bt-validate-callback-boolean')
export default class BtValidateCallbackBoolean extends BtValidator {
    @Prop({type: Function, required: true}) public callback!: ValidationCallbackBoolean;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return CallbackBoolean(this.callback, {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
