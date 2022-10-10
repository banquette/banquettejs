import { HttpMethod } from "@banquette/http/constants";
import { SearchType, ChoicesPropResolver, SearchParamName } from "@banquette/ui/form/select/constant";
import { SelectedChoice } from "@banquette/ui/form/select/selected-choice";
import { Primitive } from "@banquette/utils-type/types";
import { AbstractVueFormComponent } from "../../abstract-vue-form.component";
import { BaseInputComposable } from "../../base-input/base-input.composable";
import { I18nInterface } from "./i18n.interface";
import { SelectViewDataInterface } from "./select-view-data.interface";
import { SelectViewModel } from "./select.view-model";
export default class FormSelectComponent extends AbstractVueFormComponent<SelectViewDataInterface, SelectViewModel> {
    /**
     * Array of elements to use as choices.
     * They are cumulative with other sources (like the "choices" slot or an ajax request).
     */
    choices: any[] | null;
    /**
     * Defines how to resolve the choices' labels, identifiers, values, disabled status and groups.
     * Can be:
     *   - the name of the property to use when the input is an object.
     *   - a function that takes the raw input and returns the value to use.
     */
    choicesLabel: ChoicesPropResolver<string>;
    choicesIdentifier: ChoicesPropResolver<Primitive>;
    choicesValue: ChoicesPropResolver<any>;
    choicesDisabled: ChoicesPropResolver<boolean>;
    choicesGroup: ChoicesPropResolver<string>;
    /**
     * If `true` the select allow for multiple values.
     */
    multiple: boolean;
    /**
     * If `true`, the height of the select will never grow.
     */
    lockHeight: boolean;
    /**
     * If `true`, the user can enter custom values using the input, they will be added to the selected
     * values even if not available in the list of choices.
     */
    allowCreation: boolean;
    /**
     * If `true`, the user can clear the value of the select.
     */
    clearable: boolean;
    /**
     * If `true`: the dropdown is always closed when a selection is made.
     * If `false`: the dropdown is never closed when a selection is made.
     * If `auto`: the dropdown is only closed when the select is not multiple.
     */
    closeOnSelection: 'auto' | boolean;
    /**
     * Holds the props exposed by the base input.
     */
    baseComposable: BaseInputComposable;
    /**
     * Model type of the choices.
     */
    model: string | null;
    /**
     * Remote related props.
     */
    url: string | null;
    endpoint: string | null;
    method: HttpMethod;
    urlParams: Record<string, Primitive>;
    headers: Record<string, Primitive>;
    /**
     * Search related props.
     */
    searchType: SearchType;
    searchRemoteParamName: SearchParamName;
    searchMinLength: number;
    /**
     * Dropdown related props.
     */
    dropdownTeleport: HTMLElement | string | null;
    dropdownZIndex: number | undefined;
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    v: SelectViewDataInterface;
    dropdownWidth: number;
    dropdownTarget: HTMLElement;
    private inputEl;
    private inputWrapperEl;
    private tagSelectionWrapperEl;
    private inputWrapperResizeUnsubscribe;
    private lastBlurTime;
    private lastKeyStrokeTime;
    constructor();
    /**
     * Vue lifecycle.
     */
    mounted(): void;
    /**
     * Vue lifecycle.
     */
    beforeUnmount(): void;
    onKeyDown(event: KeyboardEvent): void;
    selectChoice(choice: any): void;
    deselectChoice(choice: SelectedChoice | Primitive): void;
    deselectAll(): void;
    removeItem(item: SelectedChoice): void;
    toggleSelectedPopover(): void;
    hideSelectedPopover(): void;
    onInputWrapperClick(): void;
    onInputFocus(): void;
    onInputBlur(): void;
    onInputChange: import("@banquette/utils-type/types").GenericCallback<any, any>;
    /**
     * @inheritDoc
     */
    protected setupViewModel(): SelectViewModel;
    /**
     * @inheritDoc
     */
    protected onFocusChanged(newValue: boolean): void;
    private onBasePropsChange;
    private syncChoices;
    private onSelectionChange;
    private onChoiceVisibilityChange;
    /**
     * Reconfigure the view model to match the new search configuration.
     */
    updateSearchConfiguration(): void;
    private syncRemoteProps;
    /**
     * Reconfigure the view and the value to match the couple multiple/lockHeight configuration.
     */
    private updateSelectionVisibilityTracking;
    /**
     * Update the value of the input that holds the selection.
     */
    private updateInput;
    /**
     * Duplicate the current selection into an array of `WrappedSelectedChoice`
     * that adds a `visible` attribute, specific to this implementation of the component.
     */
    private updateSelected;
    /**
     * Check for each tag in the view if it must be moved in the popover or not.
     * Only relevant if the selection is multiple and the height is locked.
     */
    private updateTagsVisibility;
    /**
     * Observe size changes of the input wrapper to update tags visibility.
     * Only relevant if the selection is multiple and the height is locked.
     */
    private observerInputWrapperSize;
}
