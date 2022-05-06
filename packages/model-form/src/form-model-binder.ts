import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { ExceptionFactory } from "@banquette/exception/exception.factory";
import { UsageException } from "@banquette/exception/usage.exception";
import { ValueChangedFormEvent } from "@banquette/form/event/value-changed.form-event";
import { ComponentNotFoundException } from "@banquette/form/exception/component-not-found.exception";
import { FormArray } from "@banquette/form/form-array";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { FormControl } from "@banquette/form/form-control";
import { FormGroupInterface } from "@banquette/form/form-group.interface";
import { FormObject } from "@banquette/form/form-object";
import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { ModelTransformMetadataService } from "@banquette/model/model-transform-metadata.service";
import { ModelWatcherService } from "@banquette/model/model-watcher.service";
import { TransformResult } from "@banquette/model/transform-result";
import { TransformContext } from "@banquette/model/transformer/transform-context";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { TransformerInterface } from "@banquette/model/transformer/transformer.interface";
import { ModelFactory } from "@banquette/model/type";
import { ensureCompleteTransformer } from "@banquette/model/utils";
import { MutationType, MutationEvent } from "@banquette/object-observer/index";
import { proxy } from "@banquette/utils-misc/proxy";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Complete, Constructor } from "@banquette/utils-type/types";
import { FormControlTransformerSymbol, FormArrayTransformerSymbol, FormObjectTransformerSymbol } from "./contants";
import { FormControl as FormControlTransformer } from "./transformer/form-control";
import { FormObject as FormObjectTransformer } from "./transformer/form-object";
import { FormTransformerInterface } from "./transformer/form-transformer.interface";
import { FormTransformerSymbol } from "./transformer/root/form";
import { isFormTransformer } from "./transformer/utils";

interface TransformersTree {
    ctor: Constructor<any>;
    transformer: Complete<FormTransformerInterface>;
    modelFactory?: ModelFactory<any>;
    children: Record<string, TransformersTree>;
    valueTransformer?: Complete<TransformerInterface>;
}

@Module()
export class FormModelBinder {
    /**
     * Maps of property and their respective value transformers, indexed by models constructors.
     */
    private valueTransformers: WeakMap<Constructor, Record<string, TransformerInterface>>;

    /**
     * Holds the whole tree of transformers for each known types of models.
     */
    private transformersTrees: WeakMap<Constructor, TransformersTree>;

    /**
     * The model being watched.
     */
    private model!: any;

    /**
     * The form being synchronized with the model.
     */
    private form!: FormObject;

    private contextStack: Array<{ctor: Constructor, property: string}>;
    private canMutateForm: boolean = false;
    private ignoreFormUpdate: boolean = false;
    private ignoreModelUpdate: boolean = false;

    private get currentContextCtor(): Constructor {
        if (this.contextStack.length > 0) {
            return this.contextStack[this.contextStack.length - 1].ctor;
        }
        return this.model.constructor;
    }

    private get currentContextProperty(): string|null {
        if (this.contextStack.length > 0) {
            return this.contextStack[this.contextStack.length - 1].property;
        }
        return null;
    }

    public constructor(@Inject(ModelMetadataService) private modelMetadata: ModelMetadataService,
                       @Inject(ModelTransformMetadataService) private transformMetadata: ModelTransformMetadataService,
                       @Inject(TransformService) private transformService: TransformService,
                       @Inject(ModelWatcherService) private modelWatcher: ModelWatcherService) {
        this.valueTransformers = new WeakMap<Constructor, Record<string, TransformerInterface>>();
        this.transformersTrees = new WeakMap<Constructor, TransformersTree>();
        this.contextStack = [];
    }

    /**
     * Synchronize a model and a form, updating one when the other changes.
     */
    public bind<T extends object>(model: T, form: FormObject): T {
        this.form = form;
        this.model = model;
        this.syncFormObjectWithModel(form, this.model);
        this.form.onControlAdded(proxy(this.throwOnUnauthorizedFormMutation, this), 0, false);
        this.form.onControlRemoved(proxy(this.throwOnUnauthorizedFormMutation, this), 0, false);
        this.form.onValueChanged(proxy(this.onFormValueChange, this), 0, false);
        return this.modelWatcher.watchTransformableProperties<T>(model, FormTransformerSymbol, proxy(this.onModelChange, this));
    }

