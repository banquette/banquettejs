<script lang="ts">
import { NotEmpty, ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-not-empty')
export default class BtValidateNotEmpty extends BtValidator {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return NotEmpty({message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
