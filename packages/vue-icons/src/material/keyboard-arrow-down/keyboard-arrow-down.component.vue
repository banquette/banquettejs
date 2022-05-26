<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-keyboard-arrow-down')
export default class IconMaterialKeyboardArrowDown {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '6 7.84 12 7.41' : '0 0 24 24'"><path d="M7.41 7.84 12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg></span>
</template>