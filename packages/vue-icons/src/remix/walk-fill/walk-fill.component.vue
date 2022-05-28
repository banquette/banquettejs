<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-walk-fill')
export default class IconRemixWalkFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="size" :height="size" :fill="color" :viewBox="crop ? '5.25 1.5 13.75 21.43' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="m7.617 8.712 3.205-2.328A1.995 1.995 0 0 1 12.065 6a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.402-2.547l-.697 3.955 2.061 1.73 2.223 6.108-1.88.684-2.04-5.604-3.39-2.845a2 2 0 0 1-.713-1.904l.509-2.885-.677.492-2.127 2.928-1.618-1.176L7.6 8.7l.017.012zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-2.972 13.181-3.214 3.83-1.532-1.285 2.976-3.546.746-2.18 1.791 1.5-.767 1.681z"/></svg>
</template>