import { UnsubscribeFunction } from "@banquette/event/type";
import { MatchType } from "@banquette/utils-glob/constant";
import { MatchResult } from "@banquette/utils-glob/match-result";
import { ltrim } from "@banquette/utils-string/format/ltrim";
import { trim } from "@banquette/utils-string/format/trim";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isBoolean } from "@banquette/utils-type/is-boolean";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { createValidator } from "@banquette/validation/create-validator";
import { ValidationContext } from "@banquette/validation/validation-context";
import { ValidationResult } from "@banquette/validation/validation-result";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { AbstractFormComponent } from "./abstract-form-component";
import {
    BasicState,
    CallContext,
    FilterGroup,
    ContextualizedState,
    FormEvents,
    VirtualViolationType,
    EventsInheritanceMap
} from "./constant";
import { FormEvent } from "./event/form-event";
import { StateChangedFormEvent } from "./event/state-changed.form-event";
import { ComponentNotFoundException } from "./exception/component-not-found.exception";
import { FormChildComponentInterface } from "./form-child-component.interface";
import { FormComponentInterface } from "./form-component.interface";
import { FormComponentsCollection } from "./form-components-collection";
import { FormControlInterface } from "./form-control.interface";
import { FormError } from "./form-error";
import { FormGroupInterface } from "./form-group.interface";
import { FormParentComponentInterface } from "./form-parent-component.interface";
import { ForEachFilters, UnassignedFormError } from "./type";

export abstract class AbstractFormGroup<IdentifierType = unknown, ValueType = unknown, ChildrenType = unknown> extends AbstractFormComponent<ValueType, ChildrenType> implements FormGroupInterface<IdentifierType> {
    /**
     * The filters to apply in the different type iteration over child components.
     * This is configurable using the `setChildrenFilters`.
     */
    protected readonly foreachFilters: Record<FilterGroup, ForEachFilters> = {
        [FilterGroup.External]: {[BasicState.Concrete]: true},
        [FilterGroup.UpdateValue]: {[BasicState.Concrete]: true},
        [FilterGroup.Validate]: {
            [BasicState.Concrete]: true,
            [ContextualizedState.Disabled]: false
        },
        [FilterGroup.Size]: {[BasicState.Concrete]: true},
        [FilterGroup.Errors]: {[BasicState.Concrete]: true, [BasicState.Invalid]: true}
    };

    /**
     * Get a component by name.
     * Becomes an alias of `getByPath` if a path is given.
     */
    public abstract get<T extends FormComponentInterface>(identifier: IdentifierType|string): T;

    /**
     * Get the name of a component in the group.
     */
    public abstract getNameOf(component: FormComponentInterface): IdentifierType|null;

    /**
     * Replace an existing component.
     */
    public abstract set(identifier: IdentifierType, component: FormComponentInterface): void;

    /**
     * Merge a group of the same type into the current one.
     */
    public abstract merge(source: this): void;

    /**
     * Check whether there is a component with the given name in the collection.
     */
    public abstract has(name: IdentifierType): boolean;

    /**
     * Remove a component from the collection.
     */
    public abstract remove(identifier: IdentifierType): FormComponentInterface|null;

    /**
     * Remove all components from the collection.
     */
    public abstract clear(): void;

    /**
     * Count the number of children.
     */
    public abstract count(): number;

    /**
     * Call a function for each child.
     * If the callback returns `false`, the loop is stopped.
     */
    public abstract forEach(cb: (component: FormComponentInterface, identifier: IdentifierType) => void|false, filters?: ForEachFilters): void;

    /**
     * A protected version of forEach that iterates over the whole collection and returns
     * the decorator instead of the real instance of the component like the public one.
     */
    protected abstract forEachDecorated(cb: (decorator: FormChildComponentInterface, identifier: IdentifierType) => void|false): void;

    /**
     * The group validator is generated dynamically
     */
    private groupValidator: ValidatorInterface|null = null;

