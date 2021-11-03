import { ValidatorInterface } from "@banquette/validation";
import { Injector } from "@banquette/dependency-injection";
import { ModelValidationMetadataService } from "../model-validation-metadata.service";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction } from "@banquette/utils-type";
import { UsageException } from "@banquette/exception";

const metadata = Injector.Get(ModelValidationMetadataService);

export function Assert(validator: ValidatorInterface): any {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Assert() on properties.');
        }
        metadata.register(prototype.constructor, propertyKey, validator);
    };
}
