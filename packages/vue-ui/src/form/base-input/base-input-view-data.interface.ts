export interface BaseInputViewDataInterface {
    /**
     * The label of the select field as a whole.
     */
    label: string|null;

    /**
     * Text to show on the select if no value is selected.
     */
    placeholder: string|null;

    /**
     * An optional help text to show to the user.
     */
    help: string|null;

    /**
     * If `true` the label will float above the control and act as a placeholder is there is none.
     */
    floatingLabel: boolean;

    /**
     * If `true` the errors will appear as an icon on the right side of the input that show a popover.
     *
     * This value is overridden to `true` internally if the control is in a group to preserve layout integrity.
     */
    floatingErrors: boolean;

    /**
     * If `true` the help text will appear as an icon on the right side of the input that show a popover.
     *
     * This value is overridden to `true` internally if the control is in a group to preserve layout integrity.
     */
    floatingHelp: boolean;

    /**
     * If `true`, a little asterisk extras is shown, indicating to the user that the field is mandatory.
     */
    required: boolean;

    /**
     * If `true`, show the debug overlay.
     */
    showDebug: boolean;

    /**
     * `true` if at least one addon is used.
     */
    hasAddon: boolean;

    /**
     * `true` if the base input is in another base input.
     */
    inGroup: boolean;
}