    protected constructor() {
        super();
        this.additionalPatternTags.push('group');
        this.onStateChanged((event: StateChangedFormEvent) => {
            if (event.state === BasicState.Concrete && event.newValue) {
                try {
                    // Trick to prevent validation from occurring.
                    this.pushContext(CallContext.Reset);
                    this.updateValue();
                } finally {
                    this.popContext();
                }
            }
        });
    }

    /**
     * Alias of `count()`.
     */
    public get length(): number {
        return this.count();
    }

    /**
     * Get the "size" of the component.
     * Meaning the number of direct children + 1 to account for the component on which the call is made.
     *
     * A FormControlInterface will always have a size of "1", because it has no children.
     * An empty group will also have a size of "1".
     */
    public get size(): number {
        return this.length + 1;
    }

    /**
     * Same as `size` but add to length of children instead of them counting for one.
     */
    public get sizeDeep(): number {
        let totalLength = 1;
        this.forEach((component: FormComponentInterface) => {
            totalLength += component.sizeDeep;
        }, this.foreachFilters[FilterGroup.Size]);
        return totalLength;
    }

    /**
     * The whole list of errors found in the current component and all its children.
     */
    public get errorsDeep(): FormError[] {
        let errors: FormError[] = this.errors;
        this.forEach((component: FormComponentInterface) => {
            errors = errors.concat(component.errorsDeep);
        }, this.foreachFilters[FilterGroup.Errors]);
        return errors;
    }

    /**
     * A key/value pair object containing the path of each children component as index and the array of their errors as value.
     */
    public get errorsDeepMap(): Record<string, FormError[]> {
        const map: Record<string, FormError[]> = {[this.path]: this.errors};
        this.forEach((component: FormComponentInterface) => {
            Object.assign(map, component.errorsDeepMap);
        }, this.foreachFilters[FilterGroup.Errors]);
        return map;
    }

    /**
     * Add an error to a child component.
     * `name` can be a component name of a path to a deeper child.
     */
    public addChildError(name: string, error: UnassignedFormError|UnassignedFormError[]): void {
        const child: FormComponentInterface = this.get(name);
        const errors: UnassignedFormError[] = ensureArray(error);
        for (const item of errors) {
            child.addError(item.type, item.message);
        }
    }

    /**
     * Assign a map of errors to child components.
     * The map is a key/value pair where the key can be the name of a direct child or the path to a deeper one.
     */
    public addChildrenErrors(map: Record<string, UnassignedFormError|UnassignedFormError[]>): void {
        for (const childName of Object.keys(map)) {
            this.addChildError(childName, map[childName]);
        }
    }

    /**
     * Remove all errors from the component and its children.
     */
    public clearErrorsDeep(): void {
        super.clearErrorsDeep();
        this.forEach((component: FormComponentInterface) => {
            component.clearErrorsDeep();
        }, this.foreachFilters[FilterGroup.Errors]);
    }

    /**
     * Get all components matching one of the patterns and wrap the result in a collection
     * object that you can interact with as if it was a single component.
     */
    public getByPattern(pattern: string|string[]): FormComponentsCollection {
        const collection = new FormComponentsCollection();
        const patterns: string[] = ensureArray(pattern).map((item: string) => {
            item = trim(item);
            if (item.length > 0 && item[0] !== '/' && item[0] !== ':') {
                item = this.path + (this.path !== '/' ? '/' : '') + item;
            }
            return item;
        });
        this.forEachDecorated((component: FormChildComponentInterface) => {
            const result: MatchResult = component.decorated.matchPattern(patterns);
            if (result.pattern === MatchType.Full && result.tags === MatchType.Full) {
                collection.append(component.decorated);
            }
            if (result.pattern >= MatchType.Partial && component.decorated.isGroup()) {
                collection.concat(component.decorated.getByPattern(patterns));
            }
        });
        return collection;
    }

