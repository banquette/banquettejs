<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-generating-tokens')
export default class IconMaterialGeneratingTokens {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 1 22 22' : '0 0 24 24'"><path d="M9 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm3 4.5h-2v5H8v-5H6V9h6v1.5z" opacity=".3"/><path d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7.5h-2v5H8v-5H6V9h6v1.5zm8.25-6.75L23 5l-2.75 1.25L19 9l-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75zm0 14L23 19l-2.75 1.25L19 23l-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 1.71 21.29 20.59' : '0 0 24 24'"><path d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 11.5c-.55 0-1-.45-1-1v-4H6.75c-.41 0-.75-.34-.75-.75S6.34 9 6.75 9h4.5c.41 0 .75.34.75.75s-.34.75-.75.75H10v4c0 .55-.45 1-1 1zM20.25 3.75l1.75.79a.5.5 0 0 1 0 .91l-1.75.79L19.46 8a.5.5 0 0 1-.91 0l-.79-1.75L16 5.46a.5.5 0 0 1 0-.91l1.75-.79.79-1.76a.5.5 0 0 1 .91 0l.8 1.75zm0 14 1.75.79a.5.5 0 0 1 0 .91l-1.75.79-.79 1.76a.5.5 0 0 1-.91 0l-.79-1.75-1.76-.79a.5.5 0 0 1 0-.91l1.75-.79.79-1.76a.5.5 0 0 1 .91 0l.8 1.75z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 1 22 22' : '0 0 24 24'"><path d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7.5h-2v5H8v-5H6V9h6v1.5zm8.25-6.75L23 5l-2.75 1.25L19 9l-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75zm0 14L23 19l-2.75 1.25L19 23l-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 1 22 22' : '0 0 24 24'"><path d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 6.5h-2v5H8v-5H6V9h6v1.5zm8.25-6.75L23 5l-2.75 1.25L19 9l-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75zm0 14L23 19l-2.75 1.25L19 23l-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75z"/></svg>
</template>