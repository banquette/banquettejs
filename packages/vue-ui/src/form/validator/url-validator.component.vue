<script lang="ts">
import { Url, ValidatorInterface } from "@banquette/validation";
import { Component } from "@banquette/vue-typescript";
import { BtValidator } from "./validator.component";

@Component('bt-validate-url')
export default class BtValidateUrl extends BtValidator {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Url({message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
</script>
<template></template>
