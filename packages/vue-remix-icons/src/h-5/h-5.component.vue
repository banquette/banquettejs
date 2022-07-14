<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-h-5')
export default class IconRemixH5 {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 4 20.25 16.5' : '0 0 24 24'"><path d="M22 8v2h-4.323l-.464 2.636A3.999 3.999 0 0 1 22.25 16.5a4.001 4.001 0 0 1-7.846 1.103l1.923-.551a2.002 2.002 0 0 0 3.923-.552 2 2 0 0 0-3.56-1.252l-1.81-.904L16 8h6zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"/></svg>
</template>