import { FormObject } from "@banquette/form/form-object";
import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { ModelTransformMetadataService } from "@banquette/model/model-transform-metadata.service";
import { ModelWatcherService } from "@banquette/model/model-watcher.service";
import { TransformService } from "@banquette/model/transformer/transform.service";
export declare class FormModelBinder {
    private modelMetadata;
    private transformMetadata;
    private transformService;
    private modelWatcher;
    /**
     * Maps of property and their respective value transformers, indexed by models constructors.
     */
    private valueTransformers;
    /**
     * Holds the whole tree of transformers for each known types of models.
     */
    private transformersTrees;
    /**
     * The model being watched.
     */
    private model;
    /**
     * The form being synchronized with the model.
     */
    private form;
    private contextStack;
    private canMutateForm;
    private ignoreFormUpdate;
    private ignoreModelUpdate;
    private get currentContextCtor();
    private get currentContextProperty();
    constructor(modelMetadata: ModelMetadataService, transformMetadata: ModelTransformMetadataService, transformService: TransformService, modelWatcher: ModelWatcherService);
    /**
     * Synchronize a model and a form, updating one when the other changes.
     */
    bind<T extends object>(model: T, form: FormObject): T;
    /**
     * Update a FormObject to match a model.
     * If controls are missing they will be created.
     * Values of existing controls will be updated.
     */
    private syncFormObjectWithModel;
    /**
     * Call the right synchronization method depending on the type of transformer given as input.
     */
    private syncFormWithModelPart;
    /**
     * Synchronize the content of a FormObject component with a model property.
     */
    private syncFormObjectWithModelAttribute;
    /**
     * Synchronize the content of a FormArray component with a model property.
     */
    private syncFormArrayWithModelAttribute;
    /**
     * Synchronize the value of a form control with the value of a model property.
     */
    private syncFormControlWithModelAttribute;
    /**
     * Try to get a form component from a group and create it if not found.
     */
    private getOrCreateFormComponent;
    /**
     * Called when a change on the model is detected.
     */
    private onModelChange;
    /**
     * Called when a value change in the form, at any level.
     */
    private onFormValueChange;
    /**
     * Event trap for mutations impacting the structure of the form.
     */
    private throwOnUnauthorizedFormMutation;
    /**
     * Take a raw Transform result and ensure it is synchronise and not in error.
     * Throw an exception otherwise.
     */
    private handleTransformResult;
    /**
     * Get the whole tree of form transformers applicable to a model in a format easier
     * to manipulate in the form model binder.
     */
    private getModelTransformersTree;
    /**
     * Push context data on the stack.
     */
    private pushContext;
    /**
     * Pop one or multiple context data from the stack.
     */
    private popContext;
    /**
     * Build a new TransformContext while considering the contexts stack.
     */
    private buildTransformContext;
    /**
     * A wrapper that will authorize form mutations for the callback.
     */
    private mutateForm;
}
