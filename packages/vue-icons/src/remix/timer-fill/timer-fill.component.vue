<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-timer-fill')
export default class IconRemixTimerFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 1 18 21' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m17.618 5.968 1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414zM11 8v6h2V8h-2zM8 1h8v2H8V1z"/></svg></span>
</template>