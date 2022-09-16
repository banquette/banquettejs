<template>
    <div class="bt-dropdown-item">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";

@Component('bt-dropdown-item')
export default class DropdownItemComponent {

}
</script>
