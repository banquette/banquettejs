import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-alert', {
    dark: [
        {
            match: 'dark faded',
            cssVars: {
                textColor: 'var(--bt-color-gray-250)',
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.2)',
                borderColor: 'rgba(var(--bt-color-gray-rgb), 0.7)',
                closeFillColor: 'var(--bt-color-gray-400)',
                closeFillHoverColor: 'var(--bt-color-gray-400)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-700)'
            }
        },
        {
            match: 'light faded',
            cssVars: {
                textColor: 'var(--bt-color-gray-900)',
                backgroundColor: 'var(--bt-color-gray-300)',
                borderColor: 'rgba(var(--bt-color-gray-rgb), 0.3)',
                closeFillColor: 'var(--bt-color-gray-900)',
                closeFillHoverColor: 'var(--bt-color-gray-900)',
                closeBackgroundHoverColor: 'var(--bt-color-gray-400)'
            }
        },
    ]
});

/**
 * Progress.
 */
VueThemes.Define('bt-progress-horizontal', {
    dark: [
        {
            match: {parent: {name: 'bt-alert', variant: 'faded'}},
            cssVars: {
                valueBackgroundColor: 'rgba(255, 255, 255, .5)',
            }
        }
    ]
});


export {}
