<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { ModuleInterface, registerModuleToolbarAlias } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { ThemeConfiguration } from "./theme-configuration";

registerModuleToolbarAlias('separator', '|');

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        "|": never;
    }
}

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-tiptap-separator',
    directives: [BindThemeDirective]
})
export default class SeparatorComponent extends AbstractTiptapModule<ModuleInterface["|"]> {

}
</script>
<style src="./separator.component.css" scoped></style>
<template>
    <div class="bt-form-tiptap-separator" v-bt-bind-theme></div>
</template>
