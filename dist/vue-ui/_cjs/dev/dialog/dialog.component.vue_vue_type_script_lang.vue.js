/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var addEventListener = require('@banquette/utils-dom/_cjs/dev/add-event-listener');
var isServer = require('@banquette/utils-misc/_cjs/dev/is-server');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var ref_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/ref.decorator');
var templateRef_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/template-ref.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue$1 = require('@banquette/vue-typescript/_cjs/dev/vue');
var core = require('@vueuse/core');
var vue = require('vue');
require('../misc/call/call.component.vue.js');
require('../misc/conditional-wrapper/conditional-wrapper.component.vue.js');
require('../misc/remote/remote.component.vue.js');
require('../misc/teleport/teleport.component.vue.js');
require('../misc/click-outside.directive.js');
require('../misc/collapsable.directive.js');
require('../misc/stick-to.directive.js');
require('../misc/teleport.directive.js');
require('@banquette/api/_cjs/dev/api.service');
require('@banquette/vue-typescript/_cjs/dev/vue-builder');
require('../misc/client-only.component.vue.js');
require('../overlay/overlay.component.vue.js');
var constant = require('./constant.js');
var hideDialog_eventArg = require('./event/hide-dialog.event-arg.js');
var themeConfiguration = require('./theme-configuration.js');
var overlay_component_vue_vue_type_script_lang = require('../overlay/overlay.component.vue_vue_type_script_lang.vue.js');
var clientOnly_component_vue_vue_type_script_lang = require('../misc/client-only.component.vue_vue_type_script_lang.vue.js');

