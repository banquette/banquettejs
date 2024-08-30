import { UsageException } from "@banquette/exception";
import { getObjectKeys } from "@banquette/utils-object";
import { ensureInteger, isNullOrUndefined, isNumeric, isUndefined } from "@banquette/utils-type";
import { ValidatorContainerInterface, ValidatorInterface } from "@banquette/validation";
import { AbstractFormGroup } from "./abstract-form-group";
import { CallContext, FilterGroup, FormEvents, ValidationStrategy } from "./constant";
import { ComponentAddedFormEvent } from "./event/component-added.form-event";
import { ComponentRemovedFormEvent } from "./event/component-removed.form-event";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { ComponentNotFoundException } from "./exception/component-not-found.exception";
import { FormChildComponentInterface } from "./form-child-component.interface";
import { FormComponentInterface } from "./form-component.interface";
import { ForEachFilters, State } from "./type";

export class FormArray extends AbstractFormGroup<number, any[], FormComponentInterface[]> {
    /**
     * Get all the children as an array.
     */
    public get children(): FormComponentInterface[] {
        return this.children_.reduce((acc: FormComponentInterface[], item: FormChildComponentInterface) => {
            acc.push(item.decorated);
            return acc;
        }, [] as FormComponentInterface[]);
    }

    /**
     * A set of components stored as an array.
     */
    private children_: FormChildComponentInterface[] = [];

    public constructor(children: FormComponentInterface[] = [], validator?: ValidatorInterface) {
        super();
        this.additionalPatternTags.push('array');
        for (const child of children) {
            this.append(child);
        }
        this.setValidator(validator || null);
    }

    /**
     * Append a form component to the end of the collection.
     *
     * Use the `set` method to replace an existing component.
     */
    public append(component: FormComponentInterface): void {
        this.removeByRef(component);
        this.updateCollection(() => {
            this.children_.push(component.setParent(this.buildParentComponentDecorator()));
            this.children_[this.children_.length - 1].propagateStatesToParent();

            const childValidator = this.children_[this.children_.length - 1].decorated.validator;
            if (childValidator !== null) {
                this.updateContainerValidator((container: ValidatorContainerInterface) => {
                    container.set(String(this.children_.length - 1), childValidator);
                });
            }
        });
        this.dispatch(FormEvents.ComponentAdded, () => {
            const index: number = this.children_.length - 1;
            return new ComponentAddedFormEvent<number>(this, this.children_[index].decorated, index);
        });
    }

    /**
     * Add a form component to the beginning of the collection.
     *
     * Use the `set` method to replace an existing component.
     */
    public prepend(component: FormComponentInterface): void {
        this.removeByRef(component);
        this.updateCollection(() => {
            this.children_.unshift(component.setParent(this.buildParentComponentDecorator()));
            this.children_[0].propagateStatesToParent();
            this.updateValidator();
        });
        this.dispatch(FormEvents.ComponentAdded, () => new ComponentAddedFormEvent<number>(this, this.children_[0].decorated, 0));
    }

    /**
     * Insert a form component at a specific index, moving all elements after it.
     *
     * Use the `set` method to replace an existing component.
     */
    public insert(index: number, component: FormComponentInterface): void {
        const existingIndex: number|null = this.getIndexOf(component);
        if (existingIndex !== null) {
            if (existingIndex === index) {
                return ;
            }
            this.remove(existingIndex);
        }
        this.updateCollection(() => {
            const child: FormChildComponentInterface = component.setParent(this.buildParentComponentDecorator());
            index = Math.min(index, this.children_.length);
            if (index < this.children_.length) {
                this.children_.splice(index, 0, child);
            } else {
                this.children_.push(child);
            }
            child.propagateStatesToParent();
            this.updateValidator();
        });
        this.dispatch(FormEvents.ComponentAdded, () => new ComponentAddedFormEvent<number>(this, this.children_[0].decorated, 0));
    }

    /**
     * Get a component by name.
     * Becomes an alias of `getByPath` if a path is given.
     *
     * @throws ComponentNotFoundException
     */
    public get<T extends FormComponentInterface>(identifier: number|string): T {
        if (!isNumeric(identifier)) {
            if (!identifier.toString().includes('/')) {
                throw new UsageException(`Invalid identifier "${identifier}". Must be an integer or a path.`);
            }
            return this.getByPath(identifier as string);
        }
        identifier = ensureInteger(identifier);
        if (!this.has(identifier)) {
            throw new ComponentNotFoundException(identifier, `No component named "${identifier}" is currently present in "${this.path}".`);
        }
        return this.children_[identifier].decorated as T;
    }

    /**
     * Get the index of a component in the array.
     */
    public getNameOf(component: FormComponentInterface): number|null {
        for (let i = 0; i < this.children_.length; ++i) {
            if (this.children_[i].decorated.id === component.id) {
                return i;
            }
        }
        return null;
    }

    /**
     * Replace an existing component.
     */
    public set(index: number, component: FormComponentInterface): void {
        if (index < this.children_.length) {
            if (this.children_[index].decorated.id === component.id) {
                return;
            }
            this.remove(index);
        }
        this.updateCollection(() => {
            const child: FormChildComponentInterface = component.setParent(this.buildParentComponentDecorator());
            if (index < this.children_.length) {
                this.children_[index] = child;
                this.updateValidator();
            } else if (index === this.children_.length) {
                this.children_.push(child);
                const childValidator = this.children_[this.children_.length - 1].decorated.validator;
                if (childValidator !== null) {
                    this.updateContainerValidator((container: ValidatorContainerInterface) => {
                        container.set(String(this.children_.length - 1), childValidator);
                    });
                }
            } else {
                throw new UsageException(`There is no component at index "${index}" and index "${index}" is not the next contiguous identifier.`);
            }
            child.propagateStatesToParent();
        });
        this.dispatch(FormEvents.ComponentAdded, () => new ComponentAddedFormEvent<number>(this, this.children_[index].decorated, index));
    }

