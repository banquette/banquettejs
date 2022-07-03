<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-map-pin-user-fill')
export default class IconRemixMapPinUserFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 2 18 21.73' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M17.084 15.812a7 7 0 1 0-10.168 0A5.996 5.996 0 0 1 12 13a5.996 5.996 0 0 1 5.084 2.812zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
</template>