<script lang="ts">
import { Phone, ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-phone')
export default class BtValidatePhone extends BtValidator {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Phone({message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
