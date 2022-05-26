<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-open-source-line')
export default class IconRemixOpenSourceLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 20 19.55' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10 0 4.4-2.841 8.136-6.789 9.473l-.226.074-2.904-7.55A2.016 2.016 0 0 0 14 12a2 2 0 1 0-2.083 1.998l-2.903 7.549-.225-.074A10.001 10.001 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-4.099 14.872l1.48-3.849A3.999 3.999 0 0 1 12 8a3.999 3.999 0 0 1 2.62 7.023c.565 1.474 1.059 2.757 1.479 3.85A8 8 0 0 0 12 4z"/></svg></span>
</template>