<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-honor-of-kings-fill')
export default class IconRemixHonorOfKingsFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M21.158 4.258c.034 3.5.591 4.811.788 6.701a9.98 9.98 0 0 1-2.875 8.112c-3.666 3.666-9.471 3.89-13.4.673l2.852-2.853a6.002 6.002 0 0 0 8.368-8.368l4.267-4.265zm-2.83-.002-2.851 2.853a6.002 6.002 0 0 0-8.368 8.368l-4.267 4.265c-.034-3.5-.591-4.811-.788-6.701a9.98 9.98 0 0 1 2.875-8.112c3.666-3.666 9.471-3.89 13.4-.673zM12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12 10.5z"/></svg>
</template>