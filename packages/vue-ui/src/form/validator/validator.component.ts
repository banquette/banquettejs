import { FormComponentInterface } from "@banquette/form";
import { FormGroupInterface } from "@banquette/form";
import { trimArray } from "@banquette/utils-array";
import { proxy } from "@banquette/utils-misc";
import { ensureArray } from "@banquette/utils-type";
import { ensureString } from "@banquette/utils-type";
import { isArray } from "@banquette/utils-type";
import { isFunction } from "@banquette/utils-type";
import { isObject } from "@banquette/utils-type";
import { isType } from "@banquette/utils-type";
import { VoidCallback } from "@banquette/utils-type";
import { ValidatorInterface } from "@banquette/validation";
import { Prop } from "@banquette/vue-typescript";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript";
import { maybeResolveTsInst } from "@banquette/vue-typescript";
import { Vue } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { BtAbstractVueForm } from "../abstract-vue-form.component";
import { ContainerValidatorInterface } from "./container-validator.interface";

/**
 * Base class for validator components.
 */
export abstract class BtValidator extends Vue {
    /**
     * Form in which search for the controls defined by `targetsPaths`.
     */
    @Prop({type: Object as PropType<FormGroupInterface|null>, default: null}) public form!: FormGroupInterface|null;

    /**
     * Paths of target controls to apply the validator on.
     *
     * For this to work, either the `form` prop must be set or the validator component must be inside a `bt-form`.
     */
    @Prop({name: 'target', type: [String, Array] as PropType<string|string[]>, default: [], transform: (value: string|string[]) => {
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
    @Prop({type: [String, Array] as PropType<string|string[]>, default: [], transform: (value: string|string[]) => ensureArray(value)}) public tags?: string[];

    /**
     * Groups to give to the validator.
     */
    @Prop({type: [String, Array] as PropType<string|string[]>, default: [], transform: (value: string|string[]) => ensureArray(value)}) public groups?: string[];

    /**
     * The form automagically extracted from a parent "bt-form" component.
     */
    public autoDetectedParentFormGroup: FormGroupInterface|null = null;

    /**
     * Get the custom error message either from the default slot or from the prop.
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
    private get parentFormGroup(): FormGroupInterface|null {
        if (this.form !== null) {
            return this.form;
        }
        return this.autoDetectedParentFormGroup;
    }

    private isMounted: boolean = false;

    /**
     * List of targets that have their validator set.
     */
    private assignedTargets: string[] = [];
    private unsetValidatorCallbacks: VoidCallback[] = [];

    /**
     * Create the validator instance.
     */
    protected abstract buildValidator(): ValidatorInterface;

    /**
     * @inheritDoc
     */
    public mounted(): void {
        this.isMounted = true;
        this.rebuild();
        const parent: any = this.getParent('bt-form');
        if (parent && this.isFormGroupInterface(parent.vm.form)) {
            const form = parent.vm.form;
            this.autoDetectedParentFormGroup = form;
            form.onControlAdded(proxy(this.updateFromTargets, this), 0, false);
        }
        this.updateFromTargets();
    }

    /**
     * @inheritDoc
     */
    public unmounted(): void {
        for (const fn of this.unsetValidatorCallbacks) {
            fn();
        }
        this.unsetValidatorCallbacks = [];
    }

    /**
     * Rebuild the validator.
     */
    public rebuild(): void {
        if (!this.isMounted) {
            return ;
        }
        let $parent: any = this.$parent;
        while ($parent) {
            $parent = maybeResolveTsInst($parent);
            if ($parent instanceof BtAbstractVueForm) {
                return $parent.proxy.setValidator(this.buildValidator());
            }
            if (isType<ContainerValidatorInterface>($parent, () => isFunction($parent.registerChild))) {
                this.parentValidator = $parent;
                return this.assignToParentValidator($parent);
            }
            $parent = $parent.$parent;
        }
    }

    /**
     * Assign the validator to a parent validator component (must be a container).
     */
    protected assignToParentValidator = (() => {
        let unsubscribe: VoidCallback|null = null;
        return (parent: ContainerValidatorInterface): void => {
            if (unsubscribe !== null) {
                unsubscribe();
                unsubscribe = null;
            }
            unsubscribe = parent.registerChild(this.buildValidator());
            parent.rebuild();
            this.unsetValidatorCallbacks.push(() => {
                if (unsubscribe !== null) {
                    unsubscribe();
                    unsubscribe = null;
                }
                parent.rebuild();
            });
        };
    })();

    @Watch('target', {immediate: ImmediateStrategy.NextTick})
    private updateFromTargets(): void {
        // If we have no parent FormGroup, this means either that the component is badly placed,
        // or that the validator has already been set by another mean (parent validator or form component).
        if (!this.parentFormGroup) {
            return ;
        }
        const newTargets: string[] = [];
        for (const target of this.targetsPaths) {
            this.parentFormGroup.getByPattern(target).forEach((component: FormComponentInterface) => {
                if (this.assignedTargets.indexOf(target) < 0) {
                    component.setValidator(this.buildValidator());
                    this.unsetValidatorCallbacks.push(() => {
                        component.setValidator(null);
                    });
                }
                newTargets.push(target);
            });
        }
        this.assignedTargets = newTargets;
    }

    /**
     * Test if a value is an FormGroupInterface object.
     */
    private isFormGroupInterface(value: any): value is FormGroupInterface {
        return isObject(value) && 'get' in value && 'getByPath' in value && 'getByPattern' in value;
    }
}
