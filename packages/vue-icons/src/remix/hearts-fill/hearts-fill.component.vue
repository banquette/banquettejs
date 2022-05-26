<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-hearts-fill')
export default class IconRemixHeartsFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1 3 22.5 18.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17.363 11.045a3.615 3.615 0 0 1 5.084 0 3.55 3.55 0 0 1 0 5.047L17 21.5l-5.447-5.408a3.55 3.55 0 0 1 0-5.047 3.615 3.615 0 0 1 5.084 0l.363.36.363-.36zm1.88-6.288a5.995 5.995 0 0 1 1.689 3.338A5.613 5.613 0 0 0 17 8.808a5.617 5.617 0 0 0-6.856.818 5.55 5.55 0 0 0-.178 7.701l.178.185 2.421 2.404L11 21.485l-8.48-8.492a6 6 0 0 1 8.481-8.464 5.998 5.998 0 0 1 8.242.228z"/></svg></span>
</template>