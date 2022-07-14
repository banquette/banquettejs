<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-sentiment-very-satisfied')
export default class IconMaterialSentimentVerySatisfied {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8.88 7.82 11 9.94 9.94 11 8.88 9.94 7.82 11 6.76 9.94l2.12-2.12zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zm4.18-6.5-1.06-1.06L14.06 11 13 9.94l2.12-2.12 2.12 2.12L16.18 11z" opacity=".3"/><path d="M8.88 9.94 9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zm4.12 0L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zM11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
    <svg v-else-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M8.88 9.94 9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5zm1-7.56L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zM11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="m8.88 9.94.53.53c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-.88-.88a.996.996 0 0 0-1.41 0l-.89.88c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.53-.53zM12 17.5c2.03 0 3.8-1.11 4.75-2.75a.503.503 0 0 0-.44-.75H7.69c-.38 0-.63.42-.44.75A5.489 5.489 0 0 0 12 17.5zm1.53-7.03c.29.29.77.29 1.06 0l.53-.53.53.53c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-.88-.88a.996.996 0 0 0-1.41 0l-.88.88c-.3.29-.3.77-.01 1.06zM11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12L13 9.94zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11l1.06-1.06zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/></svg>
</template>