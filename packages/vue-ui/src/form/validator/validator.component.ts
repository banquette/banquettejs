import { AbstractFormComponent } from "@banquette/form/abstract-form-component";
import { AbstractFormGroup } from "@banquette/form/abstract-form-group";
import { ComponentNotFoundException } from "@banquette/form/exception/component-not-found.exception";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { trimArray } from "@banquette/utils-array/trim-array";
import { proxy } from "@banquette/utils-misc/proxy";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { isArray } from "@banquette/utils-type/is-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isType } from "@banquette/utils-type/is-type";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { maybeResolveTsInst } from "@banquette/vue-typescript/utils/converters";
import { Vue } from "@banquette/vue-typescript/vue";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { ContainerValidatorInterface } from "./container-validator.interface";

/**
 * Base class for validator components.
 */
export abstract class ValidatorComponent extends Vue {
    /**
     * Form in which search for the controls defined by `targetsPaths`.
     */
    @Prop({type: Object, default: null, transform: (input: any) => {
        return input instanceof AbstractFormGroup ? input : null;
    }}) public form!: AbstractFormGroup|null;

    /**
     * Paths of target controls to apply the validator on.
     *
     * For this to work, either the `form` prop must be set or the validator component must be inside a `bt-form`.
     */
    @Prop({name: 'target', type: [String, Array], default: [], transform: (value) => {
        return trimArray(isArray(value) ? value : ensureString(value).split(',')).filter((i) => !!i);
    }}) public targetsPaths!: string[];

    /**
     * Error message to give to the validator.
     */
    @Prop({name: 'message', type: String, default: undefined}) public messageProp?: string;

    /**
     * Error type to give to the validator.
     */
    @Prop({type: String, default: undefined}) public type?: string;

    /**
     * Tags to give to the validator.
     */
    @Prop({type: [String, Array], default: [], transform: (value) => ensureArray(value)}) public tags?: string[];

    /**
     * The form automagically extracted from a parent "bt-form" component.
     */
    public autoDetectedParentFormGroup: AbstractFormGroup|null = null;

    /**
     * Get the the custom error message either from the default slot or from the prop.
     */
    public get message(): string|undefined {
        if (this.hasSlot('default')) {
            const slotMessage = this.getVNodesText((this.$slots as any).default());
            if (slotMessage.length > 0) {
                return slotMessage;
            }
        }
        return this.messageProp;
    }

    /**
     * Optional parent validator component.
     */
    protected parentValidator: ContainerValidatorInterface|null = null;

    /**
     * A getter returning either the parent form group given as prop or the one detected automatically,
     * depending on their availability.
     */
    private get parentFormGroup(): AbstractFormGroup|null {
        if (this.form !== null) {
            return this.form;
        }
        return this.autoDetectedParentFormGroup;
    }

    /**
     * List of targets that have their validator set.
     */
    private assignedTargets: string[] = [];

    /**
     * Create the validator instance.
     */
    protected abstract buildValidator(): ValidatorInterface;

    /**
     * @inheritDoc
     */
    public mounted(): void {
        let $parent: any = this.$parent;
        while ($parent) {
            $parent = maybeResolveTsInst($parent);
            if ($parent instanceof AbstractVueFormComponent) {
                return this.assignToParentFormComponent($parent);
            }
            if (isType<ContainerValidatorInterface>($parent, () => isFunction($parent.registerChild))) {
                this.parentValidator = $parent;
                return this.assignToParentValidator($parent);
            }
            $parent = $parent.$parent;
        }
        const parent: any = this.getParent('bt-form');
        if (parent && parent.form instanceof AbstractFormGroup) {
            const form = parent.form as AbstractFormGroup;
            this.autoDetectedParentFormGroup = form;
            form.onControlAdded(proxy(this.updateFromTargets, this), 0, false);
        }
        this.updateFromTargets();
    }

    /**
     * Assign the validator to a parent validator component (must be a container).
     */
    private assignToParentValidator(parent: ContainerValidatorInterface): void {
        parent.registerChild(this.buildValidator());
    }

    /**
     * Assign the validator to a parent form component.
     */
    private assignToParentFormComponent(parent: AbstractVueFormComponent<any>): void {
        const proxy = parent.proxy;
        let assignedControl: AbstractFormComponent|null = null;
        const assignValidator = (control: AbstractFormComponent) => {
            assignedControl = control;
            assignedControl.setValidator(this.buildValidator());
        };
        proxy.onReady(() => {
            if (proxy.control instanceof AbstractFormComponent) {
                assignValidator(proxy.control);
            }
        });
        parent.$watch('control', (newValue: any) => {
            if (newValue instanceof AbstractFormComponent) {
                assignValidator(newValue);
            } else if (assignedControl !== null) {
                assignedControl.setValidator(null);
            }
        }, {});
    }

    @Watch('target', {immediate: ImmediateStrategy.NextTick})
    private updateFromTargets(): void {
        // If we have no parent FormGroup, this means either that the component is badly placed,
        // or that the validator has already been set by another mean (parent validator or form component).
        if (!this.parentFormGroup) {
            return ;
        }
        const newTargets: string[] = [];
        for (const target of this.targetsPaths) {
            const component = this.getFormComponent(target);
            if (component === null) {
                continue ;
            }
            if (this.assignedTargets.indexOf(target) < 0) {
                component.setValidator(this.buildValidator());
            }
            newTargets.push(target);
        }
        this.assignedTargets = newTargets;
    }

    /**
     * Try to get a component from the parent form but returns null if the component is not found.
     */
    private getFormComponent(path: string): FormComponentInterface|null {
        try {
            const form = this.parentFormGroup;
            if (form !== null) {
                return form.get(path);
            }
        } catch (e) {
            if (!(e instanceof ComponentNotFoundException)) {
                throw e;
            }
        }
        return null;
    }
}
