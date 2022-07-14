<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-slice-line')
export default class IconRemixSliceLine {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.26 3.73 19.09 16.33' : '0 0 24 24'"><path d="m15.69 12.918 1.769 1.768c-6.01 6.01-10.96 6.01-15.203 4.596L17.812 3.726l3.536 3.535-5.657 5.657zm-2.828 0 5.657-5.657-.707-.707L6.314 18.052c2.732.107 5.358-.907 8.267-3.416l-1.719-1.718z"/></svg>
</template>