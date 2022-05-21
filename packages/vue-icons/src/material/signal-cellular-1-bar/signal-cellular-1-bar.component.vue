<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-signal-cellular-1-bar')
export default class IconMaterialSignalCellular1Bar {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 12 10 10' : '0 0 24 24'"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M12 12 2 22h10z"/></svg></span>
</template>