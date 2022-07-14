<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-watch-off')
export default class IconMaterialWatchOff {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.39 2 19.8 20.61' : '0 0 24 24'"><path d="M13.89 5.27 13.51 4h-3.02l-.38 1.27c1.82-.51 3.23-.16 3.78 0zm-3.78 13.46.38 1.27h3.02l.38-1.27c-1.82.51-3.23.16-3.78 0z" opacity=".3"/><path d="M12 7c2.76 0 5 2.24 5 5 0 .64-.13 1.25-.35 1.82l1.5 1.5a6.963 6.963 0 0 0-1.79-8.79L15 2H9l-.96 3.21 2.14 2.14C10.75 7.13 11.36 7 12 7zm-1.51-3h3.02l.38 1.27c-.55-.16-1.97-.51-3.78 0L10.49 4zM2.81 2.81 1.39 4.22l4.46 4.46a6.963 6.963 0 0 0 1.79 8.79L9 22h6l.96-3.21 3.82 3.82 1.41-1.41L2.81 2.81zM13.51 20h-3.02l-.38-1.27c.55.15 1.97.51 3.78 0L13.51 20zM12 17c-2.76 0-5-2.24-5-5 0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.81 2 18.97 20.19' : '0 0 24 24'"><path d="M12 7c2.76 0 5 2.24 5 5 0 .64-.13 1.25-.35 1.82l1.5 1.5a6.963 6.963 0 0 0-1.79-8.79l-.93-3.1A2.004 2.004 0 0 0 13.51 2h-3.02c-.89 0-1.66.58-1.92 1.42l-.53 1.79 2.14 2.14C10.75 7.13 11.36 7 12 7zM2.1 3.51a.996.996 0 0 0 0 1.41l3.75 3.75C5.31 9.67 5 10.8 5 12c0 2.22 1.03 4.19 2.64 5.47l.93 3.1c.26.85 1.03 1.43 1.92 1.43h3.02c.88 0 1.66-.58 1.92-1.43l.53-1.78 3.11 3.11a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0zM12 17c-2.76 0-5-2.24-5-5 0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.39 2 19.8 20.61' : '0 0 24 24'"><path d="M12 7c2.76 0 5 2.24 5 5 0 .64-.13 1.25-.35 1.82l1.5 1.5a6.963 6.963 0 0 0-1.79-8.79L15 2H9l-.96 3.21 2.14 2.14C10.75 7.13 11.36 7 12 7zm-1.51-3h3.02l.38 1.27c-.55-.16-1.97-.51-3.78 0L10.49 4zM2.81 2.81 1.39 4.22l4.46 4.46a6.963 6.963 0 0 0 1.79 8.79L9 22h6l.96-3.21 3.82 3.82 1.41-1.41L2.81 2.81zM13.51 20h-3.02l-.38-1.27c.55.15 1.97.51 3.78 0L13.51 20zM12 17c-2.76 0-5-2.24-5-5 0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '1.39 2 19.8 20.61' : '0 0 24 24'"><path d="M12 7c2.76 0 5 2.24 5 5 0 .64-.13 1.25-.35 1.82l1.5 1.5a6.963 6.963 0 0 0-1.79-8.79L15 2H9l-.96 3.21 2.14 2.14C10.75 7.13 11.36 7 12 7zM2.81 2.81 1.39 4.22l4.46 4.46a6.963 6.963 0 0 0 1.79 8.79L9 22h6l.96-3.21 3.82 3.82 1.41-1.41L2.81 2.81zM12 17c-2.76 0-5-2.24-5-5 0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35z"/></svg>
</template>