<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-crop-2-fill')
export default class IconRemixCrop2Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m17.586 5 2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V7H9V5h8.586zM15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15h8zM9 9h6v6H9V9z"/></svg>
</template>