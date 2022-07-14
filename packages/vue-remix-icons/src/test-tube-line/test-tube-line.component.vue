<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-test-tube-line')
export default class IconRemixTestTubeLine {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '7 2 10 20' : '0 0 24 24'"><path d="M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2h10zm-3 8h-4v8a2 2 0 1 0 4 0v-8zm-1 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3-8h-4v4h4V4z"/></svg>
</template>