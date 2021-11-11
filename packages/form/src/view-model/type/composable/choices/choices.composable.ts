
import { isScalar, isObject, Primitive, isUndefined, ensureString } from "@banquette/utils-type";
import { replaceStringVariables } from "@banquette/utils-string";
import { ChoiceInterface } from "./choice.interface";

export enum SearchType {
    Implicit,
    Local,
    Remote
}

export type SelectionChangeCallback = (selection: any) => void;

export class ChoicesComposable {
    /**
     * Normalized array of choices ready to be consumed by the view.
     */
    public items: ChoiceInterface[] = [];

    /**
     * Array of choices that have been selected and are kept separately
     * so available choices can be modified without losing them.
     */
    public selectedItems: ChoiceInterface[] = [];

    /**
     * Array of choices that have been selected but are not part of `choices` anymore.
     */
    public invisibleSelectedItems: ChoiceInterface[] = [];

    /**
     * The string visible at all time to the end user that resumes what is selected.
     */
    public selectionResume: string = '';

    /**
     * A placeholder text to set as `selectionResume` when nothing is selected.
     */
    public selectionPlaceholder: string = '';

    /**
     * Maximum number of characters the resume can have.
     */
    public selectionResumeMaxLength: number = 30;

    /**
     * `true` to allow multiple choices selection.
     */
    public multiple: boolean = false;

    /**
     * The name of the property to use as label when the choices are objects.
     */
    public choicesLabelProperty: string|null = null;

    /**
     * Same as "choicesLabelProperty" but takes an expression instead of a property name.
     * The expression can contain variables that will be replaced by values of the object.
     *
     * For example:
     *
     * <form-select
     *    [...]
     *    choices-label-property-expr="{firstName} {lastName} {email}"
     *
     * By default, each variable must be surrounded by "{" and "}".
     * You can access deep properties by adding a "." between each level, for example: {user.category.name}.
     */
    public choicesLabelPropertyExpr: string|null = null;

    /**
     * The name of the property to use as identifier when the choices are objects.
     * The identifier is used to match selected choices with newly fetched choices (which may not contain the same object instance).
     */
    public choicesIdentifierProperty: string|null = null;

    /**
     * Are the choices visible?
     */
    public visible: boolean = false;

    /**
     * Can be:
     *
     * - SearchType.Implicit:
     *     No search input is visible. If the user starts typing, the text will be added to a temporary buffer
     *     that reset after 2 seconds of inactivity.
     *     Results are not filtered, the first match is simply highlighted and scrolled to.
     *     This search mode is intended for small sets of items.
     *
     * - SearchType.Local:
     *     A search input is visible at all time. When the user enters something in it, results are filtered
     *     so only matching results remain visible in the dropdown.
     *     Non-matching results are simply HIDDEN, they are still in the DOM.
     *     This search mode is intended for moderate sets of items.
     *
     * - SearchType.Remote:
     *     A search input is visible at all time. No results are visible in the dropdown until the user
     *     searches something. When a search is entered, a request is made to fetch the corresponding results.
     *     This search mode is intended for large sets of items.
     */
    public searchType: SearchType = SearchType.Implicit;

    /**
     * Name of the url parameter to use to send the text of the search to the server.
     * In an array is given, multiple parameters will be created with the user's search text as value.
     *
     * This parameter is REQUIRED when the searchType is "remote" and unused in other cases.
     */
    public searchRemoteParamName: string|string[] = 'search';

    /**
     * Minimum number of characters the search must contain before remote filtering is done.
     * This parameter is only used when the searchType is "remote".
     */
    public searchMinLength: number = 0;

    /**
     * Get the current item on focus.
     */
    public get focusedItem(): ChoiceInterface|null {
        for (const item of this.items) {
            if (item.focused) {
                return item;
            }
        }
        return null;
    }

    /**
     * Array of functions to call when the selection changes.
     */
    private selectionSubscribers: SelectionChangeCallback[] = [];

    /**
     * Select a choice.
     */
    public select(choice: ChoiceInterface, freezeVisibility: boolean = false): void {
        // Ensure the object reference is part of the available choices.
        if (this.items.indexOf(choice) < 0) {
            return;
        }
        this.updateSelection(() => {
            if (!this.multiple) {
                this.clear();
                if (!freezeVisibility) {
                    this.hide();
                }
            }
            const pos = this.getChoiceIndex(this.selectedItems, choice);
            if (pos < 0) {
                choice.selected = true;
                this.selectedItems.push(choice);
            } else if (this.multiple) {
                this.selectedItems.splice(pos, 1);
                choice.selected = false;
            }
        });
    }