    /**
     * Update a FormObject to match a model.
     * If controls are missing they will be created.
     * Values of existing controls will be updated.
     */
    private syncFormObjectWithModel(component: FormObject, model: any): void {
        const tree = this.getModelTransformersTree(model.constructor as Constructor);
        for (const property of Object.keys(tree.children)) {
            this.pushContext(model.constructor as Constructor, property);
            if (!isUndefined(tree.children[property])) {
                this.syncFormWithModelPart(tree.children[property], component, model, property);
            }
            this.popContext();
        }
    }

    /**
     * Call the right synchronization method depending on the type of transformer given as input.
     */
    private syncFormWithModelPart(treeItem: TransformersTree,
                                  formContainer: FormGroupInterface,
                                  modelContainer: any,
                                  property: string|number): void {
        if (treeItem.transformer.type === FormControlTransformerSymbol) {
            this.syncFormControlWithModelAttribute(
                treeItem,
                formContainer,
                modelContainer,
                property
            );
        } else if (treeItem.transformer.type === FormObjectTransformerSymbol) {
            this.syncFormObjectWithModelAttribute(
                treeItem,
                formContainer,
                modelContainer,
                property
            );
        } else if (treeItem.transformer.type === FormArrayTransformerSymbol) {
            this.syncFormArrayWithModelAttribute(
                treeItem,
                formContainer,
                modelContainer,
                property
            );
        }
    }

    /**
     * Synchronize the content of a FormObject component with a model property.
     */
    private syncFormObjectWithModelAttribute(treeItem: TransformersTree,
                                             formContainer: FormGroupInterface,
                                             modelContainer: any,
                                             property: string|number): void {
        const componentResult = this.getOrCreateFormComponent<FormObject>(formContainer, modelContainer, treeItem, property);
        if (componentResult) {
            if (!isObject(modelContainer[property]) && componentResult.component.parent) {
                componentResult.component.detach();
                return ;
            }
            for (const childName of Object.keys(treeItem.children)) {
                this.pushContext(treeItem.ctor, childName);
                this.syncFormWithModelPart(
                    treeItem.children[childName],
                    componentResult.component,
                    isObject(modelContainer) ? modelContainer[property] : null,
                    childName
                );
                this.popContext();
            }
        }
    }

    /**
     * Synchronize the content of a FormArray component with a model property.
     */
    private syncFormArrayWithModelAttribute(treeItem: TransformersTree,
                                            formContainer: FormGroupInterface,
                                            modelContainer: any,
                                            property: string|number): void {
        const componentResult = this.getOrCreateFormComponent<FormArray>(formContainer, modelContainer, treeItem, property);
        if (componentResult) {
            const modelValue = isObject(modelContainer) ? ensureArray(modelContainer[property]) : [];
            for (let i = 0; i < modelValue.length; ++i) {
                this.syncFormWithModelPart(
                    treeItem.children['*'],
                    componentResult.component,
                    modelValue,
                    i
                );
            }
        }
    }

    /**
     * Synchronize the value of a form control with the value of a model property.
     */
    private syncFormControlWithModelAttribute(treeItem: TransformersTree,
                                              formContainer: FormGroupInterface,
                                              modelContainer: any,
                                              property: string|number): void {
        try {
            this.ignoreFormUpdate = true;
            const componentResult = this.getOrCreateFormComponent<FormControl>(formContainer, modelContainer, treeItem, property);
            if (componentResult) {
                let newValue: any = isObject(modelContainer) ? modelContainer[property] : undefined;
                if (!isUndefined(treeItem.valueTransformer)) {
                    newValue = this.handleTransformResult<any>(treeItem.valueTransformer.transform(new TransformContext(
                        null,
                        FormTransformerSymbol,
                        this.currentContextCtor,
                        newValue,
                        this.currentContextProperty
                    )));
                }
                if (componentResult.isNew) {
                    componentResult.component.setDefaultValue(newValue);
                    componentResult.component.reset();
                } else {
                    componentResult.component.setValue(newValue);
                }
            }
        } finally {
            this.ignoreFormUpdate = false;
        }
    }

