import { FormViewControlInterface } from "@banquette/form";
import { HeadlessFormFileViewModel } from "@banquette/ui";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { FileViewDataInterface } from "./file-view-data.interface";
import { I18nInterface } from "./i18n.interface";

export class FileViewModel extends HeadlessFormFileViewModel<FileViewDataInterface> {
    public constructor(control: FormViewControlInterface, private base: BaseInputComposable, i18n: I18nInterface) {
        super(control, i18n);
        this.viewData.base = base.viewData;
    }
}
