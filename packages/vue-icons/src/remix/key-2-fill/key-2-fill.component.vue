<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-key-2-fill')
export default class IconRemixKey2Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 3.63 18.08 17.37' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m10.313 11.566 7.94-7.94 2.121 2.121-1.414 1.414 2.121 2.121-3.535 3.536-2.121-2.121-2.99 2.99a5.002 5.002 0 0 1-7.97 5.849 5 5 0 0 1 5.848-7.97zm-.899 5.848a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828z"/></svg>
</template>