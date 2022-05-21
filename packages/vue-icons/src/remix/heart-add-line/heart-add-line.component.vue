<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-heart-add-line')
export default class IconRemixHeartAddLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 20 19' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 14v3h3v2h-3.001L19 22h-2l-.001-3H14v-2h3v-3h2zm1.243-9.243a6 6 0 0 1 .236 8.235l-1.42-1.418c1.331-1.524 1.261-3.914-.232-5.404a4.001 4.001 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a3.999 3.999 0 0 0-5.494.154 4 4 0 0 0-.192 5.451l8.432 8.446L12 21.485l-8.48-8.492A6 6 0 0 1 12 4.529a5.998 5.998 0 0 1 8.242.228z"/></svg></span>
</template>