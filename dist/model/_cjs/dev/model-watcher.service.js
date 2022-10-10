/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var index = require('@banquette/object-observer/_cjs/dev/index');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isNumeric = require('@banquette/utils-type/_cjs/dev/is-numeric');
var modelMetadata_service = require('./model-metadata.service.js');
var modelTransformMetadata_service = require('./model-transform-metadata.service.js');

var ModelWatcherService = /** @class */ (function () {
    function ModelWatcherService(modelMetadata, transformMetadata) {
        this.modelMetadata = modelMetadata;
        this.transformMetadata = transformMetadata;
    }
    /**
     * Watch a given list of paths to watch in a model.
     * If `null` or an empty array is given, the whole model and all its children will be watched.
     */
    ModelWatcherService.prototype.watch = function (model, paths, cb) {
        var watchedPaths = paths !== null && paths.length > 0 ? paths : null;
        if (watchedPaths !== null) {
            watchedPaths = watchedPaths.map(function (item) { return item[0] !== '/' ? ('/' + item) : item; });
        }
        var observer = index.ObserverFactory.Create(model);
        observer.subscribe(function (event) {
            var filteredJsonPointer = '/' + event.mutation.pathParts.filter(function (item) { return !isNumeric.isNumeric(item); }).join('/');
            var granted = watchedPaths === null;
            if (watchedPaths !== null) {
                for (var _i = 0, watchedPaths_1 = watchedPaths; _i < watchedPaths_1.length; _i++) {
                    var path = watchedPaths_1[_i];
                    if (path === filteredJsonPointer || (filteredJsonPointer.length > path.length && filteredJsonPointer.substring(0, path.length) === path)) {
                        granted = true;
                        break;
                    }
                }
            }
            if (granted) {
                cb(event);
            }
        });
        return observer.proxy;
    };
    /**
     * Watch a model for changes on the properties visible two one or multiple transformers.
     */
    ModelWatcherService.prototype.watchTransformableProperties = function (model, transformersTypes, cb) {
        var watchedPaths = this.createWatchPaths(model.constructor, transformersTypes);
        return this.watch(model, watchedPaths, cb);
    };
    /**
     * Create the list of paths to watch for a given list of transformers identifiers.
     */
    ModelWatcherService.prototype.createWatchPaths = function (ctor, transformersTypes, basePath, stack) {
        if (basePath === void 0) { basePath = '/'; }
        if (stack === void 0) { stack = []; }
        var watchedPaths = [];
        transformersTypes = ensureArray.ensureArray(transformersTypes);
        for (var _i = 0, transformersTypes_1 = transformersTypes; _i < transformersTypes_1.length; _i++) {
            var type = transformersTypes_1[_i];
            var transformableProperties = this.transformMetadata.getAll(ctor, type);
            for (var _a = 0, _b = Object.keys(transformableProperties); _a < _b.length; _a++) {
                var key = _b[_a];
                var currentPath = basePath + (basePath !== '/' ? '/' : '') + key;
                if (watchedPaths.indexOf(key) < 0) {
                    watchedPaths.push(currentPath);
                }
                var relation = this.modelMetadata.getRelation(ctor, key);
                if (relation !== null && stack.indexOf(relation) < 0) {
                    stack.push(relation);
                    watchedPaths = watchedPaths.concat(this.createWatchPaths(relation, transformersTypes, currentPath, stack));
                    stack.pop();
                }
            }
        }
        return watchedPaths;
    };
    ModelWatcherService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__param(1, inject_decorator.Inject(modelTransformMetadata_service.ModelTransformMetadataService)),
        _tslib.__metadata("design:paramtypes", [modelMetadata_service.ModelMetadataService,
            modelTransformMetadata_service.ModelTransformMetadataService])
    ], ModelWatcherService);
    return ModelWatcherService;
}());

exports.ModelWatcherService = ModelWatcherService;
