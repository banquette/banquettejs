<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-raw-on')
export default class IconMaterialRawOn {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 9 18.27 6' : '0 0 24 24'"><path d="M6.5 9H4c-.55 0-1 .45-1 1v4.31c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V13h1.1l.72 1.59c.12.25.37.41.64.41.5 0 .83-.51.64-.97L7.1 12.9c.5-.3.9-.8.9-1.4v-1C8 9.68 7.32 9 6.5 9zm0 2.5h-2v-1h2v1zm5-2.5c-.73 0-1.37.5-1.55 1.21l-.97 3.89c-.12.46.23.9.7.9.33 0 .62-.23.7-.55l.24-.95h1.75l.23.95a.73.73 0 0 0 1.42-.35l-.97-3.88C12.87 9.5 12.23 9 11.5 9zm-.5 3 .25-1h.5l.25 1h-1zm8.84-2.45-.6 2.45-.56-2.26a.954.954 0 0 0-.94-.74c-.45 0-.84.3-.94.74L16.24 12l-.6-2.45a.73.73 0 0 0-1.42.35l1.09 4.38c.12.42.5.72.93.72.43 0 .81-.3.92-.72l.58-2.32.58 2.32c.11.42.49.72.92.72.43 0 .81-.3.92-.72l1.09-4.38a.72.72 0 0 0-.7-.9.73.73 0 0 0-.71.55z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '3 9 18.48 6' : '0 0 24 24'"><path d="M6.5 9H3v6h1.5v-2h1.1l.9 2H8l-.9-2.1c.5-.3.9-.8.9-1.4v-1C8 9.7 7.3 9 6.5 9zm0 2.5h-2v-1h2v1zM10.25 9l-1.5 6h1.5l.38-1.5h1.75l.37 1.5h1.5l-1.5-6h-2.5zm.75 3 .25-1h.5l.25 1h-1zm8.98-3-.74 3-.74-3h-1.52l-.74 3-.74-3H14l1.5 6h1.48l.76-3.04.76 3.04h1.48l1.5-6z"/></svg>
</template>