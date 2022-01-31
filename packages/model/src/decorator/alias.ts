import { Injector } from "@banquette/dependency-injection/injector";
import { Constructor } from "@banquette/utils-type/types";
import { ModelMetadataService } from "../model-metadata.service";
import { ModelAlias } from "../type";

const metadata = Injector.Get(ModelMetadataService);

export function Alias(alias: ModelAlias|ModelAlias[]): any {
    return (ctor: Constructor) => {
        metadata.registerAlias(ctor, alias);
    };
}
