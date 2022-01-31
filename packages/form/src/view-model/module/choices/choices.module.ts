import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { areEqual } from "@banquette/utils-misc/are-equal";
import { recursionSafeSideEffectProxy } from "@banquette/utils-misc/recursion-safe-side-effect-proxy";
import { replaceStringVariables } from "@banquette/utils-string/format/replace-string-variables";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { isObject } from "@banquette/utils-type/is-object";
import { isScalar } from "@banquette/utils-type/is-scalar";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Writeable, Primitive } from "@banquette/utils-type/types";
import { Choice } from "./choice";
import { ChoiceOrigin, ChoicesEvents } from "./constant";
import { ChoiceFocusedEvent } from "./event/choice-focused.event";
import { ChoicesChangedEvent } from "./event/choices-changed.event";
import { SelectionChangedEvent } from "./event/selection-changed.event";

@Module()
export class ChoicesModule {
    /**
     * Normalized array of choices ready to be consumed by the view.
     */
    public readonly items: Choice[] = [];

    /**
     * Array of choices that have been selected and are kept separately for easier manipulation.
     */
    public readonly selectedItems: Choice[] = [];

    /**
     * The string visible at all time to the end user that resumes what is selected.
     */
    public readonly selectionResume: string = '';

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
     * For example: `{firstName} {lastName} {email}`.
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
     * The name of the property to use as a value when the choices are objects.
     * If `null`, the whole raw value is used.
     */
    public choicesValueProperty: string|null = null;

    /**
     * The name of the property to use to set the `disabled` flag when the choices are objects.
     */
    public choicesDisabledProperty: string|null = null;

    /**
     * Are the choices visible?
     */
    public _visible: boolean = false;
    public get visible(): boolean {
        return this._visible;
    }
    public set visible(value: boolean) {
        this._visible = value;
    }

    /**
     * Number of visible choices.
     */
    public readonly visibleChoicesCount: number = 0;

    /**
     * Define the order in which choices should be sorted by origin.
     */
    public originOrdering: symbol[] = [ChoiceOrigin.Default, ChoiceOrigin.Remote];

    /**
     * Get the current item on focus.
     */
    public get focusedItem(): Choice|null {
        for (const item of this.items) {
            if (item.focused) {
                return item;
            }
        }
        return null;
    }

    /**
     * If `true` the current visibility state cannot be changed.
     */
    private visibilityFrozen: boolean = false;

    /**
     * An event dispatcher to use to notify something changed.
     */
    private readonly eventDispatcher = new EventDispatcher();

    /**
     * Select a choice.
     */
    public select(choice: Choice, freezeVisibility: boolean = false, allowToggle: boolean = true): void {
        // Ensure the object reference is part of the available choices and not disabled.
        if ((!choice.selected && this.getChoiceIndex(this.items, choice) < 0) || choice.disabled) {
            return;
        }
        this.updateSelection(() => {
            if (!this.multiple) {
                this.clearSelection();
                if (!freezeVisibility) {
                    this.hide();
                }
            }
            const pos = this.getChoiceIndex(this.selectedItems, choice);
            if (pos < 0) {
                choice.selected = true;
                this.selectedItems.push(choice);
            } else if (this.multiple && allowToggle) {
                this.selectedItems.splice(pos, 1);
                choice.selected = false;
            }
        });
    }

    /**
     * Deselect a choice.
     */
    public deselect(choice: Choice): void {
        this.updateSelection(() => {
            const pos = this.getChoiceIndex(this.selectedItems, choice);
            if (pos > -1) {
                this.selectedItems.splice(pos, 1);
            }
            choice.selected = false;
        });
    }

    /**
     * Focus an item.
     */
    public focus(choice: Choice): void {
        this.unfocusAll();
        choice.focused = true;
        this.eventDispatcher.dispatch(ChoicesEvents.ChoiceFocused, new ChoiceFocusedEvent(choice));
    }

    /**
     * Remove the focus of an item.
     */
    public unfocus(choice: Choice): void {
        choice.focused = false;
    }

    /**
     * Remove the focus of all items.
     */
    public unfocusAll(): void {
        for (const item of this.items) {
            item.focused = false;
        }
    }

