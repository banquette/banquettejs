<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-south-america')
export default class IconMaterialSouthAmerica {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8zm9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07A7.971 7.971 0 0 1 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94z" opacity=".3"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8zm9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07A7.971 7.971 0 0 1 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8zm9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07A7.971 7.971 0 0 1 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94z"/></svg>
</template>