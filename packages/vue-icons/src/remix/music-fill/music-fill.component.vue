<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-music-fill')
export default class IconRemixMusicFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '6 3 14 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z"/></svg></span>
</template>