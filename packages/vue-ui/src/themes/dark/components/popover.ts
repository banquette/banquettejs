import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-popover', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-750)',
                borderColor: 'var(--bt-color-gray-650)'
            },
            cssCode: `
            &.bt-form-base-input-errors-popover {
                --bt-popover-background-color: var(--bt-color-red-500);
                --bt-popover-border-color: var(--bt-color-red-500);
                --bt-popover-text-color: #fff;
            }
            `
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
