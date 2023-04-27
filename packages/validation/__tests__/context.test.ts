import { UsageException } from "@banquette/exception";
import { isArray, isObject } from "@banquette/utils-type";
import { ValidationContext } from "../src";
import { ValidationContextInterface } from "../src/validation-context.interface";

function getForPath(root: ValidationContext, path: string): ValidationContextInterface {
    if (path === '/') {
        return root;
    }
    const parts = path.split('/').splice(1);
    let cur: ValidationContextInterface|null = root;
    for (const part of parts) {
        cur = cur.getChild(part);
        if (cur === null) {
            throw `No context found for path "${path}.`;
        }
    }
    return cur;
}

function buildContext(obj: any, selection: string|null = null): ValidationContextInterface {
    const doBuild = (parent: ValidationContext, obj: any): void => {
        for (const key of Object.keys(obj)) {
            if (isObject(obj[key])) {
                doBuild(isArray(obj[key]) ? new ValidationContext(parent, key, null, []) : parent, obj[key]);
            } else {
                new ValidationContext(parent, obj[key], null, []);
            }
        }
    };
    const root = new ValidationContext(null, null, null, []);
    doBuild(root, obj);
    return selection !== null ? getForPath(root, selection) : root;
}

describe('basics', () => {
    test('name constraints', () => {
        expect(buildContext(['valid', ' Na_me'])).toBeInstanceOf(ValidationContext);
        expect(() => buildContext(['invalid/name'])).toThrow(UsageException);
        expect(() => buildContext(['invalid*'])).toThrow(UsageException);
    });

    test('absolute path', () => {
        const context = buildContext({category: ['name']}, '/category/name');
        expect(context.path).toEqual('/category/name');
        expect(context.parent?.path).toEqual('/category');
        expect(context.parent?.parent?.path).toEqual('/');
    });
});

describe('tree traversal', () => {
    let contextConfiguration: any;
    const tests: Array<[string /* starting context */, any /* path to test */, string|null /* expected result */]> = [
        ['/category/name', '/firstName', '/firstName'],
        ['/category/name', '..', '/category'],
        ['/tags/0/name', '../color', '/tags/0/color'],
        ['/tags/0/name', 'color', null],
        ['/tags/0', './color', '/tags/0/color'],
        ['/', './articles/1/category/name', '/articles/1/category/name'],
        ['/', 'articles/1/../../././tags', '/tags'],
        ['/', './articles/...', null],
        ['/', null, null],
        ['/', undefined, null]
    ];
    beforeAll(() => {
        contextConfiguration = [
            'firstName',
            'lastName',
            {category: ['name']},
            {tags: [['name', 'color'], ['name', 'color']]},
            {articles: [['title', 'content', {category: ['name']}], ['title', 'content', {category: ['name']}]]}
        ];
    });
    for (let i = 0; i < tests.length; ++i) {
        test(`Test ${ i + 1}`, () => {
            const context = buildContext(contextConfiguration, tests[i][0]);
            const expectation = expect(context.getOtherContext(tests[i][1]));
            if (tests[i][2] !== null) {
                expectation.toMatchObject({path: tests[i][2]});
            } else {
                expectation.toBeNull();
            }
        });
    }
});
