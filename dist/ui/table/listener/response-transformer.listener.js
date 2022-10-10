/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { ModelMetadataService } from '@banquette/model/model-metadata.service';
import { TransformService } from '@banquette/model/transformer/transform.service';
import { PojoTransformerSymbol } from '@banquette/model/transformer/type/root/pojo';
import { isArray } from '@banquette/utils-type/is-array';
import { TableApiEvents, TableProcessorTag } from '../constant.js';

var transformService = Injector.Get(TransformService);
var modelMetadata = Injector.Get(ModelMetadataService);
/**
 * Transform models fround in the payload into Pojo.
 *
 * @throws ModelAliasNotFoundException
 */
function onBeforeResponse(event) {
    if (event.state.remote.model === null || !isArray(event.result.items)) {
        return;
    }
    var ctor = modelMetadata.resolveAlias(event.state.remote.model);
    var transformResult = transformService.transformInverse(event.result.items, ctor, PojoTransformerSymbol);
    var assignResult = function () {
        event.result.items = transformResult.result;
    };
    if (transformResult.promise !== null) {
        return transformResult.promise.then(assignResult);
    }
    else {
        assignResult();
    }
}
Injector.Get(EventDispatcherService).subscribe(TableApiEvents.BeforeResponse, onBeforeResponse, 0, null, [TableProcessorTag]);
