import { FormGroupInterface } from "@banquette/form/form-group.interface";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Vue } from "@banquette/vue-typescript/vue";
import { ContainerValidatorInterface } from "./container-validator.interface";
/**
 * Base class for validator components.
 */
export declare abstract class ValidatorComponent extends Vue {
    /**
     * Form in which search for the controls defined by `targetsPaths`.
     */
    form: FormGroupInterface | null;
    /**
     * Paths of target controls to apply the validator on.
     *
     * For this to work, either the `form` prop must be set or the validator component must be inside a `bt-form`.
     */
    targetsPaths: string[];
    /**
     * Error message to give to the validator.
     */
    messageProp?: string;
    /**
     * Error type to give to the validator.
     */
    type?: string;
    /**
     * Tags to give to the validator.
     */
    tags?: string[];
    /**
     * Groups to give to the validator.
     */
    groups?: string[];
    /**
     * The form automagically extracted from a parent "bt-form" component.
     */
    autoDetectedParentFormGroup: FormGroupInterface | null;
    /**
     * Get the custom error message either from the default slot or from the prop.
     */
    get message(): string | undefined;
    /**
     * Optional parent validator component.
     */
    protected parentValidator: ContainerValidatorInterface | null;
    /**
     * A getter returning either the parent form group given as prop or the one detected automatically,
     * depending on their availability.
     */
    private get parentFormGroup();
    private isMounted;
    /**
     * List of targets that have their validator set.
     */
    private assignedTargets;
    private unsetValidatorCallbacks;
    /**
     * Create the validator instance.
     */
    protected abstract buildValidator(): ValidatorInterface;
    /**
     * @inheritDoc
     */
    mounted(): void;
    /**
     * @inheritDoc
     */
    unmounted(): void;
    /**
     * Rebuild the validator.
     */
    rebuild(): void;
    /**
     * Assign the validator to a parent validator component (must be a container).
     */
    protected assignToParentValidator: (parent: ContainerValidatorInterface) => void;
    private updateFromTargets;
    /**
     * Test if a value is an FormGroupInterface object.
     */
    private isFormGroupInterface;
}
