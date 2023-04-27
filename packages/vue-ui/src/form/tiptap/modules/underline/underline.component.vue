<script lang="ts">
import { IMaterialFormatUnderlined } from "@banquette/vue-material-icons";
import { Component } from "@banquette/vue-typescript";
import { Expose } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { Themeable } from "@banquette/vue-typescript";
import { ModuleInterface } from "../module.interface";
import { Underline, UnderlineOptions } from "@tiptap/extension-underline";
import { Extensions } from "@tiptap/vue-3";
import { BtButton } from "../../../../button";
import { BtPopover } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module "../module.interface" {
    interface ModuleInterface {
        underline: {
            tiptap?: Partial<UnderlineOptions>
        }
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-underline',
    components: [BtPopover, BtButton, IMaterialFormatUnderlined]
})
export default class BtFormTiptapUnderline extends AbstractTiptapModule<ModuleInterface["underline"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Underline.configure(this.configuration.tiptap)];
    }

    @Expose() public toggle(): void {
        this.editor.chain().focus().toggleUnderline().run();
    }
}
</script>
<template>
    <bt-button class="toolbar-button" @click="toggle()" :disabled="!enabled" :data-active="editor.isActive('underline') ? '' : null" v-if="editor">
        <i-material-format-underlined crop></i-material-format-underlined>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
    </bt-button>
</template>
