<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-nightlife')
export default class IconMaterialNightlife {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.87 5 20.13 15' : '0 0 24 24'"><path d="M2.87 5h10.26c.8 0 1.28.89.83 1.55L9 14v4h1c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h1v-4L2.04 6.55C1.59 5.89 2.07 5 2.87 5zm7.23 4 1.4-2H4.49l1.4 2h4.21zM19 5h1.5c.83 0 1.5.67 1.5 1.5S21.33 8 20.5 8H19v9c0 1.84-1.64 3.28-3.54 2.95-1.21-.21-2.2-1.2-2.41-2.41A2.995 2.995 0 0 1 16 14a3 3 0 0 1 1 .17V7c0-1.1.9-2 2-2z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 5 21 15' : '0 0 24 24'"><path d="M1 5h14l-6 9v4h2v2H5v-2h2v-4L1 5zm9.1 4 1.4-2H4.49l1.4 2h4.21zM17 5h5v3h-3v9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3a3 3 0 0 1 1 .17V5z"/></svg>
</template>