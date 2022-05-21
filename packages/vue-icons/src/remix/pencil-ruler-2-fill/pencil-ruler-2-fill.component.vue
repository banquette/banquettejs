<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-pencil-ruler-2-fill')
export default class IconRemixPencilRuler2Fill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '2.51 2.51 18.97 18.97' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m5.636 12.707 1.828 1.829L8.88 13.12l-1.83-1.827 1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414 1.826 1.83 1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656 4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878 2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0l2.83 2.828-4.244 4.243z"/></svg></span>
</template>