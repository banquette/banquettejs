import { FormArray } from "@banquette/form/form-array";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { FormControl } from "@banquette/form/form-control";
import { FormObject } from "@banquette/form/form-object";
import { ModelValidationMetadataService } from "@banquette/model-validation/model-validation-metadata.service";
import { ModelExtendedIdentifier } from "@banquette/model/type";
export declare class FormComponentFactory {
    private validationMetadata;
    constructor(validationMetadata: ModelValidationMetadataService);
    /**
     * Create a FormControl instance.
     */
    createFormControl(modelIdentifier: ModelExtendedIdentifier, property: string, value?: any): FormControl;
    /**
     * Create a FormArray instance.
     */
    createFormArray(modelIdentifier: ModelExtendedIdentifier, property: string, children?: FormComponentInterface[]): FormArray;
    /**
     * Create a FormArray instance.
     */
    createFormObject(modelIdentifier: ModelExtendedIdentifier, property: string, children?: Record<string, FormComponentInterface>): FormObject;
    /**
     * Assign a validator if one is defined in the metadata.
     */
    private assignValidator;
}