    /**
     * Try to get a form component from a group and create it if not found.
     */
    private getOrCreateFormComponent<T extends FormComponentInterface>(formContainer: FormGroupInterface,
                                                                       modelContainer: any,
                                                                       treeItem: TransformersTree,
                                                                       property: string|number): {component: T, isNew: boolean}|null {
        try {
            return {component: formContainer.get<T>(property), isNew: false};
        } catch (e) {
            if (!(e instanceof ComponentNotFoundException)) {
                throw e;
            }
            const component = this.handleTransformResult<FormComponentInterface>(treeItem.transformer.transform(new TransformContext(
                null,
                FormTransformerSymbol,
                this.currentContextCtor,
                isObject(modelContainer) ? modelContainer[property] : null,
                this.currentContextProperty
            ))) as T;
            if (!component) {
                return null;
            }
            formContainer.set(property, component);
            return {component, isNew: true};
        }
    }

    /**
     * Called when a change on the model is detected.
     */
    private onModelChange(event: MutationEvent): void {
        if (this.ignoreModelUpdate) {
            return ;
        }
        if (event.mutation.type === MutationType.Delete) {
            try {
                this.form.get(event.mutation.path).detach();
            } catch (e) {}
            return ;
        }
        const pathParts = event.mutation.path.split('/');
        let formContainer: FormGroupInterface = this.form;
        let modelContainer = this.model;
        let treeContainer: any = this.getModelTransformersTree(this.model.constructor);
        let contextsDepth = 0;
        const pushContext = (ctor: Constructor, property: string) => ++contextsDepth && this.pushContext(ctor, property);
        let i;

        for (i = 1; i < pathParts.length; ++i) {
            let treeChildName = treeContainer.transformer.type === FormArrayTransformerSymbol ? '*' : pathParts[i];
            if (treeChildName === '*' && event.mutation.type === MutationType.Insert && isArray(event.mutation.target)) {
                pushContext(this.currentContextCtor, pathParts[i - 1]);
                continue ;
            }
            treeContainer = treeContainer.children[treeChildName];
            if (i > 1) {
                formContainer = (formContainer as FormGroupInterface).get<FormGroupInterface>(pathParts[i - 1]);
                modelContainer = modelContainer[pathParts[i - 1]];
            }
            if (treeContainer.transformer.type === FormObjectTransformerSymbol) {
                pushContext(treeContainer.ctor, pathParts[i]);
            }
            // Required if a change is made to an object used as value in a FormControl.
            // If we do nothing the "path" will lead the binder deep inside the value of the FormControl,
            // which is not a valid form tree, so we must stop when a FormControl is reached.
            if (treeContainer.transformer.type === FormControlTransformerSymbol) {
                pushContext(this.currentContextCtor, pathParts[i]);
                break ;
            }
        }
        if (!isString(this.currentContextProperty)) {
            return ;
        }
        this.mutateForm(() => {
            const cp = this.currentContextProperty as string;
            if (treeContainer.transformer.type === FormControlTransformerSymbol) {
                this.syncFormControlWithModelAttribute(treeContainer, formContainer, modelContainer, cp);
            } else if (treeContainer.transformer.type === FormObjectTransformerSymbol) {
                pushContext(modelContainer.constructor as Constructor, cp);
                this.syncFormObjectWithModelAttribute(treeContainer, formContainer, modelContainer, cp);
            } else if (treeContainer.transformer.type === FormArrayTransformerSymbol) {
                this.syncFormArrayWithModelAttribute(treeContainer, formContainer, modelContainer, cp);
            }
        });
        this.popContext(contextsDepth);
    }

    /**
     * Called when a value change in the form, at any level.
     */
    private onFormValueChange(event: ValueChangedFormEvent): void {
        if (this.ignoreFormUpdate) {
            return ;
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
            if (!(event.source instanceof FormControl)) {
                return;
            }
            const pathParts = event.source.path.split('/');
            let modelContainer = this.model;
            for (let i = 1; i < pathParts.length - 1; ++i) {
                if (!isObject(modelContainer[pathParts[i]])) {
                    return;
                }
                modelContainer = modelContainer[pathParts[i]];
            }
            if (isObject(modelContainer)) {
                const propName = pathParts[pathParts.length - 1];
                const tree = this.getModelTransformersTree(modelContainer.constructor);
                if (!isUndefined(tree.children[propName])) {
                    modelContainer[propName] = this.handleTransformResult<any>(tree.children[propName].transformer.transformInverse(new TransformContext(
                        null,
                        FormTransformerSymbol,
                        modelContainer.constructor,
                        event.source,
                        propName
                    )));
                } else {
                    modelContainer[propName] = event.newValue;
                }
            }
        } finally {
            this.ignoreModelUpdate = false;
        }
    }

