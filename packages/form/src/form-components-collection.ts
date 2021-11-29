import { UnsubscribeFunction } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { proxy } from "@banquette/utils-misc/proxy";
import { isFunction } from "@banquette/utils-type/is-function";
import { isType } from "@banquette/utils-type/is-type";
import { ValidatorInterface } from "@banquette/validation";
import { ValidationStrategy } from "./constant";
import { StateChangedFormEvent } from "./event/state-changed.form-event";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { FormComponentInterface } from "./form-component.interface";

/**
 * A collection that behave like a single component.
 */
export class FormComponentsCollection {
    /**
     * `true` if the collection is `validated` and all components of the collection are `valid`.
     */
    public get valid(): boolean { return this.validated && this.combineFlags('valid')}

    /**
     * `true` if the collection is `validated` and any of its components is `invalid`.
     */
    public get invalid(): boolean { return this.validated && !this.valid }

    /**
     * `true` if all components of the collection are `validated`.
     */
    public get validated(): boolean { return !this.notValidated }

    /**
     * Inverse of `validated`.
     */
    public get notValidated(): boolean { return this.combineFlags('validated') }

    /**
     * Inverse of `notValidating`.
     */
    public get validating(): boolean { return !this.notValidating }

    /**
     * `true` if all components of the collection are `notValidating`.
     */
    public get notValidating(): boolean { return this.combineFlags('notValidating') }

    /**
     * Inverse of `notBusy`.
     */
    public get busy(): boolean { return !this.notBusy }

    /**
     * `true` if all components of the collection are `notBusy`.
     */
    public get notBusy(): boolean { return this.combineFlags('notBusy') }

    /**
     * Inverse of `enabled`.
     */
    public get disabled(): boolean { return !this.enabled }

    /**
     * `true` if all components of the collection are `enabled`.
     */
    public get enabled(): boolean { return this.combineFlags('enabled') }

    /**
     * Inverse of `pristine`.
     */
    public get dirty(): boolean { return !this.pristine }

    /**
     * `true` if all components of the collection are `pristine`.
     */
    public get pristine(): boolean { return this.combineFlags('pristine') }

    /**
     * Inverse of `untouched`.
     */
    public get touched(): boolean { return !this.untouched }

    /**
     * `true` if all components of the collection are `untouched`.
     */
    public get untouched(): boolean { return this.combineFlags('untouched') }

    /**
     * Inverse of `unchanged`.
     */
    public get changed(): boolean { return !this.unchanged }

    /**
     * `true` if all components of the collection are `unchanged`.
     */
    public get unchanged(): boolean { return this.combineFlags('unchanged') }

    /**
     * Inverse of `unfocused`.
     */
    public get focused(): boolean { return !this.unfocused }

    /**
     * `true` if all components of the collection are `unfocused`.
     */
    public get unfocused(): boolean { return this.combineFlags('unfocused') }

    /**
     * Inverse of `concrete`.
     */
    public get virtual(): boolean { return !this.concrete };

    /**
     * `true` if all components of the collection are `concrete`.
     */
    public get concrete(): boolean { return this.combineFlags('concrete') }

    /**
     * Get an array containing the path of all the components found in the collection.
     */
    public get paths(): string[] {
        return this.collection.reduce((acc: string[], item: FormComponentInterface) => {
            acc.push(item.path);
            return acc;
        }, [] as string[]);
    }

    /**
     * Get the number of items in the collection.
     */
    public get length(): number {
        return this.collection.length;
    }

    /**
     * Combine all the values of the components of the collection into an array.
     */
    public get value(): any[] {
        const values: any[] = [];
        for (const child of this.collection) {
            values.push(child.value);
        }
        return values;
    }

    public constructor(private collection: FormComponentInterface[] = []) {

    }

    /**
     * Get a component of the collection.
     */
    public get(index: number): FormComponentInterface|null {
        return this.collection.length > index ? this.collection[index] : null;
    }

    /**
     * Add a component to the collection.
     */
    public append(component: FormComponentInterface): void {
        this.collection.push(component);
    }

    /**
     * Add a component to the beginning of the collection.
     */
    public prepend(component: FormComponentInterface): void {
        this.collection.unshift(component);
    }

