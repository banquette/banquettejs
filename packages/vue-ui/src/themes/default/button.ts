import { ThemeWildcard } from "@banquette/vue-typescript/theme/constant";
import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-button', {
    [ThemeWildcard]: [
        {
            match: 'success',
            cssVars: {
                backgroundColor: 'var(--bt-color-green-500)',
                backgroundHoverColor: 'var(--bt-color-green-400)',
                backgroundFocusColor: 'var(--bt-color-green-400)',
                backgroundActiveColor: 'var(--bt-color-green-550)'
            }
        },
        {
            match: 'warning',
            cssVars: {
                backgroundColor: 'var(--bt-color-orange-500)',
                backgroundHoverColor: 'var(--bt-color-orange-400)',
                backgroundFocusColor: 'var(--bt-color-orange-400)',
                backgroundActiveColor: 'var(--bt-color-orange-550)'

            }
        },
        {
            match: 'danger',
            cssVars: {
                backgroundColor: 'var(--bt-color-red-500)',
                backgroundHoverColor: 'var(--bt-color-red-400)',
                backgroundFocusColor: 'var(--bt-color-red-400)',
                backgroundActiveColor: 'var(--bt-color-red-550)'
            }
        },
        {
            match: 'dark',
            cssVars: {
                textColor: 'var(--bt-color-white)',
                backgroundColor: 'var(--bt-color-gray-800)',
                backgroundHoverColor: 'var(--bt-color-gray-700)',
                backgroundFocusColor: 'var(--bt-color-gray-700)',
                backgroundActiveColor: 'var(--bt-color-gray-850)'
            }
        },
        {
            match: 'light',
            cssVars: {
                textColor: 'var(--bt-color-gray-550)',
                backgroundColor: 'var(--bt-color-gray-100)',
                backgroundHoverColor: 'var(--bt-color-gray-50)',
                backgroundFocusColor: 'var(--bt-color-gray-50)',
                backgroundActiveColor: 'var(--bt-color-gray-150)'
            }
        },

        /**
         * Outline
         */
        {
            match: 'outline',
            cssVars: {
                backgroundColor: 'none',
                borderColor: 'var(--bt-color-primary)',
                textColor: 'var(--bt-color-primary)',

                backgroundHoverColor: 'var(--bt-color-primary-50)',
                borderHoverColor: 'var(--bt-color-primary-250)',

                backgroundFocusColor: 'var(--bt-color-primary-50)',
                borderFocusColor: 'var(--bt-color-primary-250)',

                backgroundActiveColor: 'var(--bt-color-primary-50)',
                borderActiveColor: 'var(--bt-color-primary-100)'
            }
        },
        {
            match: 'outline success',
            cssVars: {
                borderColor: 'var(--bt-color-green)',
                textColor: 'var(--bt-color-green)',

                backgroundHoverColor: 'var(--bt-color-green-50)',
                borderHoverColor: 'var(--bt-color-green-250)',

                backgroundFocusColor: 'var(--bt-color-green-50)',
                borderFocusColor: 'var(--bt-color-green-250)',

                backgroundActiveColor: 'var(--bt-color-green-50)',
                borderActiveColor: 'var(--bt-color-green-100)'
            }
        },
        {
            match: 'outline warning',
            cssVars: {
                borderColor: 'var(--bt-color-orange)',
                textColor: 'var(--bt-color-orange)',

                backgroundHoverColor: 'var(--bt-color-orange-50)',
                borderHoverColor: 'var(--bt-color-orange-250)',

                backgroundFocusColor: 'var(--bt-color-orange-50)',
                borderFocusColor: 'var(--bt-color-orange-250)',

                backgroundActiveColor: 'var(--bt-color-orange-50)',
                borderActiveColor: 'var(--bt-color-orange-100)'
            }
        },
        {
            match: 'outline danger',
            cssVars: {
                borderColor: 'var(--bt-color-red)',
                textColor: 'var(--bt-color-red)',

                backgroundHoverColor: 'var(--bt-color-red-50)',
                borderHoverColor: 'var(--bt-color-red-250)',

                backgroundFocusColor: 'var(--bt-color-red-50)',
                borderFocusColor: 'var(--bt-color-red-250)',

                backgroundActiveColor: 'var(--bt-color-red-50)',
                borderActiveColor: 'var(--bt-color-red-100)'
            }
        },
        {
            match: 'outline dark',
            cssVars: {
                borderColor: 'var(--bt-color-gray-800)',
                textColor: 'var(--bt-color-gray-800)',

                backgroundHoverColor: 'var(--bt-color-gray-150)',
                borderHoverColor: 'var(--bt-color-gray-500)',

                backgroundFocusColor: 'var(--bt-color-gray-150)',
                borderFocusColor: 'var(--bt-color-gray-500)',

                backgroundActiveColor: 'var(--bt-color-gray-150)',
                borderActiveColor: 'var(--bt-color-gray-100)'
            }
        },
        {
            match: 'outline light',
            cssVars: {
                borderColor: 'var(--bt-color-gray-450)',
                textColor: 'var(--bt-color-gray-600)',

                backgroundHoverColor: 'var(--bt-color-gray-50)',
                borderHoverColor: 'var(--bt-color-gray-250)',

                backgroundFocusColor: 'var(--bt-color-gray-50)',
                borderFocusColor: 'var(--bt-color-gray-250)',

                backgroundActiveColor: 'var(--bt-color-gray-100)',
                borderActiveColor: 'var(--bt-color-gray-100)'
            }
        },

        /**
         * Link
         */
        {
            match: 'link',
            cssVars: {
                backgroundColor: 'none',
                borderColor: 'transparent',
                textColor: 'var(--bt-color-primary)',

                backgroundHoverColor: 'var(--bt-color-primary-50)',
                textHoverColor: 'var(--bt-color-primary)',

                backgroundFocusColor: 'var(--bt-color-primary-50)',
                textFocusColor: 'var(--bt-color-primary)',

                backgroundActiveColor: 'var(--bt-color-primary-100)',
                textActiveColor: 'var(--bt-color-primary)'
            }
        },
        {
            match: 'link success',
            cssVars: {
                textColor: 'var(--bt-color-green)',

                backgroundHoverColor: 'var(--bt-color-green-50)',
                textHoverColor: 'var(--bt-color-green)',

                backgroundFocusColor: 'var(--bt-color-green-50)',
                textFocusColor: 'var(--bt-color-green)',

                backgroundActiveColor: 'var(--bt-color-green-100)',
                textActiveColor: 'var(--bt-color-green)'
            }
        },
        {
            match: 'link warning',
            cssVars: {
                textColor: 'var(--bt-color-orange)',

                backgroundHoverColor: 'var(--bt-color-orange-50)',
                textHoverColor: 'var(--bt-color-orange)',

                backgroundFocusColor: 'var(--bt-color-orange-50)',
                textFocusColor: 'var(--bt-color-orange)',

                backgroundActiveColor: 'var(--bt-color-orange-100)',
                textActiveColor: 'var(--bt-color-orange)'
            }
        },
        {
            match: 'link danger',
            cssVars: {
                textColor: 'var(--bt-color-red)',

                backgroundHoverColor: 'var(--bt-color-red-50)',
                textHoverColor: 'var(--bt-color-red)',

                backgroundFocusColor: 'var(--bt-color-red-50)',
                textFocusColor: 'var(--bt-color-red)',

                backgroundActiveColor: 'var(--bt-color-red-100)',
                textActiveColor: 'var(--bt-color-red)'
            }
        },
        {
            match: 'link dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-800)',

                backgroundHoverColor: 'var(--bt-color-gray-150)',
                textHoverColor: 'var(--bt-color-gray-750)',

                backgroundFocusColor: 'var(--bt-color-gray-150)',
                textFocusColor: 'var(--bt-color-gray-750)',

                backgroundActiveColor: 'var(--bt-color-gray-200)',
                textActiveColor: 'var(--bt-color-gray-750)'
            }
        },
        {
            match: 'link light',
            cssVars: {
                textColor: 'var(--bt-color-gray-550)',

                backgroundHoverColor: 'var(--bt-color-gray-50)',
                textHoverColor: 'var(--bt-color-gray-550)',

                backgroundFocusColor: 'var(--bt-color-gray-50)',
                textFocusColor: 'var(--bt-color-gray-550)',

                backgroundActiveColor: 'var(--bt-color-gray-100)',
                textActiveColor: 'var(--bt-color-gray-550)'
            }
        },

        /**
         * Size
         */
        {
            match: 'xs',
            cssVars: {
                fontSize: '0.625rem',
                fontWeight: 500,
            }
        },
        {
            match: 'sm',
            cssVars: {
                fontSize: '0.75rem',
                fontWeight: 500,
            }
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
        {
            match: 'rounded-full',
            cssVars: {borderRadius: 'var(--bt-border-radius-full)'},
            cssSelectors: {
                'root.base': {
                    aspectRatio: '1',
                    padding: '0.6em'
                }
            },
            cssCode: '& { aspect-ratio: 1 }'
        }
    ]
});
