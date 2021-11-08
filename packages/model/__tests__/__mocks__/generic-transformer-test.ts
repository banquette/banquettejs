import { TransformerInterface, TransformContext, TransformResult, TransformNotSupportedException } from "../../src";
import { Exception } from "@banquette/exception";
import { isUndefined, ensureInteger } from "@banquette/utils-type";

interface Config {
    /**
     * The value to return when "transform" is called.
     *
     * If undefined, the "transform" method will trow a TransformNotSupportedException.
     */
    transform?: any;

    /**
     * The value to return when "transformInverse" is called.
     *
     * If undefined, the "transform" method will trow a TransformInverseNotSupportedException.
     */
    inverse?: any;

    /**
     * If defined the value will be thrown when "transform" is called.
     */
    transformError?: string|Exception;

    /**
     * If defined the value will be thrown when "transformInverse" is called.
     */
    inverseError?: string|Exception;

    /**
     * How much time to wait before returning.
     * If <= 0 the transformer is synchronous.
     *
     * Default is 0.
     */
    delay?: number;
}

/**
 * A configurable fake transformer meant to simulate most behaviors a leaf transformer can have.
 */
export function GenericTransformerTest({transform, inverse, delay, transformError, inverseError}: Config): TransformerInterface {
    const normalizedDelay = ensureInteger(delay, 0);
    const respond = (context: TransformContext, value: any, error: any) => {
        if (!isUndefined(error)) {
            throw error;
        }
        if (isUndefined(value)) {
            throw new TransformNotSupportedException();
        }
        context.result.setResult(value !== null ? value : context.value);
    };
    const respondAfterDelay = (context: TransformContext, delay: number, value: any, error: any) => {
        const promise = new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                try {
                    respond(context, value, error);
                    resolve();
                } catch (e) {
                    reject(e);
                }
            }, delay);
        });
        context.result.delayResponse(promise);
    }
    return {
        /**
         * @inheritDoc
         */
        transform(context: TransformContext): TransformResult {
            if (normalizedDelay > 0) {
                respondAfterDelay(context, normalizedDelay, transform, transformError);
            } else {
                respond(context, transform, transformError);
            }
            return context.result;
        },

        /**
         * @inheritDoc
         */
        transformInverse(context: TransformContext): TransformResult {
            if (normalizedDelay > 0) {
                respondAfterDelay(context, normalizedDelay, inverse, inverseError);
            } else {
                respond(context, inverse, inverseError);
            }
            return context.result;
        }
    }
}
