import { UsageException } from "@banquette/exception";
import { areEqual } from "@banquette/utils-misc";
import { getObjectKeys } from "@banquette/utils-object";
import { trim } from "@banquette/utils-string";
import { isUndefined } from "@banquette/utils-type";
import { ValidatorInterface } from "@banquette/validation";
import { AbstractFormGroup } from "./abstract-form-group";
import { CallContext, ConfigurableChildrenFilterType, Events, ValidationStrategy } from "./constant";
import { ComponentAddedFormEvent } from "./event/component-added.form-event";
import { ComponentRemovedFormEvent } from "./event/component-removed.form-event";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { ComponentNotFoundException } from "./exception/component-not-found.exception";
import { FormChildComponentInterface } from "./form-child-component.interface";
import { FormComponentInterface } from "./form-component.interface";
import { ForEachFilters, State } from "./type";

export class FormObject extends AbstractFormGroup<string, Record<string, any>, Record<string, FormComponentInterface>> {
    /**
     * Get all the children as a plain object.
     */
    public get children(): Record<string, FormComponentInterface> {
        const children: Record<string, FormComponentInterface> = {};
        for (const name of Object.keys(this.children_)) {
            children[name] = this.children_[name].decorated;
        }
        return children;
    }

    /**
     * A set of components stored as a key/value pair.
     */
    private children_: Record<string, FormChildComponentInterface> = {};

    public constructor(children: Record<string, FormComponentInterface> = {}, validator?: ValidatorInterface) {
        super();
        this.additionalPatternTags.push('object');
        for (const identifier of Object.keys(children)) {
            this.set(identifier, children[identifier]);
        }
        this.setValidator(validator || null);
    }

    /**
     * Get a component by name.
     * Becomes an alias of `getByPath` if a path is given.
     *
     * @throws ComponentNotFoundException
     */
    public get<T extends FormComponentInterface>(identifier: string): T {
        if (identifier.indexOf('/') > -1 || identifier.indexOf(':') > -1) {
            return this.getByPath(identifier);
        }
        if (!this.has(identifier)) {
            throw new ComponentNotFoundException(identifier, `No component named "${identifier}" is currently present in "${this.path}".`);
        }
        return this.children_[identifier].decorated as T;
    }

    /**
     * Get the name of a component in the group.
     */
    public getNameOf(component: FormComponentInterface): string|null {
        for (const name of Object.keys(this.children_)) {
            if (this.children_[name].decorated === component) {
                return name;
            }
        }
        return null;
    }

    /**
     * Replace an existing component.
     *
     * @throws UsageException If the identifier is invalid
     */
    public set(identifier: string, component: FormComponentInterface): void {
        identifier = FormObject.ValidateIdentifier(identifier);
        if (!isUndefined(this.children_[identifier])) {
            if (this.children_[identifier].decorated === component) {
                return;
            }
            this.children_[identifier].unsetParent();
        }
        this.updateCollection(() => {
            this.children_[identifier] = component.setParent(this.buildParentComponentDecorator());
            this.children_[identifier].propagateStatesToParent();
        });
        if (this.shouldDispatch) {
            this.dispatch(Events.ComponentAdded, new ComponentAddedFormEvent<string>(this, this.children_[identifier].decorated, identifier));
        }
    }

    /**
     * Merge a group of the same type into the current one.
     */
    public merge(source: FormObject): void {
        source.forEachDecorated((child: FormChildComponentInterface) => {
            this.set(child.decorated.name as string, child.decorated);
        });
    }

    /**
     * Remove a component from the collection.
     */
    public remove(identifier: string): FormComponentInterface|null {
        if (isUndefined(this.children_[identifier])) {
            return null;
        }
        const removed: FormChildComponentInterface = this.children_[identifier];
        this.updateCollection(() => {
            removed.removeStatesFromParent();
            delete this.children_[identifier];
            removed.unsetParent();
        });
        if (this.shouldDispatch) {
            this.dispatch(Events.ComponentRemoved, new ComponentRemovedFormEvent<string>(this, removed.decorated, identifier));
        }
        return removed.decorated;
    }

    /**
     * Remove all components from the collection.
     */
    public clear(): void {
        const components = this.shouldDispatch ? Object.assign({}, this.children_) : {};
        this.updateCollection(() => {
            this.children_ = {};
        });
        if (this.shouldDispatch) {
            for (const name of Object.keys(components)) {
                this.dispatch(Events.ComponentRemoved, new ComponentRemovedFormEvent<string>(this, components[name].decorated, name));
            }
        }
    }

