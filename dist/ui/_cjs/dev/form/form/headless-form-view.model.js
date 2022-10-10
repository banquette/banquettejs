/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var remote_exception = require('@banquette/api/_cjs/dev/exception/remote.exception');
var api = require('@banquette/api/_cjs/dev/transformer/api');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher = require('@banquette/event/_cjs/dev/event-dispatcher');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var constant$1 = require('@banquette/form/_cjs/dev/constant');
var componentNotFound_exception = require('@banquette/form/_cjs/dev/exception/component-not-found.exception');
var formControl = require('@banquette/form/_cjs/dev/form-control');
var formObject = require('@banquette/form/_cjs/dev/form-object');
var httpResponse = require('@banquette/http/_cjs/dev/http-response');
var formModelBinder = require('@banquette/model-form/_cjs/dev/form-model-binder');
var form = require('@banquette/model-form/_cjs/dev/transformer/root/form');
var modelMetadata_service = require('@banquette/model/_cjs/dev/model-metadata.service');
var transform_service = require('@banquette/model/_cjs/dev/transformer/transform.service');
var pojo = require('@banquette/model/_cjs/dev/transformer/type/root/pojo');
var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');
var makeReassignable = require('@banquette/utils-misc/_cjs/dev/make-reassignable');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var extend = require('@banquette/utils-object/_cjs/dev/extend');
var filterWithMask = require('@banquette/utils-object/_cjs/dev/filter-with-mask');
var getObjectValue = require('@banquette/utils-object/_cjs/dev/get-object-value');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isPromiseLike = require('@banquette/utils-type/_cjs/dev/is-promise-like');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var remote_module = require('../../misc/remote/remote.module.js');
var constant = require('./constant.js');
var afterBindModel_eventArg = require('./event/after-bind-model.event-arg.js');
var afterValidate_eventArg = require('./event/after-validate.event-arg.js');
var beforeBindModel_eventArg = require('./event/before-bind-model.event-arg.js');
var beforeValidate_eventArg = require('./event/before-validate.event-arg.js');
var actionError_eventArg = require('./event/action-error.event-arg.js');
var afterPersist_eventArg = require('./event/after-persist.event-arg.js');
var afterRemotePersist_eventArg = require('./event/after-remote-persist.event-arg.js');
var beforePersist_eventArg = require('./event/before-persist.event-arg.js');
var beforeLoad_eventArg = require('./event/before-load.event-arg.js');
var remoteValidation_exception = require('./exception/remote-validation.exception.js');

