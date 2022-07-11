<script lang="ts">
import { IconMaterialFormatStrikethrough } from "@banquette/vue-icons/material/format-strikethrough";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { ModuleInterface } from "../../../";
import { Strike, StrikeOptions } from "@tiptap/extension-strike";
import { Extensions } from "@tiptap/vue-3";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        strike: Partial<StrikeOptions>
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-strike',
    components: [PopoverComponent, ButtonComponent, IconMaterialFormatStrikethrough]
})
export default class StrikeComponent extends AbstractTiptapModule<ModuleInterface["strike"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Strike.configure(this.configuration)];
    }

    @Expose() public toggle(): void {
        this.editor.chain().focus().toggleStrike().run();
    }
}
</script>
<template>
    <bt-button class="toolbar-button" @click="toggle()" :disabled="!enabled" :data-active="editor.isActive('strike') ? '' : null" v-if="editor">
        <i-material-format-strikethrough crop></i-material-format-strikethrough>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
    </bt-button>
</template>
