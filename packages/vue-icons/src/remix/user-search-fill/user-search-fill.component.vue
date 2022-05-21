<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-user-search-fill')
export default class IconRemixUserSearchFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '4 1 18.95 21.95' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9.446 7.032 1.504 1.504-1.414 1.414-1.504-1.504a4 4 0 1 1 1.414-1.414zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></span>
</template>