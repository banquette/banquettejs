<script lang="ts">
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { IconMaterialFormatAlignCenter } from "@banquette/vue-material-icons/format-align-center";
import { IconMaterialFormatAlignJustify } from "@banquette/vue-material-icons/format-align-justify";
import { IconMaterialFormatAlignLeft } from "@banquette/vue-material-icons/format-align-left";
import { IconMaterialFormatAlignRight } from "@banquette/vue-material-icons/format-align-right";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { TextAlign, TextAlignOptions } from "@tiptap/extension-text-align";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        textAlign: {
            tiptap?: Partial<TextAlignOptions>
        }
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-text-align',
    components: [
        PopoverComponent,
        ButtonComponent,
        IconMaterialFormatAlignLeft,
        IconMaterialFormatAlignCenter,
        IconMaterialFormatAlignRight,
        IconMaterialFormatAlignJustify
    ]
})
export default class TextAlignComponent extends AbstractTiptapModule<ModuleInterface["textAlign"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    @Computed() public get alignLeft(): boolean {
        return ensureArray(this.configuration.tiptap!.alignments).indexOf('left') > -1;
    }

    @Computed() public get alignCenter(): boolean {
        return ensureArray(this.configuration.tiptap!.alignments).indexOf('center') > -1;
    }

    @Computed() public get alignRight(): boolean {
        return ensureArray(this.configuration.tiptap!.alignments).indexOf('right') > -1;
    }

    @Computed() public get alignJustify(): boolean {
        return ensureArray(this.configuration.tiptap!.alignments).indexOf('justify') > -1;
    }

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [TextAlign.configure(this.configuration.tiptap)];
    }

    @Expose() public toggle(alignment: string): void {
        if (!this.editor.isActive({textAlign: alignment})) {
            this.editor.chain().focus().setTextAlign(alignment).run();
        } else {
            this.editor.commands.unsetTextAlign();
        }
    }

    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["textAlign"]> {
        return {
            tiptap: {
                types: ['heading', 'paragraph'],
                alignments: ['left', 'center', 'right', 'justify'],
                defaultAlignment: 'left'
            }
        };
    }
}
</script>
<template>
    <bt-button class="toolbar-button" @click="toggle('left')" :data-active="editor.isActive({textAlign: 'left'}) ? '' : null"  v-if="editor && alignLeft">
        <i-material-format-align-left :size="null" width="1em" crop></i-material-format-align-left>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.alignLeftPopover">{{ i18n.alignLeftPopover }}</bt-popover>
    </bt-button>
    <bt-button class="toolbar-button" @click="toggle('center')" :data-active="editor.isActive({textAlign: 'center'}) ? '' : null"  v-if="editor && alignCenter">
        <i-material-format-align-center :size="null" width="1em" crop></i-material-format-align-center>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.alignCenterPopover">{{ i18n.alignCenterPopover }}</bt-popover>
    </bt-button>
    <bt-button class="toolbar-button" @click="toggle('right')" :data-active="editor.isActive({textAlign: 'right'}) ? '' : null"  v-if="editor && alignRight">
        <i-material-format-align-right :size="null" width="1em" crop></i-material-format-align-right>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.alignRightPopover">{{ i18n.alignRightPopover }}</bt-popover>
    </bt-button>
    <bt-button class="toolbar-button" @click="toggle('justify')" :data-active="editor.isActive({textAlign: 'justify'}) ? '' : null"  v-if="editor && alignJustify">
        <i-material-format-align-justify :size="null" width="1em" crop></i-material-format-align-justify>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.alignJustifyPopover">{{ i18n.alignJustifyPopover }}</bt-popover>
    </bt-button>
</template>
