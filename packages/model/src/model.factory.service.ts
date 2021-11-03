import { Service, Inject } from "@banquette/dependency-injection";
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
