import { Service, Inject } from "@banquette/dependency-injection";
import { FormControl, FormComponentInterface, FormArray, FormObject } from "@banquette/form";
import { ModelExtendedIdentifier } from "@banquette/model";
import { ModelValidationMetadataService } from "@banquette/model-validation";
import { ensureArray } from "@banquette/utils-type/ensure-array";

@Service()
export class FormComponentFactory {
    public constructor(@Inject(ModelValidationMetadataService) private validationMetadata: ModelValidationMetadataService) {
    }

    /**
     * Create a FormControl instance.
     */
    public createFormControl(modelIdentifier: ModelExtendedIdentifier, property: string, value?: any): FormControl {
        const instance = new FormControl(value);
        this.assignValidator(instance, modelIdentifier, property);
        return instance;
    }

    /**
     * Create a FormArray instance.
     */
    public createFormArray(modelIdentifier: ModelExtendedIdentifier, property: string, children?: FormComponentInterface[]): FormArray {
        const instance = new FormArray(ensureArray(children));
        this.assignValidator(instance, modelIdentifier, property);
        return instance;
    }

    /**
     * Create a FormArray instance.
     */
    public createFormObject(modelIdentifier: ModelExtendedIdentifier, property: string, children?: Record<string, FormComponentInterface>): FormObject {
        const instance = new FormObject(children || {});
        this.assignValidator(instance, modelIdentifier, property);
        return instance;
    }

    /**
     * Assign a validator if one is defined in the metadata.
     */
    private assignValidator(component: FormComponentInterface, modelIdentifier: ModelExtendedIdentifier, property: string): void {
        const validator = this.validationMetadata.get(modelIdentifier, property);
        component.setValidator(validator);
    }
}
