import { Injector } from "@banquette/dependency-injection";
import { Constructor } from "@banquette/utils-type";
import { ModelMetadataService } from "../model-metadata.service";
import { ModelFactory } from "../type";

let metadata: ModelMetadataService|null = null;

export function Factory(factory: ModelFactory<any>): any {
    return (ctor: Constructor) => {
        if (metadata === null) {
            metadata = /**!PURE*/ Injector.Get(ModelMetadataService);
        }
        metadata.registerFactory(ctor, factory);
    };
}
