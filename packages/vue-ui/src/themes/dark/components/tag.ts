import { VueThemes } from "@banquette/vue-typescript";

VueThemes.Define('bt-tag', {
    dark: [
        {
            match: 'faded dark',
            cssVars: {
                textColor: 'var(--bt-color-gray-400)',
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.1)',
                borderColor: 'rgba(var(--bt-color-gray-rgb), 0.4)',
                closeFillColor: 'var(--bt-color-gray-400)',
                closeFillHoverColor: 'var(--bt-color-gray-400)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-800)'
            }
        },
        {
            match: 'faded light',
            cssVars: {
                textColor: 'var(--bt-color-gray-100)',
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.4)',
                borderColor: 'rgba(var(--bt-color-gray-rgb), 0.7)',
                closeFillColor: 'var(--bt-color-gray-500)',
                closeFillHoverColor: 'var(--bt-color-gray-500)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-200)'
            }
        },
    ]
});
