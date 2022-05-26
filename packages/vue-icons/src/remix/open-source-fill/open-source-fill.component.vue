<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-open-source-fill')
export default class IconRemixOpenSourceFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 20 19.2' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55a3 3 0 1 0-2.809.001l-2.518 6.55A10.005 10.005 0 0 1 2 12C2 6.477 6.477 2 12 2z"/></svg></span>
</template>