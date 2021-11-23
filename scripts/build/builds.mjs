import path from 'path';
import { Aliases } from './alias.mjs';
import { getVersion, capitalize, camelCase } from './utils.mjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolve(p) {
    const base = p.split('/')[0]
    if (Aliases[base]) {
        return path.resolve(Aliases[base], p.slice(base.length + 1))
    } else {
        return path.resolve(__dirname, '../../', p)
    }
}

function generateBanner(name, format) {

    return "/*!\n" +
        ` * Banquette ${capitalize(camelCase(name))} v${getVersion()} (${format})\n` +
        ` * (c) 2021-${new Date().getFullYear()} Julien Pinto\n` +
        " * Released under Apache License, Version 2.0\n" +
        " */";
}

function createBuildVariants(config) {
    const externals = [new RegExp(`^@banquette/((?!${config.package}).)+`)];
    return {
        // CommonJS (for nodejs or bundlers)
        [`${config.package}-cjs-dev`]: {
            package: config.package,
            rootDir: resolve(`packages/${config.package}`),
            entry: resolve(`packages/${config.package}/src/index.ts`),
            outputFile: resolve(`dist/${config.package}/_bundles/index.cjs.dev.js`),
            format: 'cjs',
            env: 'development',
            moduleName: config.module,
            externals,
            banner: generateBanner(config.package, 'CommonJS')
        },
        [`${config.package}-cjs-prod`]: {
            package: config.package,
            rootDir: resolve(`packages/${config.package}`),
            entry: resolve(`packages/${config.package}/src/index.ts`),
            outputFile: resolve(`dist/${config.package}/_bundles/index.cjs.prod.js`),
            format: 'cjs',
            env: 'production',
            moduleName: config.module,
            externals,
            banner: generateBanner(config.package, 'CommonJS')
        },
        // ES (for bundlers)
        [`${config.package}-esm`]: {
            preserveModules: false,
            package: config.package,
            rootDir: resolve(`packages/${config.package}`),
            entry: resolve(`packages/${config.package}/src/index.ts`),
            outputDir: `dist/${config.package}`,
            format: 'es',
            moduleName: config.module,
            externals,
            banner: generateBanner(config.package, 'ES2015')
        },
        // UMD (for browser)
        // [`${config.package}-umd-dev`]: {
        //     package: config.package,
        //     rootDir: resolve(`packages/${config.package}`),
        //     entry: resolve(`packages/${config.package}/src/index.ts`),
        //     outputFile: resolve(`packages/${config.package}/dist/index.umd.dev.js`),
        //     format: 'umd',
        //     env: 'development',
        //     moduleName: config.module,
        //     externals,
        //     banner: generateBanner(config.package, 'UMD')
        // },
        // [`${config.package}-umd-prod`]: {
        //     package: config.package,
        //     rootDir: resolve(`packages/${config.package}`),
        //     entry: resolve(`packages/${config.package}/src/index.ts`),
        //     outputFile: resolve(`packages/${config.package}/dist/index.umd.prod.js`),
        //     format: 'umd',
        //     env: 'production',
        //     moduleName: config.module,
        //     externals,
        //     banner: generateBanner(config.package, 'UMD')
        // }
    };
}

export const Builds = Object.assign({},
    createBuildVariants({
        package: 'api',
        module: 'Banquette.Api'
    }),
    createBuildVariants({
        package: 'config',
        module: 'Banquette.Config'
    }),
    createBuildVariants({
        package: 'dependency-injection',
        module: 'Banquette.DI'
    }),
    createBuildVariants({
        package: 'event',
        module: 'Banquette.Event'
    }),
    createBuildVariants({
        package: 'exception',
        module: 'Banquette.Exception'
    }),
    createBuildVariants({
        package: 'dom-modules',
        module: 'Banquette.DomModules'
    }),
    createBuildVariants({
        package: 'fingerprint',
        module: 'Banquette.Fingerprint'
    }),
    createBuildVariants({
        package: 'log',
        module: 'Banquette.Log'
    }),
    createBuildVariants({
        package: 'model',
        module: 'Banquette.Model'
    }),
    createBuildVariants({
        package: 'model-api',
        module: 'Banquette.Model.Api'
    }),
    createBuildVariants({
        package: 'model-form',
        module: 'Banquette.Model.Form'
    }),
    createBuildVariants({
        package: 'model-validation',
        module: 'Banquette.Model.Validation'
    }),
    createBuildVariants({
        package: 'http',
        module: 'Banquette.Http'
    }),
    createBuildVariants({
        package: 'form',
        module: 'Banquette.Form'
    }),
    createBuildVariants({
        package: 'inversify',
        module: 'Banquette.Inversify'
    }),
    createBuildVariants({
        package: 'promise',
        module: 'Banquette.Promise'
    }),
    createBuildVariants({
        package: 'storage',
        module: 'Banquette.Storage'
    }),
    createBuildVariants({
        package: 'utils-type',
        module: 'Banquette.Utils.Type'
    }),
    createBuildVariants({
        package: 'utils-misc',
        module: 'Banquette.Utils.Misc'
    }),
    createBuildVariants({
        package: 'utils-array',
        module: 'Banquette.Utils.Array'
    }),
    createBuildVariants({
        package: 'utils-date',
        module: 'Banquette.Utils.Date'
    }),
    createBuildVariants({
        package: 'utils-dom',
        module: 'Banquette.Utils.Dom'
    }),
    createBuildVariants({
        package: 'utils-easing',
        module: 'Banquette.Utils.Easing'
    }),
    createBuildVariants({
        package: 'utils-glob',
        module: 'Banquette.Utils.Glob'
    }),
    createBuildVariants({
        package: 'utils-object',
        module: 'Banquette.Utils.Object'
    }),
    createBuildVariants({
        package: 'utils-random',
        module: 'Banquette.Utils.Random'
    }),
    createBuildVariants({
        package: 'utils-reflection',
        module: 'Banquette.Utils.Reflection'
    }),
    createBuildVariants({
        package: 'utils-string',
        module: 'Banquette.Utils.String'
    }),
    createBuildVariants({
        package: 'utils-crypto',
        module: 'Banquette.Utils.Crypto'
    }),
    createBuildVariants({
        package: 'validation',
        module: 'Banquette.Validation'
    }),
    createBuildVariants({
        package: 'vue-material-icons',
        module: 'Banquette.Vue.MaterialIcons'
    }),
    createBuildVariants({
        package: 'vue-typescript',
        module: 'Banquette.Vue.Typescript'
    }),
    createBuildVariants({
        package: 'vue-dom-module',
        module: 'Banquette.Vue.DomModule'
    })
);

/**
 * Define the mapping of externals.
 */
export const Globals = {
    'inversify': 'Inversify',
    'vue': 'Vue',
    'qs': 'qs'
};
for (const build of Object.keys(Builds)) {
    Globals[`@banquette/${Builds[build].package}`] = Builds[build].moduleName;
}
