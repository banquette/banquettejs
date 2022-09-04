import { VueThemes, VariantWildcard } from "@banquette/vue-typescript";

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
