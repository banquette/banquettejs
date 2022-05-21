<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-surgical-mask-fill')
export default class IconRemixSurgicalMaskFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '0 3.06 24 17.7' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m12.485 3.121 7.758 1.94c.445.11.757.51.757.97V7h1c1.1 0 2 .9 2 2v3a3 3 0 0 1-3 3h-.421a6.001 6.001 0 0 1-2.896 3.158l-4.789 2.395a2.002 2.002 0 0 1-1.788 0l-4.79-2.395A6.005 6.005 0 0 1 3.422 15H3a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h1v-.97c0-.458.312-.858.757-.97l7.758-1.939c.318-.08.652-.08.97 0zM3 9H2v3a1 1 0 0 0 1 1V9zm19 0h-1v4a1 1 0 0 0 1-1V9z"/></svg></span>
</template>