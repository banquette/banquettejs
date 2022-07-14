<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-block-flipped')
export default class IconMaterialBlockFlipped {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10zM5.7 7.1l11.2 11.2c-1.3 1.1-3 1.7-4.9 1.7-4.4 0-8-3.6-8-8 0-1.9.6-3.6 1.7-4.9zM20 12c0 1.9-.6 3.6-1.7 4.9L7.1 5.7C8.4 4.6 10.1 4 12 4c4.4 0 8 3.6 8 8z"/></svg>
</template>