    /**
     * Try to find the appropriate choice for a value and select it.
     */
    public synchronizeSelection(value: any, freezeVisibility: boolean = false): void {
        this.updateSelection(() => {
            this.clearSelection();
            const getComparisonValue = (value: any): any => {
                return isObject(value) && this.choicesIdentifierProperty ? value[this.choicesIdentifierProperty] : value;
            }
            const doSelectForValue = (value: any): void => {
                const comparisonValue = getComparisonValue(value);
                for (const candidate of this.items) {
                    if (areEqual(getComparisonValue(candidate.value), comparisonValue) && !candidate.disabled) {
                        this.select(candidate, freezeVisibility);
                        return;
                    }
                }
            };
            if (this.multiple) {
                value = ensureArray(value);
                for (const item of value) {
                    doSelectForValue(item);
                }
            } else {
                doSelectForValue(value);
            }
        });
    }

    /**
     * Clear the whole selection.
     */
    public clearSelection(): void {
        this.updateSelection(() => {
            for (let i = 0; i < this.selectedItems.length; ++i) {
                this.selectedItems[i].selected = false;
                this.selectedItems.splice(--i, 1);
            }
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
     * Freeze the visibility.
     */
    public freeze(): void {
        this.visibilityFrozen = true;
    }

    /**
     * Unfreeze the visibility.
     */
    public unfreeze(): void {
       this.visibilityFrozen = false;
    }

    /**
     * Update the whole list of choices.
     */
    public set(choices: any[], origin: symbol|null = ChoiceOrigin.Default): void {
        this.updateItems(() => {
            this.removeAll(origin);
            this.append(choices, origin || ChoiceOrigin.Default);
        });
    }

    /**
     * Append a list of choices at the end of the existing collection.
     */
    public append(choices: any[], origin: symbol = ChoiceOrigin.Default): void {
        this.updateItems(() => {
            (this as Writeable<ChoicesModule>).items = this.items.concat(this.normalizeChoices(choices, origin));
        });
    }

    /**
     * Prepend a list of choices to the beginning of the existing collection.
     */
    public prepend(choices: any[], origin: symbol = ChoiceOrigin.Default): void {
        this.updateItems(() => {
            (this as Writeable<ChoicesModule>).items = this.normalizeChoices(choices, origin).concat(this.items);
        });
    }

    /**
     * Insert a list of choices at a particular index of the existing collection.
     */
    public insert(choices: any[], index: number, origin: symbol = ChoiceOrigin.Default): void {
        this.updateItems(() => {
            index = Math.min(index, this.items.length);
            if (index < this.items.length) {
                (this as Writeable<ChoicesModule>).items = this.items.slice(0, index).concat(choices, this.items.slice(index));
            } else {
                this.append(choices, origin);
            }
        });
    }

    /**
     * Remove a choice from the list of available choices.
     */
    public remove(choice: Choice): void {
        const index = this.getChoiceIndex(this.items, choice);
        if (index > 0) {
            this.updateItems(() => {
                this.items.splice(index, 1);
            });
        }
    }

    /**
     * Remove all choices with a particular origin.
     */
    public removeAll(origin: symbol|null = null): void {
        this.updateItems(() => {
            for (let i = 0; i < this.items.length; ++i) {
                if (origin === null || this.items[i].origin === origin) {
                    this.items.splice(i--, 1);
                }
            }
        });
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
        } else {
            return ;
        }
        event.preventDefault();
        event.stopPropagation();
    }

    /**
     * Register a function to be called when the list of available choices change.
     */
    public onChoicesChanged(cb: (event: ChoicesChangedEvent) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ChoicesEvents.ChoicesChanged, cb);
    }

    /**
     * Register a function to be called when the selected choices change.
     */
    public onSelectionChanged(cb: (event: SelectionChangedEvent) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ChoicesEvents.SelectionChanged, cb);
    }

