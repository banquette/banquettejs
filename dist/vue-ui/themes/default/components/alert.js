/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ThemeWildcard } from '@banquette/vue-typescript/theme/constant';
import { VueThemes } from '@banquette/vue-typescript/theme/vue-themes';

var _a, _b;
VueThemes.Define('bt-alert', (_a = {},
    _a[ThemeWildcard] = [
        {
            match: 'primary',
            cssVars: {
                backgroundColor: 'var(--bt-color-primary)',
                textColor: 'var(--bt-color-primary-contrast)',
                closeFillColor: 'var(--bt-color-primary-contrast)',
                closeFillHoverColor: 'var(--bt-color-primary)',
                closeBackgroundHoverColor: 'var(--bt-color-primary-150)'
            }
        },
        {
            match: 'success',
            cssVars: {
                backgroundColor: 'var(--bt-color-green)',
                textColor: 'var(--bt-color-green-contrast)',
                closeFillColor: 'var(--bt-color-green-contrast)',
                closeFillHoverColor: 'var(--bt-color-green-600)',
                closeBackgroundHoverColor: 'var(--bt-color-green-150)',
            }
        },
        {
            match: 'warning',
            cssVars: {
                backgroundColor: 'var(--bt-color-orange)',
                textColor: 'var(--bt-color-orange-contrast)',
                closeFillColor: 'var(--bt-color-orange-contrast)',
                closeFillHoverColor: 'var(--bt-color-orange-600)',
                closeBackgroundHoverColor: 'var(--bt-color-orange-150)',
            }
        },
        {
            match: 'danger',
            cssVars: {
                backgroundColor: 'var(--bt-color-red)',
                textColor: 'var(--bt-color-red-contrast)',
                closeFillColor: 'var(--bt-color-red-contrast)',
                closeFillHoverColor: 'var(--bt-color-red-600)',
                closeBackgroundHoverColor: 'var(--bt-color-red-150)',
            }
        },
        {
            match: 'dark',
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-800)',
                textColor: 'var(--bt-color-white)',
                closeFillColor: 'var(--bt-color-white)',
                closeFillHoverColor: 'var(--bt-color-gray-800)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-500)',
            }
        },
        {
            match: 'light',
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-150)',
                textColor: 'var(--bt-color-gray-750)',
                closeFillColor: 'var(--bt-color-gray-800)',
                closeFillHoverColor: 'var(--bt-color-gray-800)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-300)',
            }
        },
        /**
         * Faded
         */
        {
            match: 'primary faded',
            cssVars: {
                textColor: 'var(--bt-color-primary)',
                backgroundColor: 'rgba(var(--bt-color-primary-rgb), 0.1)',
                closeFillColor: 'var(--bt-color-primary-500)',
                closeFillHoverColor: 'var(--bt-color-primary-550)',
                closeBackgroundHoverColor: 'rgba(var(--bt-color-primary-rgb), 0.2)'
            }
        },
        {
            match: 'success faded',
            cssVars: {
                textColor: 'var(--bt-color-green)',
                backgroundColor: 'rgba(var(--bt-color-green-rgb), 0.1)',
                closeFillColor: 'var(--bt-color-green-500)',
                closeFillHoverColor: 'var(--bt-color-green-550)',
                closeBackgroundHoverColor: 'rgba(var(--bt-color-green-rgb), 0.2)'
            }
        },
        {
            match: 'warning faded',
            cssVars: {
                textColor: 'var(--bt-color-orange)',
                backgroundColor: 'rgba(var(--bt-color-orange-rgb), 0.1)',
                closeFillColor: 'var(--bt-color-orange-500)',
                closeFillHoverColor: 'var(--bt-color-orange-550)',
                closeBackgroundHoverColor: 'rgba(var(--bt-color-orange-rgb), 0.2)'
            }
        },
        {
            match: 'danger faded',
            cssVars: {
                textColor: 'var(--bt-color-red)',
                backgroundColor: 'rgba(var(--bt-color-red-rgb), 0.1)',
                closeFillColor: 'var(--bt-color-red-500)',
                closeFillHoverColor: 'var(--bt-color-red-550)',
                closeBackgroundHoverColor: 'rgba(var(--bt-color-red-rgb), 0.2)'
            }
        },
        {
            match: 'dark faded',
            cssVars: {
                textColor: 'var(--bt-color-gray-800)',
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.3)',
                closeFillColor: 'var(--bt-color-gray-800)',
                closeFillHoverColor: 'var(--bt-color-gray-800)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-300)'
            }
        },
        {
            match: 'light faded',
            cssVars: {
                textColor: 'var(--bt-color-gray-650)',
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.1)',
                closeFillColor: 'var(--bt-color-gray-600)',
                closeFillHoverColor: 'var(--bt-color-gray-650)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-200)'
            }
        },
        /**
         * Rounding
         */
        {
            match: 'rounded-none',
            cssVars: { borderRadius: 'var(--bt-border-radius-none)' }
        },
        {
            match: 'rounded-sm',
            cssVars: { borderRadius: 'var(--bt-border-radius-sm)' }
        },
        {
            match: 'rounded-lg',
            cssVars: { borderRadius: 'var(--bt-border-radius-lg)' }
        },
        {
            match: 'rounded-xl',
            cssVars: { borderRadius: 'var(--bt-border-radius-xl)' }
        } ],
    _a));
/**
 * Progress.
 */
VueThemes.Define('bt-progress-horizontal', (_b = {},
    _b[ThemeWildcard] = [
        {
            match: { parent: 'bt-alert' },
            cssVars: {
                height: '5px',
                backgroundColor: 'rgba(0, 0, 0, .2)',
                valueBackgroundColor: '#fff',
            }
        }
    ],
    _b));
