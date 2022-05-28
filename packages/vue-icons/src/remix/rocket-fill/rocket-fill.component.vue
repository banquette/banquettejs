<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-rocket-fill')
export default class IconRemixRocketFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3.14 1.82 17.72 20.88' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.33 15.929A13.064 13.064 0 0 1 5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 1.01-.114 1.991-.33 2.929l2.02 1.796a.5.5 0 0 1 .097.63l-2.458 4.096a.5.5 0 0 1-.782.096l-2.254-2.254a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.254 2.254a.5.5 0 0 1-.782-.096l-2.458-4.095a.5.5 0 0 1 .097-.631l2.02-1.796zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
</template>