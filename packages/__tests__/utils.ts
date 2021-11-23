import { noop } from "../utils-misc/src";
import { isArray, ensureString } from "../utils-type/src";

let currentTestingFunction: Function = noop;

export function createGenericTestSuite(testFunction: Function, tests: Array<[any, any|[any, any]]>, method: keyof jest.Matchers<any> = 'toEqual') {
    beforeAll(() => {
        currentTestingFunction = testFunction;
    });
    for (const testItem of tests) {
        if (!isArray(testItem[1]) || (isArray(testItem[0]) && !isArray(testItem[1][0]))) {
            testItem[1] = [testItem[1]];
        }
        const args: any[] = [testItem[0]].concat(testItem[1].slice(1));
        test(ensureString(testItem[0]), () => {
            (expect(currentTestingFunction.apply(null, args)) as any)[method](testItem[1][0]);
        });
    }
}
