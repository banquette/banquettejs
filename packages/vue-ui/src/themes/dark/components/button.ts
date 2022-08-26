import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-button', {
    dark: [
        /**
         * Outline
         */
        {
            match: 'outline dark',
            cssVars: {
                borderColor: 'var(--bt-color-gray-650)',
                textColor: 'var(--bt-color-gray-500)',

                backgroundHoverColor: 'rgba(var(--bt-color-gray-rgb), 0.1)',
                borderHoverColor: 'rgba(var(--bt-color-gray-rgb), 0.6)',

                backgroundFocusColor: 'rgba(var(--bt-color-gray-rgb), 0.15)',
                borderFocusColor: 'rgba(var(--bt-color-gray-rgb), 0.6)',

                backgroundActiveColor: 'rgba(var(--bt-color-gray-rgb), 0.15)',
                borderActiveColor: 'transparent'
            }
        },
        {
            match: 'outline light',
            cssVars: {
                borderColor: 'var(--bt-color-gray-300)',
                textColor: 'var(--bt-color-gray-250)',

                backgroundHoverColor: 'rgba(var(--bt-color-gray-rgb), 0.4)',
                borderHoverColor: 'rgba(var(--bt-color-gray-rgb), 0.8)',

                backgroundFocusColor: 'rgba(var(--bt-color-gray-rgb), 0.3)',
                borderFocusColor: 'rgba(var(--bt-color-gray-rgb), 0.6)',

                backgroundActiveColor: 'rgba(var(--bt-color-gray-rgb), 0.3)',
                borderActiveColor: 'transparent'
            }
        },

        /**
         * Link
         */
        {
            match: 'link dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-500)',
                textHoverColor: 'var(--bt-color-gray-500)',
                textFocusColor: 'var(--bt-color-gray-500)',
                textActiveColor: 'var(--bt-color-gray-500)',
                backgroundHoverColor: 'rgba(var(--bt-color-gray-rgb), 0.1)',
                backgroundFocusColor: 'rgba(var(--bt-color-gray-rgb), 0.15)',
                backgroundActiveColor: 'rgba(var(--bt-color-gray-rgb), 0.15)'
            }
        },
        {
            match: 'link light',
            cssVars: {
                textColor: 'var(--bt-color-gray-250)',
                textHoverColor: 'var(--bt-color-gray-250)',
                textFocusColor: 'var(--bt-color-gray-250)',
                textActiveColor: 'var(--bt-color-gray-250)',
                backgroundHoverColor: 'rgba(var(--bt-color-gray-rgb), 0.4)',
                backgroundFocusColor: 'rgba(var(--bt-color-gray-rgb), 0.5)',
                backgroundActiveColor: 'rgba(var(--bt-color-gray-rgb), 0.5)'
            }
        }
    ]
});
