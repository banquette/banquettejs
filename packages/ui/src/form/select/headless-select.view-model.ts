import { UnsubscribeFunction } from "@banquette/event/type";
import { ExceptionFactory } from "@banquette/exception/exception.factory";
import { BasicState } from "@banquette/form/constant";
import { StateChangedFormEvent } from "@banquette/form/event/state-changed.form-event";
import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HttpResponse } from "@banquette/http/http-response";
import { oncePerCycleProxy } from "@banquette/utils-misc/once-per-cycle-proxy";
import { proxy } from "@banquette/utils-misc/proxy";
import { recursionSafeSideEffectProxy } from "@banquette/utils-misc/recursion-safe-side-effect-proxy";
import { throttle } from "@banquette/utils-misc/throttle";
import { replaceStringVariables } from "@banquette/utils-string/format/replace-string-variables";
import { slugify } from "@banquette/utils-string/format/slugify";
import { trim } from "@banquette/utils-string/format/trim";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { ensureBoolean } from "@banquette/utils-type/ensure-boolean";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { isArray } from "@banquette/utils-type/is-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
import { isPrimitive } from "@banquette/utils-type/is-primitive";
import { isScalar } from "@banquette/utils-type/is-scalar";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Primitive, Writeable } from "@banquette/utils-type/types";
import { RemoteModule } from "../../misc/remote/remote.module";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { Choice } from "./choice";
import { SearchType, ChoiceOrigin, ChoicesRemoteFetchStatus, ChoicesPropResolver } from "./constant";
import { HeadlessSelectViewDataInterface } from "./headless-select-view-data.interface";
import { SelectedChoice } from "./selected-choice";

/**
 * The view model logic behind a generic select form control.
 */
