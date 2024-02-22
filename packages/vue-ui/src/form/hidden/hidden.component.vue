<script lang="ts">
import { HeadlessControlViewDataInterface, HeadlessControlViewModel } from "@banquette/ui";
import { Component } from "@banquette/vue-typescript";
import { BtAbstractVueForm } from "../abstract-vue-form.component";

@Component('bt-form-hidden')
export default class BtFormHidden extends BtAbstractVueForm<HeadlessControlViewDataInterface, HeadlessControlViewModel<HeadlessControlViewDataInterface>> {
    /**
     * @inheritDoc
     */
    protected setupViewModel(): HeadlessControlViewModel<HeadlessControlViewDataInterface> {
        return new HeadlessControlViewModel(this.proxy);
    }
}
</script>
<template></template>
