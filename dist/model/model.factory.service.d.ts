import { ModelMetadataService } from "./model-metadata.service";
import { ModelExtendedIdentifier } from "./type";
export declare class ModelFactoryService {
    private metadata;
    constructor(metadata: ModelMetadataService);
    /**
     * Create an instance of a model.
     */
    create<T = any>(identifier: ModelExtendedIdentifier, context?: any): T;
}
