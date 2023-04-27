import { Injector } from "@banquette/dependency-injection";
import { propertyDecorator } from "@banquette/model";
import { Constructor } from "@banquette/utils-type";
import { ValidatorInterface } from "@banquette/validation";
import { ModelValidationMetadataService } from "../model-validation-metadata.service";

let metadata: ModelValidationMetadataService|null = null;

export function Assert(validator: ValidatorInterface): any {
    return propertyDecorator((ctor: Constructor, propertyKey: string) => {
        if (metadata === null) {
            metadata = Injector.Get(ModelValidationMetadataService);
        }
        metadata.register(ctor, propertyKey, validator);
    }, 'You can only use @Assert() on properties.');
}
