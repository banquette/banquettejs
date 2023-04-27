<script setup lang="ts">
import { IRemixAccountCircle } from "@banquette/vue-remix-icons";
import { BtButton, BtFormText } from '@banquette/vue-ui';
import '@banquette/vue-ui/themes/default';
let value = '';
</script>

<template>
    <i-material-3d-rotation></i-material-3d-rotation>
    <i-remix-account-circle></i-remix-account-circle>
    <div class="hello">Hello World!</div>
    <BtButton>Test button</BtButton>
    <BtFormText v-model="value">Test form text</BtFormText>
</template>

<style scoped>
.hello {
    color: blue;
    font-size: 2rem;
}
</style>
