import { Service, Inject } from "@banquette/dependency-injection";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isNumeric } from "@banquette/utils-type/is-numeric";
import { Constructor } from "@banquette/utils-type/types";
import { ModelChangeEvent, ModelChangeType } from "./event/model-change.event";
import { ModelMetadataService } from "./model-metadata.service";
import { ModelTransformMetadataService } from "./model-transform-metadata.service";

const ObservableSlim = require('observable-slim/observable-slim.js');

export interface ObservableSlimChange {
    type: 'update' | 'add' | 'delete';
    target: object;
    property: string;
    newValue: any;
    previousValue: any;
    currentPath: string;
    jsonPointer: string;
    proxy: ProxyHandler<any>;
}

@Service()
export class ModelWatcherService {
    public constructor(@Inject(ModelMetadataService) private modelMetadata: ModelMetadataService,
                       @Inject(ModelTransformMetadataService) private transformMetadata: ModelTransformMetadataService) {

    }

    /**
     * Watch a given list of paths to watch in a model.
     * If `null` or an empty array is given, the whole model and all its children will be watched.
     */
    public watch<T extends object>(model: T, paths: string[]|null, cb: (event: ModelChangeEvent<T>) => void): T {
        let watchedPaths = paths !== null && paths.length > 0 ? paths : null;
        if (watchedPaths !== null) {
            watchedPaths = watchedPaths.map((item: string) => item[0] !== '/' ? ('/' + item) : item);
        }
        return ObservableSlim.create(model, false, (changes: ObservableSlimChange[]) => {
            for (const change of changes) {
                const filteredJsonPointer = change.jsonPointer.split('/').filter((item: string) => !isNumeric(item)).join('/');
                if (watchedPaths === null || watchedPaths.indexOf(filteredJsonPointer) > -1) {
                    cb(new ModelChangeEvent<any>(
                        change.type as ModelChangeType,
                        change.target,
                        change.jsonPointer,
                        change.previousValue,
                        change.newValue
                    ));
                }
            }
        });
    }

    /**
     * Watch a model for changes on the properties visible two one or multiple transformers.
     */
    public watchTransformableProperties<T extends object>(model: T, transformersTypes: symbol|symbol[], cb: (event: ModelChangeEvent<T>) => void): T {
        const watchedPaths = this.createWatchPaths(model.constructor as Constructor, transformersTypes);
        return this.watch<T>(model, watchedPaths, cb);
    }

    /**
     * Create the list of paths to watch for a given list of transformers identifiers.
     */
    private createWatchPaths(ctor: Constructor, transformersTypes: symbol|symbol[], basePath: string = '/', stack: Constructor[] = []): string[] {
        let watchedPaths: string[] = [];
        transformersTypes = ensureArray(transformersTypes);
        for (const type of transformersTypes) {
            const transformableProperties = this.transformMetadata.getAll(ctor, type);
            for (const key of Object.keys(transformableProperties)) {
                const currentPath = basePath + (basePath !== '/' ? '/' : '') + key;
                if (watchedPaths.indexOf(key) < 0) {
                    watchedPaths.push(currentPath);
                }
                const relation = this.modelMetadata.getRelation(ctor, key);
                if (relation !== null && stack.indexOf(relation) < 0) {
                    stack.push(relation);
                    watchedPaths = watchedPaths.concat(this.createWatchPaths(relation, transformersTypes, currentPath, stack));
                    stack.pop();
                }
            }
        }
        return watchedPaths;
    }
}
