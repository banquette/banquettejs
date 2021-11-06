import { ValidatorInterface } from "@banquette/validation";
import { Injector } from "@banquette/dependency-injection";
import { ModelValidationMetadataService } from "../model-validation-metadata.service";
import { Constructor } from "@banquette/utils-type";
import { propertyDecorator } from "@banquette/model";

const metadata = Injector.Get(ModelValidationMetadataService);

export function Assert(validator: ValidatorInterface): any {
    return propertyDecorator((ctor: Constructor, propertyKey: string) => {
        metadata.register(ctor, propertyKey, validator);
    }, 'You can only use @Assert() on properties.');
}
