<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-fridge-fill')
export default class IconRemixFridgeFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 1 16 22' : '0 0 24 24'"><path d="M20 12v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V12h16zM9 14H7v5h2v-5zM19 1a1 1 0 0 1 1 1v8H4V2a1 1 0 0 1 1-1h14zM9 4H7v4h2V4z"/></svg>
</template>