/**
 * The default value of the `v` attribute, exposed by generic view models.
 */
export interface VInterface {
    /**
     * The view value.
     */
    value: any;

    /**
     * Shortcuts to state flags of the form control.
     */
    readonly valid: boolean;
    readonly invalid: boolean;
    readonly validated: boolean;
    readonly notValidated: boolean;
    readonly validating: boolean;
    readonly notValidating: boolean;
    readonly validatedAndValid: boolean;
    readonly busy: boolean;
    readonly notBusy: boolean;
    readonly disabled: boolean;
    readonly enabled: boolean;
    readonly dirty: boolean;
    readonly pristine: boolean;
    readonly touched: boolean;
    readonly untouched: boolean;
    readonly changed: boolean;
    readonly unchanged: boolean;
    readonly focused: boolean;
    readonly unfocused: boolean;
};
