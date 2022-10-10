import { ValidationContext } from "@banquette/validation/validation-context";
import { ValidationContextInterface } from "@banquette/validation/validation-context.interface";
import { FormComponentInterface } from "./form-component.interface";
export declare class FormValidationContext extends ValidationContext {
    readonly form: FormComponentInterface;
    readonly formPath: string;
    constructor(form: FormComponentInterface, formPath: string, parent: ValidationContext | null, name: string | null, value: any, masks?: string[], groups?: string[]);
    getOtherValue(path: string, defaultValue?: any): any;
    /**
     * Create a child context for this context.
     */
    createSubContext(name: string | null, value: any, masks?: string[], groups?: string[]): ValidationContextInterface;
}
