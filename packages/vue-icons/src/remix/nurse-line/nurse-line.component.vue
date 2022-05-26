<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-nurse-line')
export default class IconRemixNurseLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '4.06 2 15.88 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15a8.001 8.001 0 0 1 7.938 7H4.062A8.001 8.001 0 0 1 12 15zm-1.813 2.28A6.025 6.025 0 0 0 6.8 20H12l-1.813-2.72zm3.627 0L12 20h5.199a6.02 6.02 0 0 0-3.385-2.72zM18 2v6A6 6 0 1 1 6 8V2h12zM8 8c0 2.21 1.79 4 4 4s4-1.79 4-4H8zm8-4H8v2h8V4z"/></svg></span>
</template>