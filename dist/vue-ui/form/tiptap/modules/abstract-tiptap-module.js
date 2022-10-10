/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import { Editor } from '@tiptap/vue-3';

var AbstractTiptapModule = /** @class */ (function (_super) {
    __extends(AbstractTiptapModule, _super);
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
            throw new UsageException('A tiptap module must be child of a `bt-form-tiptap` component.');
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
    __decorate([
        Prop({
            type: Object,
            default: {},
            transform: function (v) {
                return Object.assign({}, this.getDefaultConfiguration(), v || {});
            }
        }),
        __metadata("design:type", Object)
    ], AbstractTiptapModule.prototype, "configuration", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], AbstractTiptapModule.prototype, "enabled", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Editor)
    ], AbstractTiptapModule.prototype, "editor", void 0);
    return AbstractTiptapModule;
}(Vue));

export { AbstractTiptapModule };
