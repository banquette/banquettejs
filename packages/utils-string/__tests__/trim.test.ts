import 'reflect-metadata';
import { ltrim, rtrim, trim } from "../src";
import { createGenericTestSuite } from "../../__tests__/utils";

describe('trim', () => {
    createGenericTestSuite(trim, [
        ["   a bc   "        , "a bc"],
        ["a bc\n\n"          , "a bc"],
        ["\ta bc"            , "a bc"],
        ["\n \t"             , ""],
        ["a b\nc"            , "a b\nc"],
        ["  + ab+c +"        , "+ ab+c +"],
        [" + ab+c +"         , ["ab+c", ' +']],
        ["   + ab+c +"       , ["ab+c", '+ ']],
        ["+\n\rab+c + "      , ["ab+c", "+\n\r "]],
        ["+++\n\rab+ +c +++" , ["\rab+ +c", "+\n "]],
        ["\
        \
        ", ""]
    ]);
});

describe('ltrim', () => {
    createGenericTestSuite(ltrim, [
        ["   a bc   "        , "a bc   "],
        ["a bc\n\n"          , "a bc\n\n"],
        ["\ta bc"            , "a bc"],
        ["\n \t"             , ""],
        ["a b\nc"            , "a b\nc"],
        ["  + ab+c +"        , "+ ab+c +"],
        [" + ab+c +"         , ["ab+c +", ' +']],
        ["   + ab+c +"       , ["ab+c +", '+ ']],
        ["+\n\rab+c + "      , ["ab+c + ", "+\n\r "]],
        ["+++\n\rab+ +c +++" , ["\rab+ +c +++", "+\n "]]
    ]);
});

describe('rtrim', () => {
    createGenericTestSuite(rtrim, [
        ["   a bc   "        , "   a bc"],
        ["a bc\n\n"          , "a bc"],
        ["\ta bc"            , "\ta bc"],
        ["\n \t"             , ""],
        ["a b\nc"            , "a b\nc"],
        ["  + ab+c +"        , "  + ab+c +"],
        [" + ab+c +"         , [" + ab+c", ' +']],
        ["   + ab+c +"       , ["   + ab+c", '+ ']],
        ["+\n\rab+c + "      , ["+\n\rab+c", "+\n\r "]],
        ["+++\n\rab+ +c +++" , ["+++\n\rab+ +c", "+\n "]]
    ]);
});
