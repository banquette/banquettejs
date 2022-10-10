/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ThemeWildcard, VariantWildcard } from '@banquette/vue-typescript/theme/constant';
import { VueThemes } from '@banquette/vue-typescript/theme/vue-themes';

var _a;
VueThemes.Define('bt-tag', (_a = {},
    _a[ThemeWildcard] = [
        {
            match: VariantWildcard,
            cssVars: {
                textColor: 'var(--bt-color-primary-contrast)',
                backgroundColor: 'var(--bt-color-primary-500)',
                borderColor: 'var(--bt-color-primary-500)',
                closeFillColor: 'var(--bt-color-primary-150)',
                closeFillHoverColor: 'var(--bt-color-primary-50)',
                closeBackgroundHoverColor: 'var(--bt-color-primary-350)'
            },
            priority: -1
        },
        {
            match: 'success',
            cssVars: {
                textColor: 'var(--bt-color-green-contrast)',
                backgroundColor: 'var(--bt-color-green-500)',
                borderColor: 'var(--bt-color-green-500)',
                closeFillColor: 'var(--bt-color-green-150)',
                closeFillHoverColor: 'var(--bt-color-green-50)',
                closeBackgroundHoverColor: 'var(--bt-color-green-350)'
            }
        },
        {
            match: 'warning',
            cssVars: {
                textColor: 'var(--bt-color-orange-contrast)',
                backgroundColor: 'var(--bt-color-orange-500)',
                borderColor: 'var(--bt-color-orange-500)',
                closeFillColor: 'var(--bt-color-orange-150)',
                closeFillHoverColor: 'var(--bt-color-orange-50)',
                closeBackgroundHoverColor: 'var(--bt-color-orange-350)'
            }
        },
        {
            match: 'danger',
            cssVars: {
                textColor: 'var(--bt-color-red-contrast)',
                backgroundColor: 'var(--bt-color-red-500)',
                borderColor: 'var(--bt-color-red-500)',
                closeFillColor: 'var(--bt-color-red-150)',
                closeFillHoverColor: 'var(--bt-color-red-50)',
                closeBackgroundHoverColor: 'var(--bt-color-red-350)'
            }
        },
        {
            match: 'dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-100)',
                backgroundColor: 'var(--bt-color-gray-800)',
                borderColor: 'var(--bt-color-gray-800)',
                closeFillColor: 'var(--bt-color-gray-400)',
                closeFillHoverColor: 'var(--bt-color-gray-200)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-650)'
            }
        },
        {
            match: 'light',
            cssVars: {
                textColor: 'var(--bt-color-gray-700)',
                backgroundColor: 'var(--bt-color-gray-50)',
                borderColor: 'var(--bt-color-gray-50)',
                closeFillColor: 'var(--bt-color-gray-600)',
                closeFillHoverColor: 'var(--bt-color-gray-650)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-200)'
            }
        },
        /**
         * Faded
         */
        {
            match: 'faded',
            cssVars: {
                textColor: 'var(--bt-color-primary)',
                backgroundColor: 'rgba(var(--bt-color-primary-rgb), 0.1)',
                borderColor: 'rgba(var(--bt-color-primary-rgb), 0.4)',
                closeFillColor: 'var(--bt-color-primary-500)',
                closeFillHoverColor: 'var(--bt-color-primary-550)',
                closeBackgroundHoverColor: 'rgba(var(--bt-color-primary-rgb), 0.2)'
            },
            priority: -1
        },
        {
            match: 'faded success',
            cssVars: {
                textColor: 'var(--bt-color-green)',
                backgroundColor: 'rgba(var(--bt-color-green-rgb), 0.1)',
                borderColor: 'rgba(var(--bt-color-green-rgb), 0.4)',
                closeFillColor: 'var(--bt-color-green-500)',
                closeFillHoverColor: 'var(--bt-color-green-550)',
                closeBackgroundHoverColor: 'rgba(var(--bt-color-green-rgb), 0.2)'
            }
        },
        {
            match: 'faded warning',
            cssVars: {
                textColor: 'var(--bt-color-orange)',
                backgroundColor: 'rgba(var(--bt-color-orange-rgb), 0.1)',
                borderColor: 'rgba(var(--bt-color-orange-rgb), 0.4)',
                closeFillColor: 'var(--bt-color-orange-500)',
                closeFillHoverColor: 'var(--bt-color-orange-550)',
                closeBackgroundHoverColor: 'rgba(var(--bt-color-orange-rgb), 0.2)'
            }
        },
        {
            match: 'faded danger',
            cssVars: {
                textColor: 'var(--bt-color-red)',
                backgroundColor: 'rgba(var(--bt-color-red-rgb), 0.1)',
                borderColor: 'rgba(var(--bt-color-red-rgb), 0.4)',
                closeFillColor: 'var(--bt-color-red-500)',
                closeFillHoverColor: 'var(--bt-color-red-550)',
                closeBackgroundHoverColor: 'rgba(var(--bt-color-red-rgb), 0.2)'
            }
        },
        {
            match: 'faded dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-800)',
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.3)',
                borderColor: 'rgba(var(--bt-color-gray-rgb), 0.7)',
                closeFillColor: 'var(--bt-color-gray-800)',
                closeFillHoverColor: 'var(--bt-color-gray-800)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-300)'
            }
        },
        {
            match: 'faded light',
            cssVars: {
                textColor: 'var(--bt-color-gray-650)',
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.1)',
                borderColor: 'rgba(var(--bt-color-gray-rgb), 0.3)',
                closeFillColor: 'var(--bt-color-gray-600)',
                closeFillHoverColor: 'var(--bt-color-gray-650)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-200)'
            }
        },
        /**
         * Size
         */
        {
            match: 'sm',
            cssVars: { fontSize: '0.65rem' }
        },
        {
            match: 'md',
            cssVars: { fontSize: '1.1rem' }
        },
        {
            match: 'lg',
            cssVars: { fontSize: '1.25rem' }
        },
        {
            match: 'xl',
            cssVars: { fontSize: '1.5rem' }
        }
    ],
    _a));
