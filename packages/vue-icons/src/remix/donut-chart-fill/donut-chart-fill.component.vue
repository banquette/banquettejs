<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-donut-chart-fill')
export default class IconRemixDonutChartFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 2.05 19.95 19.95' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 2.05v3.02a7 7 0 1 0 5.192 12.536l2.137 2.137A9.966 9.966 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13a9.948 9.948 0 0 1-2.207 5.328l-2.137-2.136A6.958 6.958 0 0 0 18.929 13h3.022zM13.002 2.05a10.004 10.004 0 0 1 8.95 8.95H18.93a7.005 7.005 0 0 0-5.928-5.929V2.049z"/></svg></span>
</template>