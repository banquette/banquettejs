<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-download-fill')
export default class IconRemixDownloadFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 1 18 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z"/></svg></span>
</template>