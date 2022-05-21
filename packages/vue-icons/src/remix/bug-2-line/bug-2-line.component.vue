<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-bug-2-line')
export default class IconRemixBug2Line {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '3 2.46 18 19.54' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.562 4.148a7.03 7.03 0 0 1 2.876 0l1.683-1.684 1.415 1.415-1.05 1.05A7.03 7.03 0 0 1 18.326 8H21v2h-2.07c.046.327.07.66.07 1v1h2v2h-2v1c0 .34-.024.673-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2h2.07A7.06 7.06 0 0 1 5 15v-1H3v-2h2v-1c0-.34.024-.673.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.072l-1.05-1.05L8.88 2.465l1.683 1.684zM12 6a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5zm-3 8h6v2H9v-2zm0-4h6v2H9v-2z"/></svg></span>
</template>