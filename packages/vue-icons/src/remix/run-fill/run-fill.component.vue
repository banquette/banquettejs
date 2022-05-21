<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-run-fill')
export default class IconRemixRunFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3.11 1.5 15.89 21.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.83 8.79 8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.402-2.547l-.581 3.297L15 15.67V23h-2v-5.986l-2.05-1.987-.947 4.298-6.894-1.215.348-1.97 4.924.868L9.83 8.79zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg></span>
</template>