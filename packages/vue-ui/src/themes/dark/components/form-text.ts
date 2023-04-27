import { VariantWildcard, VueThemes } from "@banquette/vue-typescript";

VueThemes.Define('bt-form-text', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-750)',
                borderColor: 'var(--bt-color-gray-600)',
                addonBackgroundColor: 'var(--bt-color-gray-650)'
            }
        }
    ]
});
