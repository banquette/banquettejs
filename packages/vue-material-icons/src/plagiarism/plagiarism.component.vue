<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-plagiarism')
export default class IconMaterialPlagiarism {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path d="M13 4H6v16h12V9h-5V4zm.97 7.03a3.48 3.48 0 0 1 .59 4.13l1.88 1.88-1.41 1.41-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 0 1 0-4.95 3.495 3.495 0 0 1 4.95 0z" opacity=".3"/><circle cx="11.5" cy="13.5" opacity=".3" r="1.5"/><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/><path d="M9.03 11.03a3.495 3.495 0 0 0 0 4.95 3.48 3.48 0 0 0 4.13.59l1.88 1.88 1.41-1.41-1.88-1.88c.71-1.33.53-3.01-.59-4.13a3.495 3.495 0 0 0-4.95 0zm3.53 3.53c-.59.59-1.54.59-2.12 0a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0c.59.59.59 1.53 0 2.12z"/></svg>
    <svg v-else-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><circle cx="11.5" cy="14.5" r="1.5"/><path d="M14 2H4v20h16V8l-6-6zm1.04 17.45-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 0 1 0-4.95 3.495 3.495 0 0 1 4.95 0 3.48 3.48 0 0 1 .59 4.13l1.88 1.88-1.41 1.41zM13 9V3.5L18.5 9H13z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path d="m19.41 7.41-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zm-3.67 11.33a.996.996 0 0 1-1.41 0l-1.18-1.18c-1.33.71-3.01.53-4.13-.59a3.504 3.504 0 0 1 .5-5.37c1.16-.81 2.78-.81 3.95 0 1.55 1.08 1.9 3.04 1.09 4.55l1.18 1.18c.39.39.39 1.02 0 1.41zM14 9c-.55 0-1-.45-1-1V3.5L18.5 9H14z"/><circle cx="11.5" cy="14.5" r="1.5"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/><path d="M9.03 11.03a3.495 3.495 0 0 0 0 4.95 3.48 3.48 0 0 0 4.13.59l1.88 1.88 1.41-1.41-1.88-1.88c.71-1.33.53-3.01-.59-4.13a3.495 3.495 0 0 0-4.95 0zm3.53 3.53c-.59.59-1.54.59-2.12 0a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0c.59.59.59 1.53 0 2.12z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 2 16 20' : '0 0 24 24'"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm1.04 17.45-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 0 1 0-4.95 3.495 3.495 0 0 1 4.95 0 3.48 3.48 0 0 1 .59 4.13l1.88 1.88-1.41 1.41zM13 9V3.5L18.5 9H13z"/><circle cx="11.5" cy="14.5" r="1.5"/></svg>
</template>