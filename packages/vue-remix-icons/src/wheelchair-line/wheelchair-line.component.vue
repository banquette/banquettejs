<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-wheelchair-line')
export default class IconRemixWheelchairLine {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16.86 20' : '0 0 24 24'"><path d="M8 10.341v2.194A3.999 3.999 0 1 0 13.465 18h2.193A6.002 6.002 0 0 1 4 16a6.003 6.003 0 0 1 4-5.659zM12 17a3 3 0 0 1-3-3v-4c0-1.044.534-1.964 1.343-2.501a3 3 0 1 1 3.314.002A2.99 2.99 0 0 1 15 10v4.999l1.434.001a2 2 0 0 1 1.626.836l.089.135 2.708 4.515-1.714 1.028L16.433 17 15 16.999 12 17zm0-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.999L13 10a1 1 0 0 0-1-1zm0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
</template>