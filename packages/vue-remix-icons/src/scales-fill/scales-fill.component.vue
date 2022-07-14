<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-scales-fill')
export default class IconRemixScalesFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 2 22 19' : '0 0 24 24'"><path d="M13 2v1h7v2h-7v14h4v2H7v-2h4V5H4V3h7V2h2zM5 6.343l2.828 2.829A3.999 3.999 0 0 1 5 16a3.999 3.999 0 0 1-2.828-6.828L5 6.343zm14 0 2.828 2.829A3.999 3.999 0 0 1 19 16a3.999 3.999 0 0 1-2.828-6.828L19 6.343zm0 2.829-1.414 1.414A1.986 1.986 0 0 0 17 12l4 .001c0-.54-.212-1.041-.586-1.415L19 9.172zm-14 0-1.414 1.414A1.986 1.986 0 0 0 3 12l4 .001c0-.54-.212-1.041-.586-1.415L5 9.172z"/></svg>
</template>