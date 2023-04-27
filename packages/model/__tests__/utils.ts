import { Injector } from "@banquette/dependency-injection";
import { Exception } from "@banquette/exception";
import { isNullOrUndefined, isUndefined, Constructor } from "@banquette/utils-type";
import { TransformService, TransformResultStatus, TransformResult } from "../src";

const transformService = Injector.Get(TransformService);

export type TransformResultExpectations = {
    resultEqual?: any;
    resultInstanceOf?: Constructor;
    resultMatchObject?: any;
    errorType?: String | Constructor<Exception>;
    errorMessage?: string;
    status?: TransformResultStatus;

    // Should the result contain a promise?
    promise?: boolean;
};

/**
 * Check that a TransformResult match a set a criteria.
 */
export function checkTransformResult(result: TransformResult, expected: TransformResultExpectations): void {
    if (!isUndefined(expected.resultEqual)) {
        expect(result.result).toEqual(expected.resultEqual);
    }
    if (!isUndefined(expected.resultInstanceOf)) {
        expect(result.result).toBeInstanceOf(expected.resultInstanceOf);
    }
    if (!isUndefined(expected.resultMatchObject)) {
        expect(result.result).toMatchObject(expected.resultMatchObject);
    }
    if (!isUndefined(expected.errorType) || !isUndefined(expected.errorMessage)) {
        expect(result.error).toEqual(true);
    }
    if (!isUndefined(expected.errorType)) {
        expect(result.errorDetail).toBeInstanceOf(expected.errorType);
    }
    if (!isUndefined(expected.errorMessage)) {
        expect(result.errorDetail?.message).toEqual(expected.errorMessage);
    }
    if (!isUndefined(expected.status)) {
        expect(result.status).toEqual(expected.status);
    }
    if (expected.promise) {
        expect(result.promise).not.toBeNull();
    }
}

/**
 * Transform a model into something else and use the result to do the inverse transformation
 * and check for each stop for a set of expectations.
 */
export function transformAndCheck(modelInstance: any,
                           transformType: symbol,
                           transformExpectedResult?: TransformResultExpectations|null,
                           transformInverseExpectedResult?: TransformResultExpectations|null): void {
    const transformResult = transformService.transform(modelInstance, transformType);
    if (!isNullOrUndefined(transformExpectedResult)) {
        checkTransformResult(transformResult, transformExpectedResult);
    }
    if (transformResult.ready && !isNullOrUndefined(transformInverseExpectedResult)) {
        const transformInverseResult = transformService.transformInverse(transformResult.result, modelInstance.constructor, transformType);
        checkTransformResult(transformInverseResult, transformInverseExpectedResult);
    }
}

/**
 * Transform a model into something else and use the result to do the inverse transformation
 * and check for each stop for a set of expectations.
 */
export async function transformAndCheckAsync(modelInstance: any,
                                      transformType: symbol,
                                      transformExpectedResult?: TransformResultExpectations|null,
                                      transformInverseExpectedResult?: TransformResultExpectations|null): Promise<void> {
    const transformResult = transformService.transform(modelInstance, transformType);
    try {
        await transformResult.promise;
    } catch (e) {
        // Nothing specific to do on failure.
    }
    if (!isNullOrUndefined(transformExpectedResult)) {
        checkTransformResult(transformResult, transformExpectedResult);
    }
    const transformInverseResult = transformService.transformInverse(transformResult.result, modelInstance.constructor, transformType);
    try {
        await transformInverseResult.promise;
    } catch (e) {
        // Nothing specific to do on failure.
    }
    if (!isNullOrUndefined(transformInverseExpectedResult)) {
        checkTransformResult(transformInverseResult, transformInverseExpectedResult);
    }
}

/**
 * Ensure the input is a PropertyTransformerInterface.
 */
export function checkIfPropertyTransformer(input: any): void {
    expect(input).toMatchObject({
        transform: expect.any(Function),
        transformInverse: expect.any(Function)
    })
}
