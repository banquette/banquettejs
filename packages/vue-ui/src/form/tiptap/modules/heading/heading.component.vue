<script lang="ts">
import { Component, Expose, Prop, Themeable } from "@banquette/vue-typescript";
import { Heading, HeadingOptions, Level } from "@tiptap/extension-heading";
import { Extensions } from "@tiptap/vue-3";
import { BtPopover } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";
import { BtFormSelect } from "../../../select";
import { SelectedChoice } from "@banquette/ui";

interface Options {
    tiptap?: Partial<HeadingOptions>;
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-heading',
    components: [BtPopover, BtFormSelect]
})
export default class BtFormTiptapHeading extends AbstractTiptapModule<Options> {
    /**
     * i18n configuration.
     */
    @Prop({ type: Object, default: I18nDefaults }) public i18n!: I18nInterface;

    /**
     * The current heading level.
     */
    @Expose() public headingLevel: number | null = null;

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Heading.configure(this.configuration.tiptap)];
    }

    /**
     * Apply the selected heading level.
     */
    @Expose() public onHeadingSelectionChange(level: SelectedChoice): void {
        const headingLevel = Number(level.rawValue);
        if (headingLevel > 0) {
            this.editor.chain().focus().setHeading({ level: headingLevel as Level }).run();
        } else {
            this.editor.chain().focus().setParagraph().run();
        }
    }

    /**
     * Update heading level based on editor selection.
     */
    @Expose() public updateHeadingLevel(): void {
        for (let level = 1; level <= 6; level++) {
            if (this.editor.isActive('heading', { level })) {
                this.headingLevel = level;
                return;
            }
        }
        this.headingLevel = 0; // Default to paragraph
    }

    /**
     * Lifecycle hook: Before unmount.
     */
    @Expose() public beforeUnmount(): void {
        this.editor.off('selectionUpdate', this.updateHeadingLevel.bind(this));
        this.editor.off('transaction', this.updateHeadingLevel.bind(this));
    }

    protected onReady(): void {
        this.editor.on('selectionUpdate', this.updateHeadingLevel.bind(this));
        this.editor.on('transaction', this.updateHeadingLevel.bind(this));
        this.updateHeadingLevel();
    }
}
</script>

<template>
    <bt-form-select
        v-model="headingLevel"
        class="toolbar-button"
        :disabled="!enabled"
        v-if="editor"
        @change="onHeadingSelectionChange"
    >
        <template #choices>
            <bt-form-select-choice :value="0">{{ i18n.paragraph }}</bt-form-select-choice>
            <bt-form-select-choice :value="1"><h1>{{ i18n.heading1 }}</h1></bt-form-select-choice>
            <bt-form-select-choice :value="2"><h2>{{ i18n.heading2 }}</h2></bt-form-select-choice>
            <bt-form-select-choice :value="3"><h3>{{ i18n.heading3 }}</h3></bt-form-select-choice>
            <bt-form-select-choice :value="4"><h4>{{ i18n.heading4 }}</h4></bt-form-select-choice>
            <bt-form-select-choice :value="5"><h5>{{ i18n.heading5 }}</h5></bt-form-select-choice>
            <bt-form-select-choice :value="6"><h6>{{ i18n.heading6 }}</h6></bt-form-select-choice>
        </template>
    </bt-form-select>
</template>
