<script lang="ts">
import { IconMaterialFormatClear } from "@banquette/vue-material-icons/format-clear";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { ModuleInterface } from "../../../";
import { Extensions } from "@tiptap/vue-3";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        clearFormatting: never;
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-clear-formatting',
    components: [PopoverComponent, ButtonComponent, IconMaterialFormatClear]
})
export default class ClearFormattingComponent extends AbstractTiptapModule<ModuleInterface["clearFormatting"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [];
    }

    @Expose() public clearFormatting(): void {
        this.editor
            .chain()
            .focus()
            .clearNodes()
            .unsetAllMarks()
            .run()
    }
}
</script>
<template>
    <bt-button class="toolbar-button" @click="clearFormatting()" :disabled="!enabled">
        <i-material-format-clear crop></i-material-format-clear>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
    </bt-button>
</template>
