import { Inject, Module } from "@banquette/dependency-injection";
import { ExceptionFactory, UsageException } from "@banquette/exception";
import { ValueChangedFormEvent, ComponentNotFoundException, FormArray, FormComponentInterface, FormControl, FormGroupInterface, FormObject } from "@banquette/form";
import {
    ModelMetadataService,
    ModelTransformMetadataService,
    ModelWatcherService,
    TransformResult,
    TransformContext,
    TransformService,
    TransformerInterface,
    ModelFactory,
    ensureCompleteTransformer
} from "@banquette/model";
import { MutationType, MutationEvent } from "@banquette/object-observer";
import { proxy } from "@banquette/utils-misc";
import {ensureArray, isObject, isUndefined, Complete, Constructor, isConstructor} from "@banquette/utils-type";
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

    private contextStack: Array<{ctor: Constructor, property: string, value: any}>;
    private canMutateForm: boolean = false;
    private ignoreFormUpdate: boolean = false;
    private ignoreModelUpdate: boolean = false;

    private get currentContextCtor(): Constructor {
        for (let i = this.contextStack.length - 1; i >= 0; --i) {
            if (this.contextStack[i].ctor !== Array) {
                return this.contextStack[i].ctor;
            }
        }
        return this.model.constructor;
    }

    private get currentContextProperty(): string|null {
        for (let i = this.contextStack.length - 1; i >= 0; --i) {
            if (this.contextStack[i].ctor !== Array) {
                return this.contextStack[i].property;
            }
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
            this.pushContext(model.constructor as Constructor, property, model);
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
                this.pushContext(treeItem.ctor, childName, modelContainer[property]);
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
                this.pushContext(Array, String(i), modelContainer[property]);
                this.syncFormWithModelPart(
                    treeItem.children['*'],
                    componentResult.component,
                    modelValue,
                    i
                );
                this.popContext();
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
                    newValue = this.handleTransformResult<any>(treeItem.valueTransformer.transform(this.buildTransformContext(
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
            const component = this.handleTransformResult<FormComponentInterface>(treeItem.transformer.transform(this.buildTransformContext(
                this.currentContextCtor,
                isObject(modelContainer) ? modelContainer[property] : null,
                this.currentContextProperty
            ))) as T;
            if (!component) {
                return null;
            }
            if (formContainer instanceof FormArray) {
                property = parseInt(property + '', 10);
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
                this.canMutateForm = true;
                this.form.get(event.mutation.path).detach();
            } catch (e) {
                // Ignore
            } finally {
                this.canMutateForm = false;
            }
            return ;
        }
        let contextsDepth = 0;
        const pathParts = event.mutation.pathParts;
        const lastPathPart = pathParts[pathParts.length - 1];
        const pushContext = (ctor: Constructor, property: string, value: any) => ++contextsDepth && this.pushContext(ctor, property, value);
        try {
            let formContainer: FormGroupInterface = this.form;
            let modelContainer = this.model;
            let treeContainer: any = this.getModelTransformersTree(this.model.constructor);
            let currentCtor = this.model.constructor;
            for (let i = 0; i < pathParts.length; ++i) {
                let treeChildName = treeContainer.transformer.type === FormArrayTransformerSymbol ? '*' : pathParts[i];
                treeContainer = treeContainer.children[treeChildName];
                if (isUndefined(treeContainer)) {
                    return ;
                }
                if (i > 0) {
                    formContainer = (formContainer as FormGroupInterface).get<FormGroupInterface>(pathParts[i - 1]);
                    modelContainer = modelContainer[pathParts[i - 1]];
                }
                pushContext(treeChildName === '*' ? Array : currentCtor, pathParts[i], modelContainer);

                // Required if a change is made to an object used as value in a FormControl.
                // If we do nothing the "path" will lead the binder deep inside the value of the FormControl,
                // which is not a valid form tree, so we must stop when a FormControl is reached.
                if (treeContainer.transformer.type === FormControlTransformerSymbol) {
                    break;
                }
                if (treeContainer.transformer.type === FormObjectTransformerSymbol) {
                    currentCtor = treeContainer.ctor;
                }
            }
            this.mutateForm(() => {
                if (treeContainer.transformer.type === FormControlTransformerSymbol) {
                    this.syncFormControlWithModelAttribute(treeContainer, formContainer, modelContainer, lastPathPart);
                } else if (treeContainer.transformer.type === FormObjectTransformerSymbol) {
                    this.syncFormObjectWithModelAttribute(treeContainer, formContainer, modelContainer, lastPathPart);
                } else if (treeContainer.transformer.type === FormArrayTransformerSymbol) {
                    this.syncFormArrayWithModelAttribute(treeContainer, formContainer, modelContainer, lastPathPart);
                }
            });
        } finally {
            this.popContext(contextsDepth);
        }
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
            let highestConstructor = this.model.constructor;
            for (let i = 1; i < pathParts.length - 1; ++i) {
                if (!isObject(modelContainer[pathParts[i]])) {
                    return;
                }
                modelContainer = modelContainer[pathParts[i]];
                if (isObject(modelContainer) && isConstructor(modelContainer.constructor)) {
                    highestConstructor = modelContainer.constructor;
                }
            }
            if (isObject(modelContainer)) {
                const propName = pathParts[pathParts.length - 1];
                const tree = this.getModelTransformersTree(highestConstructor);
                if (!isUndefined(tree.children[propName])) {
                    modelContainer[propName] = this.handleTransformResult<any>(tree.children[propName].transformer.transformInverse(new TransformContext(
                        null,
                        FormTransformerSymbol,
                        highestConstructor,
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
     * Take a raw Transform result and ensure it is synchronised and not in error.
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
        if (!stack.length) {
            this.transformersTrees.set(ctor, output);
        }
        return output;
    }

    /**
     * Push context data on the stack.
     */
    private pushContext(ctor: Constructor, property: string, value: any): void {
        this.contextStack.push({ctor, property, value});
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
     * Build a new TransformContext while considering the contexts stack.
     */
    private buildTransformContext(ctor: Constructor, value: any, property?: string|null, extras?: Record<string, any>): TransformContext {
        let parentContext: TransformContext|null = new TransformContext(
            null,
            FormTransformerSymbol,
            this.model.constructor,
            this.model,
            null
        );
        for (let i = 0; i < this.contextStack.length - 1; ++i) {
            parentContext = new TransformContext(
                parentContext,
                FormTransformerSymbol,
                this.contextStack[i].ctor,
                this.contextStack[i].value[this.contextStack[i].property],
                this.contextStack[i].property
            );
        }
        return new TransformContext(parentContext, FormTransformerSymbol, ctor, value, property, extras);
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
