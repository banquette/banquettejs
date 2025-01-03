<script lang="ts">
import { IMaterialFormatUnderlined } from "@banquette/vue-material-icons";
import { Component, Expose, Prop, Themeable } from "@banquette/vue-typescript";
import { Underline, UnderlineOptions } from "@tiptap/extension-underline";
import { Extensions } from "@tiptap/vue-3";
import { BtButton } from "../../../../button";
import { PopoverDirective } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

interface Options {
    tiptap?: Partial<UnderlineOptions>;
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-underline',
    directives: [PopoverDirective],
    components: [BtButton, IMaterialFormatUnderlined]
})
export default class BtFormTiptapUnderline extends AbstractTiptapModule<Options> {
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
    <bt-button
        class="toolbar-button"
        @click="toggle()"
        :disabled="!enabled"
        :data-active="editor.isActive('underline') ? '' : null"
        v-bt-popover="{showDelay: 500, hideDelay: 0, content: i18n.popover}"
        v-if="editor"
    >
        <i-material-format-underlined crop height="0.8rem"></i-material-format-underlined>
    </bt-button>
</template>