export class HeadlessSelectViewModel<ViewDataType extends HeadlessSelectViewDataInterface = HeadlessSelectViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    /**
     * `true` to allow multiple choices selection.
     */
    public get multiple(): boolean { return this.viewData.multiple }
    public set multiple(value: boolean) { this.viewData.multiple = value }

    /**
     * Defines how to resolve the choices' labels, identifiers, values, disabled status and groups.
     * Can be:
     *   - the name of the property to use when the input is an object.
     *   - a function that takes the raw input and returns the value to use.
     */
    public choicesLabel     : ChoicesPropResolver<string> = null;
    public choicesIdentifier: ChoicesPropResolver<Primitive> = null;
    public choicesValue     : ChoicesPropResolver<any> = null;
    public choicesDisabled  : ChoicesPropResolver<boolean> = null;
    public choicesGroup     : ChoicesPropResolver<string> = null;

    /**
     * Define the order in which choices should be sorted by origin.
     */
    public choicesOriginOrdering: string[] = [ChoiceOrigin.Default, ChoiceOrigin.Remote];

    /**
     * Search behavior.
     */
    public searchType: SearchType = SearchType.None;

    /**
     * Name of the parameter to add the the ajax request when fetching for choices.
     * Only applicable if `searchType` is `SearchType.Remote`.
     */
    public searchRemoteParamName: string|string[] = 'search';

    /**
     * Minimum length of the search buffer to trigger a remote search.
     */
    public searchMinLength: number = 0;

    /**
     * The current value of the filter string.
     */
    public readonly searchBuffer: string = '';

    /**
     * Define if the user can select custom values that are not proposed in the list of choices,
     * using the search input.
     */
    public allowCreation: boolean = false;

    /**
     * Modules.
     */
    public remote: RemoteModule;

    protected unsubscribeFunctions: UnsubscribeFunction[] = [];

    /**
     * Normalized array of choices ready to be consumed by the view.
     */
    private readonly choices: Record<string, Choice[]> = {};
    private inlinedChoices: Choice[] = [];
    private focusedIdentifier: any;
    private lastSelectedIdentifier: Primitive|undefined = undefined;
    private noChoiceAvailable: boolean = true;
    private searchBufferSlug: string = '';

    public constructor(control: FormViewControlInterface) {
        super(control);
        this.remote = new RemoteModule();

        // Set the default view data this class is responsible of.
        Object.assign(this.viewData, {
            choices: [],
            groupedChoices: {},
            selectedChoicesCount: 0,
            visibleChoicesCount: 0,
            choicesVisible: false,
            multiple: false,
            searchBuffer: '',
            searchMinLength: this.searchMinLength,
            remoteFetchStatus: ChoicesRemoteFetchStatus,
            remoteFetchError: null
        });
    }

    /**
     * @inheritDoc
     */
    public async initialize(): Promise<void> {
        super.initialize();

        this.unsubscribeFunctions.push(this.control.onStateChanged((event: StateChangedFormEvent) => {
            if (event.state === BasicState.Focused) {
                if (event.newValue) {
                    this.onFocus();
                } else {
                    this.onBlur();
                }
            }
        }));
        this.remote.onConfigurationChange(proxy(this.fetchRemoteChoices, this));

        // Origins are fixed and must be assigned before the view model is initialized.
        // Create an array for each of them in the choices object, once and for all.
        for (const origin of this.choicesOriginOrdering) {
            this.choices[origin] = [];
        }
    }

    /**
     * @inheritDoc
     */
    public dispose(): void {
        super.dispose();
        for (const fn of this.unsubscribeFunctions) {
            fn();
        }
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: ViewDataType): void {
        super.setViewData(viewData);
    }

    /**
     * Update remote choices if the configuration allows for it.
     */
    public fetchRemoteChoices(): void {
        if (!this.remote.isApplicable) {
            return ;
        }
        const params: Record<string, string> = {};
        if (this.searchType === SearchType.Remote) {
            if (this.searchMinLength > 0 && this.searchBuffer.length < this.searchMinLength) {
                this.viewData.searchMinLength = this.searchMinLength;
                this.viewData.remoteFetchStatus = ChoicesRemoteFetchStatus.WaitingSearch;
                return;
            }
            if (this.searchBuffer.length > 0) {
                const paramsNames = ensureArray(this.searchRemoteParamName);
                for (const paramName of paramsNames) {
                    params[paramName] = this.searchBuffer;
                }
            }
        }
        this.viewData.control.busy = true;
        this.viewData.remoteFetchError = null;
        this.viewData.remoteFetchStatus = ChoicesRemoteFetchStatus.Pending;
        this.remote.send(null, params).promise.then((response) => {
            this.setChoices(ensureArray(response.result), ChoiceOrigin.Remote);
            this.viewData.remoteFetchStatus = ChoicesRemoteFetchStatus.Idle;
        }).catch((reason: any) => {
            if (reason instanceof HttpResponse) {
                if (reason.isCanceled) {
                    return;
                }
                reason = reason.error;
            }
            this.viewData.remoteFetchError = ExceptionFactory.EnsureException(reason, 'Unknown error.').message;
            this.viewData.remoteFetchStatus = ChoicesRemoteFetchStatus.Failed;
        }).finally(() => {
            this.viewData.control.busy = false;
        });
    }

    /**
     * Add a choice to the selection.
     * The choice can be a `Choice` object, a `SelectedChoice` object or any other value.
     */
    public selectChoice(choice: Choice|any): void {
        if (choice instanceof Choice && choice.disabled) {
            return ;
        }
        const selectedChoice = this.createSelectedChoice(choice);
        if (this.multiple) {
            const values = ensureArray(this.viewData.control.value);
            for (const candidate of values) {
                if (candidate.identifier === choice.identifier) {
                    this.deselectChoice(candidate);
                    return ;
                }
            }
            values.push(selectedChoice);
            this.viewData.control.value = values;
        } else {
            if (!selectedChoice || !this.viewData.control.value || this.viewData.control.value.rawValue !== selectedChoice.rawValue) {
                this.viewData.control.value = selectedChoice || undefined;
            }
            this.hideChoices();
        }
        this.lastSelectedIdentifier = choice.identifier;
        this.unFocusAll();
        this.updateChoicesSelectionStatus();
    }

    /**
     * Remove a choice from the selection.
     */
    public deselectChoice(selectedChoiceOrIdentifier: SelectedChoice|Primitive): void {
        const values = ensureArray(this.viewData.control.value);
        const targetIdentifier = selectedChoiceOrIdentifier instanceof SelectedChoice ? selectedChoiceOrIdentifier.identifier : selectedChoiceOrIdentifier;
        for (let i = 0; i < values.length; ++i) {
            if (values[i] instanceof SelectedChoice && values[i].identifier === targetIdentifier) {
                if (this.multiple) {
                    values.splice(i, 1);
                    this.viewData.control.value = values;
                } else {
                    this.viewData.control.value = undefined;
                }
                break ;
            }
        }
        this.lastSelectedIdentifier = undefined;
        this.updateChoicesSelectionStatus();
    }

    /**
     * Clear the whole selection.
     */
    public deselectAll(): void {
        if (this.multiple) {
            this.viewData.control.value = [];
        } else {
            this.viewData.control.value = undefined;
        }
        this.lastSelectedIdentifier = undefined;
        this.updateChoicesSelectionStatus();
    }

    /**
     * @inheritDoc
     */
    public controlValueToViewValue(controlValue: any): SelectedChoice|SelectedChoice[]|undefined {
        const selected: SelectedChoice[] = [];
        if (!isUndefined(controlValue)) {
            if (this.multiple && isArray(controlValue)) {
                for (const value of controlValue) {
                    const selectedChoice = this.createSelectedChoice(value);
                    if (selectedChoice !== null) {
                        selected.push(selectedChoice);
                    }
                }
            } else {
                const selectedChoice = this.createSelectedChoice(controlValue);
                if (selectedChoice !== null) {
                    selected.push(selectedChoice);
                }
            }
        }
        // To delay the update after the view value as been assigned.
        queueMicrotask(() => {
            this.updateChoicesSelectionStatus();
        });
        return this.multiple ? selected : (selected.length > 0 ? selected[0] : undefined);
    }

    /**
     * @inheritDoc
     */
    public viewValueToControlValue(viewValue: any): any {
        const controlValues: any[] = [];
        const values = ensureArray(viewValue);
        for (const value of values) {
            if (value instanceof SelectedChoice) {
                controlValues.push(value.rawValue);
            } else {
                // Should never happen because the view value should always contain SelectedChoice objects.
                controlValues.push(undefined);
            }
        }
        return this.multiple ? controlValues : (controlValues.length > 0 ? controlValues[0] : undefined);
    }

    /**
     * Update the whole list of choices.
     */
    public setChoices(choices: any[], origin: string = ChoiceOrigin.Default): void {
        this.updateChoices(() => {
            this.removeAllChoices(origin);
            this.appendChoices(choices, origin);
        });
    }

    /**
     * Append a list of choices at the end of the existing collection.
     */
    public appendChoices(choices: any[], origin: string = ChoiceOrigin.Default): void {
        this.updateChoices(() => {
            for (const choice of choices) {
                const normalized = this.normalizeChoice(choice, origin);
                if (normalized !== null) {
                    // The origin is already part of the object, created in `initialize()`.
                    this.choices[normalized.origin].push(normalized);
                    if (normalized.identifier === this.lastSelectedIdentifier) {
                        this.focusChoice(normalized);
                    }
                }
            }
        });
    }

    /**
     * Prepend a list of choices to the beginning of the existing collection.
     */
    public prependChoices(choices: any[], origin: string = ChoiceOrigin.Default): void {
        this.updateChoices(() => {
            for (let i = choices.length - 1; i >= 0; --i) {
                const normalized = this.normalizeChoice(choices[i], origin);
                if (normalized !== null) {
                    // The origin is already part of the object, created in `initialize()`.
                    this.choices[normalized.origin].unshift(normalized);
                    if (normalized.identifier === this.lastSelectedIdentifier) {
                        this.focusChoice(normalized);
                    }
                }
            }
        });
    }

    /**
     * Remove a choice from the list of available choices.
     */
    public removeChoice(choiceOrIdentifier: Choice|Primitive): void {
        const identifier = choiceOrIdentifier instanceof Choice ? choiceOrIdentifier.identifier : choiceOrIdentifier;
        this.updateChoices(() => {
            for (const origin of Object.keys(this.choices)) {
                for (let i = 0; i < this.choices[origin].length; ++i) {
                    if (this.choices[origin][i].identifier === identifier) {
                        this.choices[origin].splice(i, 1);
                    }
                }
            }
        });
    }

    /**
     * Remove all choices with a particular origin.
     */
    public removeAllChoices(origin: string|null = null): void {
        this.updateChoices(() => {
            for (const currentOrigin of Object.keys(this.choices)) {
                for (let i = 0; i < this.choices[currentOrigin].length; ++i) {
                    if (origin === null || this.choices[currentOrigin][i].origin === origin) {
                        this.choices[currentOrigin].splice(i--, 1);
                    }
                }
            }
        });
    }

    /**
     * Show the dropdown of available choices.
     */
    public showChoices(): void {
        if (!this.viewData.control.disabled) {
            this.viewData.choicesVisible = true;

            const hasSelectedIdentifier = !isUndefined(this.lastSelectedIdentifier);
            for (const item of this.inlinedChoices) {
                if ((hasSelectedIdentifier && item.identifier === this.lastSelectedIdentifier) || (!hasSelectedIdentifier && item.selected)) {
                    this.focusChoice(item);
                    break;
                }
            }
        }
    }

    /**
     * Hide the dropdown of available choices.
     */
    public hideChoices(): void {
        (this as Writeable<HeadlessSelectViewModel>).searchBuffer = '';
        this.viewData.choicesVisible = false;
        this.unFocusAll();
    }

    /**
     * Inverse the visibility status of the dropdown of available choices.
     */
    public toggleChoices(): void {
        if (this.viewData.choicesVisible) {
            this.hideChoices();
        } else {
            this.showChoices();
        }
    }

    /**
     * Mark a choice as focused.
     */
    public focusChoice(choice: Choice): void {
        if (choice.focused || choice.disabled) {
            return ;
        }
        choice.focused = true;
        this.focusedIdentifier = choice.identifier;
    }

    /**
     * Unmark a choice as focused.
     */
    public unFocusChoice(choice: Choice): void {
        choice.focused = false;
        this.focusedIdentifier = undefined;
    }

    /**
     * Mark all choices as unfocused.
     */
    public unFocusAll(): void {
        for (const choice of this.inlinedChoices) {
            choice.focused = false;
        }
        this.focusedIdentifier = undefined;
    }

    /**
     * Set the search to filter choices with.
     * Only applicable if the search type has been set to another value that `SearchType.None`.
     */
    public setSearchString(search: string): void {
        if (this.searchType === SearchType.None || this.searchBuffer === search) {
            return ;
        }
        (this as Writeable<HeadlessSelectViewModel>).searchBuffer = trim(search);
        this.searchBufferSlug = slugify(this.searchBuffer);
        if (this.searchType === SearchType.Local) {
            this.updateChoices();
        } else if (this.searchType === SearchType.Remote) {
            this.fetchRemoteChoices();
        }
    }

    /**
     * Try to normalize a raw value into a Choice.
     */
    public normalizeChoice(choice: any, origin: string): Choice|null {
        if (choice instanceof Choice) {
            return choice;
        }
        const identifier = this.extractChoiceIdentifier(choice);
        if (isUndefined(identifier)) {
            return null;
        }
        const instance = new Choice(
            identifier,
            this.extractChoiceLabel(choice),
            this.extractChoiceValue(choice),
            this.extractChoiceGroup(choice),
            origin,
            choice
        );
        instance.disabled = this.extractChoiceDisabledState(choice);
        instance.external = false;
        return instance;
    }

    /**
     * To call when a keydown event is emitted for the component.
     */
    public onKeyDown = throttle((event: KeyboardEvent): void => {
        if (event.key === 'ArrowUp') {
            this.moveSelection(-1);
        } else if (event.key === 'ArrowDown') {
            this.moveSelection(1);
        } else if (event.key === 'Enter') {
            let found = false;
            for (const item of this.inlinedChoices) {
                if (item.focused) {
                    this.selectChoice(item);
                    this.focusChoice(item); // Because selecting a choice un focus everything.
                    if (!this.multiple) {
                        this.hideChoices();
                    }
                    found = true;
                    break;
                }
            }
            if (!found && this.allowCreation && this.searchBuffer.length > 0) {
                this.selectChoice(this.searchBuffer);
                this.setSearchString('');
            }
        } else if (event.key === 'Escape') {
            this.unFocusAll();
            this.hideChoices();
        } else {
            return ;
        }
        event.preventDefault();
        event.stopPropagation();
    }, 50);

    /**
     * @inheritDoc
     */
    protected onFocus() {
        this.showChoices();
    }

    /**
     * @inheritDoc
     */
    protected onBlur() {
        this.hideChoices();
    }

    /**
     * The behavior of this method depends on the `multiple` option:
     *
     *  - If `multiple` is `true`: move the `focused` item "step" time.
     *    If no item is focused yet, the first one is.
     *
     *  - If `multiple` is false`: move the `selected` item "step" time.
     *    If no item is selected yet, the first one is.
     */
    private moveSelection(step: number): void {
        if (!this.inlinedChoices.length || this.noChoiceAvailable) {
            return ;
        }
        if (!this.viewData.choicesVisible) {
            this.showChoices();
            return ;
        }
        let currentFocusIndex = -1;
        for (let i = 0; i < this.inlinedChoices.length; ++i) {
            if (this.inlinedChoices[i].focused) {
                currentFocusIndex = i;
                this.unFocusChoice(this.inlinedChoices[i]);
                break ;
            }
        }
        if (currentFocusIndex > -1) {
            currentFocusIndex = (currentFocusIndex + step) % this.inlinedChoices.length;
            if (currentFocusIndex < 0) {
                currentFocusIndex = this.inlinedChoices.length + currentFocusIndex;
            }
        } else {
            currentFocusIndex = 0;
        }
        if (this.inlinedChoices[currentFocusIndex].disabled || !this.inlinedChoices[currentFocusIndex].visible) {
            this.inlinedChoices[currentFocusIndex].focused = true;
            this.moveSelection(step > 0 ? 1 : -1);
            return ;
        }
        this.focusChoice(this.inlinedChoices[currentFocusIndex]);
    }

    /**
     * Try to resolve the label of a choice.
     */
    private extractChoiceLabel(choice: any): string {
        if (isFunction(this.choicesLabel)) {
            const label = this.choicesLabel(choice);
            if (!isScalar(label)) {
                console.warn(`The "choices-label" function must return a scalar value, for:`, choice);
            }
            return String(label);
        }
        if (isScalar(choice)) {
            return String(choice);
        }
        const defaultLabel = '(unknown label)';
        if (!isObject(choice)) {
            return defaultLabel;
        }
        if (this.choicesLabel !== null) {
            if (!isUndefined(choice[this.choicesLabel])) {
                return ensureString(choice[this.choicesLabel]);
            }
            // Check if the user didn't give both the property and the expression.
            // In such a case it could mean "use the property if available, otherwise the expression.".
            if (this.choicesLabel.indexOf('{') > -1) {
                // TODO: make the start and end chars configurable.
                return replaceStringVariables(this.choicesLabel, choice, '{', '}');
            }
        }
        if (this.choicesLabel) {
            console.warn(`No property "${this.choicesLabel}" to use as label has been found. You can control it using the "choicesLabel" attribute, for:`, choice);
        } else {
            console.warn('Please define what property to use as identifier using the "choicesLabel" attribute, for:', choice);
        }
        return defaultLabel;
    }

    /**
     * Try to resolve the value of a choice.
     */
    private extractChoiceValue(choice: any): any {
        if (isFunction(this.choicesValue)) {
            return this.choicesValue(choice);
        }
        if (!isObject(choice) || !this.choicesValue) {
            return choice;
        }
        return choice[this.choicesValue];
    }

    /**
     * Try to resolve the disabled state of a choice.
     */
    private extractChoiceDisabledState(choice: any): boolean {
        if (isFunction(this.choicesDisabled)) {
            return ensureBoolean(this.choicesDisabled(choice));
        }
        if (!isObject(choice) || !this.choicesDisabled) {
            return false;
        }
        return !!choice[this.choicesDisabled];
    }

    /**
     * Try to resolve the group name of a choice.
     */
    private extractChoiceGroup(choice: any): string|null {
        if (isFunction(this.choicesGroup)) {
            const value = this.choicesGroup(choice);
            return isScalar(value) ? String(value) : null;
        }
        if (!isObject(choice) || !this.choicesGroup) {
            return null;
        }
        return choice[this.choicesGroup] || null;
    }

    /**
     * Try to resolve the identifier of a choice.
     */
    private extractChoiceIdentifier(choice: any): Primitive|undefined {
        if (isFunction(this.choicesIdentifier)) {
            const value = this.choicesIdentifier(choice);
            if (isPrimitive(value)) {
                return value;
            }
        }
        if (isScalar(choice)) {
            return choice;
        }
        if (!isObject(choice)) {
            console.warn(`Unsupported choice of type "${typeof(choice)}".`);
            return undefined;
        }
        if (this.choicesIdentifier !== null && !isFunction(this.choicesIdentifier)) {
            if (!isUndefined(choice[this.choicesIdentifier])) {
                return choice[this.choicesIdentifier];
            }
        }
        if (this.choicesIdentifier) {
            console.warn(`No property "${this.choicesIdentifier}" to use as identifier has been found. You can control it using the "choicesIdentifier" attribute, for:`, choice);
        } else {
            console.warn('Please define what property to use as identifier using the "choicesIdentifier" attribute, for:', choice);
        }
        return undefined;
    }

    /**
     * Create a SelectedChoice instance from a raw input.
     * If the input is already a SelectedChoice, it is returned unchanged.
     */
    private createSelectedChoice(value: any): SelectedChoice|null {
        if (value instanceof SelectedChoice) {
            return value;
        }
        if (value instanceof Choice) {
            return new SelectedChoice(value.label, value.identifier, value.originalValue);
        }
        const identifier = this.extractChoiceIdentifier(value);
        if (isNullOrUndefined(identifier)) {
            return null;
        }
        return new SelectedChoice(this.extractChoiceLabel(value), identifier, value);
    }

    /**
     * Method to call when modifying the list of available choices.
     */
    private updateChoices = recursionSafeSideEffectProxy(oncePerCycleProxy(() => {
        const identifiers: Primitive[] = [];

        this.inlinedChoices = [];
        this.viewData.choices = {};
        this.noChoiceAvailable = true;
        for (const origin of this.choicesOriginOrdering) {
            this.viewData.choices[origin] = {grouped: {}, standalone: []};
            const originChoices = this.viewData.choices[origin];
            for (const item of this.choices[origin]) {
                if (identifiers.indexOf(item.identifier) > -1) {
                    console.warn(`Duplicate identifier "${String(item.identifier)}". Ignoring choice with label "${item.label}".`);
                    return ;
                }
                if (item.group) {
                    if (isUndefined(originChoices.grouped[item.group])) {
                        originChoices.grouped[item.group] = [];
                    }
                    originChoices.grouped[item.group].push(item);
                } else {
                    originChoices.standalone.push(item);
                }
                identifiers.push(item.identifier);
                if (!item.disabled && item.visible) {
                    this.noChoiceAvailable = false;
                }
            }
            for (const group of Object.keys(originChoices.grouped)) {
                this.inlinedChoices.push.apply(this.inlinedChoices, originChoices.grouped[group]);
            }
            this.inlinedChoices.push.apply(this.inlinedChoices, originChoices.standalone);
        }
        this.updateChoicesSelectionStatus();
    }, this));

    /**
     * Force update the "selected" flag of all choices.
     */
    private updateChoicesSelectionStatus = oncePerCycleProxy(() => {
        const identifiers: Primitive[] = [];
        const values = ensureArray(this.viewData.control.value);
        const update = (choice: Choice) => {
            choice.selected = identifiers.indexOf(choice.identifier) > -1;
            if (choice.selected) {
                this.viewData.selectedChoicesCount++;
            }
            choice.visible = !this.isLocallyFiltered(choice);
            if (choice.visible) {
                this.viewData.visibleChoicesCount++;
            }
            // if (choice.identifier === this.focusedIdentifier) {
            //     this.focusChoice(choice);
            // }
        };
        for (const value of values) {
            if (value instanceof SelectedChoice) {
                identifiers.push(value.identifier);
            }
        }
        this.viewData.selectedChoicesCount = 0;
        this.viewData.visibleChoicesCount = 0;
        for (const origin of Object.keys(this.viewData.choices)) {
            for (const group of Object.keys(this.viewData.choices[origin].grouped)) {
                for (const choice of this.viewData.choices[origin].grouped[group]) {
                    update(choice);
                }
            }
            for (const choice of this.viewData.choices[origin].standalone) {
                update(choice);
            }
        }
    }, this);

    /**
     * Test if a choice match the current search buffer.
     */
    private isLocallyFiltered(choice: Choice): boolean {
        if (this.searchType !== SearchType.Local || !this.searchBufferSlug.length) {
            return false;
        }
        return !choice.labelSlug.includes(this.searchBufferSlug);
    }
}
