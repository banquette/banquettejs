<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-chat-quote-line')
export default class IconRemixChatQuoteLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 20 19.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h18zm-1 2H4v13.385L5.763 17H20V5zm-9.485 2.412.447.688c-1.668.903-1.639 2.352-1.639 2.664.155-.02.318-.024.48-.009a1.761 1.761 0 0 1 1.613 1.745 1.75 1.75 0 0 1-1.75 1.75c-.537 0-1.05-.245-1.374-.59-.515-.546-.792-1.16-.792-2.155 0-1.75 1.228-3.318 3.015-4.093zm5 0 .447.688c-1.668.903-1.639 2.352-1.639 2.664.155-.02.318-.024.48-.009a1.761 1.761 0 0 1 1.613 1.745 1.75 1.75 0 0 1-1.75 1.75c-.537 0-1.05-.245-1.374-.59-.515-.546-.792-1.16-.792-2.155 0-1.75 1.228-3.318 3.015-4.093z"/></svg></span>
</template>