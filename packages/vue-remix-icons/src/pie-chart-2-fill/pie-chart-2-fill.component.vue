<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-pie-chart-2-fill')
export default class IconRemixPieChart2Fill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 0.54 21.46 21.46' : '0 0 24 24'"><path d="M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95zm2-1.507C18.553 1.02 22.979 5.447 23.457 11H13V.543z"/></svg>
</template>