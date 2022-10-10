/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var formArray = require('@banquette/form/_cjs/dev/form-array');
var formControl = require('@banquette/form/_cjs/dev/form-control');
var formObject = require('@banquette/form/_cjs/dev/form-object');
var modelValidationMetadata_service = require('@banquette/model-validation/_cjs/dev/model-validation-metadata.service');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');

var FormComponentFactory = /** @class */ (function () {
    function FormComponentFactory(validationMetadata) {
        this.validationMetadata = validationMetadata;
    }
    /**
     * Create a FormControl instance.
     */
    FormComponentFactory.prototype.createFormControl = function (modelIdentifier, property, value) {
        var instance = new formControl.FormControl(value);
        this.assignValidator(instance, modelIdentifier, property);
        return instance;
    };
    /**
     * Create a FormArray instance.
     */
    FormComponentFactory.prototype.createFormArray = function (modelIdentifier, property, children) {
        var instance = new formArray.FormArray(ensureArray.ensureArray(children));
        this.assignValidator(instance, modelIdentifier, property);
        return instance;
    };
    /**
     * Create a FormArray instance.
     */
    FormComponentFactory.prototype.createFormObject = function (modelIdentifier, property, children) {
        var instance = new formObject.FormObject(children || {});
        this.assignValidator(instance, modelIdentifier, property);
        return instance;
    };
    /**
     * Assign a validator if one is defined in the metadata.
     */
    FormComponentFactory.prototype.assignValidator = function (component, modelIdentifier, property) {
        var validator = this.validationMetadata.get(modelIdentifier, property);
        component.setValidator(validator);
    };
    FormComponentFactory = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(modelValidationMetadata_service.ModelValidationMetadataService)),
        _tslib.__metadata("design:paramtypes", [modelValidationMetadata_service.ModelValidationMetadataService])
    ], FormComponentFactory);
    return FormComponentFactory;
}());

exports.FormComponentFactory = FormComponentFactory;
