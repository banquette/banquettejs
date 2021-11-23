import { Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { ModelMetadataService } from "../model-metadata.service";
import { ModelExtendedIdentifier } from "../type";

const metadata = Injector.Get(ModelMetadataService);

export function Relation(identifier: ModelExtendedIdentifier): any {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only define a relation on properties.');
        }
        metadata.registerRelation(prototype.constructor, propertyKey, identifier);
    };
}
