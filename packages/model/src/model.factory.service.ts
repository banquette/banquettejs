import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { ModelMetadataService } from "./model-metadata.service";
import { ModelExtendedIdentifier } from "./type";

@Service()
export class ModelFactoryService {
    public constructor(@Inject(ModelMetadataService) private metadata: ModelMetadataService) {

    }

    /**
     * Create an instance of a model.
     */
    public create<T = any>(identifier: ModelExtendedIdentifier): T {
        return this.metadata.getFactory(this.metadata.resolveAlias(identifier))() as T;
    }
}
