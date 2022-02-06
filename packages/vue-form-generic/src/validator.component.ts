import { UsageException } from "@banquette/exception/usage.exception";
import { ComponentNotFoundException } from "@banquette/form/exception/component-not-found.exception";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { trimArray } from "@banquette/utils-array/trim-array";
import { proxy } from "@banquette/utils-misc/proxy";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { isArray } from "@banquette/utils-type/is-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { AbstractVueFormComponent } from "@banquette/vue-form/abstract-vue-form.component";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { maybeResolveTsInst } from "@banquette/vue-typescript/utils/converters";
import { isInstanceOf } from "@banquette/vue-typescript/utils/is-instance-of";
import { Vue } from "@banquette/vue-typescript/vue";
import { GenericComponent } from "./component/generic";
import { ContainerValidatorInterface } from "./container-validator.interface";

/**
 * Base class for validator components.
 */
export abstract class ValidatorComponent extends Vue {
    /**
     * Target controls to apply the validator on.
     */
    @Prop({name: 'target', type: [String, Array], validate: (value) => {
        return trimArray(isArray(value) ? value : ensureString(value).split(',')).filter((i) => !!i);
    }}) public targetPaths!: string[];

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
    @Prop({type: [String, Array], default: [], validate: (value) => ensureArray(value)}) public tags?: string[];

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
     * Get the list of target form controls paths.
     */
    public get targets(): string[] {
        if (this.parentFormComponent !== null &&
            this.parentFormComponent.vm &&
            this.parentFormComponent.vm.getControl() &&
            this.parentFormComponent.vm.getControl().control
        ) {
            return [this.parentFormComponent.vm.getControl().control.path];
        }
        return this.targetPaths;
    }

    /**
     * The parent "form-generic" component.
     */
    public parentGenericForm!: any;

    /**
     * An optional parent form component.
     */
    public parentFormComponent: AbstractVueFormComponent<any>|null = null;

    /**
     * An optional parent validator.
     */
    public parentValidator: ContainerValidatorInterface|null = null;

    /**
     * Create the validator instance.
     */
    protected abstract buildValidator(): ValidatorInterface;

    /**
     * List of targets that have their validator set.
     */
    private assignedTargets: string[] = [];

    /**
     * @inheritDoc
     */
    public mounted(): void {
        let $parent: any = this.$parent;
        while ($parent) {
            $parent = maybeResolveTsInst($parent);
            if ($parent instanceof AbstractVueFormComponent) {
                this.parentFormComponent = $parent;
            } else if (isInstanceOf($parent, GenericComponent)) {
                this.parentGenericForm = $parent;
            } else if (isType<ContainerValidatorInterface>($parent, () => isFunction($parent.registerChild))) {
                this.parentValidator = $parent;
            }
            $parent = $parent.$parent;
        }
        if (isUndefined(this.parentGenericForm)) {
            throw new UsageException(`A validator component must be placed inside a "form-generic".`);
        }
        if (this.parentValidator) {
            this.parentValidator.registerChild(this.buildValidator());
        } else {
            if (this.parentFormComponent) {
                this.parentFormComponent.$watch('control', proxy(this.onTargetChange, this), {});
            } else if (!this.targetPaths.length) {
                throw new UsageException(`You must define at least 1 target control to put the validator onto.`);
            }
            this.parentGenericForm.form.onControlAdded(proxy(this.onTargetChange, this), false);
            this.onTargetChange();
        }
    }

    @Watch('target', {immediate: ImmediateStrategy.NextTick})
    public onTargetChange(): void {
        if (this.parentValidator) {
            return ;
        }
        for (const target of this.targets) {
            if (this.assignedTargets.indexOf(target) < 0) {
                const component = this.getFormComponent(target);
                if (component !== null) {
                    component.setValidator(this.buildValidator());
                    this.assignedTargets.push(target);
                }
            }
        }
    }

    /**
     * Try to get a component from the parent form but returns null if the component is not found.
     */
    private getFormComponent(path: string): FormComponentInterface|null {
        try {
            return this.parentGenericForm.form.get(path);
        } catch (e) {
            if (!(e instanceof ComponentNotFoundException)) {
                throw e;
            }
        }
        return null;
    }
}