    /**
     * Register a function to be called when an item gains focus.
     */
    public onChoiceFocused(cb: (event: ChoiceFocusedEvent) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ChoicesEvents.ChoiceFocused, cb);
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
            this.multiple ? this.focusedItem as Choice : this.selectedItems[0]
        );
        if (pos < 0) {
            return ;
        }
        const newPos = Math.max(0, Math.min(pos + step, this.items.length - 1));

        // Always focus the item so the view can scroll it to view.
        this.focus(this.items[newPos]);

        // If not multiple, change the selection too.
        if (!this.multiple) {
            this.select(this.items[newPos], true);
        }
    }

    /**
     * Change the choices visibility.
     */
    private changeVisibility(visible: boolean): void {
        if (this.visibilityFrozen) {
            return ;
        }
        this.visible = visible;
        this.unfocusAll();
        if (!this.multiple && this.selectedItems.length === 1) {
            this.focus(this.selectedItems[0]);
        }
    }

    /**
     * Try to get an item in an array of choices.
     */
    private getChoiceIndex(container: Choice[], search: Choice): number {
        for (let i = 0; i < container.length; ++i) {
            if (container[i].identifier === search.identifier) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Take a list of raw choices and type to normalize it into an array of Choice.
     * The resulting list may miss some items if they cannot be normalized with the current configuration.
     */
    private normalizeChoices(choices: any[], origin: symbol): Choice[] {
        const knownIdentifiers: Primitive[] = this.items.reduce((a: Primitive[], item: Choice) => a.concat([item.identifier]), []);
        const normalizedChoices: Choice[] = [];
        for (const choice of choices) {
            const normalized = this.normalizeChoice(choice, origin);
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
     * Try to normalize a raw choice into a Choice.
     */
    private normalizeChoice(choice: any, origin: symbol): Choice|null {
        if (choice instanceof Choice) {
            return choice;
        }
        const identifier = this.resolveChoiceIdentifier(choice);
        if (identifier === null) {
            console.warn('Failed to normalize choice:', choice);
            return null;
        }
        const normalized: Choice|null = this.normalizeFromSelectedChoices(identifier);
        if (normalized !== null) {
            // The raw value may have changed even if the identifier is the same.
            normalized.value = choice;
            return normalized;
        }
        const instance = new Choice(
            this.resolveChoiceLabel(choice),
            this.resolveChoiceValue(choice),
            identifier,
            origin
        );
        instance.disabled = this.resolveChoiceDisabledState(choice);
        instance.external = false;
        return instance;
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
        console.warn('Please define what property to use as label using the "choices-label-property" attribute. For:', choice);
        return defaultLabel;
    }

    /**
     * Try to resolve the value of a choice.
     */
    private resolveChoiceValue(choice: any): any {
        if (!isObject(choice) || !this.choicesValueProperty) {
            return choice;
        }
        return choice[this.choicesValueProperty];
    }

    /**
     * Try to resolve the disabled state of a choice.
     */
    private resolveChoiceDisabledState(choice: any): boolean {
        if (!isObject(choice) || !this.choicesDisabledProperty) {
            return false;
        }
        return !!choice[this.choicesDisabledProperty];
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
            console.warn('Please define what property to use as identifier using the "choices-identifier-property" attribute. For:', choice);
        }
        return null;
    }

    /**
     * Try to find a matching choice in the list of selected choices.
     */
    private normalizeFromSelectedChoices(identifier: any): Choice|null {
        for (const candidate of this.selectedItems) {
            if (candidate.identifier === identifier) {
                return candidate;
            }
        }
        return null;
    }

    /**
     * Method to call when doing anything that may impact the selection.
     */
    private updateSelection = recursionSafeSideEffectProxy(() => {
        (this as Writeable<ChoicesModule>).selectionResume = this.generateSelectionResume();
        this.notifySelectionChanged();
    });

    /**
     * Method to call when modifying the list of items.
     */
    private updateItems = recursionSafeSideEffectProxy(() => {
        this.items.sort((a: Choice, b: Choice) => {
            return this.originOrdering.indexOf(a.origin) - this.originOrdering.indexOf(b.origin);
        });
        for (const item of this.items) {
            if (item.selected && this.getChoiceIndex(this.selectedItems, item) < 0) {
                this.select(item);
            }
        }
        this.updateSelection(() => {
            (this as Writeable<ChoicesModule>).selectedItems = this.selectedItems.filter((i) => {
                i.ghost = this.getChoiceIndex(this.items, i) < 0;
                return !i.ghost || i.selectionFrozen;
            });
        });

        const event = new ChoicesChangedEvent(this.items);
        this.eventDispatcher.dispatch(ChoicesEvents.ChoicesChanged, event);
        (this as Writeable<ChoicesModule>).visibleChoicesCount = event.choices.reduce((incr, item) => incr + (item.visible ? 1 : 0), 0);
        (this as Writeable<ChoicesModule>).items = event.choices;
    });

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
        const resume: string = this.selectedItems.reduce((resume: string, item: Choice) => {
            return resume + (resume != '' ? ', ' : '') + item.label;
        }, '');
        return resume.length > this.selectionResumeMaxLength ? (resume.substring(0, this.selectionResumeMaxLength - 3) + '...') : resume;
    }

    /**
     * Notify the selection subscribers with the current list of selected choices.
     */
    private notifySelectionChanged(): void {
        let selectedValue: any;
        if (!this.multiple && this.selectedItems.length > 0) {
            selectedValue = this.selectedItems[0].value;
        } else if (this.multiple) {
            selectedValue = [];
            for (const item of this.selectedItems) {
                selectedValue.push(item.value);
            }
        }
        this.eventDispatcher.dispatch(ChoicesEvents.SelectionChanged, new SelectionChangedEvent(selectedValue));
    }
}
