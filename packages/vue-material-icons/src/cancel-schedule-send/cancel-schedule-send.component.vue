<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-cancel-schedule-send')
export default class IconMaterialCancelScheduleSend {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 3 23 21' : '0 0 24 24'"><path d="m3 17.97 6.1-2.61c.02-.14.04-.29.07-.43L3 15.75v2.22zM16.5 11c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm2.47 7.27-.71.71-1.77-1.77-1.77 1.77-.71-.71 1.77-1.77-1.77-1.77.71-.71 1.77 1.77 1.77-1.77.71.71-1.77 1.77 1.77 1.77zM3 8.25l7.52 1-7.51-3.22z" opacity=".3"/><path d="M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l10.06 1.34c-.42.44-.78.93-1.09 1.46L1 14l.01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zM3 8.25l.01-2.22 7.51 3.22-7.52-1zm6.1 7.11L3 17.97v-2.22l6.17-.82c-.03.14-.05.28-.07.43zM16.5 22c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/><path d="m18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 3.52 23 20.48' : '0 0 24 24'"><path d="M16.5 9c-.42 0-.83.04-1.24.11L2.4 3.6a.993.993 0 0 0-1.39.91L1 9.2c0 .47.33.88.78.98L10 12l-8.22 1.83c-.45.1-.78.5-.78.97l.01 4.68c0 .72.73 1.2 1.39.92l6.68-2.86C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zm0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/><path d="M18.62 14.38c-.2-.2-.51-.2-.71 0l-1.41 1.41-1.41-1.41c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.41 1.41-1.41 1.41c-.2.2-.2.51 0 .71.2.2.51.2.71 0l1.41-1.41 1.41 1.41c.2.2.51.2.71 0 .2-.2.2-.51 0-.71l-1.41-1.41 1.41-1.41c.2-.2.2-.52 0-.71z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 3 23 21' : '0 0 24 24'"><path d="M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l10.06 1.34c-.42.44-.78.93-1.09 1.46L1 14l.01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zM3 8.25l.01-2.22 7.51 3.22-7.52-1zm6.1 7.11L3 17.97v-2.22l6.17-.82c-.03.14-.05.28-.07.43zM16.5 22c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/><path d="m18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 3 23 21' : '0 0 24 24'"><path d="M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l9 2-9 2 .01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zm0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/><path d="m18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z"/></svg>
</template>