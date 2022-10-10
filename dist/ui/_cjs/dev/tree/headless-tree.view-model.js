/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var eventDispatcher = require('@banquette/event/_cjs/dev/event-dispatcher');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var httpResponse = require('@banquette/http/_cjs/dev/http-response');
var debounce = require('@banquette/utils-misc/_cjs/dev/debounce');
var replaceStringVariables = require('@banquette/utils-string/_cjs/dev/format/replace-string-variables');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var ensureBoolean = require('@banquette/utils-type/_cjs/dev/ensure-boolean');
var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isPrimitive = require('@banquette/utils-type/_cjs/dev/is-primitive');
var isScalar = require('@banquette/utils-type/_cjs/dev/is-scalar');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var remote_module = require('../misc/remote/remote.module.js');
var constant = require('./constant.js');
var nodeRemoved_eventArg = require('./event/node-removed.event-arg.js');
var node = require('./node.js');

/**
 * The view model logic behind a generic tree.
 */
var HeadlessTreeViewModel = /** @class */ (function () {
    function HeadlessTreeViewModel() {
        var _this = this;
        /**
         * Defines how to resolve the items' labels, identifiers, children, disabled and expanded status.
         * Can be:
         *   - the name of the property to use when the input is an object.
         *   - a function that takes the raw input and returns the value to use.
         */
        this.nodesIdentifier = null;
        this.nodesLabel = null;
        this.nodesChildren = null;
        this.nodesDisabled = null;
        this.nodesExpanded = null;
        this.unsubscribeFunctions = [];
        this.noChoiceAvailable = true;
        this.searchBufferSlug = '';
        /**
         * Mapping between a raw object from the outside and its corresponding Node instance.
         */
        this.rawNodes = new WeakMap();
        this.eventDispatcher = new eventDispatcher.EventDispatcher();
        /**
         * Fetch remote nodes if the configuration allows for it.
         * The resulting node will replace all nodes registered.
         *
         * If a node is given as parameter, the request will be contextualized for it and
         * the result will replace its children.
         */
        this.fetchRemoteNodes = debounce.debounce((function () {
            // Responses of running requests, indexed by node id.
            var running = {};
            return function (nodeOrId) {
                if (nodeOrId === void 0) { nodeOrId = null; }
                if (!_this.remote.isApplicable) {
                    return;
                }
                var params = {};
                if (nodeOrId !== null) {
                    if (!(nodeOrId instanceof node.Node)) {
                        var nodeSearchResult = _this.getNodeById(nodeOrId);
                        if (nodeSearchResult === null) {
                            throw new usage_exception.UsageException("No node has been found for id \"".concat(nodeOrId, "\"."));
                        }
                        nodeOrId = nodeSearchResult;
                    }
                    if (_this.remoteNodeUrlParam === null) {
                        throw new usage_exception.UsageException('Cannot fetch contextualized nodes because no node url parameter has been defined. ' +
                            'Please set a value to "remoteNodeUrlParam".');
                    }
                    if (!nodeOrId.identifier) {
                        throw new usage_exception.UsageException("Your node \"".concat(nodeOrId.label, "\" must have a unique identifier ") +
                            "if you want to fetch remote children for it.");
                    }
                    params[_this.remoteNodeUrlParam] = String(nodeOrId.identifier);
                }
                var targetNode = nodeOrId ? nodeOrId : _this.viewData.root;
                // Cancel running request.
                if (!isUndefined.isUndefined(running[targetNode.id])) {
                    running[targetNode.id].request.cancel();
                }
                // The start a new one.
                targetNode.remoteFetchError = null;
                targetNode.remotePending = true;
                targetNode.remoteFetchStatus = constant.NodeRemoteFetchStatus.Pending;
                running[targetNode.id] = _this.remote.send(null, params);
                running[targetNode.id].promise.then(function (response) {
                    _this.setNodes(ensureArray.ensureArray(response.result), targetNode);
                    targetNode.remoteFetchStatus = constant.NodeRemoteFetchStatus.Idle;
                    targetNode.fetched = true;
                }).catch(function (reason) {
                    if (reason instanceof httpResponse.HttpResponse) {
                        if (reason.isCanceled) {
                            return;
                        }
                        reason = reason.error;
                    }
                    targetNode.remoteFetchError = exception_factory.ExceptionFactory.EnsureException(reason, 'Unknown error.').message;
                    targetNode.remoteFetchStatus = constant.NodeRemoteFetchStatus.Failed;
                }).finally(function () {
                    targetNode.remotePending = false;
                    delete running[targetNode.id];
                });
            };
        })(), 0, false);
        this.remote = new remote_module.RemoteModule();
        this.remote.updateConfiguration({ allowMultiple: true });
        this.viewData = {
            // The root is set to `null` until `setViewData` to give time to the component to configure the view model.
            root: null
        };
    }
    /**
     * Cleanup before the view model is destroyed.
     */
    HeadlessTreeViewModel.prototype.dispose = function () {
        for (var _i = 0, _a = this.unsubscribeFunctions; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
    };
    /**
     * @inheritDoc
     */
    HeadlessTreeViewModel.prototype.setViewData = function (viewData) {
        this.viewData = viewData;
        if (!this.viewData.root) {
            this.viewData.root = this.createNode({}, null);
        }
    };
    /**
     * Synchronize an input tree with the one in use.
     */
    HeadlessTreeViewModel.prototype.synchronize = function (data, parent) {
        if (parent === void 0) { parent = null; }
        if (parent === null) {
            parent = this.viewData.root;
        }
        out: for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            var node = this.normalizeNode(item, parent);
            if (node !== null) {
                var children = this.extractNodeChildren(item);
                if (children.length) {
                    this.synchronize(children, node);
                }
                for (var _a = 0, _b = parent.children; _a < _b.length; _a++) {
                    var child = _b[_a];
                    if (child.id === node.id) {
                        continue out;
                    }
                }
                parent.children.push(node);
                parent.childrenVisibleCount++;
            }
        }
    };
    /**
     * Replace the children of a node from a raw input.
     * If no parent is given, the root node is used.
     */
    HeadlessTreeViewModel.prototype.setNodes = function (data, parent) {
        if (parent === void 0) { parent = null; }
        if (parent === null) {
            parent = this.viewData.root;
        }
        parent.children = [];
        parent.childrenVisibleCount = 0;
        this.synchronize(data, parent);
    };
    /**
     * Try to normalize a raw value into a Node.
     */
    HeadlessTreeViewModel.prototype.normalizeNode = function (item, parent) {
        if (item instanceof node.Node) {
            return item;
        }
        var instance = this.createNode(item, parent);
        instance.identifier = this.extractNodeIdentifier(item);
        instance.label = this.extractNodeLabel(item);
        instance.disabled = this.extractNodeDisabledState(item);
        var userExpanded = this.extractNodeExpandedState(item);
        if (userExpanded !== null) {
            instance.expanded = userExpanded;
        }
        if (isObject.isObject(item)) {
            this.rawNodes.set(item, instance);
        }
        return instance;
    };
    /**
     * Show node's children.
     */
    HeadlessTreeViewModel.prototype.expandNode = function (nodeOrId) {
        this.changeNodeChildrenVisibility(nodeOrId, true);
    };
    /**
     * Hide node's children.
     */
    HeadlessTreeViewModel.prototype.collapseNode = function (nodeOrId) {
        this.changeNodeChildrenVisibility(nodeOrId, false);
    };
    /**
     * Toggle node's children.
     */
    HeadlessTreeViewModel.prototype.toggleNode = function (nodeOrId) {
        this.changeNodeChildrenVisibility(nodeOrId, 'inverse');
    };
    /**
     * Remove a node by reference or id.
     */
    HeadlessTreeViewModel.prototype.removeNode = function (nodeOrId) {
        var _this = this;
        var targetId = nodeOrId instanceof node.Node ? nodeOrId.id : nodeOrId;
        var search = function (parent) {
            for (var i = 0; i < parent.children.length; ++i) {
                if (parent.children[i].id === targetId) {
                    var removed = parent.children[i];
                    parent.children.splice(i, 1);
                    parent.childrenVisibleCount = parent.children.length;
                    _this.eventDispatcher.dispatch(constant.HeadlessTreeViewModelEvents.NodeRemoved, new nodeRemoved_eventArg.NodeRemovedEventArg(removed));
                    return true;
                }
                if (search(parent.children[i])) {
                    return true;
                }
            }
            return false;
        };
        return search(this.viewData.root);
    };
    /**
     * Be notified when a node is removed.
     */
    HeadlessTreeViewModel.prototype.onNodeRemoved = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessTreeViewModelEvents.NodeRemoved, cb);
    };
    /**
     * Update the visibility of the children of a node.
     */
    HeadlessTreeViewModel.prototype.changeNodeChildrenVisibility = function (nodeOrId, targetVisibility) {
        var node$1 = nodeOrId instanceof node.Node ? nodeOrId : this.getNodeById(nodeOrId);
        if (!node$1 || node$1.disabled) {
            return;
        }
        node$1.expanded = targetVisibility === true || (targetVisibility === 'inverse' && !node$1.expanded);
        if (node$1.expanded && this.remoteNodeUrlParam && !node$1.fetched) {
            this.fetchRemoteNodes(node$1);
        }
    };
    /**
     * Try to resolve the label of a node.
     */
    HeadlessTreeViewModel.prototype.extractNodeLabel = function (item) {
        if (isFunction.isFunction(this.nodesLabel)) {
            var label = this.nodesLabel(item);
            if (!isScalar.isScalar(label)) {
                console.warn("The \"nodesLabel\" function must return a scalar value, for:", item);
            }
            return String(label);
        }
        if (isScalar.isScalar(item)) {
            return String(item);
        }
        var defaultLabel = '(unknown label)';
        if (isArray.isArray(item)) {
            return item.length > 0 ? item[0] : defaultLabel;
        }
        if (!isObject.isObject(item)) {
            return defaultLabel;
        }
        if (this.nodesLabel !== null) {
            if (!isUndefined.isUndefined(item[this.nodesLabel])) {
                return ensureString.ensureString(item[this.nodesLabel]);
            }
            // Check if the user didn't give both the property and the expression.
            // In such a case it could mean "use the property if available, otherwise the expression.".
            if (this.nodesLabel.indexOf('{') > -1) {
                // TODO: make the start and end chars configurable.
                return replaceStringVariables.replaceStringVariables(this.nodesLabel, item, '{', '}');
            }
        }
        console.warn('Please define how to resolve the label using the "nodesLabel" attribute, for:', item);
        return defaultLabel;
    };
    /**
     * Try to extract the children data from a raw input.
     */
    HeadlessTreeViewModel.prototype.extractNodeChildren = function (item) {
        if (isFunction.isFunction(this.nodesChildren)) {
            return ensureArray.ensureArray(this.nodesChildren(item));
        }
        if (isArray.isArray(item)) {
            return item.slice(1);
        }
        if (!isObject.isObject(item) || !this.nodesChildren) {
            return [];
        }
        return ensureArray.ensureArray(item[this.nodesChildren]);
    };
    /**
     * Try to resolve the disabled state of a node.
     */
    HeadlessTreeViewModel.prototype.extractNodeDisabledState = function (item) {
        if (isFunction.isFunction(this.nodesDisabled)) {
            return ensureBoolean.ensureBoolean(this.nodesDisabled(item));
        }
        if (!isObject.isObject(item) || !this.nodesDisabled) {
            return false;
        }
        return !!item[this.nodesDisabled];
    };
    /**
     * Try to resolve the expanded state of a node.
     */
    HeadlessTreeViewModel.prototype.extractNodeExpandedState = function (item) {
        if (isFunction.isFunction(this.nodesExpanded)) {
            return ensureBoolean.ensureBoolean(this.nodesExpanded(item));
        }
        if (!isObject.isObject(item) || !this.nodesExpanded) {
            return null;
        }
        return !!item[this.nodesExpanded];
    };
    /**
     * Try to resolve the identifier of a node.
     */
    HeadlessTreeViewModel.prototype.extractNodeIdentifier = function (item) {
        if (isFunction.isFunction(this.nodesIdentifier)) {
            var value = this.nodesIdentifier(item);
            if (isPrimitive.isPrimitive(value)) {
                return value;
            }
        }
        if (isScalar.isScalar(item)) {
            return item;
        }
        if (!isObject.isObject(item)) {
            console.warn("Unsupported node of type \"".concat(typeof (item), "\"."));
            return undefined;
        }
        if (this.nodesIdentifier !== null && !isFunction.isFunction(this.nodesIdentifier)) {
            if (!isUndefined.isUndefined(item[this.nodesIdentifier])) {
                return item[this.nodesIdentifier];
            }
            console.warn("Identifier property \"".concat(this.nodesIdentifier, "\" not found, for:"), item);
        }
        return undefined;
    };
    /**
     * Recycle or create a node, based on a raw input.
     */
    HeadlessTreeViewModel.prototype.createNode = function (rawSource, parent) {
        var existing = this.rawNodes.get(rawSource);
        if (!isUndefined.isUndefined(existing)) {
            var node_1 = this.getNodeById(existing.id);
            if (node_1 !== null) {
                return node_1;
            }
        }
        var node$1 = new node.Node(rawSource, parent);
        node$1.fetched = !this.remote.isApplicable || this.remoteNodeUrlParam === null;
        return node$1;
    };
    /**
     * Try to get a reference on a Node by its internal id.
     * The id is used to be resilient to proxified objects.
     */
    HeadlessTreeViewModel.prototype.getNodeById = function (id, parent) {
        if (parent === void 0) { parent = null; }
        if (!parent) {
            parent = this.viewData.root;
        }
        for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate.id === id) {
                return candidate;
            }
            var childMatch = this.getNodeById(id, candidate);
            if (childMatch) {
                return childMatch;
            }
        }
        return null;
    };
    return HeadlessTreeViewModel;
}());

exports.HeadlessTreeViewModel = HeadlessTreeViewModel;
