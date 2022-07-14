<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-arrow-left-down-fill')
export default class IconRemixArrowLeftDownFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '6 5.98 12.02 12.02' : '0 0 24 24'"><path d="M12.36 13.05 17.31 18H5.998V6.688l4.95 4.95 5.656-5.657 1.415 1.414z"/></svg>
</template>