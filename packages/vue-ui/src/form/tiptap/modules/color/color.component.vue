<script lang="ts">
import { IconMaterialArrowDropDown } from "@banquette/vue-material-icons/arrow-drop-down";
import { IconMaterialFormatColorReset } from "@banquette/vue-material-icons/format-color-reset";
import { IconMaterialTextFormat } from "@banquette/vue-material-icons/text-format";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Highlight, HighlightOptions } from "@tiptap/extension-highlight";
import { Color, ColorOptions } from "@tiptap/extension-color";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../..";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { VariantsDefault } from "./variants-default";
import { VariantsInterface } from "./variants.interface";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";
import { ThemeConfiguration } from "./theme-configuration";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        color: {
            color?: Partial<ColorOptions>,
            highlight?: Partial<HighlightOptions>,
            textColors?: string[][],
            backgroundColors?: string[][]
        }
    }
}

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-tiptap-color',
    directives: [BindThemeDirective],
    components: [ButtonComponent, PopoverComponent, IconMaterialTextFormat, IconMaterialArrowDropDown, IconMaterialFormatColorReset]
})
export default class UnderlineComponent extends AbstractTiptapModule<ModuleInterface["color"]> {
    /**
     * Sub components variants.
     */
    @Prop({type: Object, default: VariantsDefault}) public variants!: VariantsInterface;

    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    @Computed() public get textColorsPalettes(): string[][] {
        return this.configuration.textColors || [];
    }

    @Computed() public get backgroundColorsPalettes(): string[][] {
        return this.configuration.backgroundColors || [];
    }

    @Computed() public get hasBackgroundColorsPalettes(): boolean {
        return this.backgroundColorsPalettes.reduce((acc: number, item: string[]) => {
            acc += item.length;
            return acc;
        }, 0) > 0;
    }

    @Computed() public get hasTextColorsPalettes(): boolean {
        return this.textColorsPalettes.reduce((acc: number, item: string[]) => {
            acc += item.length;
            return acc;
        }, 0) > 0;
    }

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [
            Highlight.configure(this.configuration.highlight),
            Color.configure(this.configuration.color)
        ];
    }

    @Expose() public setColor(color: string): void {
        this.editor.chain().focus().setColor(color).run();
    }

    @Expose() public unsetColor(): void {
        this.editor.chain().focus().unsetColor().run();
    }

    @Expose() public setHighlight(color: string): void {
        this.editor.chain().focus().setHighlight({color}).run();
    }

    @Expose() public unsetHighlight(): void {
        this.editor.chain().focus().unsetHighlight().run();
    }

    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["color"]> {
        return {
            highlight: {
                multicolor: true
            },
            textColors: [
                ['#000000', '#0d0d0d', '#1a1a1a', '#282828', '#565656', '#969696', '#d5d5d5', '#ffffff'],
                ['#ee4d4d', '#ff884d', '#ffc44d', '#8bc94d', '#4dc4ff', '#5e94ff', '#a071ff', '#ff4da5'],
                ['#fcdbdb', '#ffe7db', '#fff3db', '#e8f4db', '#dbf3ff', '#dfeaff', '#ece3ff', '#ffdbed'],
                ['#f7a6a6', '#ffc4a6', '#ffe2a6', '#c5e4a6', '#a6e2ff', '#afcaff', '#d0b8ff', '#ffa6d2'],
                ['#f17171', '#ffa071', '#ffd071', '#a2d471', '#71d0ff', '#7ea9ff', '#b38dff', '#ff71b7'],
                ['#d64545', '#e67a45', '#e6b045', '#7db545', '#45b0e6', '#5585e6', '#9066e6', '#e64595'],
                ['#8f2e2e', '#99522e', '#99762e', '#53792e', '#2e7699', '#385999', '#604499', '#992e63'],
                ['#471717', '#4c2917', '#4c3b17', '#2a3c17', '#173b4c', '#1c2c4c', '#30224c', '#4c1731'],
            ],
            backgroundColors: [
                ['#000000', '#0d0d0d', '#1a1a1a', '#282828', '#565656', '#969696', '#d5d5d5', '#ffffff'],
                ['#ee4d4d', '#ff884d', '#ffc44d', '#8bc94d', '#4dc4ff', '#5e94ff', '#a071ff', '#ff4da5'],
                ['#fcdbdb', '#ffe7db', '#fff3db', '#e8f4db', '#dbf3ff', '#dfeaff', '#ece3ff', '#ffdbed'],
                ['#f7a6a6', '#ffc4a6', '#ffe2a6', '#c5e4a6', '#a6e2ff', '#afcaff', '#d0b8ff', '#ffa6d2'],
                ['#f17171', '#ffa071', '#ffd071', '#a2d471', '#71d0ff', '#7ea9ff', '#b38dff', '#ff71b7'],
                ['#d64545', '#e67a45', '#e6b045', '#7db545', '#45b0e6', '#5585e6', '#9066e6', '#e64595'],
                ['#8f2e2e', '#99522e', '#99762e', '#53792e', '#2e7699', '#385999', '#604499', '#992e63'],
                ['#471717', '#4c2917', '#4c3b17', '#2a3c17', '#173b4c', '#1c2c4c', '#30224c', '#4c1731'],
            ]
        };
    }
}
</script>
<style src="./color.component.css"></style>
<template>
    <bt-button
        v-if="editor"
        v-bt-bind-theme
        :disabled="!enabled"
        class="bt-form-tiptap-color toolbar-button"
    >
        <i-material-text-format crop></i-material-text-format>
        <i-material-arrow-drop-down crop width="0.8em"></i-material-arrow-drop-down>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>

        <template #toggle="{close}">
            <bt-dropdown class="bt-form-tiptap-color-dropdown">
                <div class="wrapper">
                    <div class="column" v-if="hasTextColorsPalettes">
                        <span class="title">{{ i18n.textColorTitle }}</span>
                        <div class="palette" v-for="palette in textColorsPalettes">
                            <a class="color"
                               v-for="color in palette"
                               :data-active="editor.isActive('textStyle', {color}) ? '' : null"
                               :style="{backgroundColor: color}"
                               @click="setColor(color); close()"></a>
                        </div>
                        <bt-button :variant="variants.resetColorButton" @click="unsetColor(); close()">
                            <i-material-format-color-reset crop></i-material-format-color-reset> {{ i18n.textColorReset }}
                        </bt-button>
                    </div>
                    <div class="column" v-if="hasBackgroundColorsPalettes">
                        <span class="title">{{ i18n.backgroundColorTitle }}</span>
                        <div class="palette" v-for="palette in backgroundColorsPalettes">
                            <a class="color"
                               v-for="color in palette"
                               :data-active="editor.isActive('highlight', {color}) ? '' : null"
                               :style="{backgroundColor: color}"
                               @click="setHighlight(color); close()"></a>
                        </div>
                        <bt-button :variant="variants.resetBackgroundButton" @click="unsetHighlight(); close()">
                            <i-material-format-color-reset crop></i-material-format-color-reset> {{ i18n.backgroundColorReset }}
                        </bt-button>
                    </div>
                    <div class="column" v-if="!hasTextColorsPalettes && !hasBackgroundColorsPalettes">
                        <span class="title">{{ i18n.emptyTitle }}</span>
                    </div>
                </div>
            </bt-dropdown>
        </template>
    </bt-button>
</template>
