<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-capsule-fill')
export default class IconRemixCapsuleFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '2.46 2.46 19.07 19.07' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.778 4.222a6 6 0 0 1 0 8.485l-2.122 2.12-4.949 4.951a6 6 0 0 1-8.485-8.485l7.07-7.071a6.001 6.001 0 0 1 8.486 0zm-4.95 10.606L9.172 9.172l-3.536 3.535a4 4 0 0 0 5.657 5.657l3.535-3.536z"/></svg>
</template>