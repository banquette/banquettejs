import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: 'src/index.ts',
            name: 'Banquette.Vue.RemixIcons'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [vue(), dts()],
});
