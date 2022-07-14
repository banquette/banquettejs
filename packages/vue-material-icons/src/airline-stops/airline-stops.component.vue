<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-airline-stops')
export default class IconMaterialAirlineStops {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 5 19 14' : '0 0 24 24'"><path d="M15 18c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h1c-.47-4.21-3.89-7.55-8.12-7.96A.98.98 0 0 1 2 8.05c0-.59.52-1.06 1.11-1 3.92.39 7.26 2.82 8.89 6.25 1.13-2.43 2.99-4.25 4.78-5.52l-1.92-1.92c-.32-.32-.1-.86.35-.86h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35L18.21 9.2c-2.28 1.58-4.76 4.1-5.21 7.8h1c.55 0 1 .45 1 1z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 5 19 14' : '0 0 24 24'"><path d="M19 8.7c-2.46 1.5-5.5 4.17-6 8.3h2v2H9v-2h2c-.5-4.5-4.37-8-9-8V7c4.39 0 8.22 2.55 10 6.3 1.38-2.97 3.86-5.03 5.96-6.31L14 7V5h7v7h-2V8.7z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 5 19 14' : '0 0 24 24'"><path d="M18.21 9.21C15.93 10.78 13.45 13.3 13 17h2v2H9v-2h2c-.5-4.5-4.37-8-9-8V7c4.39 0 8.22 2.55 10 6.3 1.13-2.43 2.99-4.25 4.78-5.52L14 5h7v7l-2.79-2.79z"/></svg>
</template>