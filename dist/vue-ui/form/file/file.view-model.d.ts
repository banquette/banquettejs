import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessFormFileViewModel } from "@banquette/ui/form/file/headless-form-file.view-model";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { FileViewDataInterface } from "./file-view-data.interface";
import { I18nInterface } from "./i18n.interface";
export declare class FileViewModel extends HeadlessFormFileViewModel<FileViewDataInterface> {
    private base;
    constructor(control: FormViewControlInterface, base: BaseInputComposable, i18n: I18nInterface);
}
