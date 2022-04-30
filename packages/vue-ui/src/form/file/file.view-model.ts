import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessFormFileViewModel } from "@banquette/ui/form/file/headless-form-file.view-model";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { FileViewDataInterface } from "./file-view-data.interface";

export class FileViewModel extends HeadlessFormFileViewModel<FileViewDataInterface> {
    public constructor(control: FormViewControlInterface, private base: BaseInputComposable) {
        super(control);
        this.viewData.base = base.viewData;
    }
}
