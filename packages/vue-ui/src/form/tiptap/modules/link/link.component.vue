<script lang="ts">
import { FormControl } from "@banquette/form/form-control";
import { FormGroupInterface } from "@banquette/form/form-group.interface";
import { FormFactory } from "@banquette/form/form.factory";
import { oncePerCycleProxy } from "@banquette/utils-misc/once-per-cycle-proxy";
import { proxy } from "@banquette/utils-misc/proxy";
import { trim } from "@banquette/utils-string/format/trim";
import { And } from "@banquette/validation/type/and";
import { NotEmpty } from "@banquette/validation/type/not-empty";
import { Url } from "@banquette/validation/type/url";
import { IconMaterialLink } from "@banquette/vue-material-icons/link";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { ModuleInterface } from "../../../";
import { EditorEvents } from "@tiptap/core/dist/packages/core/src/types";
import { Link, LinkOptions } from "@tiptap/extension-link";
import { Extensions } from "@tiptap/vue-3";
import { ButtonComponent } from "../../../../button";
import { DialogComponent } from "../../../../dialog";
import { PopoverComponent } from "../../../../popover";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";
import { ThemeConfiguration } from "./theme-configuration";
import { VariantsDefault } from "./variants-default";
import { VariantsInterface } from "./variants.interface";

declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        link: {
            tiptap?: Partial<LinkOptions>
        }
    }
}

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-tiptap-link',
    directives: [BindThemeDirective],
    components: [PopoverComponent, ButtonComponent, DialogComponent, IconMaterialLink]
})
export default class LinkComponent extends AbstractTiptapModule<ModuleInterface["link"]> {
    /**
     * Sub components variants.
     */
    @Prop({type: Object, default: VariantsDefault}) public variants!: VariantsInterface;

    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    @Computed() public get isFormValid(): boolean {
        return this.form.valid;
    }

    @Expose() public form!: FormGroupInterface;
    @Expose() public dialogVisible: boolean = false;

