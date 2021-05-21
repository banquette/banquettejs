import 'reflect-metadata';
import { Exception, Injector, SharedConfiguration, SharedConfigurationSymbol, UsageException } from "@banquette/core";
import {
    HttpConfigurationInterface,
    HttpConfigurationSymbol,
    HttpRequestFactory,
    NetworkException,
    RequestException
} from "@banquette/http";
import { ensureArray, extend, isArray, isUndefined, waitForDelay } from "@banquette/utils";
import { buildTestUrl } from "../../../http/src/__tests__/__mocks__/utils";
import '../../../http/src/__tests__/__mocks__/xml-http-request.mock';
import { Callback } from "../type/callback";
import { NotEmpty } from "../type/not-empty";
import { Pattern } from "../type/pattern";
import { SameAs } from "../type/same-as";
import { V } from "../v";
import { ValidationContext } from "../validation-context";
import { ValidationResult, ValidationResultStatus } from "../validation-result";
import { ValidatorContainerInterface } from "../validator-container.interface";
import { ValidatorInterface } from "../validator.interface";
import { ViolationInterface } from "../violation.interface";
import { ValidateAfterDelayTest } from "./__mocks__/type/validate-after-delay.test-validator";

const config: SharedConfiguration = Injector.Get<SharedConfiguration>(SharedConfigurationSymbol);
config.modify<HttpConfigurationInterface>(HttpConfigurationSymbol, {requestRetryCount: 2});

function expectViolationsArrayContaining(violations: Array<{path?: string, type?: string}>|{path?: string, type?: string}): any {
    const arr = [];
    for (const violation of ensureArray(violations)) {
        arr.push(expect.objectContaining(violation));
    }
    return expect.arrayContaining(arr);
}

function expectViolations(foundViolations: ViolationInterface[], expectedViolations: Array<{path?: string, type?: string}>|{path?: string, type?: string}): any {
    const arr = [];
    expectedViolations = ensureArray(expectedViolations);
    for (const expectedViolation of expectedViolations) {
        arr.push(expect.objectContaining(expectedViolation));
    }
    expect(foundViolations).toEqual(expect.arrayContaining(arr));
    expect(foundViolations.length).toEqual(expectedViolations.length);
}

function expectStatus(res: ValidationResult, status: ValidationResultStatus): any {
    do {
        expect(res.valid).toEqual(status === ValidationResultStatus.Valid);
        expect(res.invalid).toEqual(status === ValidationResultStatus.Invalid);
        expect(res.error).toEqual(status === ValidationResultStatus.Error);
        expect(res.waiting).toEqual(status === ValidationResultStatus.Waiting);
        expect(res.status).toEqual(status);
        res = res.parent as any;
    } while (res);
}

function expectResult(res: ValidationResult, condition: any): any {
    if (!isUndefined(condition['valid'])) {
        expectStatus(res, condition.valid ? ValidationResultStatus.Valid : ValidationResultStatus.Invalid);
    }
    if (!isUndefined(condition['invalid'])) {
        expectStatus(res, condition.invalid ? ValidationResultStatus.Invalid : ValidationResultStatus.Valid);
    }
    if (!isUndefined(condition['error'])) {
        if (condition.error) {
            expectStatus(res, ValidationResultStatus.Error);
            expect(res.errorDetail).toBeInstanceOf(Exception);
        } else {
            expect(res.error).toEqual(false);
        }
    }
    if (!isUndefined(condition['errorDetail'])) {
        expect(res.errorDetail).toMatchObject(condition['errorDetail']);
    }
    if (!isUndefined(condition['waiting'])) {
        if (condition.error) {
            expectStatus(res, ValidationResultStatus.Waiting);
        } else {
            expect(res.waiting).toEqual(false);
        }
    }
    if (!isUndefined(condition['violations'])) {
        expect(res.getViolationsArray()).toEqual(expectViolationsArrayContaining(condition.violations));
    }
    if (!isUndefined(condition['!violations'])) {
        expect(res.getViolationsArray()).not.toEqual(expectViolationsArrayContaining(condition['!violations']));
    }
}

