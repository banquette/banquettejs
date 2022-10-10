/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var NodeRemovedEventArg = /** @class */ (function (_super) {
    __extends(NodeRemovedEventArg, _super);
    function NodeRemovedEventArg(node) {
        var _this = _super.call(this) || this;
        _this.node = node;
        return _this;
    }
    return NodeRemovedEventArg;
}(EventArg));

export { NodeRemovedEventArg };
