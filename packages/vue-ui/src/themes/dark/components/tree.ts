import { VariantWildcard, VueThemes } from "@banquette/vue-typescript";

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
