import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-progress-horizontal', {
    '*': [
        // Colors
        {
            match: 'success',
            cssVars: {
                valueBackgroundColor: 'var(--bt-color-green-500)',
            }
        },
        {
            match: 'warning',
            cssVars: {
                valueBackgroundColor: 'var(--bt-color-orange-500)',
            }
        },
        {
            match: 'danger',
            cssVars: {
                valueBackgroundColor: 'var(--bt-color-red-500)',
            }
        },
        {
            match: 'dark',
            cssVars: {
                valueBackgroundColor: 'var(--bt-color-gray-800)',
            }
        },
        {
            match: 'light',
            cssVars: {
                valueBackgroundColor: 'var(--bt-color-gray-200)',
            }
        }
    ]
});
