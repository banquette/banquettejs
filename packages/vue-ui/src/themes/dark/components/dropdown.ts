import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-dropdown', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-850)',
                backgroundHoverColor: 'var(--bt-color-gray-800)',
                borderColor: 'var(--bt-color-gray-750)',
                dividerColor: 'var(--bt-color-gray-750)'
            }
        }
    ]
});
