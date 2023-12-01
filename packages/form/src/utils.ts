import {FormComponentInterface} from "./form-component.interface";
import {FormGroupInterface} from "./form-group.interface";
import {isUndefined} from "@banquette/utils-type";

export function isFormGroup(input: FormComponentInterface): input is FormGroupInterface {
    return !isUndefined((input as any).getByPath);
}
