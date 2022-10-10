<script lang="ts">
import { ValueChangedFormEvent } from "@banquette/form/event/value-changed.form-event";
import { FormControl } from "@banquette/form/form-control";
import { FormGroupInterface } from "@banquette/form/form-group.interface";
import { FormFactory } from "@banquette/form/form.factory";
import { oncePerCycleProxy } from "@banquette/utils-misc/once-per-cycle-proxy";
import { capitalize } from "@banquette/utils-string/case/capitalize";
import { isObject } from "@banquette/utils-type/is-object";
import { And } from "@banquette/validation/type/and";
import { NotEmpty } from "@banquette/validation/type/not-empty";
import { Url } from "@banquette/validation/type/url";
import { IconMaterialImage } from "@banquette/vue-material-icons/image";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { ImageOptions } from "@tiptap/extension-image";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { ButtonComponent } from "../../../../button";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { VariantsDefault } from "./variants-default";
import { VariantsInterface } from "./variants.interface";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";
import { Image, BtImageOptions } from "./image.extension";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        image: {
            tiptap?: Partial<ImageOptions>
        } & BtImageOptions
    }
}

@Themeable()
@Component({
    name: 'bt-form-tiptap-image',
    components: [PopoverComponent, ButtonComponent, IconMaterialImage]
})
export default class ImageComponent extends AbstractTiptapModule<ModuleInterface["image"]> {
    /**
     * Sub components variants.
     */
    @Prop({type: Object, default: VariantsDefault}) public variants!: VariantsInterface;

    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    @Computed() public get availableSizes(): string[] {
        return isObject(this.configuration.sizes) ? Object.keys(this.configuration.sizes) : [];
    }

    @Expose() public form!: FormGroupInterface;
    @Expose() public dialogVisible: boolean = false;

    public beforeMount() {
        super.beforeMount();
        this.form = FormFactory.Create({
            href: new FormControl('', And(NotEmpty(this.i18n.hrefControlEmptyError), Url(this.i18n.hrefControlSyntaxError))),
            title: '',
            alt: '',
            width: '',
            height: '',
            size: new FormControl()
        }) as FormGroupInterface;
        this.form.onValueChanged(oncePerCycleProxy(this.$forceUpdateComputed, this));
    }

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Image.configure(this.configuration.tiptap)];
    }

    /**
     * Show the configuration dialog.
     */
    @Expose() public showDialog(): void {
        // const focusedLink = this.resolveFocusedLink();
        // if (focusedLink) {
        //     this.form.get('label').setValue(focusedLink.label);
        //     this.form.get('href').setValue(focusedLink.href);
        //     this.form.get('target').setValue(focusedLink.target);
        // } else {
        //     const selection = this.editor.view.state.selection;
        //     this.form.get('label').setValue(this.editor.state.doc.textBetween(selection.from, selection.to, ' '));
        //     this.form.get('href').reset();
        //     this.form.get('target').reset();
        // }
        this.dialogVisible = true;
    }

    @Expose() public apply(): boolean {
        if (!this.form.validate()) {
            return false;
        }
        this.editor.commands.setImage({ src: this.form.value.href });
        this.editor.chain().focus().setSize({
            width: this.form.value.width || null,
            height: this.form.value.height || null,
            size: this.form.value.size && this.form.value.size !== 'custom' ? this.form.value.size : null,
        }).run();
        return true;
    }

    @Expose() public remove(): void {

    }

    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<ModuleInterface["image"]> {
        return {
            sizes: {
                Small: {width: '250px', height: null},
                Normal: {width: null, height: null},
                Full: {width: '100%', height: null},
            }
        };
    }
}
</script>
<style src="./image.component.css"></style>
<template>

    <bt-button class="toolbar-button" @click="showDialog()" :disabled="!enabled" :data-active="editor.isActive('image') ? '' : null" v-if="editor">
        <i-material-image crop></i-material-image>
        <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
    </bt-button>
    <div class="bt-form-tiptap-image">
        <bt-dialog v-model="dialogVisible" :teleport="null" destroy-on-close>
            <template #header>{{ i18n.dialogTitle }}</template>
            <template #footer="{close}">
                <div>
                    <bt-button class="delete" :variant="variants.dialogDeleteButton" v-if="editor.isActive('link')" @click="remove(); close()">{{ i18n.deleteButton }}</bt-button>
                </div>
                <div class="buttons">
                    <bt-button class="cancel" :variant="variants.dialogCancelButton" @click="close()">{{ i18n.cancelButton }}</bt-button>
                    <bt-button class="validate" :variant="variants.dialogConfirmButton" :disabled="!form.valid" @click="apply() && close()">{{ i18n.confirmButton }}</bt-button>
                </div>
            </template>

            <div class="form-wrapper">
                <bt-form-text :form="form" control="href">
                    {{ i18n.hrefControlLabel }}
                    <template #help v-if="i18n.hrefControlHelp">
                        {{ i18n.hrefControlHelp }}
                    </template>
                </bt-form-text>
                <bt-form-select :form="form" control="size" :choices="availableSizes">
                    {{ i18n.sizeControlLabel }}
                    <template #choices>
                        <bt-form-select-choice value="custom">{{ i18n.customSize }}</bt-form-select-choice>
                    </template>
                    <template #help v-if="i18n.sizeControlHelp">
                        {{ i18n.sizeControlHelp }}
                    </template>
                </bt-form-select>
                <bt-form-text :form="form" control="width" v-if="form.value.size === 'custom'">
                    {{ i18n.widthControlLabel }}
                    <template #help v-if="i18n.widthControlHelp">
                        {{ i18n.widthControlHelp }}
                    </template>
                </bt-form-text>
                <bt-form-text :form="form" control="height" v-if="form.value.size === 'custom'">
                    {{ i18n.heightControlLabel }}
                    <template #help v-if="i18n.heightControlHelp">
                        {{ i18n.heightControlHelp }}
                    </template>
                </bt-form-text>
                <bt-form-text :form="form" control="title">
                    {{ i18n.titleControlLabel }}
                    <template #help v-if="i18n.titleControlHelp">
                        {{ i18n.titleControlHelp }}
                    </template>
                </bt-form-text>
                <bt-form-text :form="form" control="alt">
                    {{ i18n.altControlLabel }}
                    <template #help v-if="i18n.altControlHelp">
                        {{ i18n.altControlHelp }}
                    </template>
                </bt-form-text>
            </div>
        </bt-dialog>
    </div>
</template>
