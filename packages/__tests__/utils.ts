import { noop } from "../utils-misc/src";
import { isObject, ensureString } from "../utils-type/src";

let currentTestingFunction: Function = noop;

export function createGenericTestSuite(testFunction: Function, tests: Array<[string, any[], any]|[any[], any]>, method: keyof jest.Matchers<any> = 'toEqual') {
    beforeAll(() => {
        currentTestingFunction = testFunction;
    });
    for (const testItem of tests) {
        (function(_testItem) {
            let args: any[] = [];
            let testName: string = '';
            let expectedResult: any;
            if (_testItem.length === 3) {
                testName = _testItem[0];
                args = _testItem[1];
                expectedResult = _testItem[2];
            } else {
                args = _testItem[0];
                expectedResult = _testItem[1];
                testName = `${testFunction.name}(${args.reduce((acc, i) => {
                    acc.push(`"${ensureString(i)}"`);
                    return acc;
                }, []).join(', ')})`
            }
            test(testName, () => {
                (expect(currentTestingFunction.apply(null, args)) as any)[method](expectedResult);
            });
        })(testItem);
    }
}

export function removeFromObject(obj: any, keys: string[]) {
    if (isObject(obj)) {
        for (const k of keys) {
            delete obj[k];
        }
    }
    return obj;
}
