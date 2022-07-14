<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-bank-card-fill')
export default class IconRemixBankCardFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 3 20 18' : '0 0 24 24'"><path d="M22 10v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10h20zm0-2H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4zm-7 8v2h4v-2h-4z"/></svg>
</template>