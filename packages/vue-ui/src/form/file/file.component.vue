<style src="./file.component.css" scoped></style>
<template src="./file.component.html" ></template>
<script lang="ts">
import { HttpMethod } from "@banquette/http/constants";
import { FormFile } from "@banquette/ui/form/file/form-file";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { Primitive } from "@banquette/utils-type/types";
import { IconClose } from "@banquette/vue-material-icons/icon-close";
import { IconDescription } from "@banquette/vue-material-icons/icon-description";
import { IconDone } from "@banquette/vue-material-icons/icon-done";
import { IconError } from "@banquette/vue-material-icons/icon-error";
import { IconFileUpload } from "@banquette/vue-material-icons/icon-file-upload";
import { IconPlayArrow } from "@banquette/vue-material-icons/icon-play-arrow";
import { IconStop } from "@banquette/vue-material-icons/icon-stop";
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
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-file',
    components: [BaseInputComponent, IconPlayArrow, IconStop, IconClose, IconFileUpload, IconDescription, IconDone, IconError],
    directives: [BindThemeDirective]
})
export default class FormFileComponent extends AbstractVueFormComponent<FileViewDataInterface, FileViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    @Import(BaseInputComposable, {
        label: 'label',
        placeholder: 'placeholder',
        help: 'help',
        floatingErrors: 'floatingErrors',
        floatingHelp: 'floatingHelp',
        debug: 'debug'
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


    // Override the type to get autocompletion in the view.
    @Expose() public v!: FileViewDataInterface;

    public beforeMount(): void {
        super.beforeMount();
        this.base.floatingLabel = false;
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
        this.$refs.input.click();
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