var HeadlessFormViewModel = /** @class */ (function () {
    function HeadlessFormViewModel() {
        var _this = this;
        /**
         * The actual form object being edited.
         */
        this.form = new formObject.FormObject();
        /**
         * The form model binder (if a model is defined).
         */
        this.binder = null;
        /**
         * Instance of the mode on edition, if there is one.
         */
        this.modelInstance = null;
        /**
         * Optional type of the model to bind the form with.
         */
        this._modelType = null;
        /**
         * An object holding the default values of the form.
         * Can be a POJO or a model.
         *
         * The object will not be modified by the form.
         */
        this._loadData = null;
        /**
         * Remote modules.
         */
        this.loadRemote = new remote_module.RemoteModule();
        this.persistRemote = new remote_module.RemoteModule();
        this.unsubscribeMethods = [];
        /**
         * A map of controls indexed by their path in the form.
         * This is to avoid creating a new control for the same path if the Vue component is destroyed and re-created.
         */
        this.createdControlsMap = {};
        this.eventDispatcher = new eventDispatcher.EventDispatcher();
        /**
         * Load default values into the form and reset it.
         */
        this.load = (function () {
            var firstLoad = true;
            var queued = false;
            var current = 0;
            var steps = [proxy.proxy(_this.loadRemotely, _this), proxy.proxy(_this.loadLocally, _this)];
            var loadNext = function () {
                if (current >= steps.length) {
                    if (queued) {
                        current = 0;
                        queued = false;
                        _this.load();
                        return;
                    }
                    if (_this.modelInstance !== null) {
                        _this.modelInstance = makeReassignable.makeReassignable(_this.modelInstance);
                    }
                    _this.form.enable();
                    _this.form.reset();
                    _this.bindModel();
                    _this.updateState(constant.Action.Load, constant.Status.Success);
                    _this.eventDispatcher.dispatchWithErrorHandling(constant.HeadlessFormViewModelEvents.LoadSuccess);
                    return;
                }
                try {
                    var result = steps[current++]();
                    if (isPromiseLike.isPromiseLike(result)) {
                        result.then(function () { return loadNext(); }, function (reason) {
                            _this.setError(constant.ErrorType.Load, reason);
                        });
                    }
                    else {
                        loadNext();
                    }
                }
                catch (e) {
                    _this.setError(constant.ErrorType.Load, e);
                }
            };
            return function () {
                if (!firstLoad && _this.is(constant.Action.Load, constant.Status.Working)) {
                    queued = true;
                    return;
                }
                firstLoad = false;
                _this.form.disable();
                _this.updateState(constant.Action.Load, constant.Status.Working);
                var dispatchResult = _this.eventDispatcher.dispatchWithErrorHandling(constant.HeadlessFormViewModelEvents.BeforeLoad, new beforeLoad_eventArg.BeforeLoadEventArg(_this));
                if (dispatchResult.promise) {
                    dispatchResult.promise.then(loadNext);
                }
                else {
                    loadNext();
                }
            };
        })();
        /**
         * Only inject the service on demand.
         */
        this.getModelMetadata = (function () {
            var service = null;
            return function () {
                if (!service) {
                    service = injector.Injector.Get(modelMetadata_service.ModelMetadataService);
                }
                return service;
            };
        })();
        /**
         * Only inject the service on demand.
         */
        this.getTransformService = (function () {
            var service = null;
            return function () {
                if (!service) {
                    service = injector.Injector.Get(transform_service.TransformService);
                }
                return service;
            };
        })();
        this.setViewData({
            errorsMap: {},
            getControl: proxy.proxy(this.getControl, this),
            getControlErrors: proxy.proxy(this.getControlErrors, this)
        });
        this.updateState(constant.Action.Load, constant.Status.Working);
        this.unsubscribeMethods.push(this.loadRemote.onConfigurationChange(function () {
            if (!_this.is(constant.Action.Load, constant.Status.Working)) {
                _this.load();
            }
        }));
        this.unsubscribeMethods.push(this.form.onStateChanged(function (event) {
            if (event.state === constant$1.BasicState.Validating && !event.newValue && _this.form.valid) {
                _this.removeError(constant.ErrorType.Validate);
            }
            _this.viewData.form[event.state] = event.newValue;
        }));
        this.unsubscribeMethods.push(this.form.onValidationStart(function (event) {
            // Wrap the event for name normalization.
            var dispatchResult = _this.eventDispatcher.dispatchWithErrorHandling(constant.HeadlessFormViewModelEvents.BeforeValidate, new beforeValidate_eventArg.BeforeValidateEventArg(event.source));
            if (dispatchResult.defaultPrevented) {
                event.preventDefault();
            }
        }, 0, false));
        this.unsubscribeMethods.push(this.form.onValidationEnd(function (event) {
            _this.eventDispatcher.dispatchWithErrorHandling(constant.HeadlessFormViewModelEvents.AfterValidate, new afterValidate_eventArg.AfterValidateEventArg(event.source, event.result));
        }, 0, false));
        this.unsubscribeMethods.push(this.form.onValueChanged(function (event) {
            _this.viewData.form.value = event.newValue;
        }));
    }
    Object.defineProperty(HeadlessFormViewModel.prototype, "modelType", {
        get: function () {
            return this._modelType;
        },
        set: function (value) {
            var resolved = value !== null ? this.getModelMetadata().resolveAlias(value) : null;
            var requiresLoad = this._modelType !== resolved;
            this._modelType = resolved;
            if (requiresLoad && !this.is(constant.Action.Load, constant.Status.Working)) {
                this.load();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeadlessFormViewModel.prototype, "loadData", {
        get: function () {
            return this._loadData;
        },
        set: function (value) {
            var requiresLoad = !areEqual.areEqual(this._loadData, value);
            this._loadData = value;
            if (requiresLoad && !this.is(constant.Action.Load, constant.Status.Working)) {
                this.load();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    HeadlessFormViewModel.prototype.setViewData = function (viewData) {
        var that = this;
        this.viewData = extend.extend(viewData, {
            form: {
                invalid: false,
                notValidated: true,
                validating: false,
                busy: false,
                disabled: true,
                dirty: false,
                touched: false,
                changed: false,
                value: undefined,
                // Inverse states, always read-only.
                get valid() { return !this.invalid; },
                get validated() { return !this.notValidated; },
                get notValidating() { return !this.validated; },
                get validatedAndValid() { return this.validated && this.valid; },
                get pristine() { return !this.dirty; },
                get untouched() { return !this.touched; },
                get unchanged() { return !this.changed; },
                get notBusy() { return !this.busy; },
                get enabled() { return !this.disabled; },
                get errorsDeepMap() { return that.form.errorsDeepMap; }
            }
        });
    };
    /**
     * Cleanup before the view model is destroyed.
     */
    HeadlessFormViewModel.prototype.dispose = function () {
        for (var _i = 0, _a = this.unsubscribeMethods; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.unsubscribeMethods = [];
        this.createdControlsMap = {};
    };
    /**
     * Try to get a control, and create it if missing.
     * Creating a control is only available if the form is not bound to a model.
     */
    HeadlessFormViewModel.prototype.getControl = function (path, failIfMissing) {
        try {
            return this.form.get(path);
        }
        catch (e) {
            if (e instanceof componentNotFound_exception.ComponentNotFoundException) {
                // The structure of a form cannot be mutated when bound to a model.
                if (this.modelType) {
                    // If the user gave no value for `failIfMissing`, put it to `true` if the form is not loading.
                    // If the form is loading and the user didn't use the `loading` slot, it's normal to have errors.
                    if (isUndefined.isUndefined(failIfMissing)) {
                        failIfMissing = !this.is(constant.Action.Load, constant.Status.Working);
                    }
                    if (failIfMissing) {
                        this.setError(constant.ErrorType.Internal, new usage_exception.UsageException("No component has been found at path \"".concat(path, "\" ") +
                            "and cannot be created because the form is bound to a model."));
                    }
                    return null;
                }
                if (isUndefined.isUndefined(this.createdControlsMap[path])) {
                    var defaultValue = isObject.isObjectLiteral(this._loadData) ? getObjectValue.getObjectValue(this._loadData, path.split('/')) : undefined;
                    this.createdControlsMap[path] = new formControl.FormControl(defaultValue);
                }
                this.form.set(path, this.createdControlsMap[path]);
                return this.createdControlsMap[path];
            }
            throw e;
        }
    };
    /**
     * A `shorthand` for `form.errorsDeepMap[path]` that ensures an array is returned.
     */
    HeadlessFormViewModel.prototype.getControlErrors = function (path) {
        return ensureArray.ensureArray(this.viewData.form.errorsDeepMap[path]);
    };
    /**
     * Force the validation of the form and submit it if everything is valid.
     */
    HeadlessFormViewModel.prototype.submit = function () {
        var _this = this;
        if (this.is(null, constant.Status.Working)) {
            return;
        }
        var doSubmit = function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
            var payload, dispatchResult, response, e_1, maybeValidationException;
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validate()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        payload = this.modelInstance ? this.modelInstance : this.form.value;
                        dispatchResult = this.eventDispatcher.dispatchWithErrorHandling(constant.HeadlessFormViewModelEvents.BeforePersist, new beforePersist_eventArg.BeforePersistEventArg(payload));
                        if (!dispatchResult.promise) { return [3 /*break*/, 3]; }
                        return [4 /*yield*/, dispatchResult.promise];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (dispatchResult.error || dispatchResult.defaultPrevented) {
                            return [2 /*return*/];
                        }
                        if (!this.persistRemote.isApplicable) { return [3 /*break*/, 8]; }
                        this.form.disable();
                        this.updateState(constant.Action.Persist, constant.Status.Working);
                        response = this.persistRemote.send(this.modelInstance ? this.modelInstance : this.form.value, {}, {}, [constant.FormTag, constant.FormPersistTag]);
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, response.promise];
                    case 5:
                        _a.sent();
                        this.updateState(constant.Action.Persist, constant.Status.Success);
                        this.eventDispatcher.dispatch(constant.HeadlessFormViewModelEvents.PersistSuccess, new afterRemotePersist_eventArg.AfterRemotePersistEventArg(response, payload));
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        if (response.isError) {
                            maybeValidationException = remoteValidation_exception.RemoteValidationException.CreateFromUnknownInput(response.result);
                            if (maybeValidationException !== null) {
                                response.result = maybeValidationException;
                            }
                            if (response.result instanceof remoteValidation_exception.RemoteValidationException) {
                                this.setError(constant.ErrorType.Validate, null);
                                this.bindPersistErrorsToForm(response.result);
                            }
                            else {
                                throw e_1;
                            }
                        }
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.eventDispatcher.dispatch(constant.HeadlessFormViewModelEvents.PersistSuccess, new afterPersist_eventArg.AfterPersistEventArg(payload));
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        doSubmit().catch(function (reason) {
            if (reason instanceof httpResponse.HttpResponse) {
                reason = reason.result instanceof remote_exception.RemoteException ? reason.result : reason.error;
            }
            _this.setError(constant.ErrorType.Persist, reason);
            _this.updateState(constant.Action.Persist, constant.Status.Failure);
            console.error(reason);
        }).finally(function () {
            _this.form.enable();
        });
    };
    /**
     * Force the validation of the form, but doesn't submit it.
     */
    HeadlessFormViewModel.prototype.validate = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.updateState(constant.Action.Validate, constant.Status.Working);
                        return [4 /*yield*/, this.form.validate()];
                    case 1:
                        if (!(_a.sent())) {
                            this.updateState(constant.Action.Validate, constant.Status.Failure);
                            this.setError(constant.ErrorType.Validate, null);
                            return [2 /*return*/, false];
                        }
                        this.updateState(constant.Action.Validate, constant.Status.Success);
                        this.removeError(constant.ErrorType.Validate);
                        this.form.clearErrorsDeep();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Test if the form is in a certain state.
     */
    HeadlessFormViewModel.prototype.is = function (action, status) {
        if (status === void 0) { status = null; }
        // If we only test the status and don't care about the action.
        if (action === null) {
            if (status === null) {
                throw new usage_exception.UsageException('You must define at least an action or a status to test.');
            }
            return (this.viewData.action & status) === status;
        }
        // Otherwise, test the action first.
        var isTrue = (this.viewData.action & action) === action;
        // If it matches and a status is also defined.
        if (isTrue && status !== null) {
            // Because the action matches, that's the status that will determine the result.
            return (this.viewData.action & status) === status;
        }
        // Else the action match is the result.
        return isTrue;
    };
    /**
     * Update the status of the component.
     */
    HeadlessFormViewModel.prototype.updateState = function (action, status) {
        if (status === void 0) { status = null; }
        var newAction = action;
        if (status !== null) {
            newAction |= status;
        }
        this.viewData.action = newAction; // Avoid writing into "action" multiple times.
        this.viewData.loading = this.is(constant.Action.Load, constant.Status.Working);
        this.viewData.loadError = this.is(constant.Action.Load, constant.Status.Failure);
        this.viewData.loadSuccess = this.is(constant.Action.Load, constant.Status.Success);
        this.viewData.persisting = this.is(constant.Action.Persist, constant.Status.Working);
        this.viewData.persistError = this.is(constant.Action.Persist, constant.Status.Failure);
        this.viewData.persistSuccess = this.is(constant.Action.Persist, constant.Status.Success);
        this.viewData.validating = this.is(constant.Action.Validate, constant.Status.Working);
        this.viewData.validateError = this.is(constant.Action.Validate, constant.Status.Failure);
        this.viewData.validateSuccess = this.is(constant.Action.Validate, constant.Status.Success);
        if (status !== constant.Status.Failure) {
            this.viewData.errorsMap = {};
        }
    };
    /**
     * By notified when the form starts loading.
     */
    HeadlessFormViewModel.prototype.onBeforeLoad = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.BeforeLoad, cb);
    };
    /**
     * By notified when the form finishes its loading with success.
     */
    HeadlessFormViewModel.prototype.onLoadSuccess = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.LoadSuccess, cb);
    };
    /**
     * By notified when the form fails to load.
     */
    HeadlessFormViewModel.prototype.onLoadError = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.LoadError, cb);
    };
    /**
     * Emitted each time submit() is called (even if no remote target is defined).
     */
    HeadlessFormViewModel.prototype.onBeforePersist = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.BeforePersist, cb);
    };
    /**
     * Triggered after a remote persist succeeded.
     */
    HeadlessFormViewModel.prototype.onPersistSuccess = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.PersistSuccess, cb);
    };
    /**
     * Triggered when a remote persist fails.
     */
    HeadlessFormViewModel.prototype.onPersistError = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.PersistError, cb);
    };
    /**
     * Emitted each time the form validates a control.
     */
    HeadlessFormViewModel.prototype.onBeforeValidate = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.BeforeValidate, cb);
    };
    /**
     * Triggered after a validation succeeded.
     */
    HeadlessFormViewModel.prototype.onAfterValidate = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.AfterValidate, cb);
    };
    /**
     * Triggered when the model is about to be bound to the form.
     */
    HeadlessFormViewModel.prototype.onBeforeBindModel = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.BeforeBindModel, cb);
    };
    /**
     * Triggered when the model has been bound to the form.
     */
    HeadlessFormViewModel.prototype.onAfterBindModel = function (cb) {
        return this.eventDispatcher.subscribe(constant.HeadlessFormViewModelEvents.AfterBindModel, cb);
    };
    /**
     * Make the form on error.
     */
    HeadlessFormViewModel.prototype.setError = function (errorType, reason) {
        reason = reason !== null ? exception_factory.ExceptionFactory.EnsureException(reason) : null;
        if (reason instanceof remote_exception.RemoteException && reason.slug === 'remote') {
            reason.slug = errorType;
        }
        var errorMapIndex = reason !== null ? reason.slug : errorType;
        this.viewData.errorsMap[errorMapIndex] = reason !== null ? reason.message : null;
        this.updateState(constant.ErrorTypeStatusMap[errorType], constant.Status.Failure);
        var eventType = constant.ErrorTypeEventMap[errorType];
        if (eventType !== null) {
            this.eventDispatcher.dispatch(eventType, new actionError_eventArg.ActionErrorEventArg(reason));
        }
        console.error(reason);
    };
    /**
     * Remove a type of error.
     */
    HeadlessFormViewModel.prototype.removeError = function (error) {
        if (!isUndefined.isUndefined(this.viewData.errorsMap[error])) {
            delete this.viewData.errorsMap[error];
        }
    };
    /**
     * Remove all errors.
     */
    HeadlessFormViewModel.prototype.clearErrors = function () {
        this.viewData.errorsMap = {};
    };
    /**
     * Associate the model instance and the form through a model binder, if applicable.
     */
    HeadlessFormViewModel.prototype.bindModel = function () {
        if (this._modelType && !this.binder && this.modelInstance) {
            this.eventDispatcher.dispatchWithErrorHandling(constant.HeadlessFormViewModelEvents.BeforeBindModel, new beforeBindModel_eventArg.BeforeBindModelEventArg(this.modelInstance));
            var binder = injector.Injector.Get(formModelBinder.FormModelBinder);
            this.modelInstance = binder.bind(this.modelInstance, this.form);
            this.binder = binder;
            this.eventDispatcher.dispatchWithErrorHandling(constant.HeadlessFormViewModelEvents.AfterBindModel, new afterBindModel_eventArg.AfterBindModelEventArg(this.modelInstance, binder));
        }
    };
    /**
     * Fetch remote values that will be set into the form,
     * if the configuration enables it.
     */
    HeadlessFormViewModel.prototype.loadRemotely = function () {
        var _this = this;
        if (!this.loadRemote.isApplicable) {
            return;
        }
        return new Promise(function (resolve, reject) {
            _this.loadRemote.send(null, {}, {}, [constant.FormTag, constant.FormLoadTag]).promise.then(function (response) {
                var baseError = "The ajax request didn't result with the expected value. {detail}" +
                    "You can intercept the response by listening to a \"HttpEvents.BeforeResponse\" event with the \"FormLoadTag\" tag " +
                    "to do some custom processing.";
                if (_this._modelType) {
                    if (!_this.isValidModelInstance(response.result)) {
                        if (isObject.isObject(response.result)) {
                            _this.getTransformService().transformInverse(response.result, _this._modelType, api.ApiTransformerSymbol).onReady().then(function (transformResult) {
                                _this.modelInstance = transformResult.result;
                                resolve();
                            }, reject);
                        }
                        else {
                            reject(new usage_exception.UsageException(baseError.replace('{detail}', "An instance of \"".concat(String(_this.modelType), "\" or an object to transform is expected."))));
                        }
                    }
                    else {
                        _this.modelInstance = response.result;
                        resolve();
                    }
                }
                else if (isObject.isObject(response.result)) {
                    _this.form.setDefaultValue(response.result);
                    resolve();
                }
                else {
                    reject(new usage_exception.UsageException(baseError.replace('{detail}', 'An object is expected.')));
                }
            });
        });
    };
    /**
     * Insert values defined in the "loadData" attribute into the form.
     */
    HeadlessFormViewModel.prototype.loadLocally = function () {
        var _this = this;
        if (!isObject.isObject(this._loadData)) {
            return;
        }
        if (!this._modelType) {
            // If we don't have a model, simply set the values in the form.
            this.form.setDefaultValue(this._loadData);
            return;
        }
        var assignModelData = function (model) {
            // If we don't have a model instance yet, simply set it.
            if (!_this.modelInstance) {
                _this.modelInstance = model;
                return;
            }
            var assignFormTransformResult = function (formTransformResult) {
                if (formTransformResult.result instanceof formObject.FormObject) {
                    // Make the controls concrete the the root value is set.
                    formTransformResult.result.getByPattern('**').markAsConcrete();
                    if (isObject.isObject(formTransformResult.result)) {
                        // Ensure only the keys defined in `loadData` are kept from the output of the form.
                        var values = filterWithMask.filterWithMask(formTransformResult.result.value, _this._loadData);
                        // Assign the result as default.
                        _this.form.setDefaultValue(values);
                    }
                }
            };
            // Otherwise, if we already have a model defined, we can't create a new one.
            // The easiest way to merge the two models is to convert the input model into a form,
            // make it concrete and then merge the values of the form.
            var formTransformResult = _this.getTransformService().transform(model, form.FormTransformerSymbol);
            if (formTransformResult.promise) {
                return formTransformResult.promise.then(assignFormTransformResult);
            }
            else {
                assignFormTransformResult(formTransformResult);
            }
        };
        // If loadData is not an instance of the expected type of model
        // we assume it's a POJO, so we need to convert back to a model.
        if (!this.isValidModelInstance(this._loadData)) {
            if (!isObject.isObject(this._loadData)) {
                return;
            }
            var pojoTransformResult_1 = this.getTransformService().transformInverse(this._loadData, this._modelType, pojo.PojoTransformerSymbol);
            if (pojoTransformResult_1.promise) {
                return new Promise(function (resolve, reject) {
                    pojoTransformResult_1.promise.then(function () { return resolve(); }, reject);
                });
            }
            return assignModelData(pojoTransformResult_1.result);
        }
        return assignModelData(this._loadData);
    };
    /**
     * Check if the input value matches the expected model type.
     */
    HeadlessFormViewModel.prototype.isValidModelInstance = function (value) {
        if (!this.modelType) {
            return true;
        }
        var ctor = this.getModelMetadata().resolveAlias(this.modelType);
        return value instanceof ctor;
    };
    /**
     * Gets a collection of violations from the server and binds them to the form.
     */
    HeadlessFormViewModel.prototype.bindPersistErrorsToForm = function (validationException) {
        // validate() is here to ensure all concrete controls are marked
        // as `validated`, so errors can appear.
        // this.form.validate();
        for (var _i = 0, _a = validationException.violations; _i < _a.length; _i++) {
            var violation = _a[_i];
            this.form.addChildError(violation.path, {
                type: violation.type,
                message: violation.message
            });
        }
    };
    return HeadlessFormViewModel;
}());

exports.HeadlessFormViewModel = HeadlessFormViewModel;
