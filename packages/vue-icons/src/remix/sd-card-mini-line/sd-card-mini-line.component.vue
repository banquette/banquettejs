<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-sd-card-mini-line')
export default class IconRemixSdCardMiniLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 4v5.793a2.5 2.5 0 0 1-.73 1.765L6 12.833V20h12V4H8zM7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.706l1.562-1.568A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1zm8 3h2v4h-2V5zm-3 0h2v4h-2V5zM9 5h2v4H9V5z"/></svg>
</template>