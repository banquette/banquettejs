/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var componentNotFound_exception = require('@banquette/form/_cjs/dev/exception/component-not-found.exception');
var formControl = require('@banquette/form/_cjs/dev/form-control');
var modelMetadata_service = require('@banquette/model/_cjs/dev/model-metadata.service');
var modelTransformMetadata_service = require('@banquette/model/_cjs/dev/model-transform-metadata.service');
var modelWatcher_service = require('@banquette/model/_cjs/dev/model-watcher.service');
var transformContext = require('@banquette/model/_cjs/dev/transformer/transform-context');
var transform_service = require('@banquette/model/_cjs/dev/transformer/transform.service');
var utils = require('@banquette/model/_cjs/dev/utils');
var index = require('@banquette/object-observer/_cjs/dev/index');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var contants = require('./contants.js');
var formControl$1 = require('./transformer/form-control.js');
var formObject = require('./transformer/form-object.js');
var form = require('./transformer/root/form.js');
var utils$1 = require('./transformer/utils.js');

var FormModelBinder = /** @class */ (function () {
    function FormModelBinder(modelMetadata, transformMetadata, transformService, modelWatcher) {
        this.modelMetadata = modelMetadata;
        this.transformMetadata = transformMetadata;
        this.transformService = transformService;
        this.modelWatcher = modelWatcher;
        this.canMutateForm = false;
        this.ignoreFormUpdate = false;
        this.ignoreModelUpdate = false;
        this.valueTransformers = new WeakMap();
        this.transformersTrees = new WeakMap();
        this.contextStack = [];
    }
    Object.defineProperty(FormModelBinder.prototype, "currentContextCtor", {
        get: function () {
            for (var i = this.contextStack.length - 1; i >= 0; --i) {
                if (this.contextStack[i].ctor !== Array) {
                    return this.contextStack[i].ctor;
                }
            }
            return this.model.constructor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormModelBinder.prototype, "currentContextProperty", {
        get: function () {
            for (var i = this.contextStack.length - 1; i >= 0; --i) {
                if (this.contextStack[i].ctor !== Array) {
                    return this.contextStack[i].property;
                }
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Synchronize a model and a form, updating one when the other changes.
     */
    FormModelBinder.prototype.bind = function (model, form$1) {
        this.form = form$1;
        this.model = model;
        this.syncFormObjectWithModel(form$1, this.model);
        this.form.onControlAdded(proxy.proxy(this.throwOnUnauthorizedFormMutation, this), 0, false);
        this.form.onControlRemoved(proxy.proxy(this.throwOnUnauthorizedFormMutation, this), 0, false);
        this.form.onValueChanged(proxy.proxy(this.onFormValueChange, this), 0, false);
        return this.modelWatcher.watchTransformableProperties(model, form.FormTransformerSymbol, proxy.proxy(this.onModelChange, this));
    };
    /**
     * Update a FormObject to match a model.
     * If controls are missing they will be created.
     * Values of existing controls will be updated.
     */
    FormModelBinder.prototype.syncFormObjectWithModel = function (component, model) {
        var tree = this.getModelTransformersTree(model.constructor);
        for (var _i = 0, _a = Object.keys(tree.children); _i < _a.length; _i++) {
            var property = _a[_i];
            this.pushContext(model.constructor, property, model);
            if (!isUndefined.isUndefined(tree.children[property])) {
                this.syncFormWithModelPart(tree.children[property], component, model, property);
            }
            this.popContext();
        }
    };
    /**
     * Call the right synchronization method depending on the type of transformer given as input.
     */
    FormModelBinder.prototype.syncFormWithModelPart = function (treeItem, formContainer, modelContainer, property) {
        if (treeItem.transformer.type === contants.FormControlTransformerSymbol) {
            this.syncFormControlWithModelAttribute(treeItem, formContainer, modelContainer, property);
        }
        else if (treeItem.transformer.type === contants.FormObjectTransformerSymbol) {
            this.syncFormObjectWithModelAttribute(treeItem, formContainer, modelContainer, property);
        }
        else if (treeItem.transformer.type === contants.FormArrayTransformerSymbol) {
            this.syncFormArrayWithModelAttribute(treeItem, formContainer, modelContainer, property);
        }
    };
    /**
     * Synchronize the content of a FormObject component with a model property.
     */
    FormModelBinder.prototype.syncFormObjectWithModelAttribute = function (treeItem, formContainer, modelContainer, property) {
        var componentResult = this.getOrCreateFormComponent(formContainer, modelContainer, treeItem, property);
        if (componentResult) {
            if (!isObject.isObject(modelContainer[property]) && componentResult.component.parent) {
                componentResult.component.detach();
                return;
            }
            for (var _i = 0, _a = Object.keys(treeItem.children); _i < _a.length; _i++) {
                var childName = _a[_i];
                this.pushContext(treeItem.ctor, childName, modelContainer[property]);
                this.syncFormWithModelPart(treeItem.children[childName], componentResult.component, isObject.isObject(modelContainer) ? modelContainer[property] : null, childName);
                this.popContext();
            }
        }
    };
    /**
     * Synchronize the content of a FormArray component with a model property.
     */
    FormModelBinder.prototype.syncFormArrayWithModelAttribute = function (treeItem, formContainer, modelContainer, property) {
        var componentResult = this.getOrCreateFormComponent(formContainer, modelContainer, treeItem, property);
        if (componentResult) {
            var modelValue = isObject.isObject(modelContainer) ? ensureArray.ensureArray(modelContainer[property]) : [];
            for (var i = 0; i < modelValue.length; ++i) {
                this.pushContext(Array, String(i), modelContainer[property]);
                this.syncFormWithModelPart(treeItem.children['*'], componentResult.component, modelValue, i);
            }
        }
    };
    /**
     * Synchronize the value of a form control with the value of a model property.
     */
    FormModelBinder.prototype.syncFormControlWithModelAttribute = function (treeItem, formContainer, modelContainer, property) {
        try {
            this.ignoreFormUpdate = true;
            var componentResult = this.getOrCreateFormComponent(formContainer, modelContainer, treeItem, property);
            if (componentResult) {
                var newValue = isObject.isObject(modelContainer) ? modelContainer[property] : undefined;
                if (!isUndefined.isUndefined(treeItem.valueTransformer)) {
                    newValue = this.handleTransformResult(treeItem.valueTransformer.transform(this.buildTransformContext(this.currentContextCtor, newValue, this.currentContextProperty)));
                }
                if (componentResult.isNew) {
                    componentResult.component.setDefaultValue(newValue);
                    componentResult.component.reset();
                }
                else {
                    componentResult.component.setValue(newValue);
                }
            }
        }
        finally {
            this.ignoreFormUpdate = false;
        }
    };
    /**
     * Try to get a form component from a group and create it if not found.
     */
    FormModelBinder.prototype.getOrCreateFormComponent = function (formContainer, modelContainer, treeItem, property) {
        try {
            return { component: formContainer.get(property), isNew: false };
        }
        catch (e) {
            if (!(e instanceof componentNotFound_exception.ComponentNotFoundException)) {
                throw e;
            }
            var component = this.handleTransformResult(treeItem.transformer.transform(this.buildTransformContext(this.currentContextCtor, isObject.isObject(modelContainer) ? modelContainer[property] : null, this.currentContextProperty)));
            if (!component) {
                return null;
            }
            formContainer.set(property, component);
            return { component: component, isNew: true };
        }
    };
    /**
     * Called when a change on the model is detected.
     */
    FormModelBinder.prototype.onModelChange = function (event) {
        var _this = this;
        if (this.ignoreModelUpdate) {
            return;
        }
        if (event.mutation.type === index.MutationType.Delete) {
            try {
                this.form.get(event.mutation.path).detach();
            }
            catch (e) { }
            return;
        }
        var contextsDepth = 0;
        try {
            var pathParts = event.mutation.path.split('/');
            var formContainer_1 = this.form;
            var modelContainer_1 = this.model;
            var treeContainer_1 = this.getModelTransformersTree(this.model.constructor);
            var pushContext_1 = function (ctor, property, value) { return ++contextsDepth && _this.pushContext(ctor, property, value); };
            var i = void 0;
            for (i = 1; i < pathParts.length; ++i) {
                var treeChildName = treeContainer_1.transformer.type === contants.FormArrayTransformerSymbol ? '*' : pathParts[i];
                if (treeChildName === '*' && event.mutation.type === index.MutationType.Insert && isArray.isArray(event.mutation.target)) {
                    pushContext_1(this.currentContextCtor, pathParts[i - 1], modelContainer_1);
                    continue;
                }
                treeContainer_1 = treeContainer_1.children[treeChildName];
                if (isUndefined.isUndefined(treeContainer_1)) {
                    return;
                }
                if (i > 1) {
                    formContainer_1 = formContainer_1.get(pathParts[i - 1]);
                    modelContainer_1 = modelContainer_1[pathParts[i - 1]];
                }
                if (treeContainer_1.transformer.type === contants.FormObjectTransformerSymbol) {
                    pushContext_1(treeContainer_1.ctor, pathParts[i], modelContainer_1);
                }
                // Required if a change is made to an object used as value in a FormControl.
                // If we do nothing the "path" will lead the binder deep inside the value of the FormControl,
                // which is not a valid form tree, so we must stop when a FormControl is reached.
                if (treeContainer_1.transformer.type === contants.FormControlTransformerSymbol) {
                    pushContext_1(this.currentContextCtor, pathParts[i], modelContainer_1);
                    break;
                }
            }
            if (!isString.isString(this.currentContextProperty)) {
                return;
            }
            this.mutateForm(function () {
                var cp = _this.currentContextProperty;
                if (treeContainer_1.transformer.type === contants.FormControlTransformerSymbol) {
                    _this.syncFormControlWithModelAttribute(treeContainer_1, formContainer_1, modelContainer_1, cp);
                }
                else if (treeContainer_1.transformer.type === contants.FormObjectTransformerSymbol) {
                    pushContext_1(modelContainer_1.constructor, cp, modelContainer_1);
                    _this.syncFormObjectWithModelAttribute(treeContainer_1, formContainer_1, modelContainer_1, cp);
                }
                else if (treeContainer_1.transformer.type === contants.FormArrayTransformerSymbol) {
                    _this.syncFormArrayWithModelAttribute(treeContainer_1, formContainer_1, modelContainer_1, cp);
                }
            });
        }
        finally {
            this.popContext(contextsDepth);
        }
    };
    /**
     * Called when a value change in the form, at any level.
     */
    FormModelBinder.prototype.onFormValueChange = function (event) {
        if (this.ignoreFormUpdate) {
            return;
        }
        try {
            this.ignoreModelUpdate = true;
            //
            // The event will trigger a lot more because when a change occurs all parent components will emit their own event.
            // But we're only interested about changes on form controls.
            //
            // All mutations on the structure of the form MUST be performed on the model, that will reflect back
            // on the form. The form is only allowed to change values, not the hierarchy of components.
            //
            if (!(event.source instanceof formControl.FormControl)) {
                return;
            }
            var pathParts = event.source.path.split('/');
            var modelContainer = this.model;
            for (var i = 1; i < pathParts.length - 1; ++i) {
                if (!isObject.isObject(modelContainer[pathParts[i]])) {
                    return;
                }
                modelContainer = modelContainer[pathParts[i]];
            }
            if (isObject.isObject(modelContainer)) {
                var propName = pathParts[pathParts.length - 1];
                var tree = this.getModelTransformersTree(modelContainer.constructor);
                if (!isUndefined.isUndefined(tree.children[propName])) {
                    modelContainer[propName] = this.handleTransformResult(tree.children[propName].transformer.transformInverse(new transformContext.TransformContext(null, form.FormTransformerSymbol, modelContainer.constructor, event.source, propName)));
                }
                else {
                    modelContainer[propName] = event.newValue;
                }
            }
        }
        finally {
            this.ignoreModelUpdate = false;
        }
    };
    /**
     * Event trap for mutations impacting the structure of the form.
     */
    FormModelBinder.prototype.throwOnUnauthorizedFormMutation = function () {
        if (!this.canMutateForm) {
            throw new usage_exception.UsageException('Form mutations must be done through the model when bound.');
        }
    };
    /**
     * Take a raw Transform result and ensure it is synchronise and not in error.
     * Throw an exception otherwise.
     */
    FormModelBinder.prototype.handleTransformResult = function (result) {
        if (result.promise !== null) {
            throw new usage_exception.UsageException('Asynchronous transformers are not supported by the FormModelBinder.');
        }
        if (result.error) {
            throw exception_factory.ExceptionFactory.EnsureException(result.errorDetail);
        }
        return result.result;
    };
    /**
     * Get the whole tree of form transformers applicable to a model in a format easier
     * to manipulate in the form model binder.
     */
    FormModelBinder.prototype.getModelTransformersTree = function (ctor, stack) {
        if (stack === void 0) { stack = []; }
        var tree = this.transformersTrees.get(ctor);
        if (!isUndefined.isUndefined(tree)) {
            return tree;
        }
        // The top level is always a FormObject.
        var output = {
            ctor: ctor,
            transformer: formObject.FormObject(),
            modelFactory: this.modelMetadata.getFactory(ctor),
            children: {}
        };
        var transformersMap = this.transformMetadata.getAll(ctor, form.FormTransformerSymbol);
        for (var _i = 0, _a = Object.keys(transformersMap); _i < _a.length; _i++) {
            var property = _a[_i];
            var transformer = utils.ensureCompleteTransformer(!utils$1.isFormTransformer(transformersMap[property]) ?
                formControl$1.FormControl(transformersMap[property]) :
                transformersMap[property]);
            output.children[property] = { transformer: transformer };
            var propertyTree = output.children[property];
            // ForArray transformers are necessarily contiguous and first in line
            // because no other form transformer can take one in.
            // So by iterating over whatever number of nested FormArray we have
            // we ensure that we will end up with another type of form transformer (so FormObject or FormControl).
            while (transformer.type === contants.FormArrayTransformerSymbol) {
                propertyTree.transformer = transformer;
                // '*' is used as a wildcard to replace the numeric index of the array.
                // Because the processing will always be the same for each item of a FormArray.
                propertyTree.children = { '*': {} };
                propertyTree = propertyTree.children['*'];
                // Go down the tree until we are out of FormArrays.
                transformer = transformer.getChild();
                propertyTree.transformer = transformer;
            }
            // In case we are dealing with a FormObject transformer, resolve the relation
            // and make a recursive call.
            if (transformer.type === contants.FormObjectTransformerSymbol) {
                var relation = this.modelMetadata.getRelation(ctor, property);
                if (relation === null) {
                    throw new usage_exception.UsageException("You must define a relation for the \"".concat(property, "\" attribute\n                        of \"").concat(ctor.name, "\" if you set a \"FormObject\" transformer on it."));
                }
                if (stack.indexOf(relation) < 0) {
                    stack.push(relation);
                    Object.assign(propertyTree, this.getModelTransformersTree(relation, stack));
                    stack.pop();
                }
            }
            else {
                // If we arrive here we are guaranteed to be in the presence of FormControl transformer.
                // This type of transformer only allow a value transformer as child.
                propertyTree.valueTransformer = transformer.getChild();
            }
        }
        return output;
    };
    /**
     * Push context data on the stack.
     */
    FormModelBinder.prototype.pushContext = function (ctor, property, value) {
        this.contextStack.push({ ctor: ctor, property: property, value: value });
    };
    /**
     * Pop one or multiple context data from the stack.
     */
    FormModelBinder.prototype.popContext = function (depth) {
        if (depth === void 0) { depth = 1; }
        if (depth <= this.contextStack.length) {
            this.contextStack.splice(this.contextStack.length - depth, depth);
        }
        else {
            this.contextStack = [];
        }
    };
    /**
     * Build a new TransformContext while considering the contexts stack.
     */
    FormModelBinder.prototype.buildTransformContext = function (ctor, value, property, extras) {
        var parentContext = new transformContext.TransformContext(null, form.FormTransformerSymbol, this.model.constructor, this.model, null);
        for (var i = 0; i < this.contextStack.length - 1; ++i) {
            parentContext = new transformContext.TransformContext(parentContext, form.FormTransformerSymbol, this.contextStack[i].ctor, this.contextStack[i].value[this.contextStack[i].property], this.contextStack[i].property);
        }
        return new transformContext.TransformContext(parentContext, form.FormTransformerSymbol, ctor, value, property, extras);
    };
    /**
     * A wrapper that will authorize form mutations for the callback.
     */
    FormModelBinder.prototype.mutateForm = function (cb) {
        try {
            this.canMutateForm = true;
            cb();
        }
        finally {
            this.canMutateForm = false;
        }
    };
    FormModelBinder = _tslib.__decorate([
        module_decorator.Module(),
        _tslib.__param(0, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__param(1, inject_decorator.Inject(modelTransformMetadata_service.ModelTransformMetadataService)),
        _tslib.__param(2, inject_decorator.Inject(transform_service.TransformService)),
        _tslib.__param(3, inject_decorator.Inject(modelWatcher_service.ModelWatcherService)),
        _tslib.__metadata("design:paramtypes", [modelMetadata_service.ModelMetadataService,
            modelTransformMetadata_service.ModelTransformMetadataService,
            transform_service.TransformService,
            modelWatcher_service.ModelWatcherService])
    ], FormModelBinder);
    return FormModelBinder;
}());

exports.FormModelBinder = FormModelBinder;