var DialogComponent = /** @class */ (function (_super) {
    _tslib.__extends(DialogComponent, _super);
    function DialogComponent() {
        var _this = _super.call(this) || this;
        _this.slotBag = {};
        /**
         * The amount of movement induced by the user by dragging the dialog.
         */
        _this.dragTranslation = { x: 0, y: 0 };
        _this.dragging = false;
        _this.internalVisible = false;
        _this.unsubscribeFunctions = [];
        _this.draggableUnsubscribeFunctions = [];
        _this.oldBodyOverflow = null;
        _this.shown = false;
        _this.eventDispatcher = injector.Injector.Get(eventDispatcher_service.EventDispatcherService);
        return _this;
    }
    DialogComponent_1 = DialogComponent;
    Object.defineProperty(DialogComponent.prototype, "isVisible", {
        /**
         * Bidirectional binding for the visibility so the dialog can be closed
         * both from the inside and outside the component.
         */
        get: function () {
            return this.visible || this.internalVisible;
        },
        set: function (value) {
            this.$emit('update:visible', value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogComponent.prototype, "rendered", {
        /**
         * If `true`, the content is rendered.
         */
        get: function () {
            return this.isVisible || (this.shown && !this.destroyOnClose);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogComponent.prototype, "hasHeader", {
        /**
         * `true` if the end-user gave a content for the "header" slot.
         */
        get: function () {
            return this.hasSlot('header');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogComponent.prototype, "hasFooter", {
        /**
         * `true` if the end-user gave a content for the "footer" slot.
         */
        get: function () {
            return this.hasSlot('footer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogComponent.prototype, "bindings", {
        /**
         * Values exposed to the slots.
         */
        get: function () {
            return {
                close: proxy.proxy(this.close, this),
                bag: this.slotBag
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogComponent.prototype, "dragTranslationStyle", {
        get: function () {
            if (!this.draggable) {
                return {};
            }
            return { transform: "translate(".concat(this.dragTranslation.x, "px, ").concat(this.dragTranslation.y, "px)") };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Vue lifecycle.
     */
    DialogComponent.prototype.mounted = function () {
        this.unsubscribeFunctions.push(addEventListener.addEventListener(document, 'keydown', proxy.proxy(this.onDocumentKeyDown, this)));
        this.unsubscribeFunctions.push(this.eventDispatcher.subscribe(constant.DialogEvents.Show, proxy.proxy(this.onShowByEvent, this)));
        this.unsubscribeFunctions.push(this.eventDispatcher.subscribe(constant.DialogEvents.Hide, proxy.proxy(this.onHideByEvent, this)));
        this.unsubscribeFunctions.push(this.eventDispatcher.subscribe(constant.DialogEvents.HideAll, proxy.proxy(this.onHideByEvent, this)));
    };
    /**
     * Vue lifecycle.
     */
    DialogComponent.prototype.unmounted = function () {
        for (var _i = 0, _a = this.unsubscribeFunctions; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.unsubscribeFunctions = [];
        if (this.lockScroll) {
            this.updateScrollLock(false);
        }
        this.onIdChange(null, this.id);
        this.freeDraggable();
    };
    DialogComponent.prototype.onIdChange = function (newValue, oldValue) {
        if (oldValue) {
            var pos = DialogComponent_1.UsedIds.indexOf(oldValue);
            if (pos > -1) {
                DialogComponent_1.UsedIds.splice(pos, 1);
            }
        }
        if (newValue) {
            if (DialogComponent_1.UsedIds.indexOf(newValue) > -1) {
                console.warn("The id \"".concat(newValue, "\" is already used by another dialog."));
                return;
            }
            DialogComponent_1.UsedIds.push(newValue);
        }
    };
    DialogComponent.prototype.onVisibleChange = function (newValue) {
        var _this = this;
        if (newValue) {
            if (this.lockScroll) {
                this.updateScrollLock(true);
            }
            this.shown = true;
            if (this.draggable) {
                setTimeout(function () {
                    _this.makeDraggable();
                });
            }
        }
        else {
            this.shown = false;
            this.freeDraggable();
        }
    };
    DialogComponent.prototype.onLockScrollChange = function (newValue) {
        if (this.visible) {
            this.updateScrollLock(newValue);
        }
    };
    /**
     * Close the dialog.
     */
    DialogComponent.prototype.close = function () {
        this.isVisible = false;
        this.internalVisible = false;
        if (this.lockScroll) {
            this.updateScrollLock(false);
        }
        this.$emit('close');
    };
    /**
     * "keydown" event on the document.
     */
    DialogComponent.prototype.onDocumentKeyDown = function (event) {
        if (event.key === 'Escape' && this.closeOnEscape) {
            event.stopPropagation();
            this.close();
        }
    };
    /**
     * "mousedown" event on the mask.
     */
    DialogComponent.prototype.onOverlayMouseDown = function (event) {
        if (this.closeByMask && event.target === this.overlayEl) {
            this.close();
        }
    };
    /**
     * Called when a `DialogEvents.Show` event is emitted.
     */
    DialogComponent.prototype.onShowByEvent = function (event) {
        if (event.id === this.id) {
            this.internalVisible = true;
            this.slotBag = event.args || {};
        }
    };
    /**
     * Called when a `DialogEvents.Hide` or `DialogEvents.HideAll` event is emitted.
     */
    DialogComponent.prototype.onHideByEvent = function (event) {
        if (!(event instanceof hideDialog_eventArg.HideDialogEventArg) || event.id === this.id) {
            this.close();
        }
    };
    /**
     * Prevent or restore the overflow of the body depending on the input value
     * and on the other visible dialogs.
     */
    DialogComponent.prototype.updateScrollLock = function (newValue) {
        if (isServer.isServer()) {
            return;
        }
        if (newValue) {
            if ((++DialogComponent_1.ScrollLockedCount) === 1) {
                this.oldBodyOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            }
        }
        else {
            if (!(--DialogComponent_1.ScrollLockedCount) && this.oldBodyOverflow !== null) {
                document.body.style.overflow = this.oldBodyOverflow;
                this.oldBodyOverflow = null;
            }
        }
    };
    /**
     * Make the dialog draggable.
     */
    DialogComponent.prototype.makeDraggable = function () {
        var _this = this;
        if (!this.$refs.header) {
            return;
        }
        // The value of `dragTranslation` when the last drag started.
        var lastTranslationOffset = { x: 0, y: 0 };
        // The value of `x` and `y` when the last drag started.
        var lastDragOffset = null;
        var data = core.useDraggable(this.$refs.header);
        this.draggableUnsubscribeFunctions.push(vue.watch(data.isDragging, function (newValue) {
            if (newValue) {
                lastTranslationOffset.x = _this.dragTranslation.x;
                lastTranslationOffset.y = _this.dragTranslation.y;
                lastDragOffset = null;
            }
            _this.dragging = newValue;
        }));
        this.draggableUnsubscribeFunctions.push(vue.watch([data.x, data.y], function (newValues) {
            if (lastDragOffset === null) {
                lastDragOffset = { x: newValues[0], y: newValues[1] };
            }
            _this.dragTranslation.x = lastTranslationOffset.x + (newValues[0] - lastDragOffset.x);
            _this.dragTranslation.y = lastTranslationOffset.y + (newValues[1] - lastDragOffset.y);
        }));
    };
    /**
     * Stop the dialog from being draggable.
     */
    DialogComponent.prototype.freeDraggable = function () {
        for (var _i = 0, _a = this.draggableUnsubscribeFunctions; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.draggableUnsubscribeFunctions = [];
        this.dragTranslation.x = 0;
        this.dragTranslation.y = 0;
    };
    var DialogComponent_1;
    DialogComponent.ScrollLockedCount = 0;
    DialogComponent.UsedIds = [];
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], DialogComponent.prototype, "id", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "lockScroll", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "modal", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "closeByMask", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "closeOnEscape", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'body' }),
        _tslib.__metadata("design:type", Object)
    ], DialogComponent.prototype, "teleport", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "destroyOnClose", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "showClose", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "draggable", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [Boolean])
    ], DialogComponent.prototype, "isVisible", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "rendered", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "hasHeader", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "hasFooter", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Object),
        _tslib.__metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "bindings", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], DialogComponent.prototype, "slotBag", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], DialogComponent.prototype, "dragTranslation", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "dragging", void 0);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('overlay'),
        _tslib.__metadata("design:type", typeof(window) !== 'undefined' ? Element : Object)
    ], DialogComponent.prototype, "overlayEl", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Object),
        _tslib.__metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "dragTranslationStyle", null);
    _tslib.__decorate([
        ref_decorator.Ref(),
        _tslib.__metadata("design:type", Boolean)
    ], DialogComponent.prototype, "internalVisible", void 0);
    _tslib.__decorate([
        watch_decorator.Watch('id', { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object, Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onIdChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('isVisible', { immediate: false }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Boolean]),
        _tslib.__metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onVisibleChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('lockScroll', { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Boolean]),
        _tslib.__metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onLockScrollChange", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "close", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onDocumentKeyDown", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [typeof(window) !== 'undefined' ? MouseEvent : Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onOverlayMouseDown", null);
    DialogComponent = DialogComponent_1 = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-dialog',
            components: [overlay_component_vue_vue_type_script_lang, clientOnly_component_vue_vue_type_script_lang],
            directives: [bindTheme_directive.BindThemeDirective],
            emits: ['update:visible', 'close']
        }),
        _tslib.__metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}(vue$1.Vue));

module.exports = DialogComponent;
