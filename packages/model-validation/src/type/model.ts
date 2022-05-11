import { Injector } from "@banquette/dependency-injection/injector";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { createValidator } from "@banquette/validation/create-validator";
import { ValidationContextInterface } from "@banquette/validation/validation-context.interface";
import { ValidationResult } from "@banquette/validation/validation-result";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ModelValidationMetadataService } from "../model-validation-metadata.service";

const metadata = Injector.Get(ModelValidationMetadataService);

export const Model = (identifier: ModelExtendedIdentifier): ValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
            const validator: ValidatorInterface|null = metadata.getValidator(identifier);
            if (validator !== null) {
                validator.validate(context.value, context);
            }
            return context.result;
        }
    });
};
