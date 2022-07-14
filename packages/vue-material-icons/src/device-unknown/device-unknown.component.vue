<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-device-unknown')
export default class IconMaterialDeviceUnknown {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5 1 14 22' : '0 0 24 24'"><path d="M7 19h10V5H7v14zm6-1h-2v-2h2v2zM12 6.72c1.96 0 3.5 1.51 3.5 3.47 0 2.26-2.62 2.49-2.62 4.45h-1.76c0-2.88 2.63-2.7 2.63-4.45 0-.93-.82-1.75-1.75-1.75s-1.75.82-1.75 1.75H8.5c0-1.95 1.54-3.47 3.5-3.47z" opacity=".3"/><path d="M11 16h2v2h-2zm6-15H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 8.44c.93 0 1.75.82 1.75 1.75 0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47s-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75z"/></svg>
    <svg v-else-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5 1 14 22' : '0 0 24 24'"><path d="M19 1H5v22h14V1zm-2 18H7V5h10v14zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47zM11 16h2v2h-2v-2z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5 1 14 22' : '0 0 24 24'"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-6-3h2v2h-2zm-1.48-5.81h.13c.33 0 .59-.23.7-.54.24-.69.91-1.21 1.66-1.21.93 0 1.75.82 1.75 1.75 0 1.32-1.49 1.55-2.23 2.82h-.01c-.08.14-.14.29-.2.45-.01.02-.02.03-.02.05-.01.02-.01.04-.01.05-.1.31-.16.66-.16 1.08h1.76c0-.25.04-.47.12-.67.54-1.47 2.77-1.86 2.48-4.18-.19-1.55-1.43-2.84-2.98-3.04-1.77-.23-3.29.78-3.81 2.3-.2.56.23 1.14.82 1.14z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5 1 14 22' : '0 0 24 24'"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47zM11 16h2v2h-2v-2z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '5 1 14 22' : '0 0 24 24'"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47zm-.88 8.8h1.76v1.76h-1.76z"/></svg>
</template>