<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-deblur')
export default class IconMaterialDeblur {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.5 2.5 18.5 19' : '0 0 24 24'"><circle cx="6" cy="14" r="1"/><circle cx="6" cy="18" r="1"/><circle cx="6" cy="10" r="1"/><circle cx="3" cy="10" r=".5"/><circle cx="6" cy="6" r="1"/><circle cx="3" cy="14" r=".5"/><circle cx="10" cy="21" r=".5"/><circle cx="10" cy="3" r=".5"/><circle cx="10" cy="6" r="1"/><circle cx="10" cy="14" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="18" r="1"/><path d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z"/><path d="M12 5v14c3.86 0 7-3.14 7-7s-3.14-7-7-7z" opacity=".3"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.5 2.5 18.5 19' : '0 0 24 24'"><circle cx="6" cy="14" r="1"/><circle cx="6" cy="18" r="1"/><circle cx="6" cy="10" r="1"/><circle cx="3" cy="10" r=".5"/><circle cx="6" cy="6" r="1"/><circle cx="3" cy="14" r=".5"/><circle cx="10" cy="21" r=".5"/><circle cx="10" cy="3" r=".5"/><circle cx="10" cy="6" r="1"/><circle cx="10" cy="14" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="18" r="1"/><path d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.5 2.5 18.5 19' : '0 0 24 24'"><path d="M12 3v18a9 9 0 0 0 0-18z"/><circle cx="6" cy="14" r="1"/><circle cx="6" cy="18" r="1"/><circle cx="6" cy="10" r="1"/><circle cx="3" cy="10" r=".5"/><circle cx="6" cy="6" r="1"/><circle cx="3" cy="14" r=".5"/><circle cx="10" cy="21" r=".5"/><circle cx="10" cy="3" r=".5"/><circle cx="10" cy="6" r="1"/><circle cx="10" cy="14" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="18" r="1"/></svg>
</template>