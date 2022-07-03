<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-remix-git-repository-commits-fill')
export default class IconRemixGitRepositoryCommitsFill {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <svg :width="!crop ? size : null" :height="size" :fill="color" :viewBox="crop ? '3 2 18 21' : '0 0 24 24'"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 17v6h-2v-6H9l4-5 4 5h-3zm2 2h3v-3h-.8L13 9.5 7.647 16H6.5a1.5 1.5 0 0 0 0 3H10v2H6.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-4v-2zM7 5v2h2V5H7zm0 3v2h2V8H7z"/></svg>
</template>