<script lang="ts">
import { Vue, Expose, Component } from "@banquette/vue-typescript";
import { IMaterial3dRotation } from "@banquette/vue-material-icons";
import { IRemixAccountCircle } from "@banquette/vue-remix-icons";
import { BtFormText, BtButton, BtValidateNotEmpty } from "@banquette/vue-ui";
import '@banquette/vue-ui/themes/default';

@Component({
    components: [BtFormText, BtButton, IMaterial3dRotation, IRemixAccountCircle, BtValidateNotEmpty]
})
export default class App extends Vue {
    @Expose() public value: string = '';
}
</script>

<template>
    <div style="display: flex; flex-direction: column; gap: 1rem; padding-top: 2rem">
        <bt-form-text v-model="value">
            Test form text
            <template #before>
                <i-remix-account-circle crop></i-remix-account-circle>
            </template>
            <template #after>
                <i-material-3d-rotation crop></i-material-3d-rotation>
            </template>
            <bt-validate-not-empty>Requis!</bt-validate-not-empty>
        </bt-form-text>
        <bt-button>Test button</bt-button>
    </div>
</template>
