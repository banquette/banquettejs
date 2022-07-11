<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Vue } from "@banquette/vue-typescript/vue";

@Component('bt-teleport')
export default class TeleportComponent extends Vue {
    static MaxId: number = 0;

    /**
     * Required. Specify target container.
     * Can either be a selector or an actual element.
     */
    @Prop({type: [Object, String]}) public to!: string|HTMLElement
    @Prop({type: Boolean, default: false, required: true}) public disabled!: boolean;

    @Expose() public wrapperId: string = '__bt-teleport-' + TeleportComponent.MaxId++;
}
</script>
<template src="./teleport.component.html" ></template>
