<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-creative-commons-by-fill')
export default class IconRemixCreativeCommonsByFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 8h-4a1 1 0 0 0-.993.883L9 11v4h1.5v4h3v-4H15v-4a1 1 0 0 0-.883-.993L14 10zm-2-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg></span>
</template>