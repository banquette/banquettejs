import { extractCssSelectors } from "../theme/utils/extract-css-selectors";
import { injectContextInCssSource } from "../theme/utils/inject-context-in-css-source";

describe('Selectors extraction', () => {
    const tests: Record<string, string[]> = {
        '      {}'                                          : [],
        'h1{}'                                              : ['h1'],
        '#my_id{}'                                          : ['#my_id'],
        '#my_id, p {}'                                      : ['#my_id', 'p'],
        '#my_id p {}'                                       : ['#my_id p'],
        'p, h1, \n#my_id{}'                                 : ['p', 'h1', '#my_id'],
        '*{}'                                               : ['*'],
        '  div ~   h3{}'                                    : ['div ~   h3'],
        'div + h3{}'                                        : ['div + h3'],
        '   div + h3 > * {}'                                : ['div + h3 > *'],
        "div + h3 ~ .other\n + .test\n > .inner::before{}"  : ['div + h3 ~ .other\n + .test\n > .inner::before'],
        ' a:visited{}'                                      : ['a:visited'],
        'input[type = checkbox]:checked + label{}'          : ['input[type = checkbox]:checked + label'],
        'ul \nli:first-child{}'                             : ['ul \nli:first-child'],
        'div.sub:hover{}'                                   : ['div.sub:hover'],
        'p::before{}'                                       : ['p::before'],
        'p.my_class::first-line{}'                          : ['p.my_class::first-line'],
        'p[lang]{}'                                         : ['p[lang]'],
        'p[title $= "abc"],p.my_class::first-line{}'        : ['p[title $= "abc"]', 'p.my_class::first-line'],
        'p[title ~= "\'{color: red}"]{}'                    : ['p[title ~= "\'{color: red}"]'],
        'p[title *= "rt,v"], p[title|="abc"]{}'             : ['p[title *= "rt,v"]', 'p[title|="abc"]'],
        'h4[title*="new"]{}'                                : ['h4[title*="new"]'],
        '@media print { .foo { color: red }}'               : ['.foo'],
        'h4 {} @media print { .foo { color: red }}'         : ['h4', '.foo'],
        'h4 {} @media print { p, p[title|="abc"]{}}'        : ['h4', 'p', 'p[title|="abc"]'],
    };
    for (const input of Object.keys(tests)) {
        test(input, () => {
            const selectors = extractCssSelectors(input);
            const extractedResults = [];
            const substringsResults = [];
            for (const selector of selectors) {
                extractedResults.push(selector[0]);
                substringsResults.push(input.substring(selector[1], selector[2]));
            }
            expect(extractedResults).toEqual(tests[input]);
            expect(substringsResults).toEqual(tests[input]);
        });
    }
});