    /**
     * Check whether there is a component with the given name in the collection.
     */
    public has(identifier: string): boolean {
        return !isUndefined(this.children_[identifier]);
    }

    /**
     * Count the number of children.
     */
    public count(): number {
        return Object.keys(this.children_).length;
    }

    /**
     * Sets the value of the `FormObject`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * If a control present in the form group is missing from the input value,
     * the value of the control will not be modified.
     *
     * If a value of the input doesn't match any control, it will be ignored.
     *
     * @usageNotes
     * ```
     * const form = new FormObject({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({last: 'Drew'});
     *
     * console.log(form.value);   // {first: null, last: 'Drew'}
     * ```
     */
    public setValue(values: Record<string, any>): void {
        for (const name of Object.keys(values)) {
            if (!isUndefined(this.children_[name])) {
                this.children_[name].setValue(values[name]);
            }
        }
        this.updateValue();
        if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
            this.parent.updateValue();
        }
    }

    // /**
    //  * Set the validator to use to the validate the component.
    //  *
    //  * The validator should only validate the current component because only the value will be exposed,
    //  * not the component itself.
    //  *
    //  * If child components need validation, give them their own validators.
    //  */
    // public setValidator(validator: ValidatorInterface|null) {
    //     const subValidators: ValidatorsCollection = {};
    //     this.forEach((child: FormComponentInterface, name: string) => {
    //         if (child.validator !== null) {
    //             subValidators[name] = child.validator;
    //         }
    //     }, this.foreachFilters[ConfigurableChildrenFilterType.Validate]);
    //     if (Object.keys(subValidators).length > 0) {
    //         let containerValidator = Container(subValidators);
    //         if (validator !== null) {
    //             validator = And(validator, containerValidator);
    //         } else {
    //             validator = containerValidator;
    //         }
    //     }
    //     super.setValidator(validator);
    // }

    /**
     * Call a function for each child.
     * If the callback returns `false`, the loop is stopped.
     */
    public forEach(cb: (component: FormComponentInterface, identifier: string) => void|false, filters?: ForEachFilters): void {
        if (isUndefined(filters)) {
            filters = this.foreachFilters[ConfigurableChildrenFilterType.External];
        }
        const filtersKeys: State[] = getObjectKeys(filters);
        ext:
        for (const name of Object.keys(this.children_)) {
            for (const state of filtersKeys) {
                if (this.children_[name].decorated[state] !== filters[state]) {
                    continue ext;
                }
            }
            if (cb(this.children_[name].decorated, name) === false) {
                break ;
            }
        }
    }

    /**
     * A protected version of forEach that iterates over the whole collection and returns
     * the decorator instead of the real instance of the component like the public one.
     */
    protected forEachDecorated(cb: (decorator: FormChildComponentInterface, identifier: string) => void|false): void {
        for (const name of Object.keys(this.children_)) {
            if (cb(this.children_[name], name) === false) {
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
    private doUpdateValue(oldValue: Record<string, any>|null): void {
        if (oldValue === null) {
            oldValue = this.cloneValue();
        }
        (this as any).value = {};
        this.forEach((child: FormComponentInterface, name: string) => {
            this.value[name] = child.value;
        }, this.foreachFilters[ConfigurableChildrenFilterType.UpdateValue]);
        if (this.shouldDispatch) {
            this.dispatch(Events.ValueChanged, new ValueChangedFormEvent(this, oldValue, this.value));
        }
        if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
            this.parent.updateValue();
        }
        if (!areEqual(oldValue, this.value)) {
            this.validateIfStrategyMatches(ValidationStrategy.OnChange);
        }
    }

    /**
     * Wrap the modifications to the components collection to ensure
     * the value is correctly updated and events are triggered.
     */
    private updateCollection(updateCallback: () => void): void {
        const oldValue: Record<string, any> = this.cloneValue();
        updateCallback();
        this.doUpdateValue(oldValue);
    }

    /**
     * Clone the current value.
     */
    private cloneValue(): Record<string, any> {
        return Object.assign({}, this.value);
    }

    /**
     * Throws an exception if the identifier is invalid.
     *
     * @return the cleaned up identifier
     *
     * @throws UsageException
     */
    private static ValidateIdentifier(identifier: string): string {
        identifier = trim(identifier);
        if (!identifier) {
            throw new UsageException('You cannot add a child with an empty identifier to a form object.');
        }
        if (identifier.indexOf('/') > -1) {
            throw new UsageException(`Invalid identifier "${identifier}", the character "/" is reserved.`);
        }
        return identifier;
    }
}
