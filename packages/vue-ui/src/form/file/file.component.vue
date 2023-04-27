<style src="./file.component.css" scoped></style>
<template src="./file.component.html" ></template>
<script lang="ts">
import { HttpMethod } from "@banquette/http";
import { FormFile } from "@banquette/ui";
import { ensureInEnum } from "@banquette/utils-array";
import { humanSizeToByteCount } from "@banquette/utils-string";
import { isString } from "@banquette/utils-type";
import { Primitive } from "@banquette/utils-type";
import { IMaterialClose } from "@banquette/vue-material-icons";
import { IMaterialDescription } from "@banquette/vue-material-icons";
import { IMaterialDone } from "@banquette/vue-material-icons";
import { IMaterialError } from "@banquette/vue-material-icons";
import { IMaterialFileUpload } from "@banquette/vue-material-icons";
import { IMaterialPlayArrow } from "@banquette/vue-material-icons";
import { IMaterialStop } from "@banquette/vue-material-icons";
import { Component } from "@banquette/vue-typescript";
import { Expose } from "@banquette/vue-typescript";
import { Import } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { Themeable } from "@banquette/vue-typescript";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript";
import { BindThemeDirective } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { BtAbstractVueForm } from "../abstract-vue-form.component";
import { BtFormBaseInput } from "../base-input";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { FileViewDataInterface } from "./file-view-data.interface";
import { FileViewModel } from "./file.view-model";
import { I18nDefaults } from "./i18n-defaults";
import { I18nInterface } from "./i18n.interface";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-file',
    components: [BtFormBaseInput, IMaterialClose, IMaterialDescription, IMaterialDone, IMaterialError, IMaterialFileUpload, IMaterialPlayArrow, IMaterialStop],
    directives: [BindThemeDirective]
})
export default class BtFormFile extends BtAbstractVueForm<FileViewDataInterface, FileViewModel> {
    // To get autocompletion in the view.
    declare v: FileViewDataInterface;

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
    @Prop({type: String as PropType<string|null>, default: null}) public accept!: string|null;

    /**
     * Limit the size of individual files.
     */
    @Prop({type: [String, Number] as PropType<number|null>, default: null, transform: (v) => isString(v) ? humanSizeToByteCount(v) : v})
    public maxIndividualSize!: number|null;

    /**
     * Limit the total size of all uploaded files cumulated.
     */
    @Prop({type: [String, Number], default: null, transform: (v) => isString(v) ? humanSizeToByteCount(v) : v})
    public maxTotalSize!: number|null;

    /**
     * Remote module props.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public url!: string|null;
    @Prop({type: String as PropType<string|null>, default: null}) public endpoint!: string|null;
    @Prop({type: String as PropType<HttpMethod>, default: HttpMethod.POST, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.POST)}) public method!: HttpMethod;
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public urlParams!: Record<string, Primitive>;
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public headers!: Record<string, Primitive>;

    /**
     * i18n configuration.
     */
    @Prop({type: Object as PropType<I18nInterface>, default: I18nDefaults}) public i18n!: I18nInterface;

    /**
     * @inheritDoc
     */
    public beforeMount(): void {
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
        return new FileViewModel(this.proxy, this.base, this.i18n);
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

    @Watch(['multiple', 'autoStart', 'accept', 'maxIndividualSize', 'maxTotalSize', 'ignoreNonUploadedFiles'], {immediate: ImmediateStrategy.BeforeMount})
    private syncConfigurationProps(): void {
        this.vm.maxIndividualSize = this.maxIndividualSize;
        this.vm.maxTotalSize = this.maxTotalSize;
        this.vm.multiple = this.multiple;
        this.vm.accept = this.accept;
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
