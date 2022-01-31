import { Injector } from "@banquette/dependency-injection/injector";
import { Constructor } from "@banquette/utils-type/types";
import { ModelMetadataService } from "../model-metadata.service";
import { ModelFactory } from "../type";

const metadata = Injector.Get(ModelMetadataService);

export function Factory(factory: ModelFactory<any>): any {
    return (ctor: Constructor) => {
        metadata.registerFactory(ctor, factory);
    };
}
