<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-spatial-audio')
export default class IconMaterialSpatialAudio {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 1 21 20' : '0 0 24 24'"><path d="M15.48 17.34C14.29 16.73 12.37 16 10 16c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88z" opacity=".3"/><circle cx="10" cy="9" opacity=".3" r="2"/><path d="M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V19zm0-18h-2a9 9 0 0 0 9 9V8c-3.86 0-7-3.14-7-7z"/><path d="M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 1 20.97 20' : '0 0 24 24'"><path d="M22.11 7.95c-1.89-.23-5.57-1.83-6.09-6.09a.976.976 0 0 0-.98-.86c-.6 0-1.07.53-1 1.13.31 2.43 2.38 7.12 7.8 7.8.6.08 1.13-.4 1.13-1 0-.5-.37-.92-.86-.98zm-.4-2.12a1 1 0 0 0 1.26-.97c0-.47-.34-.85-.79-.97-.49-.14-1.72-.68-2.11-2.13-.12-.44-.5-.76-.96-.76h-.01c-.66 0-1.14.64-.96 1.28.6 2.22 2.44 3.25 3.57 3.55z"/><circle cx="10" cy="9" r="4"/><path d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 1 21 20' : '0 0 24 24'"><path d="M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V19zm0-18h-2a9 9 0 0 0 9 9V8c-3.86 0-7-3.14-7-7z"/><path d="M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 1 21 20' : '0 0 24 24'"><circle cx="10" cy="9" r="4"/><path d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 1h-2a9 9 0 0 0 9 9V8c-3.86 0-7-3.14-7-7z"/><path d="M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3z"/></svg>
</template>