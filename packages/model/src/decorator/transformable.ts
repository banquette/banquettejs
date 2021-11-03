import { Injector } from "@banquette/dependency-injection";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction } from "@banquette/utils-type";
import { UsageException } from "@banquette/exception";
import { ModelTransformMetadataService } from "../model-transform-metadata.service";
import { TransformerInterface } from "../transformer/transformer.interface";

const metadata = Injector.Get(ModelTransformMetadataService);

export function Transformable(type: symbol, transformer: TransformerInterface): any {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only apply a transform decorator on properties.');
        }
        metadata.register(prototype.constructor, type, propertyKey, transformer);
    };
}
