<script lang="ts">
import { Component, Prop, Render, Ref, Vue } from "@banquette/vue-typescript";
import { VNode, createElementBlock } from "vue";

@Component('bt-client-only')
export default class BtClientOnly extends Vue {
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
