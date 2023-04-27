import { isFunction, isUndefined } from "@banquette/utils-type";
import { TransformerInterface } from "../transformer/transformer.interface";

export type TransformerDecorator = (transformer?: TransformerInterface) => any;

/**
 * A shorthand to apply multiple transform decorators in a single line.
 *
 * Usage:
 *
 * `@Transformable(Api, Pojo, Form)`
 *
 * or with a value transformer:
 *
 * `@Transformable(Model(), Api, Pojo)`
 */
export function Transformable(valueOrRootTransformer: TransformerInterface|TransformerDecorator, ...rootTransformers: TransformerDecorator[]): any {
    let valueTransformer = !isFunction(valueOrRootTransformer) ? valueOrRootTransformer: undefined;
    if (isUndefined(valueTransformer)) {
        rootTransformers.push(valueOrRootTransformer as TransformerDecorator);
    }
    return (prototypeOrCtor: any, propertyKey?: string, index?: number) => {
        for (const rootTransformer of rootTransformers) {
            const transformer = rootTransformer(valueTransformer);
            transformer(prototypeOrCtor, propertyKey, index);
        }
    };
}
