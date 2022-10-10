/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { VariantWildcard } from '@banquette/vue-typescript/theme/constant';
import { VueThemes } from '@banquette/vue-typescript/theme/vue-themes';

VueThemes.Define('bt-popover', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-750)',
                borderColor: 'var(--bt-color-gray-650)'
            },
            cssCode: "\n            &.bt-form-base-input-errors-popover {\n                --bt-popover-background-color: var(--bt-color-red-500);\n                --bt-popover-border-color: var(--bt-color-red-500);\n                --bt-popover-text-color: #fff;\n            }\n            "
        },
        {
            match: 'typings',
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-650)',
                textColor: '#222'
            }
        }
    ]
});