    public beforeMount() {
        super.beforeMount();
        this.form = FormFactory.Create({
            label: '',
            href: new FormControl('', And(NotEmpty(this.i18n.hrefControlEmptyError), Url(this.i18n.hrefControlSyntaxError))),
            target: new FormControl('_blank')
        }) as FormGroupInterface;
        this.form.onValueChanged(oncePerCycleProxy(this.$forceUpdateComputed, this));
    }

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [Link.configure(this.configuration.tiptap)];
    }

    public onTransaction = (() => {
        let lastRemovedPos: number|null = null;
        return (props: EditorEvents["transaction"]) => {
            if (props.transaction.selection.empty && props.transaction.selection.$from.pos !== lastRemovedPos) {
                const focusedLink = this.resolveFocusedLink();
                if (focusedLink && focusedLink.pos + focusedLink.label.length === props.transaction.selection.$from.pos) {
                    window.setTimeout(proxy(this.remove, this));
                    lastRemovedPos = props.transaction.selection.$from.pos;
                }
            } else {
                lastRemovedPos = null;
            }
        };
    })();

    /**
     * Show the configuration dialog.
     */
    @Expose() public showDialog(): void {
        const focusedLink = this.resolveFocusedLink();
        if (focusedLink) {
            this.form.get('label').setValue(focusedLink.label);
            this.form.get('href').setValue(focusedLink.href);
            this.form.get('target').setValue(focusedLink.target);
        } else {
            const selection = this.editor.view.state.selection;
            this.form.get('label').setValue(this.editor.state.doc.textBetween(selection.from, selection.to, ' '));
            this.form.get('href').reset();
            this.form.get('target').reset();
        }
        this.dialogVisible = true;
    }

    /**
     * Apply the configuration into the wysiwyg.
     */
    @Expose() public apply(): boolean {
        if (!this.form.validate()) {
            return false;
        }
        const focusedLink = this.resolveFocusedLink();
        if (focusedLink) {
            this.editor.commands.deleteRange({from: focusedLink.pos, to: focusedLink.pos + focusedLink.label.length});
        } else if (!this.editor.state.selection.empty) {
            this.editor.commands.deleteRange({from: this.editor.state.selection.from, to: this.editor.state.selection.to});
        }
        let label = trim(this.form.value.label);
        if (!label.length) {
            label = this.form.value.href;
        }
        const selectionAnchor = this.editor.state.selection.anchor;
        this.editor.commands.insertContentAt(selectionAnchor, label, {updateSelection: true});
        this.editor.commands.setTextSelection({from: selectionAnchor, to: selectionAnchor + label.length});
        this.editor
            .chain()
            .focus()
            .extendMarkRange('link')
            .setLink({href: String(this.form.value.href), target: this.form.value.target})
            .run();
        return true;
    }

    @Expose() public remove(): void {
        this.editor.commands.unsetLink();
    }

    /**
     * @inheritDoc
     */
    protected getDefaultConfiguration(): Partial<any> {
        return {openOnClick: false};
    }

    private resolveFocusedLink(): {label: string, href: string, target: string, pos: number}|null {
        let label: string = '';
        let href: string = '';
        let target: string = '_blank';
        for (const candidate of [
            this.editor.state.selection.$from.nodeBefore,
            this.editor.state.selection.$from.nodeAfter
        ]) {
            if (candidate) {
                for (const mark of candidate.marks) {
                    if (mark.type.name === 'link') {
                        label += candidate.text;
                        href = mark.attrs.href;
                        if (mark.attrs.target) {
                            target = mark.attrs.target;
                        }
                        break ;
                    }
                }
            }
        }
        return label.length > 0 ? {
            label,
            href,
            target,
            pos: this.editor.state.selection.$anchor.pos - (
                this.editor.state.selection.$from.nodeBefore ? this.editor.state.selection.$from.nodeBefore.nodeSize : 0
            )
        } : null;
    }
}
</script>
<style src="./link.component.css" scoped></style>
<template>
    <div class="bt-form-tiptap-link" v-bt-bind-theme>
        <bt-button class="toolbar-button" @click="showDialog()" :disabled="!enabled" :data-active="editor.isActive('link') ? '' : null" v-if="editor">
            <i-material-link width="1em" height="0.75em" crop></i-material-link>
            <bt-popover :show-delay="500" :hide-delay="0" v-if="i18n.popover">{{ i18n.popover }}</bt-popover>
        </bt-button>
        <bt-dialog v-model="dialogVisible" :teleport="null" destroy-on-close>
            <template #header>{{ i18n.dialogTitle }}</template>
            <template #footer="{close}">
                <div>
                    <bt-button class="delete" :variant="variants.dialogDeleteButton" v-if="editor.isActive('link')" @click="remove(); close()">{{ i18n.deleteButton }}</bt-button>
                </div>
                <div class="buttons">
                    <bt-button class="cancel" :variant="variants.dialogCancelButton" @click="close()">{{ i18n.cancelButton }}</bt-button>
                    <bt-button class="validate" :variant="variants.dialogConfirmButton" :disabled="!isFormValid" @click="apply() && close()">{{ i18n.confirmButton }}</bt-button>
                </div>
            </template>

            <div class="form-wrapper">
                <bt-form-text :form="form" control="label">
                    {{ i18n.labelControlLabel }}
                    <template #help v-if="i18n.labelControlHelp">
                        {{ i18n.labelControlHelp }}
                    </template>
                </bt-form-text>
                <bt-form-text :form="form" control="href">
                    {{ i18n.hrefControlLabel }}
                    <template #help v-if="i18n.hrefControlHelp">
                        {{ i18n.hrefControlHelp }}
                    </template>
                </bt-form-text>
                <bt-form-select :form="form" control="target" :choices="['_self', '_blank', '_parent', '_top']">
                    {{ i18n.targetControlLabel }}
                    <template #help v-if="i18n.targetControlHelp">
                        {{ i18n.targetControlHelp }}
                    </template>
                </bt-form-select>
            </div>
        </bt-dialog>
    </div>
</template>
