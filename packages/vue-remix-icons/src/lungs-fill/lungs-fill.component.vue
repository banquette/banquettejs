<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-lungs-fill')
export default class IconRemixLungsFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 19' : '0 0 24 24'"><path d="M8.5 5.5c1.412.47 2.048 2.159 2.327 4.023l-4.523 2.611 1 1.732 3.71-2.141C11.06 13.079 11 14.308 11 15c0 3-1 6-5 6s-4 0-4-4C2 9.5 5.5 4.5 8.5 5.5zM22.001 17v.436c-.005 3.564-.15 3.564-4 3.564-4 0-5-3-5-6 0-.691-.06-1.92-.014-3.274l3.71 2.14 1-1.732-4.523-2.61c.279-1.865.915-3.553 2.327-4.024 3-1 6.5 4 6.5 11.5zM13 2v9h-2V2h2z"/></svg>
</template>