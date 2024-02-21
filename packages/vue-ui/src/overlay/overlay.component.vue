<style src="./overlay.component.css" scoped></style>
<template src="./overlay.component.html" ></template>
<script lang="ts">
import { Component, Computed, Prop, ThemeVar, Themeable, Watch, ImmediateStrategy, BindThemeDirective, Vue } from "@banquette/vue-typescript";
import { ThemeConfiguration } from "./theme-configuration";

let ZIndexIncrement: number = 0;

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-overlay',
    directives: [BindThemeDirective],
    emits: ['update:visible']
})
export default class BtOverlay extends Vue {
    @Prop({type: String, default: 'fixed', transform: (value: any) => value === 'absolute' ? value : 'fixed'})
    public position!: 'absolute' | 'fixed';

    /**
     * Control the visibility of the overlay.
     * If invisible, the events are not blocked anymore.
     */
    @Prop({type: Boolean, default: true}) public visible!: boolean;

    /**
     * Bridge to the `overlay-z-index` css variable.
     */
    @ThemeVar({name: 'overlay-z-index', defaultValue: 2000}) public zIndexCssVar!: number;

    @Computed() public get zIndex(): number {
        return this.zIndexCssVar + this.zIndexIncrement;
    }

    private zIndexIncrement: number = 0;

    public unmounted(): void {
        --ZIndexIncrement;
    }

    @Watch('visible', {immediate: ImmediateStrategy.BeforeMount})
    private onVisibilityChange(): void {
        if (this.visible) {
            this.zIndexIncrement = ++ZIndexIncrement;
        } else {
            --ZIndexIncrement;
        }
    }
}
</script>
