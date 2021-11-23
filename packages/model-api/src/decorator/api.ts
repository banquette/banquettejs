import { Injector } from "@banquette/dependency-injection";
import { TransformerInterface, Raw, Transformable } from "@banquette/model";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { ModelApiMetadataService } from "../model-api-metadata.service";
import { ApiTransformerSymbol } from "../transformer/root/api";

const metadata = Injector.Get(ModelApiMetadataService);

export function Api(transformer: TransformerInterface = Raw(),
                    readGroups: string|string[]|null = null,
                    writeGroups: string|string[]|null = null): any {

    const transformable = Transformable(ApiTransformerSymbol, transformer);
    return (prototype: any, propertyKey: string) => {
        transformable(prototype, propertyKey);
        metadata.registerProperty(prototype.constructor, propertyKey, {
            readGroups: readGroups !== null ? ensureArray(readGroups) : null,
            writeGroups: writeGroups !== null ? ensureArray(writeGroups) : null
        });
    };
}
