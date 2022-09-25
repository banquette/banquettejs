import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

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
