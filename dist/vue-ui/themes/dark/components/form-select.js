/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { VariantWildcard } from '@banquette/vue-typescript/theme/constant';
import { VueThemes } from '@banquette/vue-typescript/theme/vue-themes';

VueThemes.Define('bt-form-select', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-750)',
                borderColor: 'var(--bt-color-gray-600)',
                addonBackgroundColor: 'var(--bt-color-gray-650)',
                // Choice
                choiceBackgroundFocusColor: 'var(--bt-color-gray-650)',
                // Group
                groupLabelTextColor: '#fff',
                groupSeparatorColor: 'var(--bt-color-gray-600)',
                // Tag
                tagBackgroundColor: 'var(--bt-color-gray-700)',
                tagBorderColor: 'var(--bt-color-gray-600)'
            }
        }
    ]
});
