<style src="./tag.component.css" scoped></style>
<template src="./tag.component.html" ></template>
<script lang="ts">
import { IMaterialClose } from "@banquette/vue-material-icons";
import { Component } from "@banquette/vue-typescript";
import { Computed } from "@banquette/vue-typescript";
import { Expose } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { Themeable } from "@banquette/vue-typescript";
import { BindThemeDirective } from "@banquette/vue-typescript";
import { Vue } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-tag',
    components: [IMaterialClose],
    directives: [BindThemeDirective],
    emits: ['close']
})
export default class BtTag extends Vue {
    /**
     * The URL to redirect to when the tag is clicked.
     * If defined, the root component will be a `<a>` instead of a `<span>`.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public href!: string|null;

    /**
     * Define the "target" attribute of the root element.
     * Only applicable if `href` is defined and thus the root element is a `<a>`.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public target!: string|null;

    /**
     * If `true`, a close icon is added that emits a `close` event when clicked.
     */
    @Prop({type: Boolean, default: false}) public closable!: boolean;

    @Computed() public get tagName(): string {
        return this.href !== null ? 'a' : 'span';
    }

    @Expose() public close(): void {
        this.$emit('close');
    }
}
</script>
