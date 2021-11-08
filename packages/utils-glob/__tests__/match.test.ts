import { isArray, isNumber, isNumeric, isObject, isString, isUndefined } from "@banquette/utils-type";
import { MatchType, match, MatchResult } from "../src";

function buildCandidatesIndex(input: any, parent: string = '/'): any {
    let output: any = {[parent]: []};
    if (isObject(input)) {
        for (const current of Object.keys(input)) {
            const currentPath = !isNumeric(current) || isArray(input[current]) ? (parent + (parent !== '/' ? '/' : '') + current) : parent;
            if (isString(input[current])) {
                const parts = input[current].split(':');
                output[parent + (parent !== '/' ? '/' : '') + parts[0]] = parts.slice(1);
            } else {
                Object.assign(output, buildCandidatesIndex(input[current], currentPath));
            }
        }
    }
    return output;
}

describe('pattern matching', () => {
    const candidatesIndex = buildCandidatesIndex([
        'firstName:name',
        'lastName:name',
        {category: ['name']},
        {tags: [['name:tag:name', 'color:tag'], ['name:tag:name', 'color:tag']]},
        {articles: [
            ['title', 'content', {category: ['name']}],
            ['title', 'content', {category: ['name']}]
        ]}
    ]);
    const patternsTests: any = {
        'fixed pattern': {
            '/firstName': [['/firstName', 2], ['/', 1]],
            '/category/name': [['/category/name', 2], ['/category', 1], ['/', 1]],
            'category/name': [0],
            '/category/name-with-suffix': [['/category/name', 0], ['/category', 1], ['/', 1]],
            '/non-existent': [['/', 1]]
        },
        'star': {
            '/tags/*/color': [['/tags/0/color', 2], ['/tags/1/color', 2], ['/tags/0', 1], ['/tags/1', 1], ['/tags', 1], ['/', 1]],
            '/tags/*/*': [['/tags/0/color', 2], ['/tags/0/name', 2], ['/tags/1/color', 2], ['/tags/1/name', 2], ['/tags/0', 1], ['/tags/1', 1], ['/tags', 1], ['/', 1]],
            '/category/*': [['/category/name', 2], ['/category', 1], ['/', 1]],
            '/*Name': [['/firstName', 2], ['/lastName', 2], ['/', 1]]
        },
        'globstar': {
            '/**/name': [['/category/name', 2], ['/articles/0/category/name', 2], ['/articles/1/category/name', 2], ['/tags/0/name', 2], ['/tags/1/name', 2], 1],
            '/**/category/*': [['/category/name', 2], ['/articles/0/category/name', 2], ['/articles/1/category/name', 2], 1],
            '/tags/**': [['/tags', 2], ['/tags/0/color', 2], ['/tags/0/name', 2], ['/tags/1/color', 2], ['/tags/1/name', 2], ['/tags/0', 2], ['/tags/1', 2], ['/', 1]],
            '/tags/**/0': [['/tags/0', 2], ['/tags/1', 1], ['/tags/1/name', 1], ['/tags/1/color', 1], ['/tags', 1], ['/', 1]],
            '/tags/**/*': [['/tags/0/color', 2], ['/tags/0/name', 2], ['/tags/1/color', 2], ['/tags/1/name', 2], ['/tags/0', 2], ['/tags/1', 2], ['/tags', 1], ['/', 1]],
            '/**/*': [['/', 1], 2],
            '/**': [2]
        },
        'choices': {
            '/{firstName,lastName}': [['/firstName', 2], ['/lastName', 2], ['/', 1]],
            '/{*Name}': [['/firstName', 2], ['/lastName', 2], ['/', 1]],
            '/{category,tags}/name': [['/category/name', 2], ['/category', 1], ['/tags', 1], ['/', 1]],
            '/**/**/{category,tags}/**/name': [['/tags/0/name', 2], ['/tags/1/name', 2], ['/category/name', 2], ['/articles/0/category/name', 2], ['/articles/1/category/name', 2], 1]
        },
        'special': {
            '/**:name': [[2, 0], ['/firstName', 2, 2], ['/lastName', 2, 2], ['/tags/0/name', 2, 2], ['/tags/1/name', 2, 2]],
            ':name': [[2, 0], ['/firstName', 2, 2], ['/lastName', 2, 2], ['/tags/0/name', 2, 2], ['/tags/1/name', 2, 2]],
            '/lastName:name': [[0, 0], ['/lastName', 2, 2], ['/firstName', 0, 2], ['/tags/0/name', 0, 2], ['/tags/1/name', 0, 2], ['/', 1, 0]],
             '': [2, 2] // No masks
        }
    };
    const matchAndCheck = (pattern: string, candidate: any) => {
        const result: MatchResult = match(pattern, candidate[0], candidatesIndex[candidate[0]]);
        const exp = {
            candidate: candidate[0],
            pattern: candidate[1],
            tags: !isUndefined(candidate[2]) ? candidate[2] : MatchType.Full
        };
        expect(Object.assign(result, {candidate: candidate[0]})).toMatchObject({
            candidate: candidate[0],
            pattern: candidate[1],
            tags: !isUndefined(candidate[2]) ? candidate[2] : MatchType.Full
        });
    };
    for (const groupName of Object.keys(patternsTests)) {
        describe(groupName, ((_g) => {
            return () => {
                const patterns = Object.keys(patternsTests[_g]);
                for (const pattern of patterns) {
                    test(pattern, () => {
                        const done = [];
                        let defaultPatternMatch: MatchType = MatchType.None;
                        let defaultTagMatch: MatchType = MatchType.Full;
                        for (const candidate of patternsTests[_g][pattern]) {
                            if (isNumber(candidate)) {
                                defaultPatternMatch = candidate;
                            } else if (isNumeric(candidate[0])) {
                                defaultPatternMatch = !isUndefined(candidate[0]) ? candidate[0] : defaultPatternMatch;
                                defaultTagMatch = !isUndefined(candidate[1]) ? candidate[1] : defaultTagMatch;
                            } else {
                                done.push(candidate[0]);
                                matchAndCheck(pattern, candidate);
                            }
                        }
                        for (const path of Object.keys(candidatesIndex)) {
                            if (done.indexOf(path) < 0) {
                                matchAndCheck(pattern, [path, defaultPatternMatch, defaultTagMatch]);
                            }
                        }
                        expect.assertions(Object.keys(candidatesIndex).length);
                    });
                }
            };
        })(groupName));
    }
});
