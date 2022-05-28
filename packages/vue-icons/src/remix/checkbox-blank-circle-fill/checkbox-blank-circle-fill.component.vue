<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-checkbox-blank-circle-fill')
export default class IconRemixCheckboxBlankCircleFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '-Infinity -Infinity Infinity Infinity' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="10"/></svg>
</template>