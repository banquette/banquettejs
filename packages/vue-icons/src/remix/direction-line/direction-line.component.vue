<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-direction-line')
export default class IconRemixDirectionLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1.1 1.1 21.8 21.8' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3.515 3.515 12 12 20.485 20.485 12 12 3.515zm.707-2.122 9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l9.9-9.9a1 1 0 0 1 1.414 0zM13 10V7.5l3.5 3.5-3.5 3.5V12h-3v3H8v-4a1 1 0 0 1 1-1h4z"/></svg></span>
</template>