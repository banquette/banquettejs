import 'reflect-metadata';
import { noop } from "@banquette/utils-misc";
import { ensureArray } from "@banquette/utils-type";
import { ltrim } from "../format/ltrim";
import { rtrim } from "../format/rtrim";
import { trim } from "../format/trim";

let currentTestingFunction: Function = noop;

function createTestSuite(testFunction: Function, tests: Record<string, string|[string, string]>) {
    beforeAll(() => {
        currentTestingFunction = testFunction;
    });
    for (const key of Object.keys(tests)) {
        const args = ensureArray(tests[key]);
        test(key, () => {
            expect(currentTestingFunction.apply(null, args)).toBe(args[0]);
        });
    }
}

describe('trim', () => {
    createTestSuite(trim, {
        "   a bc   "        : "a bc",
        "a bc\n\n"          : "a bc",
        "\ta bc"            : "a bc",
        "\n \t"             : "",
        "a b\nc"            : "a b\nc",
        "  + ab+c +"        : "+ ab+c +",
        " + ab+c +"         : ["ab+c", ' +'],
        "   + ab+c +"       : ["ab+c", '+ '],
        "+\n\rab+c + "      : ["ab+c", "+\n\r "],
        "+++\n\rab+ +c +++" : ["\rab+ +c", "+\n "]
    });
});

describe('ltrim', () => {
    createTestSuite(ltrim, {
        "   a bc   "        : "a bc   ",
        "a bc\n\n"          : "a bc\n\n",
        "\ta bc"            : "a bc",
        "\n \t"             : "",
        "a b\nc"            : "a b\nc",
        "  + ab+c +"        : "+ ab+c +",
        " + ab+c +"         : ["ab+c +", ' +'],
        "   + ab+c +"       : ["ab+c +", '+ '],
        "+\n\rab+c + "      : ["ab+c + ", "+\n\r "],
        "+++\n\rab+ +c +++" : ["\rab+ +c +++", "+\n "]
    });
});

describe('rtrim', () => {
    createTestSuite(rtrim, {
        "   a bc   "        : "   a bc",
        "a bc\n\n"          : "a bc",
        "\ta bc"            : "\ta bc",
        "\n \t"             : "",
        "a b\nc"            : "a b\nc",
        "  + ab+c +"        : "  + ab+c +",
        " + ab+c +"         : [" + ab+c", ' +'],
        "   + ab+c +"       : ["   + ab+c", '+ '],
        "+\n\rab+c + "      : ["+\n\rab+c", "+\n\r "],
        "+++\n\rab+ +c +++" : ["+++\n\rab+ +c", "+\n "]
    });
});
