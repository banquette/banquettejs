<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-heat-pump')
export default class IconMaterialHeatPump {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path d="M5 19h14V5H5v14zm7-13c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-.75-2.08c-.55-.1-1.05-.32-1.5-.62l1.5-1.5v2.12zm1.5 0v-2.11l1.5 1.5c-.45.3-.95.51-1.5.61zm2.56-1.67-1.5-1.5h2.11c-.1.55-.31 1.05-.61 1.5zm.61-3h-2.11l1.5-1.5c.3.45.51.95.61 1.5zm-3.17-3.17c.55.1 1.05.32 1.5.62l-1.5 1.5V8.08zM12 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-.75-2.92v2.11l-1.5-1.5c.45-.3.95-.51 1.5-.61zM8.69 9.75l1.5 1.5H8.08c.1-.55.31-1.05.61-1.5zm1.5 3-1.5 1.5c-.3-.44-.51-.95-.62-1.5h2.12z"/></svg>
    <svg v-else-if="version === 'sharp'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path d="M21 3H3v18h18V3zm-8.25 4.08c.82.12 1.57.44 2.2.91l-2.2 2.2V7.08zm-1.5 0v3.11l-2.2-2.2c.63-.47 1.38-.79 2.2-.91zM7.99 9.05l2.2 2.2H7.08c.12-.82.44-1.57.91-2.2zm-.91 3.7h3.11l-2.2 2.2c-.47-.63-.79-1.38-.91-2.2zm4.17 4.17c-.82-.12-1.57-.44-2.2-.91l2.2-2.2v3.11zM12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm.75 3.92v-3.11l2.2 2.2c-.63.47-1.38.79-2.2.91zm3.26-1.97-2.2-2.2h3.11c-.12.82-.44 1.57-.91 2.2zm-2.2-3.7 2.2-2.2c.47.64.79 1.39.91 2.2h-3.11z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-.75-2.08c-.55-.1-1.05-.32-1.5-.62l1.5-1.5v2.12zm1.5 0v-2.11l1.5 1.5c-.45.3-.95.51-1.5.61zm2.56-1.67-1.5-1.5h2.11c-.1.55-.31 1.05-.61 1.5zm.61-3h-2.11l1.5-1.5c.3.45.51.95.61 1.5zm-3.17-3.17c.55.1 1.05.32 1.5.62l-1.5 1.5V8.08zM12 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-.75-2.92v2.11l-1.5-1.5c.45-.3.95-.51 1.5-.61zM8.69 9.75l1.5 1.5H8.08c.1-.55.31-1.05.61-1.5zm1.5 3-1.5 1.5c-.3-.44-.51-.95-.62-1.5h2.12z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 3 18 18' : '0 0 24 24'"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.25 4.08c.82.12 1.57.44 2.2.91l-2.2 2.2V7.08zm-1.5 0v3.11l-2.2-2.2c.63-.47 1.38-.79 2.2-.91zM7.99 9.05l2.2 2.2H7.08c.12-.82.44-1.57.91-2.2zm-.91 3.7h3.11l-2.2 2.2c-.47-.63-.79-1.38-.91-2.2zm4.17 4.17c-.82-.12-1.57-.44-2.2-.91l2.2-2.2v3.11zM12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm.75 3.92v-3.11l2.2 2.2c-.63.47-1.38.79-2.2.91zm3.26-1.97-2.2-2.2h3.11c-.12.82-.44 1.57-.91 2.2zm-2.2-3.7 2.2-2.2c.47.64.79 1.39.91 2.2h-3.11z"/></svg>
</template>