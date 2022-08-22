import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-tag', {
    '*': [
        {
            match: 'success',
            cssVars: {
                textColor: 'var(--bt-color-green-500)',
                backgroundColor: 'var(--bt-color-green-50)',
                borderColor: 'var(--bt-color-green-150)',
                closeFillColor: 'var(--bt-color-green-500)',
                closeFillHoverColor: 'var(--bt-color-green-500)',
                closeBackgroundHoverColor: 'var(--bt-color-green-150)'
            }
        },
        {
            match: 'warning',
            cssVars: {
                textColor: 'var(--bt-color-orange-500)',
                backgroundColor: 'var(--bt-color-orange-50)',
                borderColor: 'var(--bt-color-orange-150)',
                closeFillColor: 'var(--bt-color-orange-500)',
                closeFillHoverColor: 'var(--bt-color-orange-500)',
                closeBackgroundHoverColor: 'var(--bt-color-orange-150)'
            }
        },
        {
            match: 'danger',
            cssVars: {
                textColor: 'var(--bt-color-red-500)',
                backgroundColor: 'var(--bt-color-red-50)',
                borderColor: 'var(--bt-color-red-150)',
                closeFillColor: 'var(--bt-color-red-500)',
                closeFillHoverColor: 'var(--bt-color-red-500)',
                closeBackgroundHoverColor: 'var(--bt-color-red-150)'
            }
        },
        {
            match: 'dark',
            cssVars: {
                textColor: 'var(--bt-color-white)',
                backgroundColor: 'var(--bt-color-gray-800)',
                borderColor: 'var(--bt-color-gray-850)',
                closeFillColor: 'var(--bt-color-white)',
                closeFillHoverColor: 'var(--bt-color-white)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-700)'
            }
        },
        {
            match: 'light',
            cssVars: {
                textColor: 'var(--bt-color-gray-550)',
                backgroundColor: 'var(--bt-color-gray-50)',
                borderColor: 'var(--bt-color-gray-150)',
                closeFillColor: 'var(--bt-color-gray-550)',
                closeFillHoverColor: 'var(--bt-color-gray-550)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-150)'
            }
        },

        /**
         * Size
         */
        {
            match: 'xs',
            cssVars: {fontSize: '0.5rem'}
        },
        {
            match: 'sm',
            cssVars: {fontSize: '0.65rem'}
        },
        {
            match: 'md',
            cssVars: {fontSize: '1rem'}
        },
        {
            match: 'lg',
            cssVars: {fontSize: '1.2rem'}
        },
        {
            match: 'xl',
            cssVars: {fontSize: '1.45rem'}
        }
    ]
});
