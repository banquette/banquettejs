<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-dashboard-3-fill')
export default class IconRemixDashboard3Fill {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.596 5.404a.595.595 0 0 0-.763-.067c-2.89 2.028-4.52 3.23-4.894 3.602a1.502 1.502 0 0 0 0 2.122 1.502 1.502 0 0 0 2.122 0c.219-.22 1.418-1.851 3.598-4.897a.59.59 0 0 0-.063-.76zM17.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm2.318-3.596A1 1 0 1 0 7.404 8.82a1 1 0 0 0 1.414-1.416zM12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
</template>