<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-star-half-s-fill')
export default class IconRemixStarHalfSFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2.49 2.5 19.02 18.09' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m12 14.656 2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708v6.948zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z"/></svg></span>
</template>