async function expectResultAsync(expectedDelay: number|[number, number], res: ValidationResult, conditions: any): Promise<any> {
    expect(res.promise).toBeInstanceOf(Promise);
    const startTime = (new Date()).getTime();
    try {
        await res.promise;
    } catch (e) {
        // We only wait to the promise to finish, the error here doesn't mean anything.
    }
    if (expectedDelay > 0) {
        const delta = (new Date()).getTime() - startTime;
        expect(delta).toBeGreaterThan(Math.round(isArray(expectedDelay) ? expectedDelay[0] : (expectedDelay * 0.9)));
        expect(delta).toBeLessThan(Math.round(isArray(expectedDelay) ? expectedDelay[1] : (expectedDelay * 1.1)));
    }
    return expectResult(res, conditions);
}

function runTests(tests: Array<[number, string|null, Function]>): void {
    for (let i = 0; i < tests.length; ++i) {
        test(tests[i][1] !== null ? (tests[i][1] as string) : `Test ${i + 1}`, ((item) => {
            return () => {
                if (item[0] > 0) {
                    expect.assertions(item[0]);
                    return item[2]();
                }
            };
        })(tests[i]));
    }
}

describe('basic usage', () => {
    test('simple value', () => {
        expect(Pattern(/^[A-Z]/).validate('Test').valid).toEqual(true);
    });

    test('simple object', () => {
        const userValidator = V.Container({
            firstName: V.NotEmpty(),
            lastName: V.NotEmpty(),
            email: V.And(V.NotEmpty(), V.Email())
        });
        expect(userValidator.validate({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com'
        }).valid).toEqual(true);

        const res = userValidator.validate({
            firstName: 'John',
            email: 'john@doe.com'
        });
        expect(res.valid).toEqual(false);
        expect(res.violations.length).toEqual(0);
        expect(res.children[1].violations.length).toEqual(1);
        expect(res.getViolationsArray()).toEqual(expectViolationsArrayContaining({path: '/lastName', type: 'not-empty'}));
    });
});

describe('status', () => {
    test('sync', () => {
        const validator = Pattern(/^[A-Z]/);
        expectStatus(validator.validate('A'), ValidationResultStatus.Valid);
    });

    test('async', async () => {
        const validator = Callback(async () => {
            await waitForDelay(20);
        });
        const validationResult = validator.validate('A');
        expectStatus(validationResult, ValidationResultStatus.Waiting);
        expect(validationResult.promise).toBeInstanceOf(Promise);
        const promiseResult = await validationResult.promise;
        expectStatus(validationResult, ValidationResultStatus.Valid);
        expect(validationResult.promise).toBeNull();
        expect(promiseResult).toBeInstanceOf(ValidationResult);
    });
});

describe('masks', () => {
    const tests: any = {
        '/name': ['/name', [{type: 'name'}]],
        'name': ['name', [{type: 'name'}]],
        '[/name, /email]': [['/name', '/email'], [{type: 'name'}, {type: 'email-1'}]],
        '/{name, email}': ['/{name, email}', [{type: 'name'}, {type: 'email-1'}]],
        '/tags/*/name': ['/tags/*/name', [{path: '/tags/0/name'}, {path: '/tags/1/name'}]],
        '/tags/*/*': ['/tags/*/*', [{path: '/tags/0/name'}, {path: '/tags/0/color'}, {path: '/tags/1/name'}, {path: '/tags/1/color'}]],
        '/tags': ['/tags', [{type: 'tags-max'}]],
        '/tags/*': ['/tags/*', []], // Because "/tags/*" only matches "/tags/0" and "/tags/1".
        '/tags/**': ['/tags/**', [{type: 'tags-max'}, {path: '/tags/0/name'}, {path: '/tags/0/color'}, {path: '/tags/1/name'}, {path: '/tags/1/color'}]],
        '/tags/**/*': ['/tags/**/*', [{path: '/tags/0/name'}, {path: '/tags/0/color'}, {path: '/tags/1/name'}, {path: '/tags/1/color'}]],
        '/tags/**/**/**': ['/tags/**/**/**', [{type: 'tags-max'}, {path: '/tags/0/name'}, {path: '/tags/0/color'}, {path: '/tags/1/name'}, {path: '/tags/1/color'}]],
        '/**': ['/**', [{type: 'name'}, {type: 'email-1'}, {type: 'tags-max'}, {path: '/tags/0/name'}, {path: '/tags/0/color'}, {path: '/tags/1/name'}, {path: '/tags/1/color'}]],
        '**': ['**', [{type: 'name'}, {type: 'email-1'}, {type: 'tags-max'}, {path: '/tags/0/name'}, {path: '/tags/0/color'}, {path: '/tags/1/name'}, {path: '/tags/1/color'}]],
        '/**/name': ['/**/name', [{path: '/name'}, {path: '/tags/0/name'}, {path: '/tags/1/name'}]] // "**" will match {0,N} levels
    };
    let validator: ValidatorInterface = V.Container({});
    beforeAll(() => {
        validator = V.Container({
            name: V.Invalid('', 'name'),
            email: V.And(
                V.Invalid('', 'email-1'),
                V.Invalid('', 'email-2')
            ),
            tags: V.Compose(
                V.Invalid('', 'tags-max'),
                V.Foreach(
                    V.Container({
                        name: V.Invalid('', 'tag-name'),
                        color: V.Invalid('', 'tag-color')
                    })
                )
            )
        });
    });

    describe('validation', () => {
        for (let mask of Object.keys(tests)) {
            test(mask, () => void expectViolations(validator.validate({tags: [{}, {}]}, tests[mask][0]).getViolationsArray(), tests[mask][1]));
        }
    });

    describe('violations', () => {
        let result: ValidationResult = new ValidationResult('/');
        beforeAll(() => {
            result = validator.validate({
                tags: [{}, {}]
            });
        });
        for (let mask of Object.keys(tests)) {
            test(mask, () => void expectViolations(result.getViolationsArray(tests[mask][0]), tests[mask][1]));
        }
    });
});

