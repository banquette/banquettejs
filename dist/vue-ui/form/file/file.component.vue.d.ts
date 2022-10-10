import { HttpMethod } from "@banquette/http/constants";
import { FormFile } from "@banquette/ui/form/file/form-file";
import { Primitive } from "@banquette/utils-type/types";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { FileViewDataInterface } from "./file-view-data.interface";
import { FileViewModel } from "./file.view-model";
import { I18nInterface } from "./i18n.interface";
export default class FormFileComponent extends AbstractVueFormComponent<FileViewDataInterface, FileViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    base: BaseInputComposable;
    /**
     * `true` to accept multiple files.
     */
    multiple: boolean;
    /**
     * `true` to auto start uploads when files are queued.
     */
    autoStart: boolean;
    /**
     * If `true`, files not uploaded through the file component will not be added to the form.
     */
    ignoreNonUploadedFiles: boolean;
    /**
     * Validation pattern for file types.
     */
    accept: string | null;
    /**
     * Limit the size of individual files.
     */
    maxIndividualSize: number | null;
    /**
     * Limit the total size of all uploaded files cumulated.
     */
    maxTotalSize: number | null;
    /**
     * Remote module props.
     */
    url: string | null;
    endpoint: string | null;
    method: HttpMethod;
    urlParams: Record<string, Primitive>;
    headers: Record<string, Primitive>;
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    v: FileViewDataInterface;
    /**
     * @inheritDoc
     */
    beforeMount(): void;
    /**
     * @inheritDoc
     */
    mounted(): void;
    /**
     * @inheritDoc
     */
    protected setupViewModel(): FileViewModel;
    /**
     * Open the file explorer.
     */
    browse(): void;
    /**
     * @keydown
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * Expect to be called by the `change` event listener on a file input.
     */
    onFileSelectionChange(event: Event): void;
    /**
     * Cancel the upload a file if still uploading or in queue and
     * remove it from the form control's value.
     */
    cancel(file: FormFile): void;
    /**
     * Cancel the upload a file but keep it in queue.
     * Will have to effect if the file is not currently uploading.
     */
    pause(file: FormFile): void;
    /**
     * Start the upload of a file.
     */
    start(file: FormFile): void;
    private syncConfigurationProps;
    private syncRemoteConfiguration;
}
