<style src="./tag.component.css" scoped></style>
<template src="./tag.component.html" ></template>
<script lang="ts">
import { IconMaterialClose } from "@banquette/vue-material-icons/close";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-tag',
    components: [IconMaterialClose],
    directives: [BindThemeDirective],
    emits: ['close']
})
export default class TagComponent extends Vue {
    /**
     * The URL to redirect to when the tag is clicked.
     * If defined, the root component will be a `<a>` instead of a `<span>`.
     */
    @Prop({type: String, default: null}) public href!: string|null;

    /**
     * Define the "target" attribute of the root element.
     * Only applicable if `href` is defined and thus the root element is a `<a>`.
     */
    @Prop({type: String, default: null}) public target!: string|null;

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