/**
 * Test all built-in validators independently.
 */
describe('validators', () => {
    describe('And', () => {
        runTests([
            [6, null, () => expectResult(V.And(V.NotEmpty(), V.Min(5)).validate('Test'), {valid: false, violations: [{type: 'min'}]})],
            [5, null, () => expectResult(V.And(V.NotEmpty(), V.Min(5)).validate('Test!'), {valid: true})],
            [7, null, () => expectResult(V.And(V.NotEmpty(), V.Min(5)).validate(''), {valid: false, violations: [{type: 'not-empty'}], "!violations": [{type: 'min'}]})],
            [10, null, () => expectResultAsync(40, V.And(ValidateAfterDelayTest(), ValidateAfterDelayTest(), V.NotEmpty(), ValidateAfterDelayTest(), V.Min(5)).validate(''), {valid: false, violations: [{type: 'not-empty'}], "!violations": [{type: 'min'}]})],
            [5, null, () => expectResult(V.And(V.NotEmpty(), V.And(V.Min(2), V.Max(3))).validate('abc'), {valid: true})],
            [6, null, () => expectResult(V.And(V.NotEmpty(), V.And(V.Min(2), V.Max(3))).validate('abcd'), {valid: false, violations: [{type: 'max'}]})],
        ]);
    });

    describe('Or', () => {
        runTests([
            [6, null, () => expectResult(V.Or(V.Empty(), V.Min(5)).validate('Test'), {valid: false, violations: [{type: 'min'}]})],
            [5, null, () => expectResult(V.Or(V.Empty(), V.Min(5)).validate(''), {valid: true})],
            [8, null, () => expectResultAsync(20, V.Or(ValidateAfterDelayTest(), V.Min(5)).validate(''), {valid: true})],
            [8, null, () => expectResultAsync(40, V.Or(ValidateAfterDelayTest(20, 'test'), ValidateAfterDelayTest(20, 'test'), V.NotEmpty(), ValidateAfterDelayTest(20, 'test')).validate('value'), {valid: true})],
        ]);
    });

    describe('Compose', () => {
        runTests([
            [6, null, () => expectResult(V.Compose(V.Empty(), V.Min(5)).validate('Test'), {valid: false, violations: [{type: 'empty'}, {type: 'min'}]})],
            [6, null, () => expectResult(V.Compose(V.NotEmpty(), V.Min(5)).validate(''), {valid: false, violations: [{type: 'not-empty'}, {type: 'min'}]})],
            [9, 'Async behavior', () => expectResultAsync(20, V.Compose(ValidateAfterDelayTest(), V.Min(5)).validate(''), {valid: false, violations: [{type: 'min'}]})],
            [9, 'Parallel execution', () => expectResultAsync(20, V.Compose(ValidateAfterDelayTest(20, 'test1'), V.Min(5), ValidateAfterDelayTest(20, 'test2')).validate('abc'), {valid: false, violations: [{type: 'test1'}, {type: 'test2'}, {type: 'min'}]})]
        ]);
    });

    describe('If', () => {
        runTests([
            [5, null, () => expectResult(V.If(() => true, NotEmpty()).validate(''), {valid: false})],
            [5, null, () => expectResult(V.If(() => false, NotEmpty()).validate(''), {valid: true})],
            [8, null, () => expectResultAsync(20, V.If(async () => {
                await waitForDelay(20);
                return true;
            }, NotEmpty()).validate(''), {valid: false})],
            [8, null, () => expectResultAsync(20, V.If(async () => {
                await waitForDelay(20);
                return false;
            }, NotEmpty()).validate(''), {valid: true})],
            [8, null, () => expectResultAsync(1000, V.If(() => {
                return new Promise((resolve) => {
                    window.setTimeout(() => void resolve(true), 1000);
                });
            }, NotEmpty()).validate(''), {valid: false})]
        ])
    });

    describe('Foreach', () => {
        runTests([
            [5, null, () => expectResult(V.Foreach(V.NotEmpty()).validate(['a', 'b', 'c']), {valid: true})],
            [6, null, () => expectResult(V.Foreach(V.NotEmpty()).validate(['a', '', 'c']), {valid: false, violations: [{path: '/1'}]})],
            [7, null, () => expectResult(V.Foreach(V.NotEmpty()).validate(['a', '', '']), {valid: false, violations: [{path: '/1'}, {path: '/2'}], '!violations': [{path: '/0'}]})],
            [5, null, () => expectResult(V.Foreach(V.NotEmpty()).validate(null), {valid: true})],
            [5, null, () => expectResult(V.Foreach(V.NotEmpty()).validate(undefined), {valid: true})],
            [5, null, () => expectResult(V.Foreach(V.And(V.Min(1), V.Max(1))).validate('abc'), {valid: true})],
            [7, null, () => expectResult(V.Foreach(V.Equal('b')).validate('abc'), {valid: false, violations: [{path: '/0'}, {path: '/2'}], '!violations': [{path: '/1'}]})],
            [7, null, () => expectResult(V.Foreach(V.Equal('b')).validate({attr1: 'a', attr2: 'c', attr3: 'b'}), {valid: false, violations: [{path: '/attr1'}, {path: '/attr2'}], '!violations': [{path: '/attr3'}]})],
            [8, null, () => expectResultAsync(20, V.Foreach(ValidateAfterDelayTest()).validate({attr1: 'a', attr2: 'c', attr3: 'b'}), {valid: true})],
            [10, null, () => expectResultAsync(20, V.Foreach(V.And(ValidateAfterDelayTest(), V.Equal('b'))).validate({attr1: 'a', attr2: 'b'}), {valid: false, violations: [{path: '/attr1'}], '!violations': [{path: '/attr2'}]})]
        ]);
    });

    describe('NotEmpty', () => {
        runTests([
            [5, null, () => expectResult(V.NotEmpty().validate('Test'), {valid: true})],
            [5, null, () => expectResult(V.NotEmpty().validate(''), {valid: false})],
            [5, null, () => expectResult(V.NotEmpty().validate(' '), {valid: true})],
            [5, null, () => expectResult(V.NotEmpty().validate(null), {valid: false})],
            [5, null, () => expectResult(V.NotEmpty().validate(false), {valid: true})],
            [5, null, () => expectResult(V.NotEmpty().validate([]), {valid: false})],
            [5, null, () => expectResult(V.NotEmpty().validate([0]), {valid: true})],
            [5, null, () => expectResult(V.NotEmpty().validate({}), {valid: false})]
        ]);
    });
    describe('Empty', () => {
        runTests([
            [5, null, () => expectResult(V.Empty().validate('Test'), {valid: false})],
            [5, null, () => expectResult(V.Empty().validate(''), {valid: true})],
            [5, null, () => expectResult(V.Empty().validate(' '), {valid: false})],
            [5, null, () => expectResult(V.Empty().validate(null), {valid: true})],
            [5, null, () => expectResult(V.Empty().validate(false), {valid: false})],
            [5, null, () => expectResult(V.Empty().validate([]), {valid: true})],
            [5, null, () => expectResult(V.Empty().validate([0]), {valid: false})],
            [5, null, () => expectResult(V.Empty().validate({}), {valid: true})]
        ]);
    });
    describe('Equal', () => {
        runTests([
            [5, null, () => expectResult(V.Equal('Test').validate('Test'), {valid: true})],
            [5, null, () => expectResult(V.Equal(true).validate(true), {valid: true})],
            [5, null, () => expectResult(V.Equal(true).validate('true'), {valid: false})],
            [5, null, () => expectResult(V.Equal(true, false).validate('true'), {valid: true})],
            [5, null, () => expectResult(V.Equal(null).validate(null), {valid: true})],
            [5, null, () => expectResult(V.Equal(null, false).validate(''), {valid: false})]
        ]);
    });

    describe('Pattern', () => {
        runTests([
            [5, null, () => expectResult(V.Pattern(/^[a-z]/).validate('abc'), {valid: true})],
            [5, null, () => expectResult(V.Pattern(/^[a-z]/).validate(' abc'), {valid: false})],
            [5, null, () => expectResult(V.Pattern(new RegExp("[a-z]+", "i")).validate('aBc'), {valid: true})],
        ]);
    });

    describe('Phone', () => {
        runTests([
            /**
             * Thanks to Dan for the test cases.
             * @source https://www.regextester.com/1978
             */
            [5, null, () => expectResult(V.Phone().validate('0689912549'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('+33698912549'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('+33 6 79 91 25 49'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('+33-6-79-91-25-49'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('(555)-555-5555'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('555-555-5555'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('+1-238 6 79 91 25 49'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('+1-555-532-3455'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('+15555323455'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('55555555555555555555555555'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('+7 06 79 91 25 49'), {valid: true})],
            [5, null, () => expectResult(V.Phone().validate('935 263223 64 949'), {valid: false})],
            [5, null, () => expectResult(V.Phone().validate('067 9 91 254 9'), {valid: false})]
        ]);
    });

    describe('Email', () => {
        /**
         * Thanks to cjaoude for the test cases.
         * @source https://gist.github.com/cjaoude/fd9910626629b53c4d25
         */
        runTests([
            [5, null, () => expectResult(V.Email().validate('email@example.com'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('firstname.lastname@example.com'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('email@subdomain.example.com'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('firstname+lastname@example.com'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('email@[123.123.123.123]'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('"email"@example.com'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('1234567890@example.com'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('email@example-one.com'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('_______@example.com'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('email@example.name'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('email@example.museum'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('email@example.co.jp'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('firstname-lastname@example.com'), {valid: true})],
            [5, null, () => expectResult(V.Email().validate('much.”more\ unusual”@example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('very.unusual.”@”.unusual.com@example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('very.”(),:;<>[]”.VERY.”very@\\ "very”.unusual@strange.example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('plainaddress'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('#@%^%#$@#$@#.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('@example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('Joe Smith <email@example.com>'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('email.example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('email@example@example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('.email@example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('email.@example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('email..email@example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('email@example.com (Joe Smith)'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('email@example'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('email@111.222.333.44444'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('email@example..com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('Abc..123@example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('”(),:;<>[\]@example.com'), {valid: false})],
            [5, null, () => expectResult(V.Email().validate('this\ is"really"not\allowed@example.com'), {valid: false})]
        ]);
    });

    describe('Url', () => {
        /**
         * Thanks to Dan for the test cases.
         * @source https://www.regextester.com/94502
         */
        runTests([
            [5, null, () => expectResult(V.Url().validate('https://www.example.com'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('http://www.example.com'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('www.example.com'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('example.com'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('http://blog.example.com'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('http://www.example.com/product'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('http://www.example.com/products?id=1&page=2'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('http://www.example.com#up'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('http://255.255.255.255'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('255.255.255.255'), {valid: true})],
                [5, null, () => expectResult(V.Url().validate('http://invalid.com/perl.cgi?key= | http://web-site.com/cgi-bin/perl.cgi?key1=value1&key2'), {valid: false})],
                [5, null, () => expectResult(V.Url().validate('http://www.site.com:8008'), {valid: true})]
        ]);
    });

    describe('Callback', () => {
        runTests([
            [6, null, () => expectResult(V.Callback((context: ValidationContext) => void context.result.addViolation('test')).validate('Test'), {
                valid: false,
                violations: {type: 'test'}
            })],
            [6, 'Throw in sync callback', () => expectResult(V.Callback(() => {
                throw "Test error";
            }).validate('Test'), {error: true})],
            [7, 'Throw in async callback', async () => await expectResultAsync(0, V.Callback(async () => {
                throw "Test error";
            }).validate('Test'), {error: true})]
        ]);
    });
    describe('Max', () => {
        runTests([
            [5, null, () => expectResult(V.Max(4).validate('Test'), {valid: true})],
            [5, null, () => expectResult(V.Max(4).validate('Test '), {valid: false})],
            [5, null, () => expectResult(V.Max(-1).validate('Test'), {valid: false})],
            [5, null, () => expectResult(V.Max(5, 'number').validate('42'), {valid: false})],
            [5, null, () => expectResult(V.Max(5).validate('42'), {valid: true})],
            [5, null, () => expectResult(V.Max(5).validate(42), {valid: false})],
            [5, null, () => expectResult(V.Max(5, 'string').validate(42), {valid: true})],
            [5, null, () => expectResult(V.Max(2).validate(true), {valid: true})],
            [5, null, () => expectResult(V.Max(2).validate(false), {valid: true})],
            [5, null, () => expectResult(V.Max(2).validate(null), {valid: true})],
            [5, null, () => expectResult(V.Max(2).validate(undefined), {valid: true})],
            [5, null, () => expectResult(V.Max(3).validate([]), {valid: true})],
            [5, null, () => expectResult(V.Max(3).validate(['a','b','c']), {valid: true})],
            [5, null, () => expectResult(V.Max(3).validate(['a','b','c', 'd']), {valid: false})],
            [5, null, () => expectResult(V.Max(2.5).validate(['a','b']), {valid: true})],
            [5, null, () => expectResult(V.Max(2.5).validate(['a','b', 'c']), {valid: false})],
            [5, null, () => expectResult(V.Max(2).validate({}), {valid: true})],
            [5, null, () => expectResult(V.Max(2).validate({a: 1, b: 1}), {valid: true})],
            [5, null, () => expectResult(V.Max(2).validate({a: 1, b: 1, c: 1}), {valid: false})]
        ]);
    });
    describe('Min', () => {
        runTests([
            [5, null, () => expectResult(V.Min(4).validate('Test'), {valid: true})],
            [5, null, () => expectResult(V.Min(4).validate('Tes'), {valid: false})],
            [5, null, () => expectResult(V.Min(-1).validate('Test'), {valid: true})],
            [5, null, () => expectResult(V.Min(5, 'number').validate('42'), {valid: true})],
            [5, null, () => expectResult(V.Min(5).validate('42'), {valid: false})],
            [5, null, () => expectResult(V.Min(5).validate(42), {valid: true})],
            [5, null, () => expectResult(V.Min(5, 'string').validate(42), {valid: false})],
            [5, null, () => expectResult(V.Min(2).validate(true), {valid: true})],
            [5, null, () => expectResult(V.Min(2).validate(false), {valid: true})],
            [5, null, () => expectResult(V.Min(2).validate(null), {valid: true})],
            [5, null, () => expectResult(V.Min(2).validate(undefined), {valid: true})],
            [5, null, () => expectResult(V.Min(3).validate([]), {valid: false})],
            [5, null, () => expectResult(V.Min(3).validate(['a','b','c']), {valid: true})],
            [5, null, () => expectResult(V.Min(3).validate(['a','b']), {valid: false})],
            [5, null, () => expectResult(V.Min(2.5).validate(['a','b']), {valid: false})],
            [5, null, () => expectResult(V.Min(2.5).validate(['a','b', 'c']), {valid: true})],
            [5, null, () => expectResult(V.Min(2).validate({}), {valid: false})],
            [5, null, () => expectResult(V.Min(2).validate({a: 1, b: 1}), {valid: true})],
            [5, null, () => expectResult(V.Min(2).validate({a: 1}), {valid: false})]
        ]);
    });

    describe('Choice', () => {
        runTests([
            [5, null, () => expectResult(V.Choice(['a', 'b', 'c']).validate('b'), {valid: true})],
            [5, null, () => expectResult(V.Choice(['a', 'b', 'c']).validate('b '), {valid: false})],
            [5, null, () => expectResult(V.Choice(['a', 'b', 'c']).validate('B'), {valid: false})],
            [5, null, () => expectResult(V.Choice([1, 2]).validate('1'), {valid: false})],
            [5, null, () => expectResult(V.Choice([1, 2]).validate(1), {valid: true})],
            [5, null, () => expectResult(V.Choice([1, 2]).validate(1.5), {valid: false})],
            [5, null, () => expectResult(V.Choice([1, 2]).validate(''), {valid: false})],
            [5, null, () => expectResult(V.Choice([1, 2]).validate(null), {valid: false})],
            [5, null, () => expectResult(V.Choice([1, 2]).validate(undefined), {valid: false})],
            [5, null, () => expectResult(V.Choice([{name: 'a', email: 'test@domain.tld'}]).validate({email: 'test@domain.tld', name: 'a'}), {valid: true})],
            [5, null, () => expectResult(V.Choice([{name: 'a', email: 'test@domain.tld'}]).validate({email: 'test@domain.tld', name: 'a', other: 2}), {valid: false})],
            [5, null, () => expectResult(V.Choice([[1, 2], [3, 4]]).validate([3, 4]), {valid: true})],
            [5, null, () => expectResult(V.Choice([[1, 2], [3, 4]]).validate([4, 3]), {valid: false})],
            [5, null, () => expectResult(V.Choice(['a', null, undefined]).validate(null), {valid: true})],
            [5, null, () => expectResult(V.Choice(['a', null, undefined]).validate((jest as any).notExisting), {valid: true})]
        ]);
    });

    describe('Equal', () => {
        runTests([
            [5, null, () => expectResult(V.Equal('a').validate('a'), {valid: true})],
            [5, null, () => expectResult(V.Equal('12').validate('12'), {valid: true})],
            [5, null, () => expectResult(V.Equal(12).validate('12'), {valid: false})],
            [5, null, () => expectResult(V.Equal(12, false).validate('12'), {valid: true})],
            [5, null, () => expectResult(V.Equal(true).validate('true'), {valid: false})],
            [5, null, () => expectResult(V.Equal(true, false).validate('true'), {valid: true})],
            [5, null, () => expectResult(V.Equal({attr1: 'v1', attr2: 'v2'}, false).validate({attr2: 'v2', attr1: 'v1'}), {valid: true})],
            [5, null, () => expectResult(V.Equal({attr1: 'v1', attr2: 'v2'}, false).validate({attr2: 'v2', attr1: 'v1', attr3: 'v3'}), {valid: false})],
            [5, null, () => expectResult(V.Equal([3, 4]).validate([3, 4]), {valid: true})],
            [5, null, () => expectResult(V.Equal([3, 4]).validate([4, 3]), {valid: false})]
        ]);
    });

    describe('SameAs', () => {
        const buildValidator = (overloads: Array<Record<string, ValidatorInterface>>|Record<string, ValidatorInterface> = []) => {
            const validator: ValidatorContainerInterface = V.Container({
                name: V.Valid(),
                email: V.Valid(),
                password: V.Valid(),
                passwordConfirm: V.Valid(),
                tags: V.Foreach(V.Container({
                    name: V.Valid(),
                    color: V.Valid()
                }))
            });
            for (const overload of ensureArray(overloads)) {
                for (const path of Object.keys(overload)) {
                    validator.set(path, overload[path]);
                }
            }
            return validator;
        };
        const buildValue = (value: any = {}) => {
            return extend({}, [{
                name: 'John',
                email: 'john@example.com',
                password: 'test',
                passwordConfirm: 'test',
                tags: [
                    {name: 'tag1', color: '#0f9932'},
                    {name: 'tag2', color: '#b11a6a'}
                ]
            }, value], true);
        };
        runTests([
            [6, null, () => expectResult(buildValidator({passwordConfirm: SameAs('/password')}).validate(buildValue({passwordConfirm: 'invalid'})), {valid: false, violations: [{type: 'same-as'}]})],
            [5, null, () => expectResult(buildValidator({passwordConfirm: SameAs('/password')}).validate(buildValue()), {valid: true})],
            [6, null, () => expectResult(buildValidator({'tags/name': SameAs('../../../name')}).validate(buildValue()), {valid: false, violations: [{type: 'same-as'}]})],
        ]);
    });

    describe('Ajax', () => {
        runTests([
            [6, 'Default behavior', () => expectResultAsync(0, V.Ajax({url: buildTestUrl({responseKey: 'ValidJson'})}).validate('a'), {valid: true})],
            [6, 'String request', () => expectResultAsync(0, V.Ajax(buildTestUrl({responseKey: 'ValidJson'})).validate('a'), {valid: true})],
            [6, 'Null value', () => expectResultAsync(0, V.Ajax({url: buildTestUrl({responseKey: 'ValidJson'})}).validate(null), {valid: true})],
            [6, 'Undefined value', () => expectResultAsync(0, V.Ajax({url: buildTestUrl({responseKey: 'ValidJson'})}).validate(undefined), {valid: true})],
            [8, 'Server error', () => expectResultAsync([50, 80], V.Ajax({url: buildTestUrl({responseKey: 'ServerError', delay: 50})}).validate('a'), {error: true, errorDetail: expect.any(RequestException)})],
            [8, 'Network error', () => expectResultAsync(0, V.Ajax({url: buildTestUrl({delay: 1, networkError: 5})}).validate('a'),  {error: true, errorDetail: expect.any(NetworkException)})],
            [8, 'Invalid request', () => expectResultAsync(0, V.Ajax({url: ''}).validate('a'), {error: true, errorDetail: expect.any(UsageException)})],
            [6, 'HttpRequest input', () => expectResultAsync(0, V.Ajax(HttpRequestFactory.Create({url: buildTestUrl({responseKey: 'ValidJson'})})).validate('a'), {valid: true})]
        ]);
    });

    describe('Valid', () => {
        runTests([
            [5, null, () => expectResult(V.Valid().validate('a random string'), {valid: true})],
            [5, null, () => expectResult(V.Valid().validate(12), {valid: true})],
            [5, null, () => expectResult(V.Valid().validate(''), {valid: true})],
            [5, null, () => expectResult(V.Valid().validate(0), {valid: true})],
            [5, null, () => expectResult(V.Valid().validate(null), {valid: true})],
            [5, null, () => expectResult(V.Valid().validate(undefined), {valid: true})]
        ]);
    });

    describe('Invalid', () => {
        runTests([
            [6, null, () => expectResult(V.Invalid().validate('a random string'), {valid: false, violations: [{type: 'invalid'}]})],
            [6, null, () => expectResult(V.Invalid().validate(12), {valid: false, violations: [{type: 'invalid'}]})],
            [6, null, () => expectResult(V.Invalid('Custom message').validate(''), {valid: false, violations: [{type: 'invalid', message: 'Custom message'}]})],
            [6, null, () => expectResult(V.Invalid('', 'custom-type').validate(0), {valid: false, violations: [{type: 'custom-type', message: ''}]})],
            [6, null, () => expectResult(V.Invalid(undefined, 'custom-type').validate(null), {valid: false, violations: [{type: 'custom-type', message: undefined}]})],
            [6, null, () => expectResult(V.Invalid().validate(undefined), {valid: false, violations: [{type: 'invalid'}]})]
        ]);
    });
});
describe('dynamic validators', () => {
    let person: any = {};
    let validator: ValidatorContainerInterface = V.Container([]);

    beforeEach(() => {
        person = {
            name: 'paul',
            email: 'paul@gmail.com',
            category: {
                name: 'Prospect',
                public: true
            },
            tags: [
                {name: 'vip', color: '#cbbc18'},
                {name: 'dinosaur', color: '#a85d36'}
            ]
        };
        validator = V.Container({
            name: V.NotEmpty(),
            email: V.Email(),
            category: V.Container({
                name: V.NotEmpty()
            }),
            tags: V.Container([
                V.NotEmpty(),
                V.NotEmpty()
            ])
        });
    });
    test('replace a validator (deep)', () => {
        validator.set('category/name', V.Invalid());
        expect(validator.validate(person).getViolationsArray()).toEqual(expect.arrayContaining([expect.objectContaining({type: 'invalid'})]));
    });
});
