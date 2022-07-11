<script lang="ts">
import { IconMaterialFormatBold } from "@banquette/vue-icons/material/format-bold";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { ModuleInterface } from "../../../";
import { Extensions } from "@tiptap/vue-3";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { Bold, BoldOptions } from "@tiptap/extension-bold";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        bold: Partial<BoldOptions>
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-bold',
    components: [PopoverComponent, ButtonComponent, IconMaterialFormatBold]
})
export default class BoldComponent extends AbstractTiptapModule<ModuleInterface["bold"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Bold.configure(this.configuration)];
    }

    @Expose() public toggle(): void {
        this.editor.chain().focus().toggleBold().run();
    }
}
</script>
<template>
    <bt-button class="toolbar-button" @click="toggle()" :disabled="!enabled" :data-active="editor.isActive('bold') ? '' : null" v-if="editor">
        <i-material-format-bold crop></i-material-format-bold>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
    </bt-button>
</template>