describe('Context injection', () => {
    const tid = 'themeId';
    const vid = 'variantId';
    const sid = 'data-v-12345';
    const tests: Record<string, string> = {
        '      {}'                                                  : `{}`,
        'h1{}'                                                      : `.${tid} [${vid}] h1[${sid}]{}`,
        '#my_id{}'                                                  : `.${tid} [${vid}] #my_id[${sid}]{}`,
        '#my_id, & p {}'                                            : `.${tid} [${vid}] #my_id[${sid}], .${tid}  [${vid}]p[${sid}] {}`,
        '#my_id p {}'                                               : `.${tid} [${vid}] #my_id p[${sid}] {}`,
        '& p, h1, &#my_id{}'                                        : `.${tid}  [${vid}]p[${sid}], .${tid} [${vid}] h1[${sid}], .${tid} [${vid}]#my_id[${sid}]{}`,
        '*{}'                                                       : `.${tid} [${vid}] *[${sid}]{}`,
        'div ~ h3{}'                                                : `.${tid} [${vid}] div ~ h3[${sid}]{}`,
        'div + h3{}'                                                : `.${tid} [${vid}] div + h3[${sid}]{}`,
        'div + h3 > * {}'                                           : `.${tid} [${vid}] div + h3 > *[${sid}] {}`,
        '&div + h3 ~ .other + .test > .inner::before{}'             : `.${tid} [${vid}]div + h3 ~ .other + .test > .inner[${sid}]::before{}`,
        'a:visited{}'                                               : `.${tid} [${vid}] a[${sid}]:visited{}`,
        'input[type = checkbox]:checked + label{}'                  : `.${tid} [${vid}] input[type = checkbox]:checked + label[${sid}]{}`,
        'ul li:first-child{}'                                       : `.${tid} [${vid}] ul li[${sid}]:first-child{}`,
        'div.sub:hover{}'                                           : `.${tid} [${vid}] div.sub[${sid}]:hover{}`,
        'p::before{}'                                               : `.${tid} [${vid}] p[${sid}]::before{}`,
        'p.my_class::first-line{}'                                  : `.${tid} [${vid}] p.my_class[${sid}]::first-line{}`,
        'p[lang]{}'                                                 : `.${tid} [${vid}] p[lang][${sid}]{}`,
        'p[title $= "abc"]{}'                                       : `.${tid} [${vid}] p[title $= "abc"][${sid}]{}`,
        '&p[title ~= "\'{color: red}"]{}'                           : `.${tid} [${vid}]p[title ~= "\'{color: red}"][${sid}]{}`,
        ' & p[title *= "rt"],  &     p[title|="abc"]{}'             : `.${tid}  [${vid}]p[title *= "rt"][${sid}],  .${tid}      [${vid}]p[title|="abc"][${sid}]{}`,
        'h4[title*="new"]{}'                                        : `.${tid} [${vid}] h4[title*="new"][${sid}]{}`,
        '@media print { .foo { color: red }}'                       : `@media print { .${tid} [${vid}] .foo[${sid}] { color: red }}`,
        'h4 {} @media print { .foo { color: red }}'                 : `.${tid} [${vid}] h4[${sid}] {} @media print { .${tid} [${vid}] .foo[${sid}] { color: red }}`,
        'h1 span:not(:hover) {}'                                    : `.${tid} [${vid}] h1 span[${sid}]:not(:hover) {}`,
        'h1 span::before:hover {}'                                  : `.${tid} [${vid}] h1 span[${sid}]::before:hover {}`,
        'h1 span:hover p:hover {}'                                  : `.${tid} [${vid}] h1 span:hover p[${sid}]:hover {}`,
        'h1 span:hover p {}'                                        : `.${tid} [${vid}] h1 span:hover p[${sid}] {}`,
        'h4 {} @media print { p, &p[title|="abc"]{}}'               : `.${tid} [${vid}] h4[${sid}] {} @media print { .${tid} [${vid}] p[${sid}], .${tid} [${vid}]p[title|="abc"][${sid}]{}}`,
        '.baz .qux :deep(.foo .bar) {}'                             : `.${tid} [${vid}] .baz .qux[${sid}] .foo .bar {}`,
        '.baz:before .qux .foo .bar > span {}'                      : `.${tid} [${vid}] .baz:before .qux .foo .bar > span[${sid}] {}`,
        '.baz .qux .foo:hover .bar span {}'                         : `.${tid} [${vid}] .baz .qux .foo:hover .bar span[${sid}] {}`,
        '.baz .qux .foo::before {}'                                 : `.${tid} [${vid}] .baz .qux .foo[${sid}]::before {}`,
        '.baz:before .qux :deep(.foo .bar) > span {}'               : `.${tid} [${vid}] .baz:before .qux[${sid}] .foo .bar > span {}`,
        '.baz .qux :deep(.foo .bar) > span {}'                      : `.${tid} [${vid}] .baz .qux[${sid}] .foo .bar > span {}`,
        '.baz .qux :deep(.foo .bar) > span:hover {}'                : `.${tid} [${vid}] .baz .qux[${sid}] .foo .bar > span:hover {}`,
        '&.baz .qux :deep(.foo .bar) > :deep(.other) span:hover {}' : `.${tid} [${vid}].baz .qux[${sid}] .foo .bar > :deep(.other) span:hover {}`,
        ':deep(.foo) {}'                                            : `.${tid} [${vid}] [${sid}] .foo {}`,
        '.foo {}'                                                   : `.${tid} [${vid}] .foo[${sid}] {}`,
        '&.foo {}'                                                  : `.${tid} [${vid}].foo[${sid}] {}`,
        ':global(.parent) .foo {}'                                  : `.${tid} .parent [${vid}] .foo[${sid}] {}`,
        ':global(.parent) &.foo {}'                                 : `.${tid} .parent [${vid}].foo[${sid}] {}`,
        ':global(.before) &.foo .s {}:global(.after) &.foo .s{}'        : `.${tid} .before [${vid}].foo .s[${sid}] {}.${tid} .after [${vid}].foo .s[${sid}]{}`,
    };

    for (const selector of Object.keys(tests)) {
        test(selector, () => {
            expect(injectContextInCssSource(selector, tid, vid, sid)).toEqual(tests[selector]);
        });
    }
});
