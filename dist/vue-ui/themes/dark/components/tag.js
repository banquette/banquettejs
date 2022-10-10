/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { VueThemes } from '@banquette/vue-typescript/theme/vue-themes';

VueThemes.Define('bt-tag', {
    dark: [
        {
            match: 'faded dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-400)',
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.1)',
                borderColor: 'rgba(var(--bt-color-gray-rgb), 0.4)',
                closeFillColor: 'var(--bt-color-gray-400)',
                closeFillHoverColor: 'var(--bt-color-gray-400)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-800)'
            }
        },
        {
            match: 'faded light',
            cssVars: {
                textColor: 'var(--bt-color-gray-100)',
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.4)',
                borderColor: 'rgba(var(--bt-color-gray-rgb), 0.7)',
                closeFillColor: 'var(--bt-color-gray-500)',
                closeFillHoverColor: 'var(--bt-color-gray-500)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-200)'
            }
        } ]
});
