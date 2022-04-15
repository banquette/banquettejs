<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('icon-add-circle')
export default class IconAddCircle {
    @Prop({type: [String, Number], default: 24}) public size!: string|number;
    @Prop({type: String, default: null}) public color!: string;
}
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="color" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
</template>