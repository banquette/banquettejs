/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { HttpMethod } from '@banquette/http/constants';
import { HeadlessTreeViewModel } from '@banquette/ui/tree/headless-tree.view-model';
import { ensureInEnum } from '@banquette/utils-array/ensure-in-enum';
import { isServer } from '@banquette/utils-misc/is-server';
import { isArray } from '@banquette/utils-type/is-array';
import { isObject } from '@banquette/utils-type/is-object';
import { IconMaterialArrowDropDown } from '@banquette/vue-material-icons/arrow-drop-down';
import { IconMaterialHelp } from '@banquette/vue-material-icons/help';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Render } from '@banquette/vue-typescript/decorator/render.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import { toRaw, resolveDirective, withDirectives, h, renderSlot, resolveComponent } from 'vue';
import '../progress/progress-circular/progress-circular.component.vue.js';
import { ThemeConfiguration } from './theme-configuration.js';
import ProgressCircularComponent from '../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js';

var TreeComponent = /** @class */ (function (_super) {
    __extends(TreeComponent, _super);
    function TreeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.unsubscribeFunctions = [];
        return _this;
    }
    /**
     * Vue lifecycle.
     */
    TreeComponent.prototype.beforeMount = function () {
        var _this = this;
        this.vm = new HeadlessTreeViewModel();
        this.v = this.vm.viewData;
        // So the proxy is used by the headless view model.
        this.vm.setViewData(this.v);
        this.vm.fetchRemoteNodes();
        this.unsubscribeFunctions.push(this.vm.onNodeRemoved(function (event) {
            _this.removeFromModelValue(toRaw(event.node.originalValue));
        }));
    };
    /**
     * Vue lifecycle.
     */
    TreeComponent.prototype.beforeUnmount = function () {
        for (var _i = 0, _a = this.unsubscribeFunctions; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.unsubscribeFunctions = [];
    };
    /**
     * Remove a value form the external data source.
     */
    TreeComponent.prototype.removeFromModelValue = function (raw, parents) {
        if (parents === void 0) { parents = null; }
        if (parents === null) {
            parents = this.data;
        }
        for (var _i = 0, _a = Object.keys(parents); _i < _a.length; _i++) {
            var key = _a[_i];
            if (toRaw(parents[key]) === raw && isArray(parents)) {
                parents.splice(parseInt(key, 10), 1);
                this.$emit('update:data', this.data);
                return;
            }
            if (isObject(parents[key])) {
                this.removeFromModelValue(raw, parents[key]);
            }
        }
    };
    TreeComponent.prototype.onBasePropsChange = function () {
        this.vm.nodesIdentifier = this.nodesIdentifier;
        this.vm.nodesLabel = this.nodesLabel;
        this.vm.nodesChildren = this.nodesChildren;
        this.vm.nodesDisabled = this.nodesDisabled;
        this.vm.remoteNodeUrlParam = this.nodeUrlParam;
    };
    TreeComponent.prototype.assignLocalData = function () {
        if (this.data !== null) {
            this.vm.synchronize(this.data);
        }
    };
    TreeComponent.prototype.syncRemoteConfigurationProps = function () {
        this.vm.remote.updateConfiguration({
            model: this.model,
            url: this.url,
            method: this.method,
            endpoint: this.endpoint,
            urlParams: this.urlParams,
            headers: this.headers
        });
    };
    TreeComponent.prototype.render = function (context) {
        if (isServer()) {
            this.beforeMount();
        }
        var theme = resolveDirective("bt-bind-theme");
        var childNodes = [];
        if (this.showRoot) {
            childNodes.push(this.renderNode(context, this.v.root, 'node'));
        }
        else {
            for (var _i = 0, _a = this.v.root.children; _i < _a.length; _i++) {
                var node = _a[_i];
                childNodes.push(this.renderNode(context, node));
            }
        }
        return withDirectives(h('div', { class: 'bt-tree' }, childNodes), [[theme]]);
    };
    TreeComponent.prototype.renderNode = function (context, node, slotName, level) {
        var _this = this;
        if (slotName === void 0) { slotName = 'node'; }
        if (level === void 0) { level = 0; }
        var that = this;
        var collapsableDirective = resolveDirective("bt-collapsable");
        var titleNodes = [
            renderSlot(context.$slots, slotName, {
                node: node,
                toggle: function () { return _this.vm.toggleNode(node); },
                expand: function () { return _this.vm.expandNode(node); },
                collapse: function () { return _this.vm.collapseNode(node); },
                remove: function () { return _this.vm.removeNode(node); }
            }, function () {
                return [node.label || '(missing label)'];
            })
        ];
        var leftAddon;
        if (node.remotePending) {
            leftAddon = h(resolveComponent("bt-progress-circular"));
        }
        else if (node.fetched) {
            leftAddon = h(resolveComponent('i-material-arrow-drop-down'), { crop: true, width: '0.80em' });
        }
        else {
            leftAddon = h('div', { class: 'unknown-text' }, '?');
        }
        titleNodes.unshift(h('div', { class: 'addon' }, leftAddon));
        var title = h('div', {
            class: 'title',
            style: { paddingLeft: (that.indent * level) + 'px' },
            onClick: function (event) {
                event.stopPropagation();
                _this.vm.toggleNode(node);
            }
        }, titleNodes);
        var childNodes = [];
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            childNodes.push(this.renderNode(context, child, 'node', level + 1));
        }
        var content = withDirectives(h('div', { class: 'items-wrapper' }, childNodes), [[collapsableDirective, { opened: node.expanded }]]);
        return h('div', {
            class: 'bt-tree-item',
            'data-is-expanded': node.expanded ? '' : null,
            'data-is-empty': node.fetched && !node.childrenVisibleCount ? '' : null,
            'data-is-disabled': node.disabled ? '' : null
        }, [title, content]);
    };
    __decorate([
        Prop({ type: Array, default: null }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "data", void 0);
    __decorate([
        Prop({ type: [String, Function], default: null }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "nodesIdentifier", void 0);
    __decorate([
        Prop({ type: [String, Function], default: 'label' }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "nodesLabel", void 0);
    __decorate([
        Prop({ type: [String, Function], default: 'children' }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "nodesChildren", void 0);
    __decorate([
        Prop({ type: [String, Function], default: 'disabled' }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "nodesDisabled", void 0);
    __decorate([
        Prop({ name: 'remoteModel', type: String, default: null }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "model", void 0);
    __decorate([
        Prop({ name: 'remoteUrl', type: String, default: null }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "url", void 0);
    __decorate([
        Prop({ name: 'remoteEndpoint', type: String, default: null }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "endpoint", void 0);
    __decorate([
        Prop({ name: 'remoteMethod', type: String, default: HttpMethod.GET, transform: function (value) { return ensureInEnum(value, HttpMethod, HttpMethod.GET); } }),
        __metadata("design:type", String)
    ], TreeComponent.prototype, "method", void 0);
    __decorate([
        Prop({ name: 'remoteUrlParams', type: Object, default: {} }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "urlParams", void 0);
    __decorate([
        Prop({ name: 'remoteHeaders', type: Object, default: {} }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "headers", void 0);
    __decorate([
        Prop({ name: 'remoteNodeUrlParam', type: String, default: null }),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "nodeUrlParam", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], TreeComponent.prototype, "showRoot", void 0);
    __decorate([
        Prop({ type: Number, default: 18 }),
        __metadata("design:type", Number)
    ], TreeComponent.prototype, "indent", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "v", void 0);
    __decorate([
        Watch(['nodesIdentifier', 'nodesLabel', 'nodesChildren', 'nodesDisabled', 'nodeUrlParam'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "onBasePropsChange", null);
    __decorate([
        Watch('data', { immediate: ImmediateStrategy.BeforeMount, deep: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "assignLocalData", null);
    __decorate([
        Watch(['model', 'url', 'endpoint', 'method', 'urlParams', 'headers'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "syncRemoteConfigurationProps", null);
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "render", null);
    TreeComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-tree',
            components: [ProgressCircularComponent, IconMaterialArrowDropDown, IconMaterialHelp],
            directives: [BindThemeDirective],
            emits: ['update:data'],
        })
    ], TreeComponent);
    return TreeComponent;
}(Vue));

export { TreeComponent as default };