    /**
     * Event trap for mutations impacting the structure of the form.
     */
    private throwOnUnauthorizedFormMutation(): void {
        if (!this.canMutateForm) {
            throw new UsageException('Form mutations must be done through the model when bound.');
        }
    }

    /**
     * Take a raw Transform result and ensure it is synchronise and not in error.
     * Throw an exception otherwise.
     */
    private handleTransformResult<T>(result: TransformResult): T {
        if (result.promise !== null) {
            throw new UsageException('Asynchronous transformers are not supported by the FormModelBinder.');
        }
        if (result.error) {
            throw ExceptionFactory.EnsureException(result.errorDetail);
        }
        return result.result;
    }

    /**
     * Get the whole tree of form transformers applicable to a model in a format easier
     * to manipulate in the form model binder.
     */
    private getModelTransformersTree(ctor: Constructor, stack: Constructor[] = []): TransformersTree {
        const tree = this.transformersTrees.get(ctor);
        if (!isUndefined(tree)) {
            return tree;
        }
        // The top level is always a FormObject.
        const output: any = {
            ctor,
            transformer: FormObjectTransformer(),
            modelFactory: this.modelMetadata.getFactory(ctor),
            children: {}
        };
        const transformersMap = this.transformMetadata.getAll(ctor, FormTransformerSymbol);
        for (const property of Object.keys(transformersMap)) {
            let transformer = ensureCompleteTransformer(
                !isFormTransformer(transformersMap[property]) ?
                    FormControlTransformer(transformersMap[property]) :
                    transformersMap[property]
            ) as Complete<FormTransformerInterface>;

            output.children[property] = {transformer};
            let propertyTree: any = output.children[property];

            // ForArray transformers are necessarily contiguous and first in line
            // because no other form transformer can take one in.
            // So by iterating over whatever number of nested FormArray we have
            // we ensure that we will end up with another type of form transformer (so FormObject or FormControl).
            while (transformer.type === FormArrayTransformerSymbol) {
                propertyTree.transformer = transformer;

                // '*' is used as a wildcard to replace the numeric index of the array.
                // Because the processing will always be the same for each item of a FormArray.
                propertyTree.children = {'*': {}};
                propertyTree = propertyTree.children['*'];

                // Go down the tree until we are out of FormArrays.
                transformer = transformer.getChild() as Complete<FormTransformerInterface>;
                propertyTree.transformer = transformer;
            }
            // In case we are dealing with a FormObject transformer, resolve the relation
            // and make a recursive call.
            if (transformer.type === FormObjectTransformerSymbol) {
                const relation = this.modelMetadata.getRelation(ctor, property);
                if (relation === null) {
                    throw new UsageException(
                        `You must define a relation for the "${property}" attribute
                        of "${ctor.name}" if you set a "FormObject" transformer on it.`
                    );
                }
                if (stack.indexOf(relation) < 0) {
                    stack.push(relation);
                    Object.assign(propertyTree, this.getModelTransformersTree(relation, stack));
                    stack.pop();
                }
            } else {
                // If we arrive here we are guaranteed to be in the presence of FormControl transformer.
                // This type of transformer only allow a value transformer as child.
                propertyTree.valueTransformer = transformer.getChild();
            }
        }
        return output;
    }

    /**
     * Push context data on the stack.
     */
    private pushContext(ctor: Constructor, property: string): void {
        this.contextStack.push({ctor, property})
    }

    /**
     * Pop one or multiple context data from the stack.
     */
    private popContext(depth: number = 1): void {
        if (depth <= this.contextStack.length) {
            this.contextStack.splice(this.contextStack.length - depth, depth);
        } else {
            this.contextStack = [];
        }
    }

    /**
     * A wrapper that will authorize form mutations for the callback.
     */
    private mutateForm(cb: () => void): void {
        try {
            this.canMutateForm = true;
            cb();
        } finally {
            this.canMutateForm = false;
        }
    }
}
