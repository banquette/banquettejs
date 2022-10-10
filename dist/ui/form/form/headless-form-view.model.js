/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __awaiter, __generator } from '../../_virtual/_tslib.js';
import { RemoteException } from '@banquette/api/exception/remote.exception';
import { ApiTransformerSymbol } from '@banquette/api/transformer/api';
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcher } from '@banquette/event/event-dispatcher';
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { UsageException } from '@banquette/exception/usage.exception';
import { BasicState } from '@banquette/form/constant';
import { ComponentNotFoundException } from '@banquette/form/exception/component-not-found.exception';
import { FormControl } from '@banquette/form/form-control';
import { FormObject } from '@banquette/form/form-object';
import { HttpResponse } from '@banquette/http/http-response';
import { FormModelBinder } from '@banquette/model-form/form-model-binder';
import { FormTransformerSymbol } from '@banquette/model-form/transformer/root/form';
import { ModelMetadataService } from '@banquette/model/model-metadata.service';
import { TransformService } from '@banquette/model/transformer/transform.service';
import { PojoTransformerSymbol } from '@banquette/model/transformer/type/root/pojo';
import { areEqual } from '@banquette/utils-misc/are-equal';
import { makeReassignable } from '@banquette/utils-misc/make-reassignable';
import { proxy } from '@banquette/utils-misc/proxy';
import { extend } from '@banquette/utils-object/extend';
import { filterWithMask } from '@banquette/utils-object/filter-with-mask';
import { getObjectValue } from '@banquette/utils-object/get-object-value';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isObjectLiteral, isObject } from '@banquette/utils-type/is-object';
import { isPromiseLike } from '@banquette/utils-type/is-promise-like';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { RemoteModule } from '../../misc/remote/remote.module.js';
import { Action, Status, ErrorType, HeadlessFormViewModelEvents, ErrorTypeStatusMap, ErrorTypeEventMap, FormTag, FormLoadTag, FormPersistTag } from './constant.js';
import { AfterBindModelEventArg } from './event/after-bind-model.event-arg.js';
import { AfterValidateEventArg } from './event/after-validate.event-arg.js';
import { BeforeBindModelEventArg } from './event/before-bind-model.event-arg.js';
import { BeforeValidateEventArg } from './event/before-validate.event-arg.js';
import { ActionErrorEventArg } from './event/action-error.event-arg.js';
import { AfterPersistEventArg } from './event/after-persist.event-arg.js';
import { AfterRemotePersistEventArg } from './event/after-remote-persist.event-arg.js';
import { BeforePersistEventArg } from './event/before-persist.event-arg.js';
import { BeforeLoadEventArg } from './event/before-load.event-arg.js';
import { RemoteValidationException } from './exception/remote-validation.exception.js';

