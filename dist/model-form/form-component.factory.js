/*!
 * Banquette ModelForm v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from './_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { FormArray } from '@banquette/form/form-array';
import { FormControl } from '@banquette/form/form-control';
import { FormObject } from '@banquette/form/form-object';
import { ModelValidationMetadataService } from '@banquette/model-validation/model-validation-metadata.service';
import { ensureArray } from '@banquette/utils-type/ensure-array';

var FormComponentFactory = /** @class */ (function () {
    function FormComponentFactory(validationMetadata) {
        this.validationMetadata = validationMetadata;
    }
    /**
     * Create a FormControl instance.
     */
    FormComponentFactory.prototype.createFormControl = function (modelIdentifier, property, value) {
        var instance = new FormControl(value);
        this.assignValidator(instance, modelIdentifier, property);
        return instance;
    };
    /**
     * Create a FormArray instance.
     */
    FormComponentFactory.prototype.createFormArray = function (modelIdentifier, property, children) {
        var instance = new FormArray(ensureArray(children));
        this.assignValidator(instance, modelIdentifier, property);
        return instance;
    };
    /**
     * Create a FormArray instance.
     */
    FormComponentFactory.prototype.createFormObject = function (modelIdentifier, property, children) {
        var instance = new FormObject(children || {});
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
    FormComponentFactory = __decorate([
        Service(),
        __param(0, Inject(ModelValidationMetadataService)),
        __metadata("design:paramtypes", [ModelValidationMetadataService])
    ], FormComponentFactory);
    return FormComponentFactory;
}());

export { FormComponentFactory };
