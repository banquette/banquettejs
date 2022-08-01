<script lang="ts">
import { IconMaterialFormatClear } from "@banquette/vue-material-icons/format-clear";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { CharacterCount, CharacterCountOptions } from "@tiptap/extension-character-count";
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
        characterCount: {
            tiptap?: Partial<CharacterCountOptions>,
            showCharacters?: boolean,
            showWords?: boolean
        };
    }
}

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-tiptap-character-count',
    directives: [BindThemeDirective],
    components: [PopoverComponent, ButtonComponent, IconMaterialFormatClear]
})
export default class CharacterCountComponent extends AbstractTiptapModule<ModuleInterface["characterCount"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    @Computed() public get charactersText(): string {
        if (!this.editor) {
            return '';
        }
        return this.i18n.charactersText
            .replace('{current}', this.editor.storage.characterCount.characters())
            .replace('{limit}', String(this.configuration.tiptap!.limit));
    }

    @Computed() public get wordsText(): string {
        if (!this.editor) {
            return '';
        }
        return this.i18n.wordsText.replace('{count}', this.editor.storage.characterCount.words());
    }

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [CharacterCount.configure(this.configuration.tiptap)];
    }

    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["characterCount"]> {
        return {
            tiptap: {limit: 240},
            showCharacters: true,
            showWords: false,
        };
    }
}
</script>
<style src="./character-count.component.css" scoped></style>
<template>
    <div class="bt-form-tiptap-character-count" v-bt-bind-theme>
        <div v-if="configuration.showCharacters">{{ charactersText }}</div>
        <div v-if="configuration.showWords">{{ wordsText }}</div>
    </div>
</template>
