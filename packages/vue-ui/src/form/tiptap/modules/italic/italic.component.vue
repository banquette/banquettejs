<script lang="ts">
import { IconMaterialFormatItalic } from "@banquette/vue-material-icons/format-italic";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { ModuleInterface } from "../../../";
import { Italic, ItalicOptions } from "@tiptap/extension-italic";
import { Extensions } from "@tiptap/vue-3";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        italic: {
            tiptap?: Partial<ItalicOptions>
        }
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-italic',
    components: [PopoverComponent, ButtonComponent, IconMaterialFormatItalic]
})
export default class ItalicComponent extends AbstractTiptapModule<ModuleInterface["italic"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

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
    <bt-button class="toolbar-button" @click="toggle()" :disabled="!enabled" :data-active="editor.isActive('italic') ? '' : null" v-if="editor">
        <i-material-format-italic crop></i-material-format-italic>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
    </bt-button>
</template>
