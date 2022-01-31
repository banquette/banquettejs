import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isNumeric } from "@banquette/utils-type/is-numeric";
import { Constructor } from "@banquette/utils-type/types";
import { ModelChangeEvent, ModelChangeType } from "./event/model-change.event";
import { ModelMetadataService } from "./model-metadata.service";
import { ModelTransformMetadataService } from "./model-transform-metadata.service";

const Observable = require('object-observer/dist/object-observer');

export interface ObservableChangeEvent {
    /**
     * Type of change.
     */
    type: 'insert' | 'update' | 'delete' | 'shuffle' | 'reverse';

    /**
     * Path to the changed property represented as an Array of nodes.
     */
    path: string[];

    /**
     * New value.
     * `undefined` in delete, shuffle and reverse changes.
     */
    value?: string;

    /**
     * Old value.
     * `undefined` in insert, shuffle or reverse changes.
     */
    oldValue: any;

    /**
     * An immediate subject of change, property of which has been changed.
     */
    object: object;
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
        const observed = Observable.Observable.from(model);
        observed.observe((changes: ObservableChangeEvent[]) => {
            for (const change of changes) {
                const filteredJsonPointer = '/'+change.path.filter((item: string) => !isNumeric(item)).join('/');
                if (watchedPaths === null || watchedPaths.indexOf(filteredJsonPointer) > -1) {
                    cb(new ModelChangeEvent<any>(
                        change.type as ModelChangeType,
                        change.object,
                        '/' + change.path.join('/'),
                        change.oldValue,
                        change.value
                    ));
                }
            }
        });
        return observed;
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
