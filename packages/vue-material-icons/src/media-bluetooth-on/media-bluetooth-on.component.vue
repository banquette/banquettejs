<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-media-bluetooth-on')
export default class IconMaterialMediaBluetoothOn {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 17.58 18' : '0 0 24 24'"><path d="m9 5 .01 8.55c-.6-.34-1.28-.55-2-.55a4.001 4.001 0 1 0 0 8C9.23 21 11 19.21 11 17V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2zm11.29 6.72-2.47-2.47c-.32-.31-.85-.09-.85.35v3.94l-2.33-2.33a.61.61 0 0 0-.85 0 .61.61 0 0 0 0 .85L16.73 15l-2.93 2.93a.61.61 0 0 0 0 .85c.23.23.61.23.85 0l2.33-2.33v3.94c0 .45.54.67.85.35l2.46-2.46a.996.996 0 0 0 0-1.41L18.42 15l1.87-1.86c.39-.39.39-1.03 0-1.42zm-2.12-.42 1.13 1.13-1.13 1.13V11.3zm1.13 6.27-1.13 1.13v-2.26l1.13 1.13z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path d="m9 3 .01 10.55c-.6-.34-1.28-.55-2-.55a4.001 4.001 0 1 0 0 8C9.23 21 11 19.21 11 17V7h4V3H9zm12 9.43L17.57 9h-.6v4.55l-2.75-2.75-.85.85L16.73 15l-3.35 3.35.85.85 2.75-2.75V21h.6L21 17.57 18.42 15 21 12.43zm-2.83-1.13 1.13 1.13-1.13 1.13V11.3zm1.13 6.27-1.13 1.13v-2.26l1.13 1.13z"/></svg>
</template>