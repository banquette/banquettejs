import { ThemeWildcard, VueThemes } from "@banquette/vue-typescript";

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

                backgroundHoverColor: 'rgba(var(--bt-color-primary-rgb), 0.1)',
                borderHoverColor: 'rgba(var(--bt-color-primary-rgb), 0.6)',

                backgroundFocusColor: 'rgba(var(--bt-color-primary-rgb), 0.15)',
                borderFocusColor: 'rgba(var(--bt-color-primary-rgb), 0.6)',

                backgroundActiveColor: 'rgba(var(--bt-color-primary-rgb), 0.15)',
                borderActiveColor: 'transparent'
            }
        },
        {
            match: 'outline success',
            cssVars: {
                borderColor: 'var(--bt-color-green)',
                textColor: 'var(--bt-color-green)',

                backgroundHoverColor: 'rgba(var(--bt-color-green-rgb), 0.1)',
                borderHoverColor: 'rgba(var(--bt-color-green-rgb), 0.6)',

                backgroundFocusColor: 'rgba(var(--bt-color-green-rgb), 0.15)',
                borderFocusColor: 'rgba(var(--bt-color-green-rgb), 0.6)',

                backgroundActiveColor: 'rgba(var(--bt-color-green-rgb), 0.15)',
                borderActiveColor: 'transparent'
            }
        },
        {
            match: 'outline warning',
            cssVars: {
                borderColor: 'var(--bt-color-orange)',
                textColor: 'var(--bt-color-orange)',

                backgroundHoverColor: 'rgba(var(--bt-color-orange-rgb), 0.1)',
                borderHoverColor: 'rgba(var(--bt-color-orange-rgb), 0.6)',

                backgroundFocusColor: 'rgba(var(--bt-color-orange-rgb), 0.15)',
                borderFocusColor: 'rgba(var(--bt-color-orange-rgb), 0.6)',

                backgroundActiveColor: 'rgba(var(--bt-color-orange-rgb), 0.15)',
                borderActiveColor: 'transparent'
            }
        },
        {
            match: 'outline danger',
            cssVars: {
                borderColor: 'var(--bt-color-red)',
                textColor: 'var(--bt-color-red)',

                backgroundHoverColor: 'rgba(var(--bt-color-red-rgb), 0.1)',
                borderHoverColor: 'rgba(var(--bt-color-red-rgb), 0.6)',

                backgroundFocusColor: 'rgba(var(--bt-color-red-rgb), 0.15)',
                borderFocusColor: 'rgba(var(--bt-color-red-rgb), 0.6)',

                backgroundActiveColor: 'rgba(var(--bt-color-red-rgb), 0.15)',
                borderActiveColor: 'transparent'
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

                backgroundHoverColor: 'rgba(var(--bt-color-primary-rgb), 0.1)',
                borderHoverColor: 'transparent',

                backgroundFocusColor: 'rgba(var(--bt-color-primary-rgb), 0.15)',
                borderFocusColor: 'transparent',

                backgroundActiveColor: 'rgba(var(--bt-color-primary-rgb), 0.15)',
                borderActiveColor: 'transparent',
            }
        },
        {
            match: 'link success',
            cssVars: {
                textColor: 'var(--bt-color-green)',
                backgroundHoverColor: 'rgba(var(--bt-color-green-rgb), 0.1)',
                backgroundFocusColor: 'rgba(var(--bt-color-green-rgb), 0.15)',
                backgroundActiveColor: 'rgba(var(--bt-color-green-rgb), 0.15)'
            }
        },
        {
            match: 'link warning',
            cssVars: {
                textColor: 'var(--bt-color-orange)',
                backgroundHoverColor: 'rgba(var(--bt-color-orange-rgb), 0.1)',
                backgroundFocusColor: 'rgba(var(--bt-color-orange-rgb), 0.15)',
                backgroundActiveColor: 'rgba(var(--bt-color-orange-rgb), 0.15)'
            }
        },
        {
            match: 'link danger',
            cssVars: {
                textColor: 'var(--bt-color-red)',
                backgroundHoverColor: 'rgba(var(--bt-color-red-rgb), 0.1)',
                backgroundFocusColor: 'rgba(var(--bt-color-red-rgb), 0.15)',
                backgroundActiveColor: 'rgba(var(--bt-color-red-rgb), 0.15)'
            }
        },
        {
            match: 'link dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-800)',
                backgroundHoverColor: 'var(--bt-color-gray-150)',
                backgroundFocusColor:  'var(--bt-color-gray-150)',
                backgroundActiveColor:  'var(--bt-color-gray-150)'
            }
        },
        {
            match: 'link light',
            cssVars: {
                textColor: 'var(--bt-color-gray-450)',

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
        },

        /**
         * In form addon.
         */
        {
            match: '*',
            cssCode: `
                :global(.before[data-form-input-addon]) &.bt-button .inner {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    border-right: none;
                }

                :global(.after[data-form-input-addon]) &.bt-button .inner {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            `
        },
        {
            match: {variant: 'light'},
            cssCode: `
                :global([data-form-input-addon])  &.bt-button .inner {
                    border-color: var(--bt-color-gray-200);
                }
            `
        }
    ]
});
