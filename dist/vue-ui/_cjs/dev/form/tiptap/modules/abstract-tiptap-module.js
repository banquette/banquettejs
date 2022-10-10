/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
var vue3 = require('@tiptap/vue-3');

var AbstractTiptapModule = /** @class */ (function (_super) {
    _tslib.__extends(AbstractTiptapModule, _super);
    function AbstractTiptapModule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * `true` if the module is ready to be used.
         */
        _this.enabled = false;
        return _this;
    }
    /**
     * Vue lifecycle method.
     */
    AbstractTiptapModule.prototype.beforeMount = function () {
        var $parent = this.getParent('bt-form-tiptap') || null;
        if (!$parent) {
            throw new usage_exception.UsageException('A tiptap module must be child of a `bt-form-tiptap` component.');
        }
        this.parent = $parent;
        this.parent.registerModule(this);
    };
    /**
     * Vue lifecycle method.
     */
    AbstractTiptapModule.prototype.beforeUnmount = function () {
        this.parent.unregisterModule(this);
    };
    /**
     * @inheritDoc
     */
    AbstractTiptapModule.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    /**
     * @inheritDoc
     */
    AbstractTiptapModule.prototype.getExtensions = function () {
        return [];
    };
    /**
     * @inheritDoc
     */
    AbstractTiptapModule.prototype.disable = function () {
        this.enabled = false;
    };
    /**
     * @inheritDoc
     */
    AbstractTiptapModule.prototype.enable = function () {
        this.enabled = true;
    };
    /**
     * Tiptap's events handlers.
     */
    /* virtual */ AbstractTiptapModule.prototype.onBeforeCreate = function (props) { };
    /* virtual */ AbstractTiptapModule.prototype.onCreate = function (props) { };
    /* virtual */ AbstractTiptapModule.prototype.onUpdate = function (props) { };
    /* virtual */ AbstractTiptapModule.prototype.onSelectionUpdate = function (props) { };
    /* virtual */ AbstractTiptapModule.prototype.onTransaction = function (props) { };
    /* virtual */ AbstractTiptapModule.prototype.onFocus = function (props) { };
    /* virtual */ AbstractTiptapModule.prototype.onBlur = function (props) { };
    /* virtual */ AbstractTiptapModule.prototype.onDestroy = function (props) { };
    /**
     * Default configuration values.
     * They will be merged with the ones coming as input.
     */
    AbstractTiptapModule.prototype.getDefaultConfiguration = function () {
        return {};
    };
    _tslib.__decorate([
        prop_decorator.Prop({
            type: Object,
            default: {},
            transform: function (v) {
                return Object.assign({}, this.getDefaultConfiguration(), v || {});
            }
        }),
        _tslib.__metadata("design:type", Object)
    ], AbstractTiptapModule.prototype, "configuration", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Boolean)
    ], AbstractTiptapModule.prototype, "enabled", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", vue3.Editor)
    ], AbstractTiptapModule.prototype, "editor", void 0);
    return AbstractTiptapModule;
}(vue.Vue));

exports.AbstractTiptapModule = AbstractTiptapModule;
