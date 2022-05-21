<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-vip-line')
export default class IconRemixVipLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 20 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 19h20v2H2v-2zm9-11h2v8h-2V8zM7.965 8h2.125l-2.986 7.964h-2L2.118 8h2.125l1.861 5.113L7.965 8zM17 14v2h-2V8h4a3 3 0 0 1 0 6h-2zm0-4v2h2a1 1 0 0 0 0-2h-2zM2 3h20v2H2V3z"/></svg></span>
</template>