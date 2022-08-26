import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-form-text', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-850)',
                borderColor: 'var(--bt-color-gray-800)',
                addonBackgroundColor: 'var(--bt-color-gray-800)'
            }
        }
    ]
});
