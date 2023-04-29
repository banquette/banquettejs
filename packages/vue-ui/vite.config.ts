import { extend } from "@banquette/utils-object";
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import VueStylesInject from 'vite-plugin-vue-styles-inject';
import { getBaseConfig } from '../../vite.config';
import StylesSplitter from './plugin/vite-plugin-styles-splitter.mjs';

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
