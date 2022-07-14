<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-emergency-share')
export default class IconMaterialEmergencyShare {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4.22 0 15.56 24' : '0 0 24 24'"><path d="M12 11c-1.94 0-4 1.45-4 4.15 0 .94.55 2.93 4 6.17 3.45-3.24 4-5.23 4-6.17 0-2.7-2.06-4.15-4-4.15zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" opacity=".3"/><path d="M12 4c1.93 0 3.68.78 4.95 2.05l-1.41 1.41a5.022 5.022 0 0 0-7.08 0L7.05 6.05A6.976 6.976 0 0 1 12 4zm7.78-.77-1.41 1.41C16.74 3.01 14.49 2 12.01 2S7.27 3.01 5.64 4.63L4.22 3.22C6.22 1.23 8.97 0 12.01 0s5.78 1.23 7.77 3.23zM12 11c1.94 0 4 1.45 4 4.15 0 .94-.55 2.93-4 6.17-3.45-3.24-4-5.23-4-6.17 0-2.7 2.06-4.15 4-4.15zm0-2c-3.15 0-6 2.41-6 6.15 0 2.49 2 5.44 6 8.85 4-3.41 6-6.36 6-8.85C18 11.41 15.15 9 12 9zm1.5 6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4.68 0 14.65 23.67' : '0 0 24 24'"><path d="M12 9c-3.15 0-6 2.41-6 6.15 0 2.35 1.78 5.11 5.34 8.27.37.33.95.33 1.33 0C16.22 20.25 18 17.5 18 15.15 18 11.41 15.15 9 12 9zm0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.18-9.68c-.35.35-.89.38-1.3.09C14.07 6.34 13.07 6 12 6s-2.07.34-2.88.91c-.41.28-.95.26-1.3-.09-.43-.43-.39-1.15.09-1.5C9.06 4.49 10.48 4 12 4s2.94.49 4.09 1.32c.49.35.52 1.07.09 1.5zM4.97 3.97c-.42-.43-.38-1.12.08-1.5C6.95.93 9.37 0 12.01 0c2.64 0 5.06.93 6.95 2.48.46.38.5 1.07.08 1.49-.36.36-.93.39-1.32.07a9.027 9.027 0 0 0-11.43 0c-.39.32-.96.28-1.32-.07z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4.22 0 15.56 24' : '0 0 24 24'"><path d="M12 4c1.93 0 3.68.78 4.95 2.05l-1.41 1.41a5.022 5.022 0 0 0-7.08 0L7.05 6.05A6.976 6.976 0 0 1 12 4zm7.78-.77-1.41 1.41C16.74 3.01 14.49 2 12.01 2S7.27 3.01 5.64 4.63L4.22 3.22C6.22 1.23 8.97 0 12.01 0s5.78 1.23 7.77 3.23zM12 11c1.94 0 4 1.45 4 4.15 0 .94-.55 2.93-4 6.17-3.45-3.24-4-5.23-4-6.17 0-2.7 2.06-4.15 4-4.15zm0-2c-3.15 0-6 2.41-6 6.15 0 2.49 2 5.44 6 8.85 4-3.41 6-6.36 6-8.85C18 11.41 15.15 9 12 9zm1.5 6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4.22 0 15.56 24' : '0 0 24 24'"><path d="M12 9c-3.15 0-6 2.41-6 6.15 0 2.49 2 5.44 6 8.85 4-3.41 6-6.36 6-8.85C18 11.41 15.15 9 12 9zm0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM12 4c1.93 0 3.68.78 4.95 2.05l-1.41 1.41a5.022 5.022 0 0 0-7.08 0L7.05 6.05A6.976 6.976 0 0 1 12 4zm7.78-.77-1.41 1.41C16.74 3.01 14.49 2 12.01 2S7.27 3.01 5.64 4.63L4.22 3.22C6.22 1.23 8.97 0 12.01 0s5.78 1.23 7.77 3.23z"/></svg>
</template>