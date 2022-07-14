<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-collage-fill')
export default class IconRemixCollageFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path d="M11.189 13.157 12.57 21H4a1 1 0 0 1-1-1v-5.398l8.189-1.445zM20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5.398L11.428 3H20zM9.397 3l1.444 8.188L3 12.57V4a1 1 0 0 1 1-1h5.397z"/></svg>
</template>