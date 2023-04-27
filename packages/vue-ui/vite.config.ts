import { defineConfig } from 'vite';
import { extend } from "@banquette/utils-object";
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import VueStylesInject from 'vite-plugin-vue-styles-inject';
import StylesSplitter from './plugin/vite-plugin-styles-splitter.mjs';
import { getBaseConfig } from '../../vite.config';

export default defineConfig(extend(getBaseConfig('vue-ui'), {
    build: {
        cssCodeSplit: true,
        minify: false,
        rollupOptions: {
            external: ['vue']
        }
    },
    plugins: [vue(), dts(), VueStylesInject(), StylesSplitter()],
}));
