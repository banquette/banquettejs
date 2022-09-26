import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-tree', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                itemBackgroundHoverColor: 'var(--bt-color-gray-600)'
            }
        }
    ]
});