var HeadlessFormViewModel = /** @class */ (function () {
    function HeadlessFormViewModel() {
        var _this = this;
        /**
         * The actual form object being edited.
         */
        this.form = new FormObject();
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
        this.loadRemote = new RemoteModule();
        this.persistRemote = new RemoteModule();
        this.unsubscribeMethods = [];
        /**
         * A map of controls indexed by their path in the form.
         * This is to avoid creating a new control for the same path if the Vue component is destroyed and re-created.
         */
        this.createdControlsMap = {};
        this.eventDispatcher = new EventDispatcher();
        /**
         * Load default values into the form and reset it.
         */
        this.load = (function () {
            var firstLoad = true;
            var queued = false;
            var current = 0;
            var steps = [proxy(_this.loadRemotely, _this), proxy(_this.loadLocally, _this)];
            var loadNext = function () {
                if (current >= steps.length) {
                    if (queued) {
                        current = 0;
                        queued = false;
                        _this.load();
                        return;
                    }
                    if (_this.modelInstance !== null) {
                        _this.modelInstance = makeReassignable(_this.modelInstance);
                    }
                    _this.form.enable();
                    _this.form.reset();
                    _this.bindModel();
                    _this.updateState(Action.Load, Status.Success);
                    _this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.LoadSuccess);
                    return;
                }
                try {
                    var result = steps[current++]();
                    if (isPromiseLike(result)) {
                        result.then(function () { return loadNext(); }, function (reason) {
                            _this.setError(ErrorType.Load, reason);
                        });
                    }
                    else {
                        loadNext();
                    }
                }
                catch (e) {
                    _this.setError(ErrorType.Load, e);
                }
            };
            return function () {
                if (!firstLoad && _this.is(Action.Load, Status.Working)) {
                    queued = true;
                    return;
                }
                firstLoad = false;
                _this.form.disable();
                _this.updateState(Action.Load, Status.Working);
                var dispatchResult = _this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.BeforeLoad, new BeforeLoadEventArg(_this));
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
                    service = Injector.Get(ModelMetadataService);
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
                    service = Injector.Get(TransformService);
                }
                return service;
            };
        })();
        this.setViewData({
            errorsMap: {},
            getControl: proxy(this.getControl, this),
            getControlErrors: proxy(this.getControlErrors, this)
        });
        this.updateState(Action.Load, Status.Working);
        this.unsubscribeMethods.push(this.loadRemote.onConfigurationChange(function () {
            if (!_this.is(Action.Load, Status.Working)) {
                _this.load();
            }
        }));
        this.unsubscribeMethods.push(this.form.onStateChanged(function (event) {
            if (event.state === BasicState.Validating && !event.newValue && _this.form.valid) {
                _this.removeError(ErrorType.Validate);
            }
            _this.viewData.form[event.state] = event.newValue;
        }));
        this.unsubscribeMethods.push(this.form.onValidationStart(function (event) {
            // Wrap the event for name normalization.
            var dispatchResult = _this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.BeforeValidate, new BeforeValidateEventArg(event.source));
            if (dispatchResult.defaultPrevented) {
                event.preventDefault();
            }
        }, 0, false));
        this.unsubscribeMethods.push(this.form.onValidationEnd(function (event) {
            _this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.AfterValidate, new AfterValidateEventArg(event.source, event.result));
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
            if (requiresLoad && !this.is(Action.Load, Status.Working)) {
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
            var requiresLoad = !areEqual(this._loadData, value);
            this._loadData = value;
            if (requiresLoad && !this.is(Action.Load, Status.Working)) {
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
        this.viewData = extend(viewData, {
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
            if (e instanceof ComponentNotFoundException) {
                // The structure of a form cannot be mutated when bound to a model.
                if (this.modelType) {
                    // If the user gave no value for `failIfMissing`, put it to `true` if the form is not loading.
                    // If the form is loading and the user didn't use the `loading` slot, it's normal to have errors.
                    if (isUndefined(failIfMissing)) {
                        failIfMissing = !this.is(Action.Load, Status.Working);
                    }
                    if (failIfMissing) {
                        this.setError(ErrorType.Internal, new UsageException("No component has been found at path \"".concat(path, "\" ") +
                            "and cannot be created because the form is bound to a model."));
                    }
                    return null;
                }
                if (isUndefined(this.createdControlsMap[path])) {
                    var defaultValue = isObjectLiteral(this._loadData) ? getObjectValue(this._loadData, path.split('/')) : undefined;
                    this.createdControlsMap[path] = new FormControl(defaultValue);
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
        return ensureArray(this.viewData.form.errorsDeepMap[path]);
    };
    /**
     * Force the validation of the form and submit it if everything is valid.
     */
    HeadlessFormViewModel.prototype.submit = function () {
        var _this = this;
        if (this.is(null, Status.Working)) {
            return;
        }
        var doSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
            var payload, dispatchResult, response, e_1, maybeValidationException;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validate()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        payload = this.modelInstance ? this.modelInstance : this.form.value;
                        dispatchResult = this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.BeforePersist, new BeforePersistEventArg(payload));
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
                        this.updateState(Action.Persist, Status.Working);
                        response = this.persistRemote.send(this.modelInstance ? this.modelInstance : this.form.value, {}, {}, [FormTag, FormPersistTag]);
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, response.promise];
                    case 5:
                        _a.sent();
                        this.updateState(Action.Persist, Status.Success);
                        this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.PersistSuccess, new AfterRemotePersistEventArg(response, payload));
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        if (response.isError) {
                            maybeValidationException = RemoteValidationException.CreateFromUnknownInput(response.result);
                            if (maybeValidationException !== null) {
                                response.result = maybeValidationException;
                            }
                            if (response.result instanceof RemoteValidationException) {
                                this.setError(ErrorType.Validate, null);
                                this.bindPersistErrorsToForm(response.result);
                            }
                            else {
                                throw e_1;
                            }
                        }
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.PersistSuccess, new AfterPersistEventArg(payload));
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        doSubmit().catch(function (reason) {
            if (reason instanceof HttpResponse) {
                reason = reason.result instanceof RemoteException ? reason.result : reason.error;
            }
            _this.setError(ErrorType.Persist, reason);
            _this.updateState(Action.Persist, Status.Failure);
            console.error(reason);
        }).finally(function () {
            _this.form.enable();
        });
    };
    /**
     * Force the validation of the form, but doesn't submit it.
     */
    HeadlessFormViewModel.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.updateState(Action.Validate, Status.Working);
                        return [4 /*yield*/, this.form.validate()];
                    case 1:
                        if (!(_a.sent())) {
                            this.updateState(Action.Validate, Status.Failure);
                            this.setError(ErrorType.Validate, null);
                            return [2 /*return*/, false];
                        }
                        this.updateState(Action.Validate, Status.Success);
                        this.removeError(ErrorType.Validate);
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
                throw new UsageException('You must define at least an action or a status to test.');
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
        this.viewData.loading = this.is(Action.Load, Status.Working);
        this.viewData.loadError = this.is(Action.Load, Status.Failure);
        this.viewData.loadSuccess = this.is(Action.Load, Status.Success);
        this.viewData.persisting = this.is(Action.Persist, Status.Working);
        this.viewData.persistError = this.is(Action.Persist, Status.Failure);
        this.viewData.persistSuccess = this.is(Action.Persist, Status.Success);
        this.viewData.validating = this.is(Action.Validate, Status.Working);
        this.viewData.validateError = this.is(Action.Validate, Status.Failure);
        this.viewData.validateSuccess = this.is(Action.Validate, Status.Success);
        if (status !== Status.Failure) {
            this.viewData.errorsMap = {};
        }
    };
    /**
     * By notified when the form starts loading.
     */
    HeadlessFormViewModel.prototype.onBeforeLoad = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.BeforeLoad, cb);
    };
    /**
     * By notified when the form finishes its loading with success.
     */
    HeadlessFormViewModel.prototype.onLoadSuccess = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.LoadSuccess, cb);
    };
    /**
     * By notified when the form fails to load.
     */
    HeadlessFormViewModel.prototype.onLoadError = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.LoadError, cb);
    };
    /**
     * Emitted each time submit() is called (even if no remote target is defined).
     */
    HeadlessFormViewModel.prototype.onBeforePersist = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.BeforePersist, cb);
    };
    /**
     * Triggered after a remote persist succeeded.
     */
    HeadlessFormViewModel.prototype.onPersistSuccess = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.PersistSuccess, cb);
    };
    /**
     * Triggered when a remote persist fails.
     */
    HeadlessFormViewModel.prototype.onPersistError = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.PersistError, cb);
    };
    /**
     * Emitted each time the form validates a control.
     */
    HeadlessFormViewModel.prototype.onBeforeValidate = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.BeforeValidate, cb);
    };
    /**
     * Triggered after a validation succeeded.
     */
    HeadlessFormViewModel.prototype.onAfterValidate = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.AfterValidate, cb);
    };
    /**
     * Triggered when the model is about to be bound to the form.
     */
    HeadlessFormViewModel.prototype.onBeforeBindModel = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.BeforeBindModel, cb);
    };
    /**
     * Triggered when the model has been bound to the form.
     */
    HeadlessFormViewModel.prototype.onAfterBindModel = function (cb) {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.AfterBindModel, cb);
    };
    /**
     * Make the form on error.
     */
    HeadlessFormViewModel.prototype.setError = function (errorType, reason) {
        reason = reason !== null ? ExceptionFactory.EnsureException(reason) : null;
        if (reason instanceof RemoteException && reason.slug === 'remote') {
            reason.slug = errorType;
        }
        var errorMapIndex = reason !== null ? reason.slug : errorType;
        this.viewData.errorsMap[errorMapIndex] = reason !== null ? reason.message : null;
        this.updateState(ErrorTypeStatusMap[errorType], Status.Failure);
        var eventType = ErrorTypeEventMap[errorType];
        if (eventType !== null) {
            this.eventDispatcher.dispatch(eventType, new ActionErrorEventArg(reason));
        }
        console.error(reason);
    };
    /**
     * Remove a type of error.
     */
    HeadlessFormViewModel.prototype.removeError = function (error) {
        if (!isUndefined(this.viewData.errorsMap[error])) {
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
            this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.BeforeBindModel, new BeforeBindModelEventArg(this.modelInstance));
            var binder = Injector.Get(FormModelBinder);
            this.modelInstance = binder.bind(this.modelInstance, this.form);
            this.binder = binder;
            this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.AfterBindModel, new AfterBindModelEventArg(this.modelInstance, binder));
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
            _this.loadRemote.send(null, {}, {}, [FormTag, FormLoadTag]).promise.then(function (response) {
                var baseError = "The ajax request didn't result with the expected value. {detail}" +
                    "You can intercept the response by listening to a \"HttpEvents.BeforeResponse\" event with the \"FormLoadTag\" tag " +
                    "to do some custom processing.";
                if (_this._modelType) {
                    if (!_this.isValidModelInstance(response.result)) {
                        if (isObject(response.result)) {
                            _this.getTransformService().transformInverse(response.result, _this._modelType, ApiTransformerSymbol).onReady().then(function (transformResult) {
                                _this.modelInstance = transformResult.result;
                                resolve();
                            }, reject);
                        }
                        else {
                            reject(new UsageException(baseError.replace('{detail}', "An instance of \"".concat(String(_this.modelType), "\" or an object to transform is expected."))));
                        }
                    }
                    else {
                        _this.modelInstance = response.result;
                        resolve();
                    }
                }
                else if (isObject(response.result)) {
                    _this.form.setDefaultValue(response.result);
                    resolve();
                }
                else {
                    reject(new UsageException(baseError.replace('{detail}', 'An object is expected.')));
                }
            });
        });
    };
    /**
     * Insert values defined in the "loadData" attribute into the form.
     */
    HeadlessFormViewModel.prototype.loadLocally = function () {
        var _this = this;
        if (!isObject(this._loadData)) {
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
                if (formTransformResult.result instanceof FormObject) {
                    // Make the controls concrete the the root value is set.
                    formTransformResult.result.getByPattern('**').markAsConcrete();
                    if (isObject(formTransformResult.result)) {
                        // Ensure only the keys defined in `loadData` are kept from the output of the form.
                        var values = filterWithMask(formTransformResult.result.value, _this._loadData);
                        // Assign the result as default.
                        _this.form.setDefaultValue(values);
                    }
                }
            };
            // Otherwise, if we already have a model defined, we can't create a new one.
            // The easiest way to merge the two models is to convert the input model into a form,
            // make it concrete and then merge the values of the form.
            var formTransformResult = _this.getTransformService().transform(model, FormTransformerSymbol);
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
            if (!isObject(this._loadData)) {
                return;
            }
            var pojoTransformResult_1 = this.getTransformService().transformInverse(this._loadData, this._modelType, PojoTransformerSymbol);
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

export { HeadlessFormViewModel };
