import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-form-file', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-750)',
                borderColor: 'var(--bt-color-gray-600)',
                itemBorderColor: 'var(--bt-color-gray-600)',
                browseBorderColor: 'var(--bt-color-gray-600)'
            }
        }
    ]
});

VueThemes.Define('bt-button', {
    dark: [
        {
            match: {parent: 'bt-form-file'},
            cssVars: {
                backgroundHoverColor: 'var(--bt-color-gray-650)',
                backgroundFocusColor: 'var(--bt-color-gray-650)',
                backgroundActiveColor: 'var(--bt-color-gray-650)'
            }
        }
    ]
});
