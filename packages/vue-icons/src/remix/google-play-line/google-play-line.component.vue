<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-google-play-line')
export default class IconRemixGooglePlayLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 1.73 18 20.53' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.501 22.131A1 1 0 0 1 3 21.266V2.734a1 1 0 0 1 1-1zm8.292 11.68-4.498 4.498 5.699-3.299-1.2-1.2zM5 6.118v11.76l5.88-5.88L5 6.118zm10.284 4.302L13.706 12l1.578 1.577L18.008 12l-2.725-1.579zm-7.49-4.336 4.5 4.5 1.199-1.2-5.699-3.3z"/></svg></span>
</template>