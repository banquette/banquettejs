/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { VariantWildcard } from '@banquette/vue-typescript/theme/constant';
import { VueThemes } from '@banquette/vue-typescript/theme/vue-themes';

VueThemes.Define('bt-progress-horizontal', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.2)'
            }
        },
        {
            match: 'dark',
            cssVars: {
                valueBackgroundColor: 'var(--bt-color-gray-650)'
            }
        }
    ]
});
