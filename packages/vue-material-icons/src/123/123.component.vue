<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-123')
export default class IconMaterial123 {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 9 15.5 6' : '0 0 24 24'"><path d="M7 15H5.5v-4.5H4V9h3v6zm6.5-1.5h-3v-1h3V9H9v1.5h3v1H9V15h4.5v-1.5zm6 1.5V9H15v1.5h3v1h-2v1h2v1h-3V15h4.5z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 9 15.5 6' : '0 0 24 24'"><path d="M4.75 10.5c-.41 0-.75-.34-.75-.75S4.34 9 4.75 9H6c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10.5h-.75zm5-1.5c-.41 0-.75.34-.75.75s.34.75.75.75H12v1h-2c-.55 0-1 .45-1 1V14c0 .55.45 1 1 1h2.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H10.5v-1h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H9.75zm8.75 6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2.75c-.41 0-.75.34-.75.75s.34.75.75.75H18v1h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5H18v1h-2.25c-.41 0-.75.34-.75.75s.34.75.75.75h2.75z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 9 15.5 6' : '0 0 24 24'"><path d="M7 15H5.5v-4.5H4V9h3v6zm6.5-1.5h-3v-1h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H9v1.5h3v1h-2c-.55 0-1 .45-1 1V15h4.5v-1.5zm6 .5v-4c0-.55-.45-1-1-1H15v1.5h3v1h-2v1h2v1h-3V15h3.5c.55 0 1-.45 1-1z"/></svg>
</template>