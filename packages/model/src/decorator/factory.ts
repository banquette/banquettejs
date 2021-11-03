import { Constructor } from "@banquette/utils-type";
import { ModelFactory } from "../type";
import { Injector } from "@banquette/dependency-injection";
import { ModelMetadataService } from "../model-metadata.service";

const metadata = Injector.Get(ModelMetadataService);

export function Factory(factory: ModelFactory<any>): any {
    return (ctor: Constructor) => {
        metadata.registerFactory(ctor, factory);
    };
}
