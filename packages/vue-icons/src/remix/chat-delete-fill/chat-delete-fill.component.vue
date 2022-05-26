<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-chat-delete-fill')
export default class IconRemixChatDeleteFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2 3 20 19.5' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm6.96-8 2.474-2.475-1.414-1.414L12 9.586 9.525 7.11 8.111 8.525 10.586 11 8.11 13.475l1.414 1.414L12 12.414l2.475 2.475 1.414-1.414L13.414 11z"/></svg></span>
</template>