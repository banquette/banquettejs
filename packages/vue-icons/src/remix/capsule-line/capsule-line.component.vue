<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-capsule-line')
export default class IconRemixCapsuleLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2.46 2.46 19.07 19.07' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.778 4.222a6 6 0 0 1 0 8.485l-7.07 7.071a6.001 6.001 0 0 1-8.486-8.485l7.07-7.071a6.001 6.001 0 0 1 8.486 0zm-5.656 11.313L8.465 9.878l-2.829 2.83a4 4 0 1 0 5.657 5.656l2.829-2.83zm4.242-9.899a4 4 0 0 0-5.657 0L9.88 8.464l5.657 5.657 2.828-2.828a4 4 0 0 0 0-5.657z"/></svg>
</template>