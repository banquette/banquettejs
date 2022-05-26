<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-syringe-fill')
export default class IconRemixSyringeFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1.88 2.32 19.8 19.8' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m21.678 7.98-1.415 1.413-2.12-2.12-2.122 2.12 3.535 3.536-1.414 1.414-.707-.707L11.071 20H5.414l-2.121 2.121-1.414-1.414L4 18.586v-5.657l6.364-6.364-.707-.707 1.414-1.414 3.536 3.535 2.12-2.121-2.12-2.121 1.414-1.415 5.657 5.657zM9.657 14.342l-2.829-2.828-1.414 1.414 2.829 2.828 1.414-1.414zm2.828-2.828L9.657 8.686l-1.414 1.415 2.828 2.828 1.414-1.414z"/></svg></span>
</template>