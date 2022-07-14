<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-share-forward-2-fill')
export default class IconRemixShareForward2Fill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 19' : '0 0 24 24'"><path d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2v5zm8-9H9a5.992 5.992 0 0 0-4.854 2.473A8.003 8.003 0 0 1 12 6V2l8 6-8 6v-4z"/></svg>
</template>