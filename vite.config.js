// @ts-ignore
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { getBuildConfiguration, Globals } from './utils/builds.mjs';
import TreeShakableDecorators from 'vite-plugin-tree-shakable-decorators';

export function getBaseConfig(packageName) {
    const buildConfiguration = getBuildConfiguration(packageName);
    return {
        build: {
            outDir: 'dist',
            emptyOutDir: true,
            lib: {
                entry: 'src/index.ts',
                name: buildConfiguration.moduleName,
            },
            rollupOptions: {
                plugins: [
                    typescript({
                        target: 'esnext',
                        rootDir: path.resolve(process.cwd(), 'src'),
                        declaration: true,
                        declarationDir: path.resolve(process.cwd(), 'dist'),
                        exclude: path.resolve(
                            process.cwd(),
                            'node_modules/**'
                        ),
                        allowSyntheticDefaultImports: true,
                    }),
                    TreeShakableDecorators()
                ],
                external: buildConfiguration.externals,
                output: {
                    globals: Globals,
                },
            },
        },
    };
}
