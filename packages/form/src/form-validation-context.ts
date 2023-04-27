import { ValidationContext, ValidationContextInterface } from "@banquette/validation";
import { FormComponentInterface } from "./form-component.interface";

export class FormValidationContext extends ValidationContext {
    public constructor(public readonly form: FormComponentInterface,
                       public readonly formPath: string,
                       parent: ValidationContext|null,
                       name: string|null,
                       value: any,
                       masks: string[] = [],
                       groups: string[] = []) {
        super(parent, name, value, masks, groups);
    }

    public getOtherValue(path: string, defaultValue: any = null): any {
        // TODO
        return defaultValue;
    }

    /**
     * Create a child context for this context.
     */
    public createSubContext(name: string|null,
                            value: any,
                            masks: string[] = [],
                            groups: string[] = []): ValidationContextInterface {
        // TODO
        return new FormValidationContext(this.form, this.formPath, this, name, value, masks, groups);
    }
}
