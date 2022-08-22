import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-tag', {
    dark: [
        {
            match: 'success',
            cssVars: {
                textColor: 'var(--bt-color-green-400)',
                backgroundColor: 'var(--bt-color-green-750)',
                borderColor: 'var(--bt-color-green-700)',
                closeFillColor: 'var(--bt-color-green-400)',
                closeFillHoverColor: 'var(--bt-color-green-400)',
                closeBackgroundHoverColor: 'var(--bt-color-green-800)'
            }
        },
        {
            match: 'warning',
            cssVars: {
                textColor: 'var(--bt-color-orange-400)',
                backgroundColor: 'var(--bt-color-orange-750)',
                borderColor: 'var(--bt-color-orange-700)',
                closeFillColor: 'var(--bt-color-orange-400)',
                closeFillHoverColor: 'var(--bt-color-orange-400)',
                closeBackgroundHoverColor: 'var(--bt-color-orange-800)'
            }
        },
        {
            match: 'danger',
            cssVars: {
                textColor: 'var(--bt-color-red-400)',
                backgroundColor: 'var(--bt-color-red-750)',
                borderColor: 'var(--bt-color-red-700)',
                closeFillColor: 'var(--bt-color-red-400)',
                closeFillHoverColor: 'var(--bt-color-red-400)',
                closeBackgroundHoverColor: 'var(--bt-color-red-800)'
            }
        },
        {
            match: 'dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-400)',
                backgroundColor: 'var(--bt-color-gray-750)',
                borderColor: 'var(--bt-color-gray-700)',
                closeFillColor: 'var(--bt-color-gray-400)',
                closeFillHoverColor: 'var(--bt-color-gray-400)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-800)'
            }
        },
        {
            match: 'light',
            cssVars: {
                textColor: 'var(--bt-color-gray-550)',
                backgroundColor: 'var(--bt-color-gray-50)',
                borderColor: 'var(--bt-color-gray-150)',
                closeFillColor: 'var(--bt-color-gray-500)',
                closeFillHoverColor: 'var(--bt-color-gray-500)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-200)'
            }
        },

        /**
         * Size
         */
        {
            match: 'sm',
            cssVars: {fontSize: '0.65rem'}
        },
        {
            match: 'md',
            cssVars: {fontSize: '1.1rem'}
        },
        {
            match: 'lg',
            cssVars: {fontSize: '1.25rem'}
        },
        {
            match: 'xl',
            cssVars: {fontSize: '1.5rem'}
        },

        /**
         * Outline
         */
        {
            match: 'outline',
            cssVars: {
                backgroundColor: 'none'
            }
        },
        {
            match: 'outline dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-850)',
                'close.hover' : {
                    fillColor: 'var(--bt-color-white)',
                    backgroundColor: 'var(--bt-color-gray-850)'
                }
            }
        }
    ]
});
