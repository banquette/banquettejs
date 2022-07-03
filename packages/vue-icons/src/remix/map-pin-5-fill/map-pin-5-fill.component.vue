<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-map-pin-5-fill')
export default class IconRemixMapPin5Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '4 2 16 22' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17.657 15.657 12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0zM5 22h14v2H5v-2z"/></svg>
</template>