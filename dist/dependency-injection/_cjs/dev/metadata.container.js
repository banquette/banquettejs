/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

var MetadataContainer = /** @class */ (function () {
    function MetadataContainer() {
    }
    /**
     * Register an dependency into the container.
     */
    MetadataContainer.Set = function (metadata) {
        MetadataContainer.ObserveTags(metadata);
        MetadataContainer.IdentifierMap.set(metadata.identifier, metadata);
        MetadataContainer.KnownMetadata.push(metadata);
    };
    /**
     * Get the metadata of an injectable from the container.
     */
    MetadataContainer.Get = function (identifier) {
        var metadata = MetadataContainer.IdentifierMap.get(identifier);
        if (metadata) {
            return metadata;
        }
        for (var _i = 0, _a = MetadataContainer.KnownMetadata; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate.ctor === identifier) {
                return MetadataContainer.IdentifierMap.get(candidate.identifier) || null;
            }
        }
        return null;
    };
    /**
     * Try to get the metadata of an object but throw an exception on failure.
     */
    MetadataContainer.GetOrFail = function (identifier) {
        var metadata = MetadataContainer.Get(identifier);
        if (metadata === null) {
            throw new usage_exception.UsageException("No injectable found for \"".concat(identifier.name, "\"."));
        }
        return metadata;
    };
    /**
     * Get metadata objects matching one or multiple tags.
     */
    MetadataContainer.GetForTag = function (tag) {
        var output = [];
        var tags = ensureArray.ensureArray(tag);
        for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
            var item = tags_1[_i];
            if (!isUndefined.isUndefined(MetadataContainer.TagsMap[item])) {
                for (var _a = 0, _b = MetadataContainer.TagsMap[item]; _a < _b.length; _a++) {
                    var metadata = _b[_a];
                    if (output.indexOf(metadata) < 0) {
                        output.push(metadata);
                    }
                }
            }
        }
        return output;
    };
    /**
     * Gets the whole list of registered metadata.
     */
    MetadataContainer.GetKnownMetadata = function () {
        return MetadataContainer.KnownMetadata;
    };
    /**
     * Make the `tags` property of the metadata object react to changes so the tags map can stay utd.
     */
    MetadataContainer.ObserveTags = function (metadata) {
        var tags = metadata.tags;
        Object.defineProperty(metadata, 'tags', {
            enumerable: true,
            configurable: true,
            get: function () { return tags; },
            set: function (newTags) {
                for (var _i = 0, newTags_1 = newTags; _i < newTags_1.length; _i++) {
                    var newTag = newTags_1[_i];
                    if (tags.indexOf(newTag) < 0) {
                        tags.push(newTag);
                        if (isUndefined.isUndefined(MetadataContainer.TagsMap[newTag])) {
                            MetadataContainer.TagsMap[newTag] = [];
                        }
                        if (MetadataContainer.TagsMap[newTag].indexOf(metadata) < 0) {
                            MetadataContainer.TagsMap[newTag].push(metadata);
                            MetadataContainer.TagsVersion = MetadataContainer.TagsVersion + 1;
                        }
                    }
                }
            }
        });
    };
    /**
     * Simply list of known metadata.
     */
    MetadataContainer.KnownMetadata = [];
    /**
     * Metadata objects indexed by identifier.
     */
    MetadataContainer.IdentifierMap = new WeakMap();
    /**
     * Metadata objects indexed by tag symbol.
     */
    MetadataContainer.TagsMap = {};
    /**
     * Holds the number of time tags relative metadata have changed.
     */
    MetadataContainer.TagsVersion = 0;
    return MetadataContainer;
}());

exports.MetadataContainer = MetadataContainer;