    /**
     * Try to get a form component by path.
     *
     * @throws ComponentNotFoundException
     */
    public getByPath<T extends FormComponentInterface>(path: string): T {
        path = ltrim(path, '/');
        if (path === '') {
            return this as any;
        }
        const pos: number = path.indexOf('/');
        if (pos < 0) {
            return this.get(path);
        }
        const identifier = path.substring(0, pos);
        const rest = path.substring(pos + 1);
        const child: FormComponentInterface = this.get(identifier);
        if (child.isGroup()) {
            return child.getByPath(rest);
        }
        throw new ComponentNotFoundException(path, `No component has been found for path "${path}" in "${this.path}".`);
    }

    /**
     * Set the filters to apply in a certain type of access to the child components of the group.
     */
    public setGroupFilters(type: FilterGroup, filters: ForEachFilters): void {
        this.foreachFilters[type] = filters;
        if (type === FilterGroup.UpdateValue) {
            this.updateValue();
        }
    }

    /**
     * Reset the control. It has the following effects:
     *
     *   - Set the value to the "default value",
     *   - Unmark the following states: `BasicState.Changed`, `BasicState.Touched`, `BasicState.Dirty`, `BasicState.Validated`,
     *   - Blur the control if focused,
     *   - Clear validation errors.
     *
     * Resetting the control does not impact the following states: `ContextualizedState.Disabled`, `BasicState.Busy`, `BasicState.Validating`, `BasicState.Concrete`.
     *
     * If the component has children, they will be reset as well.
     */
    public doReset(): void {
        super.doReset();
        this.forEachDecorated((component: FormChildComponentInterface) => {
            component.decorated.reset();
        });
    }

    /**
     * Register a callback that will be called when a component is added/set to the collection.
     */
    public onControlAdded(cb: (event: FormEvent) => void, priority?: number, selfOnly: boolean = true): UnsubscribeFunction {
        return this.subscribe(FormEvents.ComponentAdded, cb, priority, selfOnly);
    }

    /**
     * Register a callback that will be called when a component is removed from the collection.
     */
    public onControlRemoved(cb: (event: FormEvent) => void, priority?: number, selfOnly: boolean = true): UnsubscribeFunction {
        return this.subscribe(FormEvents.ComponentRemoved, cb, priority, selfOnly);
    }

    /**
     * Mark the component as `disabled` for the current call context.
     */
    protected markAsDisabled(): void {
        super.markAsDisabled();
        this.forEachDecorated((child: FormChildComponentInterface) => {
            child.disable();
        });
    }

    /**
     * Unmark the `disabled` state of the component for the current call context.
     */
    protected markAsEnabled(): void {
        super.markAsEnabled();
        this.forEachDecorated((child: FormChildComponentInterface) => {
            child.enable();
        });
    }

    /**
     * Force validate the component and all its children.
     * By calling this method the validation will always run immediately, no matter the validation strategy.
     */
    public validate(): boolean|Promise<boolean> {
        // Only create the group validator if there is an explicit validation on the group.
        if (this.groupValidator === null) {
            this.groupValidator = createValidator({
                validate: (context: ValidationContext): ValidationResult => {
                    let subSyncResult: boolean = true;
                    let promisesStack: Array<Promise<boolean>> = [];
                    const localResult: ValidationResult = this.validator !== null ? this.validator.validate(context.value) : new ValidationResult('/');
                    if (localResult.localPromise !== null) {
                        promisesStack.push(localResult.localPromise);
                    }
                    this.forEach((child: FormComponentInterface) => {
                        const subResult: Promise<boolean>|boolean = child.validate();
                        if (isBoolean(subResult)) {
                            subSyncResult = subSyncResult && subResult;
                            return ;
                        }
                        promisesStack.push(subResult);
                    }, this.foreachFilters[FilterGroup.Validate]);
                    if (!subSyncResult) {
                        localResult.addViolation(VirtualViolationType);
                    }
                    if (promisesStack.length === 0) {
                        return localResult;
                    }
                    localResult.delayResponse(new Promise((resolve, reject) => {
                        Promise.all(promisesStack).then((results: boolean[]) => {
                            if (results.indexOf(false) > -1) {
                                localResult.addViolation(VirtualViolationType);
                            }
                            resolve(results);
                        }).catch(reject);
                    }));
                    return localResult;
                }
            });
        }
        /**
         * If validate() has been called it means this is an explicit validation.
         * In such a case we don't only want to validator our own validator, but those
         * of our children too.
         *
         * To this while using the parent validation logic, we create an inline
         * validator that will validate everything as one unit.
         * This way the parent class can still deal with a single validator which is far easier.
         */
        return this.doValidate(this.groupValidator);
    }

