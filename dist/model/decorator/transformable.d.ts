import { TransformerInterface } from "../transformer/transformer.interface";
export declare type TransformerDecorator = (transformer?: TransformerInterface) => any;
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
export declare function Transformable(valueOrRootTransformer: TransformerInterface | TransformerDecorator, ...rootTransformers: TransformerDecorator[]): any;
