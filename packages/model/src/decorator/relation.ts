import { Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction } from "@banquette/utils-type";
import { ModelMetadataService } from "../model-metadata.service";
import { ModelExtendedIdentifier } from "../type";

let metadata: ModelMetadataService|null = null;

export function Relation(identifier: ModelExtendedIdentifier): any {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only define a relation on properties.');
        }
        if (metadata === null) {
            metadata = /**!PURE*/ Injector.Get(ModelMetadataService);
        }
        metadata.registerRelation(prototype.constructor, propertyKey, identifier);
    };
}
