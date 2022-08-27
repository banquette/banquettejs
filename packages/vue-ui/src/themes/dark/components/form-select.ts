import { VariantWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-form-select', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-850)',
                borderColor: 'var(--bt-color-gray-800)',
                addonBackgroundColor: 'var(--bt-color-gray-800)',

                // Choice
                choiceBackgroundFocusColor: 'var(--bt-color-gray-800)',

                // Group
                groupSeparatorColor: 'var(--bt-color-gray-800)',

                // Tag
                tagBackgroundColor: 'var(--bt-color-gray-900)',
                tagBorderColor: 'var(--bt-color-gray-800)'
            }
        }
    ]
});
