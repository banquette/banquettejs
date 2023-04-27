import { VariantWildcard, VueThemes } from "@banquette/vue-typescript";

VueThemes.Define('bt-tabs', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                togglesBorderColor: 'var(--bt-color-gray-600)'
            }
        }
    ]
});
