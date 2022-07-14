<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-luggage-cart-fill')
export default class IconRemixLuggageCartFill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '0.76 1.76 20.24 21.24' : '0 0 24 24'"><path d="M5.5 20a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.5 20zm13 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 18.5 20zM2.172 1.757l3.827 3.828V17H20v2H5a1 1 0 0 1-1-1V6.413L.756 3.172l1.415-1.415zM16 3a1 1 0 0 1 1 1v2h2.993C20.55 6 21 6.456 21 6.995v8.01a1 1 0 0 1-1.007.995H8.007A1.007 1.007 0 0 1 7 15.005v-8.01A1 1 0 0 1 8.007 6h2.992L11 4a1 1 0 0 1 1-1h4zm-5 5h-1v6h1V8zm7 0h-1v6h1V8zm-3-3h-2v1h2V5z"/></svg>
</template>