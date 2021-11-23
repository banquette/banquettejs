import { Injector } from "@banquette/dependency-injection";
import { propertyDecorator } from "@banquette/model";
import { Constructor } from "@banquette/utils-type/types";
import { ValidatorInterface } from "@banquette/validation";
import { ModelValidationMetadataService } from "../model-validation-metadata.service";

const metadata = Injector.Get(ModelValidationMetadataService);

export function Assert(validator: ValidatorInterface): any {
    return propertyDecorator((ctor: Constructor, propertyKey: string) => {
        metadata.register(ctor, propertyKey, validator);
    }, 'You can only use @Assert() on properties.');
}
