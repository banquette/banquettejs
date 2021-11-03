import { Constructor } from "@banquette/utils-type";
import { ModelAlias } from "../type";
import { Injector } from "@banquette/dependency-injection";
import { ModelMetadataService } from "../model-metadata.service";

const metadata = Injector.Get(ModelMetadataService);

export function Alias(alias: ModelAlias|ModelAlias[]): any {
    return (ctor: Constructor) => {
        metadata.registerAlias(ctor, alias);
    };
}
