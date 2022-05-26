<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-gradienter-fill')
export default class IconRemixGradienterFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM8.126 11H4.062a8.079 8.079 0 0 0 0 2h4.064a4.007 4.007 0 0 1 0-2zm7.748 0a4.007 4.007 0 0 1 0 2h4.064a8.079 8.079 0 0 0 0-2h-4.064zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></span>
</template>