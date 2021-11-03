import { ValidatorInterface, createValidator, ValidationContext, ValidationResult } from "@banquette/validation";
import { ModelExtendedIdentifier } from "@banquette/model";
import { Injector } from "@banquette/dependency-injection";
import { ModelValidationMetadataService } from "../model-validation-metadata.service";

const metadata = Injector.Get(ModelValidationMetadataService);

export const Model = (identifier: ModelExtendedIdentifier): ValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContext): ValidationResult => {
            const validator: ValidatorInterface|null = metadata.getValidator(identifier);
            if (validator !== null) {
                validator.validate(context.value, context);
            }
            return context.result;
        }
    });
};
