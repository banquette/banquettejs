import { Injector } from "@banquette/dependency-injection";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction } from "@banquette/utils-type";
import { UsageException } from "@banquette/exception";
import { ModelExtendedIdentifier } from "../type";
import { ModelMetadataService } from "../model-metadata.service";

const metadata = Injector.Get(ModelMetadataService);

export function Relation(identifier: ModelExtendedIdentifier): any {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only define a relation on properties.');
        }
        metadata.registerRelation(prototype.constructor, propertyKey, identifier);
    };
}
