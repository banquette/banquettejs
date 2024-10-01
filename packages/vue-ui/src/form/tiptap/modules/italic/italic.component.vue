<script lang="ts">
import { IMaterialFormatItalic } from "@banquette/vue-material-icons";
import { Component, Expose, Prop, Themeable } from "@banquette/vue-typescript";
import { Italic, ItalicOptions } from "@tiptap/extension-italic";
import { Extensions } from "@tiptap/vue-3";
import { BtButton } from "../../../../button";
import { BtPopover } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

interface Options {
    tiptap?: Partial<ItalicOptions>;
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-italic',
    components: [BtPopover, BtButton, IMaterialFormatItalic]
})
export default class BtFormTiptapItalic extends AbstractTiptapModule<Options> {
    /**
     * i18n configuration.
     */
    @Prop({ type: Object, default: I18nDefaults }) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Italic.configure(this.configuration.tiptap)];
    }

    @Expose() public toggle(): void {
        this.editor.chain().focus().toggleItalic().run();
    }
}
</script>

<template>
    <bt-button
        class="toolbar-button"
        @click="toggle()"
        :disabled="!enabled"
        :data-active="editor.isActive('italic') ? '' : null"
        v-bt-popover="{showDelay: 500, hideDelay: 0, content: i18n.popover}"
        v-if="editor"
    >
        <i-material-format-italic crop height="0.8rem"></i-material-format-italic>
    </bt-button>
</template>
