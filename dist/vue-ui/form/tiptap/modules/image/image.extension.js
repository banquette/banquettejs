/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __assign } from '../../../../_virtual/_tslib.js';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Image as Image$1 } from '@tiptap/extension-image';

var Image = Image$1.extend({
    addAttributes: function () {
        var _a;
        return __assign(__assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { width: {
                default: null,
                renderHTML: function (attributes) {
                    return attributes.width !== null ? { style: "width: ".concat(attributes.width) } : {};
                }
            }, height: {
                default: null,
                renderHTML: function (attributes) {
                    return attributes.height !== null ? { style: "height: ".concat(attributes.height) } : {};
                }
            } });
    },
    addCommands: function () {
        var _this = this;
        var _a;
        return __assign(__assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { setSize: function (options) { return function (_a) {
                var tr = _a.tr, dispatch = _a.dispatch;
                var selectedNode = tr.selection.node;
                var width = options.width || null;
                var height = options.height || null;
                if (!isNullOrUndefined(options.size)) {
                    if (!isObject(_this.options.sizes) || isUndefined(_this.options.sizes[options.size])) {
                        console.warn("Invalid size \"".concat(options.size, "\". Available values are: ").concat(Object.keys(_this.options.sizes).join(', '), "."));
                        return false;
                    }
                    width = _this.options.sizes[options.size].width || null;
                    height = _this.options.sizes[options.size].height || null;
                }
                if ((width === null && height === null) || !selectedNode) {
                    return false;
                }
                var attributes = __assign(__assign({}, selectedNode.attrs), { width: width, height: height });
                var node = _this.type.create(attributes);
                if (dispatch) {
                    tr.replaceRangeWith(tr.selection.from, tr.selection.to, node);
                }
                return true;
            }; } });
    }
});

export { Image };
