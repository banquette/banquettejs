<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-vpn-key-off')
export default class IconMaterialVpnKeyOff {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 2.81 22 19.8' : '0 0 24 24'"><path d="M17 14.17V13h-1.17l-2-2H21v2h-2v3l-2-1.83zM7 16c-2.21 0-4-1.79-4-4 0-1.67 1.02-3.1 2.47-3.7l1.71 1.71C7.12 10 7.06 10 7 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.06 0-.12-.01-.18l1.74 1.74C10.22 14.48 9.14 16 7 16z" opacity=".3"/><path d="M2.81 2.81 1.39 4.22l2.59 2.59A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.22 0 4.15-1.21 5.19-3l7.59 7.61 1.41-1.41L2.81 2.81zM7 16c-2.21 0-4-1.79-4-4 0-1.67 1.02-3.1 2.47-3.7l1.71 1.71C7.12 10 7.06 10 7 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.06 0-.12-.01-.18l1.74 1.74C10.22 14.48 9.14 16 7 16zm10-1.83V13h-1.17L17 14.17zM13.83 11H21v2h-2v3l2 2v-3h2V9H11.83l2 2z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 3.22 22 18.98' : '0 0 24 24'"><path d="M3.98 6.81A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l6.89 6.89a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92l1.88 1.89zm5.01 5.01c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01l1.81 1.81zm11.33 5.68c.42-.37.68-.91.68-1.5v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.17l7.49 7.5"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 2.81 22 19.8' : '0 0 24 24'"><path d="M2.81 2.81 1.39 4.22l2.59 2.59A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.22 0 4.15-1.21 5.19-3l7.59 7.61 1.41-1.41L2.81 2.81zM7 16c-2.21 0-4-1.79-4-4 0-1.67 1.02-3.1 2.47-3.7l1.71 1.71C7.12 10 7.06 10 7 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.06 0-.12-.01-.18l1.74 1.74C10.22 14.48 9.14 16 7 16zm10-1.83V13h-1.17L17 14.17zM13.83 11H21v2h-2v3l2 2v-3h2V9H11.83l2 2z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1 2.81 22 19.8' : '0 0 24 24'"><path d="M20.83 18H21v-4h2v-4H12.83l8 8zm-1.05 4.61 1.41-1.41L2.81 2.81 1.39 4.22l2.59 2.59A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l7.6 7.6zM8.99 11.82c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01l1.81 1.81z"/></svg>
</template>