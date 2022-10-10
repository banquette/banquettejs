/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { addEventListener } from '@banquette/utils-dom/add-event-listener';
import { proxy } from '@banquette/utils-misc/proxy';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Ref } from '@banquette/vue-typescript/decorator/ref.decorator';
import { TemplateRef } from '@banquette/vue-typescript/decorator/template-ref.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import { useDraggable } from '@vueuse/core';
import { watch } from 'vue';
import '../misc/call/call.component.vue.js';
import '../misc/conditional-wrapper/conditional-wrapper.component.vue.js';
import '../misc/remote/remote.component.vue.js';
import '../misc/teleport/teleport.component.vue.js';
import '../misc/click-outside.directive.js';
import '../misc/collapsable.directive.js';
import '../misc/stick-to.directive.js';
import '../misc/teleport.directive.js';
import '@banquette/api/api.service';
import '@banquette/vue-typescript/vue-builder';
import '../misc/client-only.component.vue.js';
import '../overlay/overlay.component.vue.js';
import { DialogEvents } from './constant.js';
import { HideDialogEventArg } from './event/hide-dialog.event-arg.js';
import { ThemeConfiguration } from './theme-configuration.js';
import OverlayComponent from '../overlay/overlay.component.vue_vue_type_script_lang.vue.js';
import ClientOnlyComponent from '../misc/client-only.component.vue_vue_type_script_lang.vue.js';

var DialogComponent = /** @class */ (function (_super) {
    __extends(DialogComponent, _super);
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
        _this.eventDispatcher = Injector.Get(EventDispatcherService);
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
                close: proxy(this.close, this),
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
        this.unsubscribeFunctions.push(addEventListener(document, 'keydown', proxy(this.onDocumentKeyDown, this)));
        this.unsubscribeFunctions.push(this.eventDispatcher.subscribe(DialogEvents.Show, proxy(this.onShowByEvent, this)));
        this.unsubscribeFunctions.push(this.eventDispatcher.subscribe(DialogEvents.Hide, proxy(this.onHideByEvent, this)));
        this.unsubscribeFunctions.push(this.eventDispatcher.subscribe(DialogEvents.HideAll, proxy(this.onHideByEvent, this)));
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
                window.setTimeout(function () {
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
        if (!(event instanceof HideDialogEventArg) || event.id === this.id) {
            this.close();
        }
    };
    /**
     * Prevent or restore the overflow of the body depending on the input value
     * and on the other visible dialogs.
     */
    DialogComponent.prototype.updateScrollLock = function (newValue) {
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
        var data = useDraggable(this.$refs.header);
        this.draggableUnsubscribeFunctions.push(watch(data.isDragging, function (newValue) {
            if (newValue) {
                lastTranslationOffset.x = _this.dragTranslation.x;
                lastTranslationOffset.y = _this.dragTranslation.y;
                lastDragOffset = null;
            }
            _this.dragging = newValue;
        }));
        this.draggableUnsubscribeFunctions.push(watch([data.x, data.y], function (newValues) {
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
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "id", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "lockScroll", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "modal", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "closeByMask", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "closeOnEscape", void 0);
    __decorate([
        Prop({ type: String, default: 'body' }),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "teleport", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "destroyOnClose", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "showClose", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "draggable", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DialogComponent.prototype, "isVisible", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "rendered", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "hasHeader", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "hasFooter", null);
    __decorate([
        Computed(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "bindings", null);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "slotBag", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "dragTranslation", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "dragging", void 0);
    __decorate([
        TemplateRef('overlay'),
        __metadata("design:type", typeof(window) !== 'undefined' ? Element : Object)
    ], DialogComponent.prototype, "overlayEl", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DialogComponent.prototype, "dragTranslationStyle", null);
    __decorate([
        Ref(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "internalVisible", void 0);
    __decorate([
        Watch('id', { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onIdChange", null);
    __decorate([
        Watch('isVisible', { immediate: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onVisibleChange", null);
    __decorate([
        Watch('lockScroll', { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onLockScrollChange", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "close", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        __metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onDocumentKeyDown", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof(window) !== 'undefined' ? MouseEvent : Object]),
        __metadata("design:returntype", void 0)
    ], DialogComponent.prototype, "onOverlayMouseDown", null);
    DialogComponent = DialogComponent_1 = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-dialog',
            components: [OverlayComponent, ClientOnlyComponent],
            directives: [BindThemeDirective],
            emits: ['update:visible', 'close']
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}(Vue));

export { DialogComponent as default };
