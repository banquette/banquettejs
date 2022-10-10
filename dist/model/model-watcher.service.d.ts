import { MutationEvent } from "@banquette/object-observer/event/mutation.event";
import { ModelMetadataService } from "./model-metadata.service";
import { ModelTransformMetadataService } from "./model-transform-metadata.service";
export declare class ModelWatcherService {
    private modelMetadata;
    private transformMetadata;
    constructor(modelMetadata: ModelMetadataService, transformMetadata: ModelTransformMetadataService);
    /**
     * Watch a given list of paths to watch in a model.
     * If `null` or an empty array is given, the whole model and all its children will be watched.
     */
    watch<T extends object>(model: T, paths: string[] | null, cb: (event: MutationEvent) => void): T;
    /**
     * Watch a model for changes on the properties visible two one or multiple transformers.
     */
    watchTransformableProperties<T extends object>(model: T, transformersTypes: symbol | symbol[], cb: (event: MutationEvent) => void): T;
    /**
     * Create the list of paths to watch for a given list of transformers identifiers.
     */
    private createWatchPaths;
}
