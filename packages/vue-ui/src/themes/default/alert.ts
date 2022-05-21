import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-alert', {
    '*': [
        {
            match: 'primary',
            cssVars: {
                backgroundColor: 'var(--bt-color-primary)',
                textColor: 'var(--bt-color-primary-contrast)',
                closeFillHoverColor: 'var(--bt-color-primary)',
            }
        },
        {
            match: 'success',
            cssVars: {
                backgroundColor: 'var(--bt-color-green)',
                textColor: 'var(--bt-color-green-contrast)',
                closeFillHoverColor: 'var(--bt-color-green-600)',
                closeBackgroundHoverColor: 'var(--bt-color-green-150)',
            }
        },
        {
            match: 'warning',
            cssVars: {
                backgroundColor: 'var(--bt-color-orange)',
                textColor: 'var(--bt-color-orange-contrast)',
                closeFillHoverColor: 'var(--bt-color-orange-600)',
                closeBackgroundHoverColor: 'var(--bt-color-orange-150)',
            }
        },
        {
            match: 'danger',
            cssVars: {
                backgroundColor: 'var(--bt-color-red)',
                textColor: 'var(--bt-color-red-contrast)',
                closeFillHoverColor: 'var(--bt-color-red-600)',
                closeBackgroundHoverColor: 'var(--bt-color-red-150)',
            }
        },
        {
            match: 'dark',
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-700)',
                textColor: 'var(--bt-color-white)',
                closeFillHoverColor: 'var(--bt-color-gray-800)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-500)',
            }
        },
        {
            match: 'light',
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-150)',
                textColor: 'var(--bt-color-gray-600)',
                closeFillHoverColor: 'var(--bt-color-gray-800)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-500)',
            }
        },

        /**
         * Faded
         */
        {
            match: 'primary faded',
            cssVars: {
                backgroundColor: 'var(--bt-color-primary-50)',
                textColor: 'var(--bt-color-primary)'
            }
        },
        {
            match: 'success faded',
            cssVars: {
                backgroundColor: 'var(--bt-color-green-50)',
                textColor: 'var(--bt-color-green)',
                closeBackgroundHoverColor: 'var(--bt-color-green-150)',
            }
        },
        {
            match: 'warning faded',
            cssVars: {
                backgroundColor: 'var(--bt-color-orange-50)',
                textColor: 'var(--bt-color-orange)',
                closeBackgroundHoverColor: 'var(--bt-color-orange-150)',
            }
        },
        {
            match: 'danger faded',
            cssVars: {
                backgroundColor: 'var(--bt-color-red-50)',
                textColor: 'var(--bt-color-red)',
                closeBackgroundHoverColor: 'var(--bt-color-red-150)',
            }
        },
        {
            match: 'dark faded',
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-300)',
                textColor: 'var(--bt-color-gray-800)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-50)',
            }
        },
        {
            match: 'light faded',
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-50)',
                textColor: 'var(--bt-color-gray-600)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-50)',
            }
        },

        /**
         * Rounding
         */
        {
            match: 'rounded-none',
            cssVars: {borderRadius: 'var(--bt-border-radius-none)'}
        },
        {
            match: 'rounded-sm',
            cssVars: {borderRadius: 'var(--bt-border-radius-sm)'}
        },
        {
            match: 'rounded-lg',
            cssVars: {borderRadius: 'var(--bt-border-radius-lg)'}
        },
        {
            match: 'rounded-xl',
            cssVars: {borderRadius: 'var(--bt-border-radius-xl)'}
        },
    ]
});

/**
 * Progress.
 */
VueThemes.Define('bt-progress-horizontal', {
    '*': [
        {
            match: {parent: 'bt-alert'},
            cssVars: {
                height: '5px',
                backgroundColor: 'rgba(0, 0, 0, .2)',
                valueBackgroundColor: '#fff',
            }
        }
    ]
});
