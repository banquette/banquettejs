import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-tag', {
    dark: [
        {
            match: 'success',
            cssVars: {
                textColor: 'var(--bt-color-green-500)',
                backgroundColor: 'var(--bt-color-green-700)',
                borderColor: 'var(--bt-color-green-150)',
                'close.hover' : {
                    fillColor: 'var(--bt-color-green-contrast)',
                    backgroundColor: 'var(--bt-color-green-500)'
                }
            }
        },
        {
            match: 'warning',
            cssVars: {
                textColor: 'var(--bt-color-orange-500)',
                backgroundColor: 'var(--bt-color-orange-50)',
                borderColor: 'var(--bt-color-orange-150)',
                'close.hover' : {
                    fillColor: 'var(--bt-color-orange-contrast)',
                    backgroundColor: 'var(--bt-color-orange-500)'
                }
            }
        },
        {
            match: 'danger',
            cssVars: {
                textColor: 'var(--bt-color-red-500)',
                backgroundColor: 'var(--bt-color-red-50)',
                borderColor: 'var(--bt-color-red-150)',
                'close.hover' : {
                    fillColor: 'var(--bt-color-red-contrast)',
                    backgroundColor: 'var(--bt-color-red-500)'
                }
            }
        },
        {
            match: 'dark',
            cssVars: {
                textColor: 'var(--bt-color-white)',
                backgroundColor: 'var(--bt-color-gray-800)',
                borderColor: 'var(--bt-color-gray-850)',
                'close.hover' : {
                    fillColor: 'var(--bt-color-gray-850)',
                    backgroundColor: 'var(--bt-color-white)'
                }
            }
        },
        {
            match: 'light',
            cssVars: {
                textColor: 'var(--bt-color-gray-550)',
                backgroundColor: 'var(--bt-color-gray-50)',
                borderColor: 'var(--bt-color-gray-150)',
                'close.hover' : {
                    fillColor: 'var(--bt-color-white)',
                    backgroundColor: 'var(--bt-color-gray-500)'
                }
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
