import { Injector } from "@banquette/dependency-injection";
import { Constructor } from "@banquette/utils-type";
import { ModelMetadataService } from "../model-metadata.service";
import { ModelAlias } from "../type";

let metadata: ModelMetadataService|null = null;

export function Alias(alias: ModelAlias|ModelAlias[]): any {
    return (ctor: Constructor) => {
        if (metadata === null) {
            metadata = /**!PURE*/ Injector.Get(ModelMetadataService);
        }
        metadata.registerAlias(ctor, alias);
    };
}
