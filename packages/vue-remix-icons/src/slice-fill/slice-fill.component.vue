<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-slice-fill')
export default class IconRemixSliceFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.1 4.1 17.68 15.73' : '0 0 24 24'"><path d="m13.768 12.232 2.121 2.122c-4.596 4.596-10.253 6.01-13.788 5.303L17.657 4.1l2.121 2.12-6.01 6.011z"/></svg>
</template>