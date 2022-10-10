<script lang="ts">
import { IconMaterialFormatQuote } from "@banquette/vue-material-icons/format-quote";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Blockquote, BlockquoteOptions } from "@tiptap/extension-blockquote";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";
import { ThemeConfiguration } from "./theme-configuration";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        blockquote: {
            tiptap?: Partial<BlockquoteOptions>
        }
    }
}

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-tiptap-blockquote',
    directives: [BindThemeDirective],
    components: [PopoverComponent, ButtonComponent, IconMaterialFormatQuote]
})
export default class BlockquoteComponent extends AbstractTiptapModule<ModuleInterface["blockquote"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

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
<style src="./blockquote.component.css"></style>
<template>
    <bt-button class="toolbar-button" @click="toggle()" :disabled="!enabled" :data-active="editor.isActive('blockquote') ? '' : null" v-if="editor" v-bt-bind-theme>
        <i-material-format-quote width="1em" height="0.8em" crop></i-material-format-quote>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
    </bt-button>
</template>
