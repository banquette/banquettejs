<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-add-business')
export default class IconMaterialAddBusiness {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 4 22 19' : '0 0 24 24'"><path opacity=".3" d="M15.36 9H3.64l-.6 3h12.92z"/><path d="M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z"/><path d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '0.82 4 22.18 19' : '0 0 24 24'"><path d="M3 6h13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm12 11h2v-3h.18c.63 0 1.1-.58.98-1.2l-1-5c-.09-.46-.5-.8-.98-.8H2.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H2v5c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-5h4v3zm-6 1H4v-4h5v4z"/><path d="M22 18h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 4 22 19' : '0 0 24 24'"><path d="M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z"/><path d="M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 4 22 19' : '0 0 24 24'"><path d="M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zM2 4h15v2H2z"/><path d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/></svg>
</template>