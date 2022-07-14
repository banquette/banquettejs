<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-thunderstorm')
export default class IconMaterialThunderstorm {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 22' : '0 0 24 24'"><path d="m17.73 9.01-1.53-.14-.25-1.52C15.63 5.44 13.94 4 12 4c-1.44 0-2.77.78-3.48 2.04l-.49.87-.99.13A3.51 3.51 0 0 0 4 10.5C4 12.43 5.57 14 7.5 14h10a2.5 2.5 0 0 0 2.5-2.5c0-1.28-.99-2.37-2.27-2.49z" opacity=".3"/><path d="M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10c2.48 0 4.5-2.02 4.5-4.5a4.5 4.5 0 0 0-4.08-4.48zM17.5 14h-10C5.57 14 4 12.43 4 10.5a3.51 3.51 0 0 1 3.04-3.46l.99-.13.49-.87A3.998 3.998 0 0 1 12 4c1.94 0 3.63 1.44 3.95 3.35l.25 1.52 1.54.14c1.27.12 2.26 1.21 2.26 2.49a2.5 2.5 0 0 1-2.5 2.5zm-2.7 3-2.9 3.32 2 1L11.55 24h2.65l2.9-3.32-2-1L17.45 17zm-6 0-2.9 3.32 2 1L5.55 24H8.2l2.9-3.32-2-1L11.45 17z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 22' : '0 0 24 24'"><path d="M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10c2.48 0 4.5-2.02 4.5-4.5a4.5 4.5 0 0 0-4.08-4.48zm-1.97 13.09-.84-.42.9-1.03c.36-.42.32-1.05-.09-1.41-.42-.36-1.05-.32-1.41.09l-1.75 2c-.2.23-.29.55-.23.85.06.3.26.56.53.7l.84.42-.9 1.03c-.36.42-.32 1.05.09 1.41.19.17.42.25.66.25.28 0 .55-.12.75-.34l1.75-2c.2-.23.29-.55.23-.85a.982.982 0 0 0-.53-.7zm-6 0-.85-.43.9-1.03c.36-.42.32-1.05-.09-1.41-.42-.36-1.05-.32-1.41.09l-1.75 2c-.2.23-.29.55-.23.85.06.3.26.56.53.7l.84.42L7 22.34c-.36.42-.32 1.05.09 1.41.19.17.43.25.66.25.28 0 .55-.12.75-.34l1.75-2c.2-.23.29-.55.23-.85a.982.982 0 0 0-.53-.7z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 22' : '0 0 24 24'"><path d="M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10c2.48 0 4.5-2.02 4.5-4.5a4.5 4.5 0 0 0-4.08-4.48zM17.5 14h-10C5.57 14 4 12.43 4 10.5a3.51 3.51 0 0 1 3.04-3.46l.99-.13.49-.87A3.998 3.998 0 0 1 12 4c1.94 0 3.63 1.44 3.95 3.35l.25 1.52 1.54.14c1.27.12 2.26 1.21 2.26 2.49a2.5 2.5 0 0 1-2.5 2.5zm-2.7 3-2.9 3.32 2 1L11.55 24h2.65l2.9-3.32-2-1L17.45 17zm-6 0-2.9 3.32 2 1L5.55 24H8.2l2.9-3.32-2-1L11.45 17z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 22' : '0 0 24 24'"><path d="M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10c2.48 0 4.5-2.02 4.5-4.5a4.5 4.5 0 0 0-4.08-4.48zM14.8 17l-2.9 3.32 2 1L11.55 24h2.65l2.9-3.32-2-1L17.45 17zm-6 0-2.9 3.32 2 1L5.55 24H8.2l2.9-3.32-2-1L11.45 17z"/></svg>
</template>