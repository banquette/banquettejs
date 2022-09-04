import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

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
