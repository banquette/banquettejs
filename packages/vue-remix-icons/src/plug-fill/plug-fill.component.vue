<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-plug-fill')
export default class IconRemixPlugFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4v-4h16v4a4 4 0 0 1-4 4h-3zm3-12h3a1 1 0 0 1 1 1v2H4V7a1 1 0 0 1 1-1h3V2h2v4h4V2h2v4zm-4 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
</template>