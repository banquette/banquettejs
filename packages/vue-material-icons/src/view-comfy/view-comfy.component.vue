<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-view-comfy')
export default class IconMaterialViewComfy {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 4 20 16' : '0 0 24 24'"><path d="M10 18h10v-5H10v5zM4 6v5h16V6H4zm0 12h4v-5H4v5z" opacity=".3"/><path d="M2 4v16h20V4H2zm6 14H4v-5h4v5zm12 0H10v-5h10v5zm0-7H4V6h16v5z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 4 20 16' : '0 0 24 24'"><path d="M2 5v5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1zm9 15h10c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H11c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm-8 0h4c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 4 20 16' : '0 0 24 24'"><path d="M2 4v16h20V4H2zm2 2h16v5H4V6zm0 12v-5h4v5H4zm6 0v-5h10v5H10z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 4 20 16' : '0 0 24 24'"><path d="M2 4v7h20V4H2zm8 16h12v-7H10v7zm-8 0h6v-7H2v7z"/></svg>
</template>