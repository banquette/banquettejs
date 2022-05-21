<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-dropbox-fill')
export default class IconRemixDropboxFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1.5 4 21 17.79' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m17.285 10.668 5.215 3.323-5.252 3.346L12 13.993l-5.248 3.344L1.5 13.99l5.215-3.323L1.5 7.346 6.752 4 12 7.343 17.248 4 22.5 7.346l-5.215 3.322zm-.074 0L12 7.348l-5.211 3.32L12 13.988l5.211-3.32zM6.786 18.446l5.252-3.346 5.252 3.346-5.252 3.346-5.252-3.346z"/></svg></span>
</template>