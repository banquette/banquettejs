export interface ValueTransformerInterface {
    /**
     * Transform a value set by the view to the format expected by the form control.
     */
    viewToControl: (value: any) => any;
    /**
     * Transform a value set by the form control to the format expected by the view.
     */
    controlToView: (value: any) => any;
}
