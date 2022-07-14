<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-e-bike-2-fill')
export default class IconRemixEBike2Fill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 1 21 21' : '0 0 24 24'"><path d="M16 1a1 1 0 0 1 1 1v1h5v6h-2.019l2.746 7.545A4 4 0 1 1 15.126 19h-4.252a4.002 4.002 0 0 1-7.8-.226A2 2 0 0 1 2 17V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3h-3V1h4Zm3 15a2 2 0 1 0 1.88 1.316l-.016-.044A2 2 0 0 0 19 16ZM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2-8H4v2h5V8Zm11-3h-3v2h3V5Z"/></svg>
</template>