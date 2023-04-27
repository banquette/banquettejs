import { VariantWildcard, VueThemes } from "@banquette/vue-typescript";

VueThemes.Define('bt-progress-horizontal', {
    dark: [
        {
            match: VariantWildcard,
            cssVars: {
                backgroundColor: 'rgba(var(--bt-color-gray-rgb), 0.2)'
            }
        },
        {
            match: 'dark',
            cssVars: {
                valueBackgroundColor: 'var(--bt-color-gray-650)'
            }
        }
    ]
});
