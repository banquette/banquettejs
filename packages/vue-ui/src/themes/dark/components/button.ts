import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-button', {
    'dark': [
        {
            match: '*',
            cssVars: {
                backgroundColor: 'var(--bt-color-primary-750)',
                backgroundHoverColor: 'var(--bt-color-primary-650)',
                backgroundFocusColor: 'var(--bt-color-primary-650)',
                backgroundActiveColor: 'var(--bt-color-primary-700)'
            }
        },
        {
            match: 'success',
            cssVars: {
                backgroundColor: 'var(--bt-color-green-750)',
                backgroundHoverColor: 'var(--bt-color-green-650)',
                backgroundFocusColor: 'var(--bt-color-green-650)',
                backgroundActiveColor: 'var(--bt-color-green-700)'
            }
        },
        {
            match: 'warning',
            cssVars: {
                backgroundColor: 'var(--bt-color-orange-750)',
                backgroundHoverColor: 'var(--bt-color-orange-650)',
                backgroundFocusColor: 'var(--bt-color-orange-650)',
                backgroundActiveColor: 'var(--bt-color-orange-700)'

            }
        },
        {
            match: 'danger',
            cssVars: {
                backgroundColor: 'var(--bt-color-red-750)',
                backgroundHoverColor: 'var(--bt-color-red-650)',
                backgroundFocusColor: 'var(--bt-color-red-650)',
                backgroundActiveColor: 'var(--bt-color-red-700)'
            }
        },
        {
            match: 'dark',
            cssVars: {
                backgroundColor: 'var(--bt-color-gray-800)',
                backgroundHoverColor: 'var(--bt-color-gray-700)',
                backgroundFocusColor: 'var(--bt-color-gray-700)',
                backgroundActiveColor: 'var(--bt-color-gray-750)',
            }
        },
        {
            match: 'light',
            cssVars: {
                textColor: 'var(--bt-color-gray-700)',
                backgroundColor: 'var(--bt-color-gray-200)',
                backgroundHoverColor: 'var(--bt-color-gray-50)',
                backgroundFocusColor: 'var(--bt-color-gray-50)',
                backgroundActiveColor: 'var(--bt-color-gray-250)'
            }
        },

        /**
         * Outline
         */
        {
            match: 'outline',
            cssVars: {
                backgroundColor: 'none',
                borderColor: 'var(--bt-color-primary-550)',
                textColor: 'var(--bt-color-primary)',

                backgroundHoverColor: 'var(--bt-color-primary-800)',
                borderHoverColor: 'var(--bt-color-primary-700)',
                textHoverColor: 'var(--bt-color-primary)',

                backgroundFocusColor: 'var(--bt-color-primary-800)',
                borderFocusColor: 'var(--bt-color-primary-650)',
                textFocusColor: 'var(--bt-color-primary)',

                backgroundActiveColor: 'var(--bt-color-primary-850)',
                borderActiveColor: 'var(--bt-color-primary-850)',
                textActiveColor: 'var(--bt-color-primary)',
            }
        },
        {
            match: 'outline success',
            cssVars: {
                borderColor: 'var(--bt-color-green-550)',
                textColor: 'var(--bt-color-green)',

                backgroundHoverColor: 'var(--bt-color-green-800)',
                borderHoverColor: 'var(--bt-color-green-700)',
                textHoverColor: 'var(--bt-color-green)',

                backgroundFocusColor: 'var(--bt-color-green-800)',
                borderFocusColor: 'var(--bt-color-green-650)',
                textFocusColor: 'var(--bt-color-green)',

                backgroundActiveColor: 'var(--bt-color-green-850)',
                borderActiveColor: 'var(--bt-color-green-850)',
                textActiveColor: 'var(--bt-color-green)'
            }
        },
        {
            match: 'outline warning',
            cssVars: {
                borderColor: 'var(--bt-color-orange-550)',
                textColor: 'var(--bt-color-orange)',

                backgroundHoverColor: 'var(--bt-color-orange-800)',
                borderHoverColor: 'var(--bt-color-orange-700)',
                textHoverColor: 'var(--bt-color-orange)',

                backgroundFocusColor: 'var(--bt-color-orange-800)',
                borderFocusColor: 'var(--bt-color-orange-650)',
                textFocusColor: 'var(--bt-color-orange)',

                backgroundActiveColor: 'var(--bt-color-orange-850)',
                borderActiveColor: 'var(--bt-color-orange-850)',
                textActiveColor: 'var(--bt-color-orange)'
            }
        },
        {
            match: 'outline danger',
            cssVars: {
                borderColor: 'var(--bt-color-red-550)',
                textColor: 'var(--bt-color-red)',

                backgroundHoverColor: 'var(--bt-color-red-800)',
                borderHoverColor: 'var(--bt-color-red-700)',
                textHoverColor: 'var(--bt-color-red)',

                backgroundFocusColor: 'var(--bt-color-red-800)',
                borderFocusColor: 'var(--bt-color-red-650)',
                textFocusColor: 'var(--bt-color-red)',

                backgroundActiveColor: 'var(--bt-color-red-850)',
                borderActiveColor: 'var(--bt-color-red-850)',
                textActiveColor: 'var(--bt-color-red)'
            }
        },
        {
            match: 'outline dark',
            cssVars: {
                borderColor: 'var(--bt-color-gray-550)',
                textColor: 'var(--bt-color-gray-400)',

                backgroundHoverColor: 'var(--bt-color-gray-800)',
                borderHoverColor: 'var(--bt-color-gray-700)',
                textHoverColor: 'var(--bt-color-gray-400)',

                backgroundFocusColor: 'var(--bt-color-gray-800)',
                borderFocusColor: 'var(--bt-color-gray-650)',
                textFocusColor: 'var(--bt-color-gray-400)',

                backgroundActiveColor: 'var(--bt-color-gray-850)',
                borderActiveColor: 'var(--bt-color-gray-850)',
                textActiveColor: 'var(--bt-color-gray-400)'
            }
        },
        {
            match: 'outline light',
            cssVars: {
                borderColor: 'var(--bt-color-gray-250)',
                textColor: 'var(--bt-color-gray-200)',

                backgroundHoverColor: 'var(--bt-color-gray-300)',
                borderHoverColor: 'var(--bt-color-gray-750)',
                textHoverColor: 'var(--bt-color-gray-800)',

                backgroundFocusColor: 'var(--bt-color-gray-300)',
                borderFocusColor: 'var(--bt-color-gray-750)',
                textFocusColor: 'var(--bt-color-gray-800)',

                backgroundActiveColor: 'var(--bt-color-gray-400)',
                borderActiveColor: 'var(--bt-color-gray-750)',
                textActiveColor: 'var(--bt-color-gray-800)'
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
                backgroundHoverColor: 'var(--bt-color-primary-800)',
                backgroundFocusColor: 'var(--bt-color-primary-800)',
                backgroundActiveColor: 'var(--bt-color-primary-850)'
            }
        },
        {
            match: 'link success',
            cssVars: {
                textColor: 'var(--bt-color-green)',
                backgroundHoverColor: 'var(--bt-color-green-800)',
                backgroundFocusColor: 'var(--bt-color-green-800)',
                backgroundActiveColor: 'var(--bt-color-green-850)'
            }
        },
        {
            match: 'link warning',
            cssVars: {
                textColor: 'var(--bt-color-orange)',
                backgroundHoverColor: 'var(--bt-color-orange-800)',
                backgroundFocusColor: 'var(--bt-color-orange-800)',
                backgroundActiveColor: 'var(--bt-color-orange-850)'
            }
        },
        {
            match: 'link danger',
            cssVars: {
                textColor: 'var(--bt-color-red)',
                backgroundHoverColor: 'var(--bt-color-red-800)',
                backgroundFocusColor: 'var(--bt-color-red-800)',
                backgroundActiveColor: 'var(--bt-color-red-850)'
            }
        },
        {
            match: 'link dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-400)',
                backgroundHoverColor: 'var(--bt-color-gray-800)',
                textHoverColor: 'var(--bt-color-gray-400)',
                backgroundFocusColor: 'var(--bt-color-gray-800)',
                textFocusColor: 'var(--bt-color-gray-400)',
                backgroundActiveColor: 'var(--bt-color-gray-850)',
                textActiveColor: 'var(--bt-color-gray-400)'
            }
        },
        {
            match: 'link light',
            cssVars: {
                textColor: 'var(--bt-color-gray-200)',
                backgroundHoverColor: 'var(--bt-color-gray-300)',
                textHoverColor: 'var(--bt-color-gray-800)',
                backgroundFocusColor: 'var(--bt-color-gray-300)',
                textFocusColor: 'var(--bt-color-gray-800)',
                backgroundActiveColor: 'var(--bt-color-gray-450)',
                textActiveColor: 'var(--bt-color-gray-850)'
            }
        }
    ]
});
