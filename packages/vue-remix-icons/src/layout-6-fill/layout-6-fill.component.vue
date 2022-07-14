<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-layout-6-fill')
export default class IconRemixLayout6Fill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 3 20 18' : '0 0 24 24'"><path d="M15 10v11H3a1 1 0 0 1-1-1V10h13zm7 0v10a1 1 0 0 1-1 1h-4V10h5zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1h18z"/></svg>
</template>