import { VueThemes } from "@banquette/vue-typescript/theme/vue-themes";

VueThemes.Define('bt-progress-circular', {
    '*': [
        // Width
        {
            match: 'thin',
            props: {
                strokeWidth: '1px',
            }
        },
        {
            match: 'thick',
            props: {
                strokeWidth: '5px',
            }
        },

        // Colors
        {
            match: 'success',
            cssVars: {
                strokeColor: 'var(--bt-color-green-500)',
            }
        },
        {
            match: 'warning',
            cssVars: {
                strokeColor: 'var(--bt-color-orange-500)',
            }
        },
        {
            match: 'danger',
            cssVars: {
                strokeColor: 'var(--bt-color-red-500)',
            }
        },
        {
            match: 'dark',
            cssVars: {
                strokeColor: 'var(--bt-color-gray-800)',
            }
        },
        {
            match: 'light',
            cssVars: {
                strokeColor: 'var(--bt-color-gray-200)',
            }
        },
    ]
});
