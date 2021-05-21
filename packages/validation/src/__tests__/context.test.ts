import 'reflect-metadata';
import { UsageException } from "@banquette/core";
import { isArray, isNumber, isObject } from "@banquette/utils";
import { MatchResult } from "../mask/match-result";
import { ValidationContext } from "../validation-context";

function getForPath(root: ValidationContext, path: string): ValidationContext {
    if (path === '/') {
        return root;
    }
    const parts = path.split('/').splice(1);
    let cur: ValidationContext|null = root;
    for (const part of parts) {
        cur = cur.getChild(part);
        if (cur === null) {
            throw `No context found for path "${path}.`;
        }
    }
    return cur;
}

function buildContext(obj: any, selection: string|null = null): ValidationContext {
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

describe('pattern matching', () => {
    const patternsTests: any = {
        'fixed pattern': {
            '/firstName': [['/firstName', 4], ['/', 1]],
            '/category/name': [['/category/name', 4], ['/category', 1], ['/', 1]],
            'category/name': [['/category/name', 4], ['/category', 1], ['/', 1]],
            '/category/name-with-suffix': [['/category/name', 0], ['/category', 1], ['/', 1]],
            '/non-existent': [['/', 1]]
        },
        'star': {
            '/tags/*/color': [['/tags/0/color', 4], ['/tags/1/color', 4], ['/tags/0', 1], ['/tags/1', 1], ['/tags', 1], ['/', 1]],
            '/tags/*/*': [['/tags/0/color', 4], ['/tags/0/name', 4], ['/tags/1/color', 4], ['/tags/1/name', 4], ['/tags/0', 1], ['/tags/1', 1], ['/tags', 1], ['/', 1]],
            '/category/*': [['/category/name', 4], ['/category', 1], ['/', 1]],
            '/*Name': [['/firstName', 4], ['/lastName', 4], ['/', 1]]
        },
        'globstar': {
            '/**/name': [['/category/name', 4], ['/articles/0/category/name', 4], ['/articles/1/category/name', 4], ['/tags/0/name', 4], ['/tags/1/name', 4], 1],
            '/**/category/*': [['/category/name', 4], ['/articles/0/category/name', 4], ['/articles/1/category/name', 4], 1],
            '/tags/**': [['/tags', 4], ['/tags/0/color', 4], ['/tags/0/name', 4], ['/tags/1/color', 4], ['/tags/1/name', 4], ['/tags/0', 4], ['/tags/1', 4], ['/', 1]],
            '/tags/**/0': [['/tags/0', 4], ['/tags/1', 1], ['/tags/1/name', 1], ['/tags/1/color', 1], ['/tags', 1], ['/', 1]],
            '/tags/**/*': [['/tags/0/color', 4], ['/tags/0/name', 4], ['/tags/1/color', 4], ['/tags/1/name', 4], ['/tags/0', 4], ['/tags/1', 4], ['/tags', 1], ['/', 1]],
            '/**/*': [['/', 1], 4],
            '/**': [4]
        },
        'choices': {
            '/{firstName,lastName}': [['/firstName', 4], ['/lastName', 4], ['/', 1]],
            '/{*Name}': [['/firstName', 4], ['/lastName', 4], ['/', 1]],
            '/{category,tags}/name': [['/category/name', 4], ['/category', 1], ['/tags', 1], ['/', 1]],
            '/**/**/{category,tags}/**/name': [['/tags/0/name', 4], ['/tags/1/name', 4], ['/category/name', 4], ['/articles/0/category/name', 4], ['/articles/1/category/name', 4], 1]
        },
        'special': {
            '/category/name:sync': [['/category/name', 3], ['/category', 1], ['/', 1]],
            '/category/name:async': [['/category/name', 2], ['/category', 1], ['/', 1]],
            ':async': [2], // All asynchronous validators
            ':sync': [3],  // All synchronous validators
            '': [4] // No masks
        }
    };
    let contextsCount: number = 0;
    let contextsMap: Record<string, ValidationContext> = {};
    let context: ValidationContext;
    beforeAll(() => {
        const flattenContext = (context: ValidationContext) => {
            let output = {[context.path]: context};
            for (const child of context.getChildren()) {
                output = Object.assign(output, flattenContext(child));
            }
            return output;
        };
        context = buildContext([
            'firstName',
            'lastName',
            {category: ['name']},
            {tags: [['name', 'color'], ['name', 'color']]},
            {articles: [['title', 'content', {category: ['name']}], ['title', 'content', {category: ['name']}]]}
        ]);
        contextsMap = flattenContext(context);
        contextsCount = Object.keys(contextsMap).length;
    });
    for (const groupName of Object.keys(patternsTests)) {
        describe(groupName, ((_g) => {
            return () => {
                const patterns = Object.keys(patternsTests[_g]);
                for (const pattern of patterns) {
                    test(pattern, () => {
                        expect.assertions(contextsCount);
                        const matches = [];
                        let defaultMatchResult = MatchResult.None;
                        if (pattern !== '') {
                            context.setMasks([pattern]);
                        } else {
                            context.setMasks([]);
                        }
                        for (const match of patternsTests[_g][pattern]) {
                            if (isNumber(match)) {
                                defaultMatchResult = match;
                                continue;
                            }
                            matches.push(match[0]);
                            expect(contextsMap[match[0]].matchMask(false)).toEqual(match[1]);
                        }
                        for (const candidate of Object.keys(contextsMap)) {
                            if (matches.indexOf(contextsMap[candidate].path) < 0) {
                                expect(contextsMap[candidate].matchMask(false)).toBe(defaultMatchResult);
                            }
                        }
                    });
                }
            };
        })(groupName));
    }
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