    /**
     * Insert a component at a specific index, moving all elements after it.
     */
    public insert(index: number, component: FormComponentInterface): void {
        index = Math.min(index, this.collection.length);
        if (index < this.collection.length) {
            this.collection.splice(index, 0, component);
        } else {
            this.collection.push(component);
        }
    }

    /**
     * Remove a component from the collection.
     */
    public remove(component: FormComponentInterface): void {
        const pos: number = this.collection.indexOf(component);
        if (pos > -1) {
            this.collection.splice(pos, 1);
        }
    }

    /**
     * Remove all components of the collection from their parent.
     */
    public detach(): void {
        this.forEach((component: FormComponentInterface) => {
            if (component.parent !== null) {
                component.parent.remove(component);
            }
        });
    }

    /**
     * Iterate through the content of the collection.
     */
    public forEach(cb: (component: FormComponentInterface) => void|false): void {
        for (const item of this.collection) {
            if (cb(item) === false) {
                break ;
            }
        }
    }

    /**
     * Append all the children of another collection into this one.
     */
    public concat(collection: FormComponentsCollection): void {
        collection.forEach(proxy(this.append, this));
    }

    /**
     * Test if every item in the collection is `true` for a given flag.
     */
    private combineFlags(name: keyof FormComponentInterface): boolean {
        for (const item of this.collection) {
            if (!item[name]) {
                return false;
            }
        }
        return true;
    }

    /**
     * Call a function of each component in the collection.
     */
    private callForEach(name: keyof FormComponentInterface, ...args: any[]): any {
        for (const item of this.collection) {
            const method = item[name];
            if (isType<Function>(method, isFunction)) {
                method.apply(item, args);
            }
        }
    }

    /**
     * Subscribe to an event for each item of the collection.
     */
    private subscribeForEach<T>(method: keyof FormComponentInterface, callback: (event: T) => void): UnsubscribeFunction {
        let unsubscribeFunctions: UnsubscribeFunction[] = [];
        for (const child of this.collection) {
            const methodRef = child[method] as Function;
            unsubscribeFunctions.push(methodRef.apply(child, [callback]));
        }
        return () => {
            for (const fn of unsubscribeFunctions) {
                fn();
            }
            unsubscribeFunctions = [];
        };
    }

    /**
     * Disable all components of the collection.
     */
    public disable(): FormComponentsCollection {
        this.callForEach('disable');
        return this;
    }

    /**
     * Enable all components of the collection.
     */
    public enable(): FormComponentsCollection {
        this.callForEach('enable');
        return this;
    }

    /**
     * Mark all the components of the collection as `concrete`.
     */
    public markAsConcrete(): FormComponentsCollection {
        this.callForEach('markAsConcrete');
        return this;
    }

    /**
     * Mark all the components of the collection as `virtual`.
     */
    public markAsVirtual(): FormComponentsCollection {
        this.callForEach('markAsVirtual');
        return this;
    }

    /**
     * Set the same value to all items of the collection.
     */
    public setValue(value: unknown): FormComponentsCollection {
        this.callForEach('setValue', value);
        return this;
    }

    /**
     * Set the validator to use to all items of the collection.
     */
    public setValidator(validator: ValidatorInterface|null): FormComponentsCollection {
        this.callForEach('setValidator', validator);
        return this;
    }

    /**
     * Set the validation strategy to use to all items of the collection.
     */
    public setValidationStrategy(strategy: ValidationStrategy): FormComponentsCollection {
        this.callForEach('setValidationStrategy', strategy);
        return this;
    }

    /**
     * Validate each item of the collection.
     */
    public validate(): FormComponentsCollection {
        this.callForEach('validate');
        return this;
    }

    /**
     * Subscribe to the `Events.StateChanged` form event of all components in the collection.
     */
    public onStateChanged(callback: (event: StateChangedFormEvent) => void): UnsubscribeFunction {
        return this.subscribeForEach<StateChangedFormEvent>('onStateChanged', callback);
    }

    /**
     * Subscribe to the `Events.ValueChanged` form event of all components in the collection.
     */
    public onValueChanged(callback: (event: ValueChangedFormEvent) => void): UnsubscribeFunction {
        return this.subscribeForEach<ValueChangedFormEvent>('onValueChanged', callback);
    }
}
