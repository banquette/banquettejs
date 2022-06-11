<style src="./file.component.css" scoped></style>
<template src="./file.component.html" ></template>
<script lang="ts">
import { HttpMethod } from "@banquette/http/constants";
import { FormFile } from "@banquette/ui/form/file/form-file";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { Primitive } from "@banquette/utils-type/types";
import { IconMaterialClose } from "@banquette/vue-icons/material/close";
import { IconMaterialDescription } from "@banquette/vue-icons/material/description";
import { IconMaterialDone } from "@banquette/vue-icons/material/done";
import { IconMaterialError } from "@banquette/vue-icons/material/error";
import { IconMaterialFileUpload } from "@banquette/vue-icons/material/file-upload";
import { IconMaterialPlayArrow } from "@banquette/vue-icons/material/play-arrow";
import { IconMaterialStop } from "@banquette/vue-icons/material/stop";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { BaseInputComponent } from "../base-input";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { FileViewDataInterface } from "./file-view-data.interface";
import { FileViewModel } from "./file.view-model";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-file',
    components: [BaseInputComponent, IconMaterialClose, IconMaterialDescription, IconMaterialDone, IconMaterialError, IconMaterialFileUpload, IconMaterialPlayArrow, IconMaterialStop],
    directives: [BindThemeDirective]
})
export default class FormFileComponent extends AbstractVueFormComponent<FileViewDataInterface, FileViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, {
        floatingLabel: false
    }) public base!: BaseInputComposable;

    /**
     * `true` to accept multiple files.
     */
    @Prop({type: Boolean, default: false}) public multiple!: boolean;

    /**
     * `true` to auto start uploads when files are queued.
     */
    @Prop({type: Boolean, default: true}) public autoStart!: boolean;

    /**
     * If `true`, files not uploaded through the file component will not be added to the form.
     */
    @Prop({type: Boolean, default: true}) public ignoreNonUploadedFiles!: boolean;

    /**
     * Validation pattern for file types.
     */
    @Prop({type: String, default: null}) public accept!: string|null;

    /**
     * Remote module props.
     */
    @Prop({type: String, default: null}) public url!: string|null;
    @Prop({type: String, default: null}) public endpoint!: string|null;
    @Prop({type: String, default: HttpMethod.POST, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.POST)}) public method!: HttpMethod;
    @Prop({type: Object, default: {}}) public urlParams!: Record<string, Primitive>;
    @Prop({type: Object, default: {}}) public headers!: Record<string, Primitive>;

    /**
     * i18n configuration.
     */
    @Prop({type: Object, default: I18nDefaults}) public i18n!: I18nInterface;

    // Override the type to get autocompletion in the view.
    @Expose() public v!: FileViewDataInterface;

    /**
     * @inheritDoc
     */
    public beforeMount(): void {
        super.beforeMount();
        this.base.floatingLabel = false;
    }

    /**
     * @inheritDoc
     */
    public mounted() {
        super.mounted();
        this.vm.input = this.$refs.input;
    }

    /**
     * @inheritDoc
     */
    protected setupViewModel(): FileViewModel {
        return new FileViewModel(this.proxy, this.base);
    }

    /**
     * Open the file explorer.
     */
    @Expose() public browse(): void {
        if (!this.v.control.disabled) {
            this.$refs.input.click();
        }
    }

    /**
     * @keydown
     */
    @Expose() public onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' && event.target === this.$el) {
            event.preventDefault();
            event.stopPropagation();
            this.browse();
        }
    }

    /**
     * Expect to be called by the `change` event listener on a file input.
     */
    @Expose() public onFileSelectionChange(event: Event): void {
        this.vm.onFileSelectionChange(event);
    }

    /**
     * Cancel the upload a file if still uploading or in queue and
     * remove it from the form control's value.
     */
    @Expose() public cancel(file: FormFile): void {
        this.vm.cancel(file);
    }

    /**
     * Cancel the upload a file but keep it in queue.
     * Will have to effect if the file is not currently uploading.
     */
    @Expose() public pause(file: FormFile): void {
        this.vm.pause(file);
    }

    /**
     * Start the upload of a file.
     */
    @Expose() public start(file: FormFile): void {
        this.vm.start(file);
    }

    @Watch(['multiple', 'autoStart', 'accept', 'ignoreNonUploadedFiles'], {immediate: ImmediateStrategy.BeforeMount})
    private syncConfigurationProps(): void {
        this.v.multiple = this.multiple;
        this.v.accept = this.accept;
        this.vm.autoStartUpload = this.autoStart;
        this.vm.ignoreNonUploadedFiles = this.ignoreNonUploadedFiles;
    }

    @Watch(['url', 'endpoint', 'method', 'urlParams', 'headers'], {immediate: ImmediateStrategy.BeforeMount})
    private syncRemoteConfiguration(): void {
        this.vm.remote.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            headers: this.headers
        });
    }
}
</script>
