<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-contacts-book-upload-line')
export default class IconRemixContactsBookUploadLine {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 2 21 20' : '0 0 24 24'"><path d="M19.005 2C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2h16.005zM7 4H5v16h2V4zm12 0H9v16h10V4zm-5 4 4 4h-3v4h-2v-4h-3l4-4zm10 4v4h-2v-4h2zm0-6v4h-2V6h2z"/></svg>
</template>