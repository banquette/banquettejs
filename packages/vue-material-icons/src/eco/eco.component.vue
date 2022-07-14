<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-eco')
export default class IconMaterialEco {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 4 16 16' : '0 0 24 24'"><path d="M7.46 9.46c-1.78 1.79-1.91 4.58-.43 6.54 1.53-2.54 3.73-4.64 6.37-6a15.994 15.994 0 0 0-4.88 7.32c.75.43 1.59.68 2.48.68 1.34 0 2.59-.52 3.54-1.46 1.74-1.74 2.81-6.57 3.26-10.33-3.76.44-8.59 1.51-10.34 3.25z" opacity=".3"/><path d="M6.05 8.05a7.007 7.007 0 0 0 0 9.9C7.42 19.32 9.21 20 11 20s3.58-.68 4.95-2.05C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05zm8.49 8.49c-.95.94-2.2 1.46-3.54 1.46-.89 0-1.73-.25-2.48-.68.92-2.88 2.62-5.41 4.88-7.32-2.63 1.36-4.84 3.46-6.37 6-1.48-1.96-1.35-4.75.44-6.54C9.21 7.72 14.04 6.65 17.8 6.2c-.45 3.76-1.52 8.59-3.26 10.34z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 4.04 15.96 15.96' : '0 0 24 24'"><path d="M6.05 8.05a7.001 7.001 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 0 0 8 19.32c2.6 1.23 5.8.78 7.95-1.37 2.99-2.99 3.83-11.14 4.01-13.38a.489.489 0 0 0-.53-.53c-2.24.18-10.39 1.02-13.38 4.01z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 4 16 16' : '0 0 24 24'"><path d="M6.05 8.05a7.007 7.007 0 0 0 0 9.9C7.42 19.32 9.21 20 11 20s3.58-.68 4.95-2.05C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05zm8.49 8.49c-.95.94-2.2 1.46-3.54 1.46-.89 0-1.73-.25-2.48-.68.92-2.88 2.62-5.41 4.88-7.32-2.63 1.36-4.84 3.46-6.37 6-1.48-1.96-1.35-4.75.44-6.54C9.21 7.72 14.04 6.65 17.8 6.2c-.45 3.76-1.52 8.59-3.26 10.34z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '4 4 16 15.99' : '0 0 24 24'"><path d="M6.05 8.05a7.001 7.001 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 0 0 8 19.32c2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05z"/></svg>
</template>