/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __awaiter, __generator } from '../../_virtual/_tslib.js';
import { Injector } from '@banquette/dependency-injection/injector';
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { UsageException } from '@banquette/exception/usage.exception';
import { BasicState } from '@banquette/form/constant';
import { HttpResponse } from '@banquette/http/http-response';
import { ModelMetadataService } from '@banquette/model/model-metadata.service';
import { TransformService } from '@banquette/model/transformer/transform.service';
import { PojoTransformerSymbol } from '@banquette/model/transformer/type/root/pojo';
import { proxy } from '@banquette/utils-misc/proxy';
import { recursionSafeSideEffectProxy } from '@banquette/utils-misc/recursion-safe-side-effect-proxy';
import { throttle } from '@banquette/utils-misc/throttle';
import { replaceStringVariables } from '@banquette/utils-string/format/replace-string-variables';
import { slugify } from '@banquette/utils-string/format/slugify';
import { trim } from '@banquette/utils-string/format/trim';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { ensureBoolean } from '@banquette/utils-type/ensure-boolean';
import { ensureString } from '@banquette/utils-type/ensure-string';
import { isArray } from '@banquette/utils-type/is-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isObject } from '@banquette/utils-type/is-object';
import { isPrimitive } from '@banquette/utils-type/is-primitive';
import { isScalar } from '@banquette/utils-type/is-scalar';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { RemoteModule } from '../../misc/remote/remote.module.js';
import { HeadlessControlViewModel } from '../headless-control.view-model.js';
import { Choice } from './choice.js';
import { SearchType, ChoicesRemoteFetchStatus, ChoiceOrigin } from './constant.js';
import { SelectedChoice } from './selected-choice.js';

/**
 * The view model logic behind a generic select form control.
 */
