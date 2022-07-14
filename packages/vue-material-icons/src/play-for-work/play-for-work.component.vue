<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-play-for-work')
export default class IconMaterialPlayForWork {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '6.09 5 11.82 15' : '0 0 24 24'"><path d="M11 6v4.59H8.71c-.45 0-.67.54-.35.85l3.29 3.29c.2.2.51.2.71 0l3.29-3.29a.5.5 0 0 0-.35-.85H13V6c0-.55-.45-1-1-1s-1 .45-1 1zm-3.9 8c-.61 0-1.11.55-.99 1.15C6.65 17.91 9.08 20 12 20s5.35-2.09 5.89-4.85c.12-.6-.38-1.15-.99-1.15-.49 0-.88.35-.98.83C15.53 16.64 13.93 18 12 18s-3.53-1.36-3.91-3.17c-.1-.48-.5-.83-.99-.83z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '6 5 12 15' : '0 0 24 24'"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/></svg>
</template>