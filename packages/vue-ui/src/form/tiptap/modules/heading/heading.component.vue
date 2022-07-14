<script lang="ts">
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { IconMaterialFormatClear } from "@banquette/vue-material-icons/format-clear";
import { IconMaterialTitle } from "@banquette/vue-material-icons/title";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Heading, HeadingOptions, Level } from "@tiptap/extension-heading";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { ButtonComponent } from "../../../../button";
import { DropdownComponent } from "../../../../dropdown";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        heading: {
            tiptap?: Partial<HeadingOptions>
        }
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-heading',
    components: [PopoverComponent, ButtonComponent, DropdownComponent, IconMaterialTitle, IconMaterialFormatClear]
})
export default class HeadingComponent extends AbstractTiptapModule<ModuleInterface["heading"]> {
    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    @Computed() public get availableLevels(): Level[] {
        return ensureArray(this.configuration.tiptap?.levels);
    }

    @Expose() public selectedLevel: Level|null = null;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Heading.configure(this.configuration.tiptap)];
    }

    @Expose() public toggleHeading(level: Level): void {
        this.editor.chain().focus().setHeading({level}).run();
    }

    @Expose() public unsetHeading(): void {
        for (const level of this.availableLevels) {
            if (this.editor.isActive('heading', {level})) {
                this.editor.commands.toggleHeading({level});
            }
        }
    }

    protected getDefaultConfiguration(): Partial<ModuleInterface["heading"]> {
        return {
            tiptap: {
                levels: [1, 2, 3, 4, 5, 6]
            }
        };
    }
}
</script>
<style src="./heading.component.css" scoped></style>
<template>
    <bt-button :disabled="!enabled" class="bt-form-tiptap-heading toolbar-button" v-if="editor">
        <i-material-title width="1em" crop></i-material-title>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
        <template #toggle="{close}">
            <bt-dropdown class="bt-form-tiptap-heading-dropdown">
                <bt-dropdown-item
                    v-for="level in availableLevels"
                    :data-active="editor.isActive('heading', { level }) ? '' : null"
                    class="heading"
                    @click="toggleHeading(level); close()"
                >
                    <component :is="'h' + level">
                        {{ i18n.headingTitle.replace('{level}', level) }}
                    </component>
                    <div class="addons">
                        <i-material-check class="checked"></i-material-check>
                    </div>
                </bt-dropdown-item>
                <bt-dropdown-divider></bt-dropdown-divider>
                <bt-dropdown-item @click="unsetHeading(); close()">
                    <i-material-format-clear crop></i-material-format-clear> {{ i18n.resetButton }}
                </bt-dropdown-item>
            </bt-dropdown>
        </template>
    </bt-button>
</template>