var HeadlessSelectViewModel = /** @class */ (function (_super) {
    __extends(HeadlessSelectViewModel, _super);
    function HeadlessSelectViewModel(control) {
        var _this = _super.call(this, control) || this;
        /**
         * Defines how to resolve the choices' labels, identifiers, values, disabled status and groups.
         * Can be:
         *   - the name of the property to use when the input is an object.
         *   - a function that takes the raw input and returns the value to use.
         */
        _this.choicesLabel = null;
        _this.choicesIdentifier = null;
        _this.choicesValue = null;
        _this.choicesDisabled = null;
        _this.choicesGroup = null;
        /**
         * Define the order in which choices should be sorted by origin.
         */
        _this.choicesOriginOrdering = [ChoiceOrigin.User, ChoiceOrigin.Default, ChoiceOrigin.Remote];
        /**
         * Search behavior.
         */
        _this.searchType = SearchType.None;
        /**
         * Name of the parameter to add the the ajax request when fetching for choices.
         * Only applicable if `searchType` is `SearchType.Remote`.
         */
        _this.searchRemoteParamName = 'search';
        /**
         * Minimum length of the search buffer to trigger a remote search.
         */
        _this.searchMinLength = 0;
        /**
         * Define if the user can select custom values that are not proposed in the list of choices,
         * using the search input.
         */
        _this.allowCreation = false;
        /**
         * If `true`: the dropdown is always closed when a selection is made.
         * If `false`: the dropdown is never closed when a selection is made.
         * If `auto`: the dropdown is only closed when the select is not multiple.
         */
        _this.closeOnSelection = 'auto';
        /**
         * Model type of the choices.
         */
        _this.modelType = null;
        _this.unsubscribeFunctions = [];
        /**
         * Normalized array of choices ready to be consumed by the view.
         */
        _this.choices = {};
        _this.inlinedChoices = [];
        _this.unsureSelectedChoicesIdentifiers = [];
        _this.lastSelectedIdentifier = undefined;
        _this.noChoiceAvailable = true;
        _this.searchBufferSlug = '';
        /**
         * To call when a keydown event is emitted for the component.
         */
        _this.onKeyDown = throttle(function (event) {
            if (event.key === 'ArrowUp') {
                _this.moveSelection(-1);
            }
            else if (event.key === 'ArrowDown') {
                _this.moveSelection(1);
            }
            else if (event.key === 'Enter') {
                var choiceToSelect = null;
                if (_this.allowCreation && _this.viewData.creationBuffer.length > 0) {
                    for (var _i = 0, _a = _this.inlinedChoices; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.identifier === _this.viewData.creationBuffer) {
                            choiceToSelect = item;
                            break;
                        }
                    }
                    if (!choiceToSelect) {
                        _this.appendChoices([_this.viewData.creationBuffer], ChoiceOrigin.User);
                        _this.selectChoice(_this.viewData.creationBuffer);
                        _this.setSearchString('');
                    }
                    _this.viewData.creationBuffer = '';
                }
                else {
                    for (var _b = 0, _c = _this.inlinedChoices; _b < _c.length; _b++) {
                        var item = _c[_b];
                        if (item.focused) {
                            choiceToSelect = item;
                            break;
                        }
                    }
                }
                if (choiceToSelect) {
                    _this.selectChoice(choiceToSelect);
                    _this.focusChoice(choiceToSelect); // Because selecting a choice un-focus everything.
                    if (!_this.multiple) {
                        _this.hideChoices();
                    }
                }
            }
            else if (event.key === 'Escape') {
                _this.unFocusAll();
                _this.hideChoices();
            }
            else {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
        }, 50);
        /**
         * Method to call when modifying the list of available choices.
         */
        _this.updateChoices = recursionSafeSideEffectProxy(function () {
            var identifiers = [];
            _this.inlinedChoices = [];
            _this.viewData.choices = {};
            _this.noChoiceAvailable = true;
            for (var _i = 0, _a = _this.choicesOriginOrdering; _i < _a.length; _i++) {
                var origin_1 = _a[_i];
                _this.viewData.choices[origin_1] = { grouped: {}, standalone: [] };
                var originChoices = _this.viewData.choices[origin_1];
                for (var _b = 0, _c = _this.choices[origin_1]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (identifiers.indexOf(item.identifier) > -1) {
                        console.warn("Duplicate identifier \"".concat(String(item.identifier), "\". Ignoring choice with label \"").concat(item.label, "\"."));
                        continue;
                    }
                    if (item.group) {
                        if (isUndefined(originChoices.grouped[item.group])) {
                            originChoices.grouped[item.group] = [];
                        }
                        originChoices.grouped[item.group].push(item);
                        _this.inlinedChoices.push(originChoices.grouped[item.group][originChoices.grouped[item.group].length - 1]); // Assign it from `originChoices` so if there is a proxy it's conserved.
                    }
                    else {
                        originChoices.standalone.push(item);
                        _this.inlinedChoices.push(originChoices.standalone[originChoices.standalone.length - 1]); // Assign it from `originChoices` so if there is a proxy it's conserved.
                    }
                    identifiers.push(item.identifier);
                    if (!item.disabled && item.visible) {
                        _this.noChoiceAvailable = false;
                    }
                    // If the item has just been created, meaning it's the first time it is processed in `updateChoices`.
                    if (item.new) {
                        // First let's check if it matches one of the SelectedChoice that have been marked as "unsure"
                        // because no existing choice were found when it was created.
                        var unsureIdx = _this.unsureSelectedChoicesIdentifiers.indexOf(item.identifier);
                        if (unsureIdx > -1) {
                            // Do not simply select the choice, but replace the current value in the control by a
                            // selected choice created from the Choice item that matches.
                            if (_this.viewData.multiple) {
                                for (var i = 0; _this.viewData.control.value.length; ++i) {
                                    if (_this.viewData.control.value[i].identifier === item.identifier) {
                                        _this.viewData.control.value[i] = _this.createSelectedChoice(item);
                                        break;
                                    }
                                }
                            }
                            else {
                                _this.viewData.control.value = _this.createSelectedChoice(item);
                            }
                            _this.unsureSelectedChoicesIdentifiers.splice(unsureIdx, 1);
                        }
                        item.new = false;
                    }
                }
            }
            _this.updateChoicesSelectionStatus();
        });
        /**
         * Only inject the service on demand.
         */
        _this.getModelMetadata = (function () {
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
        _this.getTransformService = (function () {
            var service = null;
            return function () {
                if (!service) {
                    service = Injector.Get(TransformService);
                }
                return service;
            };
        })();
        _this.remote = new RemoteModule();
        // Set the default view data this class is responsible for.
        Object.assign(_this.viewData, {
            choices: [],
            groupedChoices: {},
            selectedChoicesCount: 0,
            visibleChoicesCount: 0,
            choicesVisible: false,
            multiple: false,
            searchBuffer: '',
            creationBuffer: '',
            searchMinLength: _this.searchMinLength,
            remoteFetchStatus: ChoicesRemoteFetchStatus,
            remoteFetchError: null
        });
        return _this;
    }
    Object.defineProperty(HeadlessSelectViewModel.prototype, "multiple", {
        /**
         * `true` to allow multiple choices selection.
         */
        get: function () { return this.viewData.multiple; },
        set: function (value) { this.viewData.multiple = value; },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    HeadlessSelectViewModel.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, origin_2;
            var _this = this;
            return __generator(this, function (_b) {
                _super.prototype.initialize.call(this);
                this.unsubscribeFunctions.push(this.control.onStateChanged(function (event) {
                    if (event.state === BasicState.Focused) {
                        if (event.newValue) {
                            _this.onFocus();
                        }
                        else {
                            _this.onBlur();
                        }
                    }
                }));
                this.remote.onConfigurationChange(proxy(this.fetchRemoteChoices, this));
                // Origins are fixed and must be assigned before the view model is initialized.
                // Create an array for each of them in the choices object, once and for all.
                for (_i = 0, _a = this.choicesOriginOrdering; _i < _a.length; _i++) {
                    origin_2 = _a[_i];
                    this.choices[origin_2] = [];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @inheritDoc
     */
    HeadlessSelectViewModel.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        for (var _i = 0, _a = this.unsubscribeFunctions; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
    };
    /**
     * @inheritDoc
     */
    HeadlessSelectViewModel.prototype.setViewData = function (viewData) {
        _super.prototype.setViewData.call(this, viewData);
    };
    /**
     * Update remote choices if the configuration allows for it.
     */
    HeadlessSelectViewModel.prototype.fetchRemoteChoices = function () {
        var _this = this;
        if (!this.remote.isApplicable) {
            return;
        }
        var params = {};
        if (this.searchType === SearchType.Remote) {
            if (this.searchMinLength > 0 && this.viewData.searchBuffer.length < this.searchMinLength) {
                this.viewData.searchMinLength = this.searchMinLength;
                this.viewData.remoteFetchStatus = ChoicesRemoteFetchStatus.WaitingSearch;
                this.setChoices([], ChoiceOrigin.Remote);
                return;
            }
            if (this.viewData.searchBuffer.length > 0) {
                if (isFunction(this.searchRemoteParamName)) {
                    this.searchRemoteParamName(params);
                }
                else {
                    var paramsNames = ensureArray(this.searchRemoteParamName);
                    for (var _i = 0, paramsNames_1 = paramsNames; _i < paramsNames_1.length; _i++) {
                        var paramName = paramsNames_1[_i];
                        params[paramName] = this.viewData.searchBuffer;
                    }
                }
            }
        }
        this.viewData.control.busy = true;
        this.viewData.remoteFetchError = null;
        this.viewData.remoteFetchStatus = ChoicesRemoteFetchStatus.Pending;
        this.remote.send(null, params).promise.then(function (response) {
            _this.setChoices(ensureArray(response.result), ChoiceOrigin.Remote);
            _this.viewData.remoteFetchStatus = ChoicesRemoteFetchStatus.Idle;
        }).catch(function (reason) {
            if (reason instanceof HttpResponse) {
                if (reason.isCanceled) {
                    return;
                }
                reason = reason.error;
            }
            _this.viewData.remoteFetchError = ExceptionFactory.EnsureException(reason, 'Unknown error.').message;
            _this.viewData.remoteFetchStatus = ChoicesRemoteFetchStatus.Failed;
        }).finally(function () {
            _this.viewData.control.busy = false;
        });
    };
    /**
     * Add a choice to the selection.
     * The choice can be a `Choice` object, a `SelectedChoice` object or any other value.
     */
    HeadlessSelectViewModel.prototype.selectChoice = function (choice, canDeselect) {
        if (canDeselect === void 0) { canDeselect = true; }
        if (choice instanceof Choice && choice.disabled) {
            return;
        }
        var selectedChoice = this.createSelectedChoice(choice);
        if (this.multiple) {
            var values = ensureArray(this.viewData.control.value);
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var candidate = values_1[_i];
                if (candidate.identifier === choice.identifier) {
                    if (canDeselect) {
                        this.deselectChoice(candidate);
                    }
                    return;
                }
            }
            values.push(selectedChoice);
            this.viewData.control.value = values;
        }
        else {
            if (!selectedChoice || !this.viewData.control.value || this.viewData.control.value.rawValue !== selectedChoice.rawValue) {
                this.viewData.control.value = selectedChoice || undefined;
            }
        }
        if (this.closeOnSelection === true || (this.closeOnSelection === 'auto' && !this.multiple)) {
            this.hideChoices();
        }
        this.lastSelectedIdentifier = choice.identifier;
        this.unFocusAll();
        this.updateChoicesSelectionStatus();
    };
    /**
     * Remove a choice from the selection.
     */
    HeadlessSelectViewModel.prototype.deselectChoice = function (selectedChoiceOrIdentifier) {
        var values = ensureArray(this.viewData.control.value);
        var targetIdentifier = selectedChoiceOrIdentifier instanceof SelectedChoice ? selectedChoiceOrIdentifier.identifier : selectedChoiceOrIdentifier;
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof SelectedChoice && values[i].identifier === targetIdentifier) {
                if (this.multiple) {
                    values.splice(i, 1);
                    this.viewData.control.value = values;
                }
                else {
                    this.viewData.control.value = undefined;
                }
                break;
            }
        }
        this.lastSelectedIdentifier = undefined;
        this.updateChoicesSelectionStatus();
    };
    /**
     * Clear the whole selection.
     */
    HeadlessSelectViewModel.prototype.deselectAll = function () {
        if (this.multiple) {
            this.viewData.control.value = [];
        }
        else {
            this.viewData.control.value = undefined;
        }
        this.lastSelectedIdentifier = undefined;
        this.updateChoicesSelectionStatus();
    };
    /**
     * @inheritDoc
     */
    HeadlessSelectViewModel.prototype.controlValueToViewValue = function (controlValue) {
        var _this = this;
        var selected = [];
        if (!isUndefined(controlValue)) {
            if (this.multiple && isArray(controlValue)) {
                for (var _i = 0, controlValue_1 = controlValue; _i < controlValue_1.length; _i++) {
                    var value = controlValue_1[_i];
                    var selectedChoice = this.createSelectedChoice(value);
                    if (selectedChoice !== null) {
                        selected.push(selectedChoice);
                    }
                }
            }
            else {
                var selectedChoice = this.createSelectedChoice(controlValue);
                if (selectedChoice !== null) {
                    selected.push(selectedChoice);
                }
            }
        }
        // To delay the update after the view value as been assigned.
        queueMicrotask(function () {
            _this.updateChoicesSelectionStatus();
        });
        return this.multiple ? selected : (selected.length > 0 ? selected[0] : undefined);
    };
    /**
     * @inheritDoc
     */
    HeadlessSelectViewModel.prototype.viewValueToControlValue = function (viewValue) {
        var controlValues = [];
        var values = ensureArray(viewValue);
        for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
            var value = values_2[_i];
            if (value instanceof SelectedChoice) {
                controlValues.push(value.rawValue);
            }
            else {
                // Should never happen because the view value should always contain SelectedChoice objects.
                controlValues.push(undefined);
            }
        }
        return this.multiple ? controlValues : (controlValues.length > 0 ? controlValues[0] : undefined);
    };
    /**
     * Update the whole list of choices.
     */
    HeadlessSelectViewModel.prototype.setChoices = function (choices, origin) {
        var _this = this;
        if (origin === void 0) { origin = ChoiceOrigin.Default; }
        this.updateChoices(function () {
            _this.removeAllChoices(origin);
            _this.appendChoices(choices, origin);
        });
    };
    /**
     * Append a list of choices at the end of the existing collection.
     */
    HeadlessSelectViewModel.prototype.appendChoices = function (choices, origin) {
        var _this = this;
        if (origin === void 0) { origin = ChoiceOrigin.Default; }
        this.updateChoices(function () {
            for (var _i = 0, choices_1 = choices; _i < choices_1.length; _i++) {
                var choice = choices_1[_i];
                var normalized = _this.normalizeChoice(choice, origin);
                if (normalized !== null) {
                    // The origin is already part of the object, created in `initialize()`.
                    _this.choices[normalized.origin].push(normalized);
                    if (normalized.identifier === _this.lastSelectedIdentifier) {
                        _this.focusChoice(normalized);
                    }
                }
            }
        });
    };
    /**
     * Prepend a list of choices to the beginning of the existing collection.
     */
    HeadlessSelectViewModel.prototype.prependChoices = function (choices, origin) {
        var _this = this;
        if (origin === void 0) { origin = ChoiceOrigin.Default; }
        this.updateChoices(function () {
            for (var i = choices.length - 1; i >= 0; --i) {
                var normalized = _this.normalizeChoice(choices[i], origin);
                if (normalized !== null) {
                    // The origin is already part of the object, created in `initialize()`.
                    _this.choices[normalized.origin].unshift(normalized);
                    if (normalized.identifier === _this.lastSelectedIdentifier) {
                        _this.focusChoice(normalized);
                    }
                }
            }
        });
    };
    /**
     * Remove a choice from the list of available choices.
     */
    HeadlessSelectViewModel.prototype.removeChoice = function (choiceOrIdentifier) {
        var _this = this;
        var identifier = choiceOrIdentifier instanceof Choice ? choiceOrIdentifier.identifier : choiceOrIdentifier;
        this.updateChoices(function () {
            for (var _i = 0, _a = Object.keys(_this.choices); _i < _a.length; _i++) {
                var origin_3 = _a[_i];
                for (var i = 0; i < _this.choices[origin_3].length; ++i) {
                    if (_this.choices[origin_3][i].identifier === identifier) {
                        _this.choices[origin_3].splice(i, 1);
                    }
                }
            }
        });
    };
    /**
     * Remove all choices with a particular origin.
     */
    HeadlessSelectViewModel.prototype.removeAllChoices = function (origin) {
        var _this = this;
        if (origin === void 0) { origin = null; }
        this.updateChoices(function () {
            for (var _i = 0, _a = Object.keys(_this.choices); _i < _a.length; _i++) {
                var currentOrigin = _a[_i];
                for (var i = 0; i < _this.choices[currentOrigin].length; ++i) {
                    if (origin === null || _this.choices[currentOrigin][i].origin === origin) {
                        _this.choices[currentOrigin].splice(i--, 1);
                    }
                }
            }
        });
    };
    /**
     * Show the dropdown of available choices.
     */
    HeadlessSelectViewModel.prototype.showChoices = function () {
        if (!this.viewData.control.disabled) {
            this.viewData.choicesVisible = true;
            var hasSelectedIdentifier = !isUndefined(this.lastSelectedIdentifier);
            for (var _i = 0, _a = this.inlinedChoices; _i < _a.length; _i++) {
                var item = _a[_i];
                if ((hasSelectedIdentifier && item.identifier === this.lastSelectedIdentifier) || (!hasSelectedIdentifier && item.selected)) {
                    this.focusChoice(item);
                    break;
                }
            }
        }
    };
    /**
     * Hide the dropdown of available choices.
     */
    HeadlessSelectViewModel.prototype.hideChoices = function () {
        this.viewData.choicesVisible = false;
        this.unFocusAll();
    };
    /**
     * Inverse the visibility status of the dropdown of available choices.
     */
    HeadlessSelectViewModel.prototype.toggleChoices = function () {
        if (this.viewData.choicesVisible) {
            this.hideChoices();
        }
        else {
            this.showChoices();
        }
    };
    /**
     * Mark a choice as focused.
     */
    HeadlessSelectViewModel.prototype.focusChoice = function (choice) {
        if (choice.focused || choice.disabled) {
            return;
        }
        choice.focused = true;
        this.focusedIdentifier = choice.identifier;
    };
    /**
     * Unmark a choice as focused.
     */
    HeadlessSelectViewModel.prototype.unFocusChoice = function (choice) {
        choice.focused = false;
        this.focusedIdentifier = undefined;
    };
    /**
     * Mark all choices as unfocused.
     */
    HeadlessSelectViewModel.prototype.unFocusAll = function () {
        for (var _i = 0, _a = this.inlinedChoices; _i < _a.length; _i++) {
            var choice = _a[_i];
            choice.focused = false;
        }
        this.focusedIdentifier = undefined;
    };
    /**
     * Set the search to filter choices with.
     * Only applicable if the search type has been set to another value that `SearchType.None`.
     */
    HeadlessSelectViewModel.prototype.setSearchString = function (search) {
        if (this.searchType === SearchType.None || this.viewData.searchBuffer === search) {
            return;
        }
        this.viewData.searchBuffer = trim(search);
        this.searchBufferSlug = slugify(this.viewData.searchBuffer);
        if (this.searchType === SearchType.Local) {
            this.updateChoices();
        }
        else if (this.searchType === SearchType.Remote) {
            this.fetchRemoteChoices();
        }
    };
    /**
     * Try to normalize a raw value into a Choice.
     */
    HeadlessSelectViewModel.prototype.normalizeChoice = function (choice, origin) {
        if (choice instanceof Choice) {
            return choice;
        }
        var identifier = this.extractChoiceIdentifier(choice);
        if (isUndefined(identifier)) {
            return null;
        }
        choice = this.maybeEnsureModel(choice);
        var instance = new Choice(identifier, this.extractChoiceLabel(choice), this.extractChoiceValue(choice), this.extractChoiceGroup(choice), origin, choice);
        instance.disabled = this.extractChoiceDisabledState(choice);
        instance.external = false;
        return instance;
    };
    /**
     * @inheritDoc
     */
    HeadlessSelectViewModel.prototype.onFocus = function () {
        this.showChoices();
    };
    /**
     * @inheritDoc
     */
    HeadlessSelectViewModel.prototype.onBlur = function () {
        this.hideChoices();
    };
    /**
     * The behavior of this method depends on the `multiple` option:
     *
     *  - If `multiple` is `true`: move the `focused` item "step" time.
     *    If no item is focused yet, the first one is.
     *
     *  - If `multiple` is false`: move the `selected` item "step" time.
     *    If no item is selected yet, the first one is.
     */
    HeadlessSelectViewModel.prototype.moveSelection = function (step) {
        if (!this.inlinedChoices.length || this.noChoiceAvailable) {
            return;
        }
        if (!this.viewData.choicesVisible) {
            this.showChoices();
            return;
        }
        var currentFocusIndex = -1;
        for (var i = 0; i < this.inlinedChoices.length; ++i) {
            if (this.inlinedChoices[i].focused) {
                currentFocusIndex = i;
                this.unFocusChoice(this.inlinedChoices[i]);
                break;
            }
        }
        if (currentFocusIndex > -1) {
            currentFocusIndex = (currentFocusIndex + step) % this.inlinedChoices.length;
            if (currentFocusIndex < 0) {
                currentFocusIndex = this.inlinedChoices.length + currentFocusIndex;
            }
        }
        else {
            currentFocusIndex = 0;
        }
        if (this.inlinedChoices[currentFocusIndex].disabled || !this.inlinedChoices[currentFocusIndex].visible) {
            this.inlinedChoices[currentFocusIndex].focused = true;
            this.moveSelection(step > 0 ? 1 : -1);
            return;
        }
        this.focusChoice(this.inlinedChoices[currentFocusIndex]);
    };
    /**
     * Try to resolve the label of a choice.
     */
    HeadlessSelectViewModel.prototype.extractChoiceLabel = function (choice) {
        if (isFunction(this.choicesLabel)) {
            var label = this.choicesLabel(choice);
            if (!isScalar(label)) {
                console.warn("The \"choices-label\" function must return a scalar value, for:", choice);
            }
            return String(label);
        }
        if (isScalar(choice)) {
            return String(choice);
        }
        var defaultLabel = '(unknown label)';
        if (!isObject(choice)) {
            return defaultLabel;
        }
        if (this.choicesLabel !== null) {
            if (!isUndefined(choice[this.choicesLabel])) {
                return ensureString(choice[this.choicesLabel]);
            }
            // Check if the user didn't give both the property and the expression.
            // In such a case it could mean "use the property if available, otherwise the expression.".
            if (this.choicesLabel.indexOf('{') > -1) {
                // TODO: make the start and end chars configurable.
                return replaceStringVariables(this.choicesLabel, choice, '{', '}');
            }
        }
        if (this.choicesLabel) {
            console.warn("No property \"".concat(this.choicesLabel, "\" to use as label has been found. You can control it using the \"choicesLabel\" attribute, for:"), choice);
        }
        else {
            console.warn('Please define what property to use as identifier using the "choicesLabel" attribute, for:', choice);
        }
        return defaultLabel;
    };
    /**
     * Try to resolve the value of a choice.
     */
    HeadlessSelectViewModel.prototype.extractChoiceValue = function (choice) {
        if (isFunction(this.choicesValue)) {
            return this.choicesValue(choice);
        }
        if (!isObject(choice) || !this.choicesValue) {
            return choice;
        }
        return choice[this.choicesValue];
    };
    /**
     * Try to resolve the disabled state of a choice.
     */
    HeadlessSelectViewModel.prototype.extractChoiceDisabledState = function (choice) {
        if (isFunction(this.choicesDisabled)) {
            return ensureBoolean(this.choicesDisabled(choice));
        }
        if (!isObject(choice) || !this.choicesDisabled) {
            return false;
        }
        return !!choice[this.choicesDisabled];
    };
    /**
     * Try to resolve the group name of a choice.
     */
    HeadlessSelectViewModel.prototype.extractChoiceGroup = function (choice) {
        if (isFunction(this.choicesGroup)) {
            var value = this.choicesGroup(choice);
            return isScalar(value) ? String(value) : null;
        }
        if (!isObject(choice) || !this.choicesGroup) {
            return null;
        }
        return choice[this.choicesGroup] || null;
    };
    /**
     * Try to resolve the identifier of a choice.
     */
    HeadlessSelectViewModel.prototype.extractChoiceIdentifier = function (choice) {
        if (isFunction(this.choicesIdentifier)) {
            var value = this.choicesIdentifier(choice);
            if (isPrimitive(value)) {
                return value;
            }
        }
        if (isScalar(choice)) {
            return choice;
        }
        if (!isObject(choice)) {
            console.warn("Unsupported choice of type \"".concat(typeof (choice), "\"."));
            return undefined;
        }
        if (this.choicesIdentifier !== null && !isFunction(this.choicesIdentifier)) {
            if (!isUndefined(choice[this.choicesIdentifier])) {
                return choice[this.choicesIdentifier];
            }
        }
        if (this.choicesIdentifier) {
            console.warn("No property \"".concat(this.choicesIdentifier, "\" to use as identifier has been found. You can control it using the \"choicesIdentifier\" attribute, for:"), choice);
        }
        else {
            console.warn('Please define what property to use as identifier using the "choicesIdentifier" attribute, for:', choice);
        }
        return undefined;
    };
    /**
     * Create a SelectedChoice instance from a raw input.
     * If the input is already a SelectedChoice, it is returned unchanged.
     */
    HeadlessSelectViewModel.prototype.createSelectedChoice = function (value) {
        if (value instanceof SelectedChoice) {
            return value;
        }
        if (value instanceof Choice) {
            return new SelectedChoice(value.label, value.identifier, value.value);
        }
        var identifier = this.extractChoiceIdentifier(value);
        if (isNullOrUndefined(identifier)) {
            return null;
        }
        // Check if a known choice matches the identifier, so we can use its label and original value.
        for (var _i = 0, _a = this.inlinedChoices; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate.identifier === identifier) {
                return this.createSelectedChoice(candidate);
            }
        }
        this.unsureSelectedChoicesIdentifiers.push(identifier);
        return new SelectedChoice(this.extractChoiceLabel(value), identifier, value);
    };
    /**
     * Ensure the input value is an instance of the model type, if one is defined.
     * Otherwise, return the value unchanged.
     */
    HeadlessSelectViewModel.prototype.maybeEnsureModel = function (value) {
        if (!this.modelType) {
            return value;
        }
        if (!this.isValidModelInstance(value)) {
            if (isObject(value)) {
                var transformResult = this.getTransformService().transformInverse(value, this.modelType, PojoTransformerSymbol);
                if (transformResult.promise) {
                    throw new UsageException('Async transformers are not supported in a select view model. ' +
                        'You must transform it yourself before giving it to the select component.');
                }
                return transformResult.result;
            }
            else {
                throw new UsageException("An instance of \"".concat(String(this.modelType), "\" or an object to transform is expected."));
            }
        }
        return value;
    };
    /**
     * Check if the input value matches the expected model type.
     */
    HeadlessSelectViewModel.prototype.isValidModelInstance = function (value) {
        if (!this.modelType) {
            return true;
        }
        var ctor = this.getModelMetadata().resolveAlias(this.modelType);
        return value instanceof ctor;
    };
    /**
     * Force update the "selected" flag of all choices.
     */
    HeadlessSelectViewModel.prototype.updateChoicesSelectionStatus = function () {
        var identifiers = [];
        var values = [];
        var selectedChoices = ensureArray(this.viewData.control.value);
        for (var _i = 0, selectedChoices_1 = selectedChoices; _i < selectedChoices_1.length; _i++) {
            var value = selectedChoices_1[_i];
            if (value instanceof SelectedChoice) {
                identifiers.push(value.identifier);
                if (!isObject(value.rawValue)) {
                    values.push(value.rawValue);
                }
            }
        }
        this.viewData.selectedChoicesCount = 0;
        this.viewData.visibleChoicesCount = 0;
        for (var _a = 0, _b = this.inlinedChoices; _a < _b.length; _a++) {
            var choice = _b[_a];
            choice.selected = identifiers.indexOf(choice.identifier) > -1;
            if (choice.selected) {
                this.viewData.selectedChoicesCount++;
            }
            choice.visible = !this.isLocallyFiltered(choice);
            if (choice.visible) {
                this.viewData.visibleChoicesCount++;
            }
        }
    };
    /**
     * Test if a choice match the current search buffer.
     */
    HeadlessSelectViewModel.prototype.isLocallyFiltered = function (choice) {
        if (this.searchType !== SearchType.Local || !this.searchBufferSlug.length) {
            return false;
        }
        return !choice.labelSlug.includes(this.searchBufferSlug);
    };
    return HeadlessSelectViewModel;
}(HeadlessControlViewModel));

export { HeadlessSelectViewModel };
