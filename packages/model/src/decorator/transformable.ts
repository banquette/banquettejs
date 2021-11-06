import { Injector } from "@banquette/dependency-injection";
import { Constructor } from "@banquette/utils-type";
import { ModelTransformMetadataService } from "../model-transform-metadata.service";
import { TransformerInterface } from "../transformer/transformer.interface";
import { propertyDecorator } from "./utils";

const metadata = Injector.Get(ModelTransformMetadataService);

export function Transformable(type: symbol, transformer: TransformerInterface): any {
    return propertyDecorator((ctor: Constructor, propertyKey: string) => {
        metadata.register(ctor, type, propertyKey, transformer);
    }, 'You can only apply a transform decorator on properties.');
}
