<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-drop-right-line')
export default class IconRemixArrowDropRightLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '9.34 7.76 5.66 8.49' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12 9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg></span>
</template>