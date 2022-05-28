<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-remixicon-line')
export default class IconRemixRemixiconLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 2.5 18 18.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m6.364 6 8.784 9.663.72-.283c1.685-.661 2.864-2.156 3.092-3.896A6.502 6.502 0 0 1 12.077 6H6.363zM14 5a4.5 4.5 0 0 0 6.714 3.918c.186.618.286 1.271.286 1.947 0 2.891-1.822 5.364-4.4 6.377L20 21H3V4h11.111A4.515 4.515 0 0 0 14 5zm4.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM5 7.47V19h10.48L5 7.47z"/></svg>
</template>