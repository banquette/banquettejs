/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var constants = require('@banquette/http/_cjs/dev/constants');
var headlessTree_viewModel = require('@banquette/ui/_cjs/dev/tree/headless-tree.view-model');
var ensureInEnum = require('@banquette/utils-array/_cjs/dev/ensure-in-enum');
var isServer = require('@banquette/utils-misc/_cjs/dev/is-server');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var arrowDropDown = require('@banquette/vue-material-icons/_cjs/dev/arrow-drop-down');
var help = require('@banquette/vue-material-icons/_cjs/dev/help');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var render_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/render.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue$1 = require('@banquette/vue-typescript/_cjs/dev/vue');
var vue = require('vue');
require('../progress/progress-circular/progress-circular.component.vue.js');
var themeConfiguration = require('./theme-configuration.js');
var progressCircular_component_vue_vue_type_script_lang = require('../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js');

var TreeComponent = /** @class */ (function (_super) {
    _tslib.__extends(TreeComponent, _super);
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
        this.vm = new headlessTree_viewModel.HeadlessTreeViewModel();
        this.v = this.vm.viewData;
        // So the proxy is used by the headless view model.
        this.vm.setViewData(this.v);
        this.vm.fetchRemoteNodes();
        this.unsubscribeFunctions.push(this.vm.onNodeRemoved(function (event) {
            _this.removeFromModelValue(vue.toRaw(event.node.originalValue));
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
            if (vue.toRaw(parents[key]) === raw && isArray.isArray(parents)) {
                parents.splice(parseInt(key, 10), 1);
                this.$emit('update:data', this.data);
                return;
            }
            if (isObject.isObject(parents[key])) {
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
        if (isServer.isServer()) {
            this.beforeMount();
        }
        var theme = vue.resolveDirective("bt-bind-theme");
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
        return vue.withDirectives(vue.h('div', { class: 'bt-tree' }, childNodes), [[theme]]);
    };
    TreeComponent.prototype.renderNode = function (context, node, slotName, level) {
        var _this = this;
        if (slotName === void 0) { slotName = 'node'; }
        if (level === void 0) { level = 0; }
        var that = this;
        var collapsableDirective = vue.resolveDirective("bt-collapsable");
        var titleNodes = [
            vue.renderSlot(context.$slots, slotName, {
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
            leftAddon = vue.h(vue.resolveComponent("bt-progress-circular"));
        }
        else if (node.fetched) {
            leftAddon = vue.h(vue.resolveComponent('i-material-arrow-drop-down'), { crop: true, width: '0.80em' });
        }
        else {
            leftAddon = vue.h('div', { class: 'unknown-text' }, '?');
        }
        titleNodes.unshift(vue.h('div', { class: 'addon' }, leftAddon));
        var title = vue.h('div', {
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
        var content = vue.withDirectives(vue.h('div', { class: 'items-wrapper' }, childNodes), [[collapsableDirective, { opened: node.expanded }]]);
        return vue.h('div', {
            class: 'bt-tree-item',
            'data-is-expanded': node.expanded ? '' : null,
            'data-is-empty': node.fetched && !node.childrenVisibleCount ? '' : null,
            'data-is-disabled': node.disabled ? '' : null
        }, [title, content]);
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Array, default: null }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "data", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: null }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "nodesIdentifier", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: 'label' }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "nodesLabel", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: 'children' }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "nodesChildren", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: 'disabled' }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "nodesDisabled", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteModel', type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "model", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteUrl', type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "url", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteEndpoint', type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "endpoint", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteMethod', type: String, default: constants.HttpMethod.GET, transform: function (value) { return ensureInEnum.ensureInEnum(value, constants.HttpMethod, constants.HttpMethod.GET); } }),
        _tslib.__metadata("design:type", String)
    ], TreeComponent.prototype, "method", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteUrlParams', type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "urlParams", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteHeaders', type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "headers", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteNodeUrlParam', type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "nodeUrlParam", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], TreeComponent.prototype, "showRoot", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: 18 }),
        _tslib.__metadata("design:type", Number)
    ], TreeComponent.prototype, "indent", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], TreeComponent.prototype, "v", void 0);
    _tslib.__decorate([
        watch_decorator.Watch(['nodesIdentifier', 'nodesLabel', 'nodesChildren', 'nodesDisabled', 'nodeUrlParam'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "onBasePropsChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('data', { immediate: watch_decorator.ImmediateStrategy.BeforeMount, deep: true }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "assignLocalData", null);
    _tslib.__decorate([
        watch_decorator.Watch(['model', 'url', 'endpoint', 'method', 'urlParams', 'headers'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "syncRemoteConfigurationProps", null);
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "render", null);
    TreeComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-tree',
            components: [progressCircular_component_vue_vue_type_script_lang, arrowDropDown.IconMaterialArrowDropDown, help.IconMaterialHelp],
            directives: [bindTheme_directive.BindThemeDirective],
            emits: ['update:data'],
        })
    ], TreeComponent);
    return TreeComponent;
}(vue$1.Vue));

module.exports = TreeComponent;
