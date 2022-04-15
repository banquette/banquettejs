import { FormError } from "@banquette/form/form-error";

/**
 * View data of the `ControlModule`.
 */
export interface ControlViewDataInterface {
    readonly id: number;
    readonly formId: string;
    readonly fullId: string | null;
    valid: boolean;
    invalid: boolean;
    validated: boolean;
    notValidated: boolean;
    validating: boolean;
    notValidating: boolean;
    validatedAndValid: boolean;
    busy: boolean;
    notBusy: boolean;
    enabled: boolean;
    disabled: boolean;
    dirty: boolean;
    pristine: boolean;
    touched: boolean;
    untouched: boolean;
    changed: boolean;
    unchanged: boolean;
    focused: boolean;
    unfocused: boolean;
    errors: FormError[];
    errorsMap: Record<string, string | null>;
    tabIndex: number;
    value: any;

    onFocus(): void;
    onBlur(): void;
    focus(): void;
    blur(): void;
}