<script lang="ts">
import { IMaterialFormatBold } from "@banquette/vue-material-icons";
import { Component, Expose, Prop, Themeable } from "@banquette/vue-typescript";
import { Bold, BoldOptions } from "@tiptap/extension-bold";
import { Extensions } from "@tiptap/vue-3";
import { BtButton } from "../../../../button";
import { PopoverDirective } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

interface Options {
    tiptap?: Partial<BoldOptions>;
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-bold',
    directives: [PopoverDirective],
    components: [BtButton, IMaterialFormatBold]
})
export default class BtFormTiptapBold extends AbstractTiptapModule<Options> {
    /**
     * i18n configuration.
     */
    @Prop({ type: Object, default: I18nDefaults }) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Bold.configure(this.configuration.tiptap)];
    }

    @Expose() public toggle(): void {
        this.editor.chain().focus().toggleBold().run();
    }
}
</script>

<template>
    <bt-button
        class="toolbar-button"
        @click="toggle()"
        :disabled="!enabled"
        :data-active="editor.isActive('bold') ? '' : null"
        v-if="editor"
        v-bt-popover="{showDelay: 500, hideDelay: 0, content: i18n.popover}"
    >
        <i-material-format-bold crop height="0.8rem"></i-material-format-bold>
    </bt-button>
</template>
