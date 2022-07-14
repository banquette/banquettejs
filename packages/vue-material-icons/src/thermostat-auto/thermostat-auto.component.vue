<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-thermostat-auto')
export default class IconMaterialThermostatAuto {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 19 18' : '0 0 24 24'"><path d="M9.8 13.6 9 13V6c0-.55-.45-1-1-1s-1 .45-1 1v7l-.8.6C5.45 14.16 5 15.06 5 16h6c0-.94-.45-1.83-1.2-2.4z" opacity=".3"/><path d="M11 12V6c0-1.66-1.34-3-3-3S5 4.34 5 6v6c-1.21.91-2 2.37-2 4 0 1.12.38 2.14 1 2.97V19h.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H12v-.03c.62-.83 1-1.85 1-2.97 0-1.63-.79-3.09-2-4zm-6 4c0-.94.45-1.84 1.2-2.4L7 13V6c0-.55.45-1 1-1s1 .45 1 1v7l.8.6c.75.57 1.2 1.46 1.2 2.4H5zM18.62 4h-1.61l-3.38 9h1.56l.81-2.3h3.63l.8 2.3H22l-3.38-9zm-2.15 5.39 1.31-3.72h.08l1.31 3.72h-2.7z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 18.68 18' : '0 0 24 24'"><path d="M11 12V6c0-1.66-1.34-3-3-3S5 4.34 5 6v6c-1.21.91-2 2.37-2 4 0 1.12.38 2.14 1 2.97V19h.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H12v-.03c.62-.83 1-1.85 1-2.97 0-1.63-.79-3.09-2-4zm-6 4c0-.94.45-1.84 1.2-2.4L7 13V6c0-.55.45-1 1-1s1 .45 1 1v7l.8.6c.75.57 1.2 1.46 1.2 2.4H5zM17.81 4c-.48 0-.92.3-1.09.75L14 12.02c-.18.47.17.98.67.98.31 0 .58-.19.68-.48L16 10.7h3.63l.64 1.82a.725.725 0 1 0 1.36-.5L18.9 4.75c-.17-.45-.6-.75-1.09-.75zm-1.34 5.39 1.31-3.72h.08l1.31 3.72h-2.7z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 19 18' : '0 0 24 24'"><path d="M11 12V6c0-1.66-1.34-3-3-3S5 4.34 5 6v6c-1.21.91-2 2.37-2 4 0 1.12.38 2.14 1 2.97V19h.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H12v-.03c.62-.83 1-1.85 1-2.97 0-1.63-.79-3.09-2-4zm-6 4c0-.94.45-1.84 1.2-2.4L7 13V6c0-.55.45-1 1-1s1 .45 1 1v7l.8.6c.75.57 1.2 1.46 1.2 2.4H5zM18.62 4h-1.61l-3.38 9h1.56l.81-2.3h3.63l.8 2.3H22l-3.38-9zm-2.15 5.39 1.31-3.72h.08l1.31 3.72h-2.7z"/></svg>
</template>