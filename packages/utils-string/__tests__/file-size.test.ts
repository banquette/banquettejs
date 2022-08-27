import { createGenericTestSuite } from "../../__tests__/utils";
import { byteCountToHumanSize, humanSizeToByteCount } from "../src";

describe('byteCountToHumanSize', () => {
    createGenericTestSuite(byteCountToHumanSize, [
        // SI
        ['0 (SI)'        , [0]        , '0 B'],
        ['27 (SI)'       , [27]       , '27 B'],
        ['999 (SI)'      , [999]      , '999 B'],
        ['1000 (SI)'     , [1000]     , '1.0 kB'],
        ['1023 (SI)'     , [1023]     , '1.0 kB'],
        ['1024 (SI)'     , [1024]     , '1.0 kB'],
        ['1728 (SI)'     , [1728]     , '1.7 kB'],
        ['110592 (SI)'   , [110592]   , '110.6 kB'],
        ['7077888 (SI)'  , [7077888]  , '7.1 MB'],
        ['452984832 (SI)', [452984832], '453.0 MB'],

        // Binary
        ['0 (Binary)'        , [0, false]        , '0 B'],
        ['27 (Binary)'       , [27, false]       , '27 B'],
        ['999 (Binary)'      , [999, false]      , '999 B'],
        ['1000 (Binary)'     , [1000, false]     , '1000 B'],
        ['1023 (Binary)'     , [1023, false]     , '1023 B'],
        ['1024 (Binary)'     , [1024, false]     , '1.0 KiB'],
        ['1728 (Binary)'     , [1728, false]     , '1.7 KiB'],
        ['110592 (Binary)'   , [110592, false]   , '108.0 KiB'],
        ['7077888 (Binary)'  , [7077888, false]  , '6.8 MiB'],
        ['452984832 (Binary)', [452984832, false], '432.0 MiB']
    ]);
});


describe('humanSizeToByteCount', () => {
    createGenericTestSuite(humanSizeToByteCount, [
        // Bytes
        [[' 0  B']          , 0],
        [[' 27 B']          , 27],
        [['999B']           , 999],
        [['1000 B']         , 1000],
        [['1023 B ']        , 1023],
        [['7077888 B ']     , 7077888],

        // SI
        [['1.0 kB']         , 1000],
        [['1.7 kB']         , 1700],
        [['110.6    kB ']   , 110600],
        [['7.1MB']          , 7100000],
        [['453.0MB']        , 453000000],

        // Binary
        [['1.0KiB']         , 1024],
        [['1.7 KiB']        , 1741],
        [['108.0     KiB '] , 110592],
        [['6.8MiB']         , 7130317],
        [['432.0MiB']       , 452984832],

        // Bits
        [[' 0  b']          , 0],
        [[' 8  b']          , 1],
        [['1.0 kb']         , 125],
        [['1.0 kib']        , 128],
    ]);
});
