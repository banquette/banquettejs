<script lang="ts">
import { IconMaterialRedo } from "@banquette/vue-material-icons/redo";
import { IconMaterialUndo } from "@banquette/vue-material-icons/undo";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { History, HistoryOptions } from "@tiptap/extension-history";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        history: {
            tiptap?: Partial<HistoryOptions>,
            showUndo?: boolean,
            showRedo?: boolean
        }
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-history',
    components: [PopoverComponent, ButtonComponent, IconMaterialUndo, IconMaterialRedo]
})
export default class HistoryComponent extends AbstractTiptapModule<ModuleInterface["history"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [History.configure(this.configuration.tiptap)];
    }

    @Expose() public undo(): void {
        this.editor.chain().focus().undo().run();
    }

    @Expose() public redo(): void {
        this.editor.chain().focus().redo().run();
    }

    protected getDefaultConfiguration(): Partial<ModuleInterface["history"]> {
        return {
            showUndo: true,
            showRedo: true
        };
    }
}
</script>
<template>
    <bt-button class="toolbar-button" @click="undo()" :disabled="!editor.can().undo()" v-if="editor && configuration.showUndo">
        <i-material-undo :size="null" width="1em" crop></i-material-undo>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.undoPopover">{{ i18n.undoPopover }}</bt-popover>
    </bt-button>
    <bt-button class="toolbar-button" @click="redo()" :disabled="!editor.can().redo()" v-if="editor && configuration.showRedo">
        <i-material-redo :size="null" width="1em" crop></i-material-redo>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.redoPopover">{{ i18n.redoPopover }}</bt-popover>
    </bt-button>
</template>
