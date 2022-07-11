<script lang="ts">
import { oncePerCycleProxy } from "@banquette/utils-misc/once-per-cycle-proxy";
import { IconMaterialWarning } from "@banquette/vue-icons/material/warning";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { EditorEvents } from "@tiptap/core/dist/packages/core/src/types";
import { FontFamily, FontFamilyOptions } from "@tiptap/extension-font-family";
import { TextStyle } from "@tiptap/extension-text-style";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../..";
import { ButtonComponent } from "../../../../button";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        fontFamily: Partial<FontFamilyOptions> & {
            availableFonts: string[];
        }
    }
}

@Component({
    name: 'bt-form-tiptap-font-family',
    components: [ButtonComponent, IconMaterialWarning]
})
export default class FontFamilyComponent extends AbstractTiptapModule<ModuleInterface['fontFamily']> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    @Expose() public selectedFont: string = '';

    @Computed() public get availableFonts(): Array<{font: string, available: boolean}> {
        return this.configuration.availableFonts.reduce((arr, font: string) => {
            arr.push({font, available: document.fonts.check(`1rem ${font}`)});
            return arr;
        }, [] as Array<{font: string, available: boolean}>);
    }

    private lastCursorPosition: number = -Infinity;

    /**
     * @inheritDoc
     */
    public beforeMount() {
        super.beforeMount();
        this.selectedFont = this.i18n.defaultFont;
    }

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [TextStyle, FontFamily];
    }

    @Expose() public setFont(font: string): void {
        this.editor.chain().focus().setFontFamily(font).run();
        this.setSelectedFont(font);
    }

    @Expose() public unsetFont(): void {
        this.editor.commands.unsetFontFamily();
        this.resetSelectedFont();
    }

    @Expose() public toggleFont(font: string): void {
        if (!this.editor.isActive('font-family')) {
           this.setFont(font);
        } else {
            this.unsetFont();
        }
    }

    @Expose() public setSelectedFont(font: string): boolean {
        this.selectedFont = font;
        return true;
    }

    @Expose() public resetSelectedFont(): boolean {
        this.selectedFont = this.i18n.defaultFont;
        return false;
    }

    @Expose() public isActive(type: string, params: any): boolean {
        return this.editor.isActive(type, params);
    }

    /**
     * @inheritDoc
     */
    public onTransaction = oncePerCycleProxy((props: EditorEvents["transaction"]) => {
        super.onTransaction(props);
        if (this.editor.state.selection.to !== this.lastCursorPosition) {
            let i;
            for (i = 0; i < this.availableFonts.length; ++i) {
                if (this.editor.isActive('textStyle', {fontFamily: this.availableFonts[i].font})) {
                    this.setSelectedFont(this.availableFonts[i].font);
                    break;
                }
            }
            if (i >= this.availableFonts.length) {
                this.resetSelectedFont();
            }
            this.lastCursorPosition = this.editor.state.selection.to;
        }
    });

    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["fontFamily"]> {
        return {
            availableFonts: [
                'Arial',
                'Arial Black',
                'Verdana',
                'Tahoma',
                'Trebuchet MS',
                'Impact',
                'Times New Roman',
                'Didot',
                'Georgia',
                'American Typewriter',
                'Andalé Mono',
                'Courier',
                'Lucida Console',
                'Monaco',
                'Bradley Hand',
                'Brush Script MT',
                'Luminari',
                'Comic Sans MS'
            ]
        }
    }
}
</script>
<style src="./font-family.component.css"></style>
<template>
    <bt-button :disabled="!enabled" class="bt-form-tiptap-font-family toolbar-button" v-if="editor">
        {{ selectedFont }}
        <i-material-arrow-drop-down crop size="0.3em"></i-material-arrow-drop-down>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
        <template #toggle="{close}">
            <bt-dropdown class="bt-form-tiptap-font-family-dropdown">
                <bt-dropdown-item
                    v-for="(item, index) in availableFonts"
                    :style="{fontFamily: item.font}"
                    :class="{missing: !item.available, focused: !index || selectedFont === item.font}"
                    class="font"
                    @click="toggleFont(item.font); close()"
                >
                    <span>
                        {{ item.font }}
                    </span>
                    <div class="addons">
                        <i-material-check v-if="item.font === selectedFont"></i-material-check>
                        <i-material-warning v-if="!item.available"></i-material-warning>
                        <bt-popover teleport="body" :show-delay="500" :hide-delay="0" placement="left" v-if="!item.available">
                            <span v-html="i18n.missingPopover"></span>
                        </bt-popover>
                    </div>
                </bt-dropdown-item>
            </bt-dropdown>
        </template>
    </bt-button>
</template>
