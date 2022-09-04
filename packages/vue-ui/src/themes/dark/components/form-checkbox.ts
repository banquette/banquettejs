import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

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
