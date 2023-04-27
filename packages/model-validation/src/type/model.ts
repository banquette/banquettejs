import { Injector } from "@banquette/dependency-injection";
import { ModelExtendedIdentifier } from "@banquette/model";
import { createValidator, ValidationContextInterface, ValidationResult, ValidatorInterface } from "@banquette/validation";
import { ModelValidationMetadataService } from "../model-validation-metadata.service";

let metadata: ModelValidationMetadataService|null = null;

export const Model = (identifier: ModelExtendedIdentifier): ValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
            if (metadata === null) {
                metadata = Injector.Get(ModelValidationMetadataService);
            }
            const validator: ValidatorInterface|null = metadata.getValidator(identifier);
            if (validator !== null) {
                validator.validate(context.value, context);
            }
            return context.result;
        }
    });
};
