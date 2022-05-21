<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-dislike-line')
export default class IconRemixDislikeLine {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span style="line-height: 0"><svg :width="size" :height="size" :fill="color" :viewBox="crop ? '1.39 1.39 20.61 20.09' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m2.808 1.393 18.384 18.385-1.414 1.414-3.747-3.747L12 21.485l-8.48-8.492a6 6 0 0 1 .034-8.023L1.393 2.808l1.415-1.415zm2.172 10.23L12 18.654l2.617-2.623-9.645-9.645a4.001 4.001 0 0 0 .008 5.237zm15.263-6.866a6 6 0 0 1 .236 8.236l-1.635 1.636-1.414-1.414 1.59-1.592a3.999 3.999 0 0 0-.193-5.453 3.998 3.998 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a3.953 3.953 0 0 0-1.155-.723l-2.25-2.25a5.99 5.99 0 0 1 4.74 1.484 5.998 5.998 0 0 1 8.242.228z"/></svg></span>
</template>