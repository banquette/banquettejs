<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-user-shared-fill')
export default class IconRemixUserSharedFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '4 1 18.41 21.24' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 14.252V22H4a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm6.586 4-1.829-1.828 1.415-1.415L22.414 18l-4.242 4.243-1.415-1.415L18.586 19H15v-2h3.586z"/></svg>
</template>