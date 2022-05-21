<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-mist-line')
export default class IconRemixMistLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 4 20 17' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 4h4v2H4V4zm12 15h4v2h-4v-2zM2 9h5v2H2V9zm7 0h3v2H9V9zm5 0h6v2h-6V9zM4 14h6v2H4v-2zm8 0h3v2h-3v-2zm5 0h5v2h-5v-2zM10 4h12v2H10V4zM2 19h12v2H2v-2z"/></svg></span>
</template>