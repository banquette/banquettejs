<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-pie-chart-2-line')
export default class IconRemixPieChart2Line {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 0.5 21.5 21.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 .543c.33-.029.663-.043 1-.043C18.351.5 23.5 5.649 23.5 12c0 .337-.014.67-.043 1h-1.506c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95V.542zM11 13V4.062A8.001 8.001 0 0 0 12 20a8.001 8.001 0 0 0 7.938-7H11zm10.448-2A9.503 9.503 0 0 0 13 2.552V11h8.448z"/></svg>
</template>