    /**
     * Clear the whole selection.
     */
    public clear(): void {
        this.updateSelection(() => {
            for (const item of this.selectedItems) {
                item.selected = false;
            }
            this.selectedItems = [];
        });
    }

    /**
     * Toggle choices visibility.
     */
    public toggle(): void {
        if (this.visible) {
            this.hide();
        } else {
            this.show();
        }
    }

    /**
     * Hide the choices.
     */
    public hide(): void {
        this.changeVisibility(false);
    }

    /**
     * Show the choices.
     */
    public show(): void {
        this.changeVisibility(true);
    }

    /**
     * Update the whole list of choices.
     */
    public set(choices: any[]): void {
        this.updateSelection(() => {
            this.items = this.normalizeChoices(choices);
            if (this.searchType !== SearchType.Remote) {
                this.clearNonExistingSelectedChoices();
            }
        });
    }

    /**
     * Register a callback that will be notified each time the array of selected choices is modified.
     */
    public onSelectionChange(cb: SelectionChangeCallback): void {
        this.selectionSubscribers.push(cb);
    }

    /**
     * To call when a keydown event is emitted for the component.
     */
    public onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'ArrowUp') {
            this.moveSelection(-1);
        } else if (event.key === 'ArrowDown') {
            this.moveSelection(1);
        } else if (event.key === 'Enter') {
            if (this.multiple && this.focusedItem) {
                this.select(this.focusedItem);
            } else if (!this.multiple) {
                this.hide();
            }
        } else if (event.key === 'Escape') {
            this.hide();
        }
    }

    /**
     * The behavior of this method depends on the `multiple` option:
     *
     *  - If `multiple` is `true`: move the `focused` item "step" time from the current position.
     *    If no item is focused yet, the first one is.
     *
     *  - If `multiple` is false`: move the `selected` item "step" time.
     *    If no item is selected yet, the first one is.
     */
    private moveSelection(step: number): void {
        if (!this.items.length) {
            return ;
        }
        if (!this.multiple && !this.selectedItems.length) {
            return this.select(this.items[0], true);
        } else if (this.multiple && !this.focusedItem) {
            return this.focus(this.items[0]);
        }
        const pos = this.getChoiceIndex(
            this.items,
            this.multiple ? this.focusedItem as ChoiceInterface : this.selectedItems[0]
        );
        if (pos < 0) {
            return ;
        }
        const newPos = Math.max(0, Math.min(pos + step, this.items.length - 1));
        if (this.multiple) {
            this.focus(this.items[newPos]);
        } else {
            this.select(this.items[newPos], true);
        }
    }

    /**
     * Focus a choice item.
     */
    private focus(choice: ChoiceInterface): void {
        for (const item of this.items) {
            item.focused = false;
        }
        choice.focused = true;
    }

    /**
     * Change the choices visibility.
     */
    private changeVisibility(visible: boolean): void {
        this.visible = visible;
    }

    /**
     * Try to get an item in an array of choices.
     */
    private getChoiceIndex(container: ChoiceInterface[], search: ChoiceInterface): number {
        for (let i = 0; i < container.length; ++i) {
            if (container[i].identifier === search.identifier) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Take a list of raw choices and type to normalize it into an array of ChoiceInterface.
     * The resulting list may miss some items if they cannot be normalized with the current configuration.
     */
    private normalizeChoices(choices: any[]): ChoiceInterface[] {
        const knownIdentifiers: Primitive[] = [];
        const normalizedChoices: ChoiceInterface[] = [];
        for (const choice of choices) {
            const normalized = this.normalizeChoice(choice);
            if (normalized !== null) {
                if (knownIdentifiers.indexOf(normalized.identifier) < 0) {
                    normalizedChoices.push(normalized);
                    knownIdentifiers.push(normalized.identifier);
                } else {
                    console.warn(`Duplicate choice identifier "${normalized.identifier}". Choice ignored:`, choice);
                }
            }
        }
        return normalizedChoices;
    }

    /**
     * Try to normalize a raw choice into a ChoiceInterface.
     */
    private normalizeChoice(choice: any): ChoiceInterface|null {
        const label = this.resolveChoiceLabel(choice);
        const identifier = this.resolveChoiceIdentifier(choice);
        if (identifier === null) {
            console.warn('Failed to normalize choice:', choice);
            return null;
        }
        const normalized: ChoiceInterface|null = this.normalizeFromSelectedChoices(identifier);
        if (normalized !== null) {
            // The raw value may have changed even if the identifier is the same.
            normalized.rawValue = choice;
            return normalized;
        }
        return {
            label, identifier,
            allowHtml: false,
            selected: false,
            focused: false,
            disabled: false,
            rawValue: choice
        };
    }

    /**
     * Try to resolve the label of a choice.
     */
    private resolveChoiceLabel(choice: any): string {
        if (isScalar(choice)) {
            return String(choice);
        }
        const defaultLabel = '(missing label)';
        if (!isObject(choice)) {
            return defaultLabel;
        }
        if (this.choicesLabelProperty !== null) {
            if (!isUndefined(choice[this.choicesLabelProperty])) {
                return ensureString(choice[this.choicesLabelProperty]);
            }
            // Check if the user didn't give both the property and the expression.
            // In such a case it could mean "use the property if available, otherwise the expression.".
            if (this.choicesLabelPropertyExpr === null) {
                console.warn(`Label property "${this.choicesLabelProperty}" not found, for:`, choice);
                return defaultLabel;
            }
        }
        if (this.choicesLabelPropertyExpr !== null) {
            // TODO: make the start and end chars configurable.
            return replaceStringVariables(this.choicesLabelPropertyExpr, choice, '{', '}');
        }
        console.warn('Please define what property to use as label, for:', choice);
        return defaultLabel;
    }

    /**
     * Try to resolve the identifier of a choice.
     */
    private resolveChoiceIdentifier(choice: any): Primitive {
        if (isScalar(choice)) {
            return choice;
        }
        if (!isObject(choice)) {
            return null;
        }
        if (this.choicesIdentifierProperty !== null) {
            if (!isUndefined(choice[this.choicesIdentifierProperty])) {
                return choice[this.choicesIdentifierProperty];
            }
            console.warn(`Identifier property "${this.choicesIdentifierProperty}" not found, for:`, choice);
        } else {
            console.warn('Please define what property to use as identifier, for:', choice);
        }
        return null;
    }

    /**
     * Try to find a matching choice in the list of selected choices.
     */
    private normalizeFromSelectedChoices(identifier: any): ChoiceInterface|null {
        for (const candidate of this.selectedItems) {
            if (candidate.identifier === identifier) {
                return candidate;
            }
        }
        return null;
    }

    /**
     * Remove from the list of selected choices all the items not present in `items`.
     */
    private clearNonExistingSelectedChoices(): void {
        this.updateSelection(() => {
            this.selectedItems = this.selectedItems.filter((candidate: ChoiceInterface) => {
                return this.getChoiceIndex(this.items, candidate) > -1;
            });
        });
    }

    /**
     * Wrap a callback that will update the list of selected choices to ensure
     * the necessary operations will be performed after, and only performed once.
     */
    private updateSelection = (() => {
        let callCount = 0;
        return (cb: () => void): void => {
            ++callCount;
            cb();
            if ((--callCount) === 0) {
                this.selectionResume = this.generateSelectionResume();
                this.notifySelectionSubscribers();
            }
        };
    })();

    /**
     * Generate resume string of selected choices.
     */
    private generateSelectionResume(): string {
        if (!this.selectedItems.length) {
            return this.selectionPlaceholder;
        }
        if (this.selectedItems.length === 1) {
            return this.selectedItems[0].label;
        }
        const resume: string = this.selectedItems.reduce((resume: string, item: ChoiceInterface) => {
            return resume + (resume != '' ? ', ' : '') + item.label;
        }, '');
        return resume.length > this.selectionResumeMaxLength ? (resume.substring(0, this.selectionResumeMaxLength - 3) + '...') : resume;
    }

    /**
     * Notify the selection subscribers with the current list of selected choices.
     */
    private notifySelectionSubscribers(): void {
        let selectedValue: any;
        if (!this.multiple && this.selectedItems.length > 0) {
            selectedValue = this.selectedItems[0].rawValue;
        } else if (this.multiple) {
            selectedValue = [];
            for (const item of this.selectedItems) {
                selectedValue.push(item.rawValue);
            }
        }
        for (const subscriber of this.selectionSubscribers) {
            subscriber(selectedValue);
        }
    }
}
