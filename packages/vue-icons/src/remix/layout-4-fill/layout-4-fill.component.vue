<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-layout-4-fill')
export default class IconRemixLayout4Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 13v8H4a1 1 0 0 1-1-1v-7h8zm2-10h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7V3zM3 4a1 1 0 0 1 1-1h7v8H3V4z"/></svg></span>
</template>