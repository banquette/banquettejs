<script lang="ts">
import { IconMaterialFormatIndentDecrease } from "@banquette/vue-material-icons/format-indent-decrease";
import { IconMaterialFormatIndentIncrease } from "@banquette/vue-material-icons/format-indent-increase";
import { IconMaterialFormatListBulleted } from "@banquette/vue-material-icons/format-list-bulleted";
import { IconMaterialFormatListNumbered } from "@banquette/vue-material-icons/format-list-numbered";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BulletList, BulletListOptions } from "@tiptap/extension-bullet-list";
import { ListItem, ListItemOptions } from "@tiptap/extension-list-item";
import { OrderedList, OrderedListOptions } from "@tiptap/extension-ordered-list";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        listItem: {
            tiptap?: Partial<ListItemOptions>,
            bulletedList?: Partial<BulletListOptions>,
            orderedList?: Partial<OrderedListOptions>,
            showListBulleted?: boolean,
            showListNumbered?: boolean,
            showIdent?: boolean
        }
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-list-item',
    components: [
        PopoverComponent,
        ButtonComponent,
        IconMaterialFormatListBulleted,
        IconMaterialFormatListNumbered,
        IconMaterialFormatIndentIncrease,
        IconMaterialFormatIndentDecrease
    ]
})
export default class TextAlignComponent extends AbstractTiptapModule<ModuleInterface["listItem"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    @Computed() public get showListBulleted(): boolean {
        return !!this.configuration!.showListBulleted;
    }

    @Computed() public get showListNumbered(): boolean {
        return !!this.configuration!.showListNumbered;
    }

    @Computed() public get showIdent(): boolean {
        return !!this.configuration!.showIdent;
    }

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [
            BulletList.configure(this.configuration.bulletedList),
            OrderedList.configure(this.configuration.orderedList),
            ListItem.configure(this.configuration.tiptap)
        ];
    }

    @Expose() public toggleBulletedList(): void {
        this.editor.chain().focus().toggleBulletList().run();
    }

    @Expose() public toggleNumberedList(): void {
        this.editor.chain().focus().toggleOrderedList().run();
    }

    @Expose() public increaseIndent(): void {
        this.editor.chain().focus().sinkListItem('listItem').run();
    }

    @Expose() public decreaseIndent(): void {
        this.editor.chain().focus().liftListItem('listItem').run();
    }

    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["listItem"]> {
        return {
            showListBulleted: true,
            showListNumbered: true,
            showIdent: true
        };
    }
}
</script>
<template>
    <bt-button class="toolbar-button" @click="toggleBulletedList()" :data-active="editor.isActive('bulletList') ? '' : null"  v-if="editor && showListBulleted">
        <i-material-format-list-bulleted :size="null" width="1em" crop></i-material-format-list-bulleted>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.listBulletedPopover">{{ i18n.listBulletedPopover }}</bt-popover>
    </bt-button>
    <bt-button class="toolbar-button" @click="toggleNumberedList()" :data-active="editor.isActive('orderedList') ? '' : null"  v-if="editor && showListNumbered">
        <i-material-format-list-numbered :size="null" width="1em" crop></i-material-format-list-numbered>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.listNumberedPopover">{{ i18n.listNumberedPopover }}</bt-popover>
    </bt-button>
    <bt-button class="toolbar-button" @click="increaseIndent()" :disabled="!editor.can().sinkListItem('listItem')"  v-if="editor && showIdent">
        <i-material-format-indent-increase :size="null" width="1em" crop></i-material-format-indent-increase>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.indentIncreasePopover">{{ i18n.indentIncreasePopover }}</bt-popover>
    </bt-button>
    <bt-button class="toolbar-button" @click="decreaseIndent()" :disabled="!editor.can().liftListItem('listItem')"  v-if="editor && showIdent">
        <i-material-format-indent-decrease :size="null" width="1em" crop></i-material-format-indent-decrease>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.indentDecreasePopover">{{ i18n.indentDecreasePopover }}</bt-popover>
    </bt-button>
</template>
