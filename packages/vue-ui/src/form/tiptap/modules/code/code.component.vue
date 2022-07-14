<script lang="ts">
import { IconMaterialCode } from "@banquette/vue-material-icons/code";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { ModuleInterface } from "../../../";
import { Extensions } from "@tiptap/vue-3";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { Code, CodeOptions } from "@tiptap/extension-code";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        code: Partial<CodeOptions>
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-code',
    components: [PopoverComponent, ButtonComponent, IconMaterialCode]
})
export default class CodeComponent extends AbstractTiptapModule<ModuleInterface["code"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Code.configure(this.configuration)];
    }

    @Expose() public toggle(): void {
        this.editor.chain().focus().toggleCode().run();
    }
}
</script>
<style src="./code.component.css"></style>
<template>
    <bt-button class="toolbar-button" @click="toggle()" :disabled="!enabled" :data-active="editor.isActive('code') ? '' : null" v-if="editor">
        <i-material-code size="0.9em" crop></i-material-code>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
    </bt-button>
</template>
