import { UnsubscribeFunction } from "@banquette/event/type";
import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { Primitive } from "@banquette/utils-type/types";
import { RemoteModule } from "../../misc/remote/remote.module";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { Choice } from "./choice";
import { SearchType, ChoicesPropResolver, SearchParamName } from "./constant";
import { HeadlessSelectViewDataInterface } from "./headless-select-view-data.interface";
import { SelectedChoice } from "./selected-choice";
/**
 * The view model logic behind a generic select form control.
 */
export declare class HeadlessSelectViewModel<ViewDataType extends HeadlessSelectViewDataInterface = HeadlessSelectViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    /**
     * `true` to allow multiple choices selection.
     */
    get multiple(): boolean;
    set multiple(value: boolean);
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
     * Define the order in which choices should be sorted by origin.
     */
    choicesOriginOrdering: string[];
    /**
     * Search behavior.
     */
    searchType: SearchType;
    /**
     * Name of the parameter to add the the ajax request when fetching for choices.
     * Only applicable if `searchType` is `SearchType.Remote`.
     */
    searchRemoteParamName: SearchParamName;
    /**
     * Minimum length of the search buffer to trigger a remote search.
     */
    searchMinLength: number;
    /**
     * Define if the user can select custom values that are not proposed in the list of choices,
     * using the search input.
     */
    allowCreation: boolean;
    /**
     * If `true`: the dropdown is always closed when a selection is made.
     * If `false`: the dropdown is never closed when a selection is made.
     * If `auto`: the dropdown is only closed when the select is not multiple.
     */
    closeOnSelection: 'auto' | boolean;
    /**
     * Model type of the choices.
     */
    modelType: ModelExtendedIdentifier | null;
    /**
     * Modules.
     */
    remote: RemoteModule;
    protected unsubscribeFunctions: UnsubscribeFunction[];
    /**
     * Normalized array of choices ready to be consumed by the view.
     */
    private readonly choices;
    private inlinedChoices;
    private unsureSelectedChoicesIdentifiers;
    private focusedIdentifier;
    private lastSelectedIdentifier;
    private noChoiceAvailable;
    private searchBufferSlug;
    constructor(control: FormViewControlInterface);
    /**
     * @inheritDoc
     */
    initialize(): Promise<void>;
    /**
     * @inheritDoc
     */
    dispose(): void;
    /**
     * @inheritDoc
     */
    setViewData(viewData: ViewDataType): void;
    /**
     * Update remote choices if the configuration allows for it.
     */
    fetchRemoteChoices(): void;
    /**
     * Add a choice to the selection.
     * The choice can be a `Choice` object, a `SelectedChoice` object or any other value.
     */
    selectChoice(choice: Choice | any, canDeselect?: boolean): void;
    /**
     * Remove a choice from the selection.
     */
    deselectChoice(selectedChoiceOrIdentifier: SelectedChoice | Primitive): void;
    /**
     * Clear the whole selection.
     */
    deselectAll(): void;
    /**
     * @inheritDoc
     */
    controlValueToViewValue(controlValue: any): SelectedChoice | SelectedChoice[] | undefined;
    /**
     * @inheritDoc
     */
    viewValueToControlValue(viewValue: any): any;
    /**
     * Update the whole list of choices.
     */
    setChoices(choices: any[], origin?: string): void;
    /**
     * Append a list of choices at the end of the existing collection.
     */
    appendChoices(choices: any[], origin?: string): void;
    /**
     * Prepend a list of choices to the beginning of the existing collection.
     */
    prependChoices(choices: any[], origin?: string): void;
    /**
     * Remove a choice from the list of available choices.
     */
    removeChoice(choiceOrIdentifier: Choice | Primitive): void;
    /**
     * Remove all choices with a particular origin.
     */
    removeAllChoices(origin?: string | null): void;
    /**
     * Show the dropdown of available choices.
     */
    showChoices(): void;
    /**
     * Hide the dropdown of available choices.
     */
    hideChoices(): void;
    /**
     * Inverse the visibility status of the dropdown of available choices.
     */
    toggleChoices(): void;
    /**
     * Mark a choice as focused.
     */
    focusChoice(choice: Choice): void;
    /**
     * Unmark a choice as focused.
     */
    unFocusChoice(choice: Choice): void;
    /**
     * Mark all choices as unfocused.
     */
    unFocusAll(): void;
    /**
     * Set the search to filter choices with.
     * Only applicable if the search type has been set to another value that `SearchType.None`.
     */
    setSearchString(search: string): void;
    /**
     * Try to normalize a raw value into a Choice.
     */
    normalizeChoice(choice: any, origin: string): Choice | null;
    /**
     * To call when a keydown event is emitted for the component.
     */
    onKeyDown: import("@banquette/utils-type/types").GenericCallback<any, any>;
    /**
     * @inheritDoc
     */
    protected onFocus(): void;
    /**
     * @inheritDoc
     */
    protected onBlur(): void;
    /**
     * The behavior of this method depends on the `multiple` option:
     *
     *  - If `multiple` is `true`: move the `focused` item "step" time.
     *    If no item is focused yet, the first one is.
     *
     *  - If `multiple` is false`: move the `selected` item "step" time.
     *    If no item is selected yet, the first one is.
     */
    private moveSelection;
    /**
     * Try to resolve the label of a choice.
     */
    private extractChoiceLabel;
    /**
     * Try to resolve the value of a choice.
     */
    private extractChoiceValue;
    /**
     * Try to resolve the disabled state of a choice.
     */
    private extractChoiceDisabledState;
    /**
     * Try to resolve the group name of a choice.
     */
    private extractChoiceGroup;
    /**
     * Try to resolve the identifier of a choice.
     */
    private extractChoiceIdentifier;
    /**
     * Create a SelectedChoice instance from a raw input.
     * If the input is already a SelectedChoice, it is returned unchanged.
     */
    private createSelectedChoice;
    /**
     * Ensure the input value is an instance of the model type, if one is defined.
     * Otherwise, return the value unchanged.
     */
    private maybeEnsureModel;
    /**
     * Check if the input value matches the expected model type.
     */
    private isValidModelInstance;
    /**
     * Method to call when modifying the list of available choices.
     */
    private updateChoices;
    /**
     * Force update the "selected" flag of all choices.
     */
    private updateChoicesSelectionStatus;
    /**
     * Test if a choice match the current search buffer.
     */
    private isLocallyFiltered;
    /**
     * Only inject the service on demand.
     */
    private getModelMetadata;
    /**
     * Only inject the service on demand.
     */
    private getTransformService;
}
