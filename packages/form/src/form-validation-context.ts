import {ValidationContext, ValidationContextInterface} from "@banquette/validation";
import {FormComponentInterface} from "./form-component.interface";
import {isFormGroup} from "./utils";

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
        const component = this.getOtherFormComponent(path);
        if (component !== null) {
            return component.value;
        }
        return defaultValue;
    }

    public getOtherFormComponent(path: string): FormComponentInterface|null {
        if (!path) {
            return null;
        }
        if (path[0] !== '/') {
            path = this.formPath.split('/').slice(0, -1).join('/') + '/' + path;
        }
        try {
            if (isFormGroup(this.form)) {
                return this.form.getByPath(path);
            }
        } catch (e) { }
        return null;
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