    /**
     * Merge a group of the same type into the current one.
     */
    public merge(source: FormArray): void {
        source.forEachDecorated((child: FormChildComponentInterface) => {
            this.append(child.decorated);
        });
    }

    /**
     * Remove a component from the collection.
     */
    public remove(index: number): FormComponentInterface|null {
        if (index >= this.children_.length) {
            return null;
        }
        const removed: FormChildComponentInterface = this.children_[index];
        this.updateCollection(() => {
            removed.removeStatesFromParent();
            this.children_.splice(index, 1);
            removed.unsetParent();
            this.updateValidator();
        });
        this.dispatch(FormEvents.ComponentRemoved, () => new ComponentRemovedFormEvent<number>(this, removed.decorated, index));
        return removed.decorated;
    }

    /**
     * Remove all components from the collection.
     */
    public clear(): void {
        const children = ([] as FormChildComponentInterface[]).concat(this.children_);
        this.updateCollection(() => {
            this.children_ = [];
            this.updateValidator();
        });
        for (let i = 0; i < children.length; ++i) {
            this.dispatch(FormEvents.ComponentRemoved, () => new ComponentRemovedFormEvent<number>(this, children[i].decorated, i));
        }
    }

    /**
     * Check whether there is a component with the given name in the collection.
     */
    public has(index: number): boolean {
        return index < this.children_.length;
    }

    /**
     * Count the number of children.
     */
    public count(): number {
        return this.children_.length;
    }

    /**
     * Sets the value of the `FormArray`. It accepts an array that matches the internal array of controls.
     *
     * If a control present in the form array is missing from the input value (or set to undefined),
     * the value of the control will not be modified.
     *
     * If a value of the input doesn't match any control, it will be ignored.
     */
    public setValue(values: any[]): void {
        for (let i = 0, c = Math.min(this.children_.length, values.length); i < c; ++i) {
            if (!isNullOrUndefined(values[i])) {
                this.children_[i].setValue(values[i]);
            }
        }
        this.updateValue();
        if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
            this.parent.updateValue();
        }
    }

    /**
     * Set the default value of child defined in the input object.
     */
    public setDefaultValue(values: Record<string, any>): void {
        for (let i = 0, c = Math.min(this.children_.length, values.length); i < c; ++i) {
            if (!isNullOrUndefined(values[i])) {
                this.children_[i].setDefaultValue(values[i]);
            }
        }
        this.updateValue();
        if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
            this.parent.updateValue();
        }
    }

    /**
     * Call a function for each child.
     * If the callback returns `false`, the loop is stopped.
     */
    public forEach(cb: (component: FormComponentInterface, identifier: number) => void|false, filters?: ForEachFilters): void {
        if (isUndefined(filters)) {
            filters = this.foreachFilters[FilterGroup.External];
        }
        // Copy the array to allow the callback to alter the collection without messing up the loop.
        const copy = [...this.children_];
        const filtersKeys: State[] = getObjectKeys(filters);
        for (let i = 0; i < copy.length; ++i) {
            let found = false;
            for (const state of filtersKeys) {
                if (copy[i].decorated[state] !== filters[state]) {
                    found = true;
                    break ;
                }
            }
            if (found) {
                continue ;
            }
            if (cb(copy[i].decorated, i) === false) {
                break ;
            }
        }
    }

    /**
     * A protected version of forEach that iterates over the whole collection and returns
     * the decorator instead of the real instance of the component like the public one.
     */
    protected forEachDecorated(cb: (decorator: FormChildComponentInterface, identifier: number) => void|false): void {
        // Copy the array to allow the callback to alter the collection without messing up the loop.
        const copy = [...this.children_];
        for (let i = 0; i < copy.length; ++i) {
            if (cb(copy[i], i) === false) {
                break ;
            }
        }
    }

    /**
     * Refresh the value from the children.
     */
    protected updateValue(): void {
        this.doUpdateValue(null);
    }

    /**
     * Do the actual update of the value.
     */
    private doUpdateValue(oldValue: any[]|null): void {
        if (oldValue === null) {
            oldValue = this.cloneValue();
        }
        (this as any).value = [];
        this.forEach((child: FormComponentInterface) => {
            this.value.push(child.value);
        }, this.foreachFilters[FilterGroup.UpdateValue]);
        this.dispatch(FormEvents.ValueChanged, () => new ValueChangedFormEvent(this, oldValue, this.value));
        if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
            this.parent.updateValue();
        }
        this.validateSelfIfStrategyMatches(ValidationStrategy.OnChange);
    }

    /**
     * Wrap the modifications to the components collection to ensure
     * the value is correctly updated and events are triggered.
     */
    private updateCollection(updateCallback: () => void): void {
        const oldValue: any[] = this.cloneValue();
        updateCallback();
        this.doUpdateValue(oldValue);
    }

    /**
     * Clone the current value.
     */
    private cloneValue(): any[] {
        return ([] as any[]).concat(this.value);
    }
}
