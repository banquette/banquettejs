<script lang="ts">
import { IMaterialFormatQuote } from "@banquette/vue-material-icons";
import { Component, Expose, Prop, Themeable } from "@banquette/vue-typescript";
import { Blockquote, BlockquoteOptions } from "@tiptap/extension-blockquote";
import { Extensions } from "@tiptap/vue-3";
import { BtButton } from "../../../../button";
import { BtPopover } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

interface Options {
    tiptap?: Partial<BlockquoteOptions>;
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-blockquote',
    components: [BtPopover, BtButton, IMaterialFormatQuote]
})
export default class BtFormTiptapBlockquote extends AbstractTiptapModule<Options> {
    /**
     * i18n configuration.
     */
    @Prop({ type: Object, default: I18nDefaults }) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Blockquote.configure(this.configuration.tiptap)];
    }

    @Expose() public toggle(): void {
        this.editor.chain().focus().toggleBlockquote().run();
    }
}
</script>

<template>
    <bt-button
        class="toolbar-button"
        @click="toggle()"
        :disabled="!enabled"
        :data-active="editor.isActive('blockquote') ? '' : null"
        v-bt-popover="{showDelay: 500, hideDelay: 0, content: i18n.popover}"
        v-if="editor"
    >
        <i-material-format-quote crop height="0.8rem"></i-material-format-quote>
    </bt-button>
</template>
