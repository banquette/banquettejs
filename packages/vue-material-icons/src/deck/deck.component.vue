<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-material-deck')
export default class IconMaterialDeck {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
    @Prop({type: String, default: 'default'}) public version!: string;
}
</script>
<template>
    <svg v-if="version === 'twotone'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path opacity=".3" d="M12 4.44 8.34 7h7.32z"/><path d="M22 9 12 2 2 9h9v13h2V9h9zM12 4.44 15.66 7H8.34L12 4.44z"/><path d="m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"/></svg>
    <svg v-else-if="version === 'round'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2.34 2.44 19.31 19.56' : '0 0 24 24'"><path d="M20.41 9c.49 0 .69-.63.29-.91L13.15 2.8a2 2 0 0 0-2.29 0L3.3 8.09c-.4.28-.2.91.29.91H11v12c0 .55.45 1 1 1s1-.45 1-1V9h7.41z"/><path d="M8 16H4.9l-.57-3.02a1.003 1.003 0 0 0-1.97.37L3 16.74V21c0 .55.45 1 1 1h.01c.55 0 1-.44 1-.99L5.02 18H7v3c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm12.84-3.82c-.54-.1-1.06.26-1.17.8L19.1 16H16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-3h1.98l.02 3.01c0 .55.45.99 1 .99s1-.45 1-1v-4.26l.64-3.39c.1-.54-.26-1.07-.8-1.17z"/></svg>
    <svg v-else-if="version === 'outlined'" :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M22 9 12 2 2 9h9v13h2V9h9zM12 4.44 15.66 7H8.34L12 4.44z"/><path d="m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"/></svg>
    <svg v-else :width="width" :height="height || (!width ? '1em' : null)" :fill="color" :viewBox="crop ? '2 2 20 20' : '0 0 24 24'"><path d="M22 9 12 2 2 9h9v13h2V9z"/><path d="m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"/></svg>
</template>