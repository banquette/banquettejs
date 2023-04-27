import { VariantWildcard, VueThemes } from "@banquette/vue-typescript";

VueThemes.Define('bt-form-checkbox', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-750)',
                outlineColor: 'var(--bt-color-gray-600)',
            }
        }
    ]
});
