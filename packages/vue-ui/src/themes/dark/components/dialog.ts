import { VariantWildcard, VueThemes } from "@banquette/vue-typescript";

VueThemes.Define('bt-dialog', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                background: 'var(--bt-color-gray-650)',
                borderColor: 'var(--bt-color-gray-600)',
            }
        }
    ]
});
