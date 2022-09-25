import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-dropdown', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-750)',
                backgroundHoverColor: 'var(--bt-color-gray-650)',
                borderColor: 'var(--bt-color-gray-600)',
                dividerColor: 'var(--bt-color-gray-600)'
            }
        }
    ]
});
