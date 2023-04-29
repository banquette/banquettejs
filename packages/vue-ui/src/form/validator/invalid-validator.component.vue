<script lang="ts">
import { Invalid, ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-invalid')
export default class BtValidateInvalid extends BtValidator {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Invalid({message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
