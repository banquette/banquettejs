import { extend } from '@banquette/utils-object';
import { defineConfig } from "vite";
import { getBaseConfig } from '../../vite.config';

export default defineConfig(extend(getBaseConfig('vue-typescript'), {
    build: {
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    }
}));
