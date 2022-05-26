<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Render } from "@banquette/vue-typescript/decorator/render.decorator";
import { Ref } from "@banquette/vue-typescript/decorator/ref.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { VNode, createElementBlock } from "vue";

@Component('bt-client-only')
export default class ClientOnlyComponent extends Vue {
    @Prop({type: String, default: 'span'}) public placeholderTag!: string;
    @Prop({type: String, default: ''}) public placeholder!: string;

    @Ref() private isMounted: boolean = false;

    /**
     * Vue lifecycle.
     */
    public mounted(): void {
        this.isMounted = true;
    }

    @Render()
    public render(): VNode|VNode[] {
        if (this.isMounted) {
            return this.renderSlot('default');
        }
        if (this.hasSlot('placeholder')) {
            return this.renderSlot('placeholder');
        }
        return createElementBlock(this.placeholderTag, null, this.placeholder);
    }
}
</script>
<template>
    <slot></slot>
</template>
