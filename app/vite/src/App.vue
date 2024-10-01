<script lang="ts">
import { markRaw } from "vue";
import { Component, Expose } from '@banquette/vue-typescript';
import { IRemixAccountCircle } from "@banquette/vue-remix-icons";
import { IMaterial3dRotation } from "@banquette/vue-material-icons";
import { BtButton, BtFormText, BtFormTiptap, BtFormTiptapUnderline, TiptapConfigurationInterface } from '@banquette/vue-ui';

import '@banquette/vue-ui/themes/default';
import { TiptapPresets } from "./tiptap-presets";

@Component({
    components: [BtButton, BtFormText, IMaterial3dRotation, IRemixAccountCircle, BtFormTiptap]
})
export default class App {
    @Expose() public value: string = '';
    @Expose() public tiptapConf: TiptapConfigurationInterface = TiptapPresets.default;
}
</script>

<template>
    <i-material-3d-rotation></i-material-3d-rotation>
    <i-remix-account-circle></i-remix-account-circle>
    <div class="hello">Hello World!</div>
    <bt-button>Test button</bt-button>
    <bt-form-text v-model="value">Test form text</bt-form-text>

    <bt-form-tiptap v-model="value" :conf="tiptapConf"></bt-form-tiptap>
</template>

<style scoped>
.hello {
    color: blue;
    font-size: 2rem;
}
</style>