    /**
     * Try to get the identifier of a child component.
     */
    protected getIndexOf(component: FormComponentInterface): IdentifierType|null {
        let match: IdentifierType|null = null;
        this.forEachDecorated((candidate: FormChildComponentInterface, identifier: IdentifierType) => {
            if (component.id === candidate.decorated.id) {
                match = identifier;
                return false;
            }
        });
        return match;
    }

    /**
     * Remove an element from the collection using a reference on the control instead of an identifier.
     */
    protected removeByRef(component: FormComponentInterface): void {
        const existingIndex = this.getIndexOf(component);
        if (existingIndex !== null) {
            this.remove(existingIndex);
        }
    }

    /**
     * Propagate the basic states of the component to its parents.
     */
    protected propagateStatesToParent(): void {
        // The states always come from the bottom part of the tree.
        // So we need to bubble down if we are on a container.
        this.forEachDecorated((child: FormChildComponentInterface) => {
            child.propagateStatesToParent();
        });
    }

    /**
     * Remove the marking of the component on the basic states of its parents.
     */
    protected removeStatesFromParent(): void {
        // The states always come from the bottom part of the tree.
        // So we need to bubble down if we are on a container.
        this.forEachDecorated((child: FormChildComponentInterface) => {
            child.removeStatesFromParent();
        });
    }

    /**
     * Create the decorator that will be used a child component.
     *
     * Doing this instead of exposing the instance directly has several advantages:
     *
     *   1) It's possible to expose methods to the child only (like `updateValue`).
     *   2) By wrapping the methods we can set a call context before the call and remove it after.
     *
     * Overall, it gives a better control over the capabilities given to child and avoid exposing them to the outside world.
     */
    protected buildParentComponentDecorator(): FormParentComponentInterface {
        const that = this;
        return Object.assign({
            get decorated(): FormComponentInterface { return that },
            get path(): string { return that.path },
            get root(): FormComponentInterface { return that.root },
            get activeControl(): FormControlInterface|null { return that.activeControl },
            set activeControl(control: FormControlInterface|null) { that.activeControl = control },
            pushContext: (context: CallContext, recursive: boolean) => {
                this.pushContext(context);
                if (recursive && this.parent !== null) {
                    this.parent.pushContext(context, true);
                }
            },
            popContext: (recursive: boolean) => {
                this.popContext();
                if (recursive && this.parent !== null) {
                    this.parent.popContext(true);
                }
            }
        }, this.buildContextualizedApi<Omit<FormParentComponentInterface, 'decorated' | 'path' | 'root' | 'activeControl' | 'pushContext' | 'popContext'>>({
                updateValue: this.updateValue,
                getConcreteValidationStrategy: this.getConcreteValidationStrategy,
                markBasicState: this.markBasicState,
                unmarkBasicState: this.unmarkBasicState,
                markAsVirtual: this.markAsVirtual,
                markAsConcrete: this.markAsConcrete,
                remove: this.removeByRef,
                dispatch: (type: symbol, event: FormEvent | (() => FormEvent)) => {
                    // If the event is not available as inherited we have nothing to do.
                    if (isUndefined(EventsInheritanceMap[type])) {
                        return ;
                    }
                    return this.dispatch(EventsInheritanceMap[type], event);
                }
            }, CallContext.Child)
        ) as FormParentComponentInterface;
    }
}
