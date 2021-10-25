import { ValidatorInterface } from "@banquette/validation";
import { FormComponentInterface } from "../../form-component.interface";
import { FormControl } from "../../form-control";
import { FormGroupInterface } from "../../form-group.interface";
import { FormFactory } from "../../form.factory";
import { ViewModelMock } from "./view-model.mock";

/**
 * Alias of the real `FormFactory` but can make the control concrete using a fake view model.
 */
export class FormFactoryTest {
    public static Create(input: any, validator?: ValidatorInterface): FormComponentInterface {
        return FormFactory.Create(input, validator);
    }

    public static CreateAsConcrete(input: any, validator?: ValidatorInterface): FormComponentInterface {
        const form = FormFactory.Create(input, validator);
        if (form.children !== null) {
            (form as FormGroupInterface).getByPattern('**:control').forEach((control: FormComponentInterface) => {
                new ViewModelMock(control as FormControl);
            });
        } else {
            new ViewModelMock(form as FormControl);
        }
        return form;
    }
}
