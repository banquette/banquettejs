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
            outputFile: resolve(`packages/${config.package}/dist/index.cjs.dev.js`),
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
            outputFile: resolve(`packages/${config.package}/dist/index.cjs.prod.js`),
            format: 'cjs',
            env: 'production',
            moduleName: config.module,
            externals,
            banner: generateBanner(config.package, 'CommonJS')
        },
        // ES (for bundlers)
        [`${config.package}-esm`]: {
            package: config.package,
            rootDir: resolve(`packages/${config.package}`),
            entry: resolve(`packages/${config.package}/src/index.ts`),
            outputDir: `packages/${config.package}/build/${config.package}/src`,
            format: 'es',
            moduleName: config.module,
            externals,
            banner: generateBanner(config.package, 'ES2015')
        },
        // UMD (for browser)
        [`${config.package}-umd-dev`]: {
            package: config.package,
            rootDir: resolve(`packages/${config.package}`),
            entry: resolve(`packages/${config.package}/src/index.ts`),
            outputFile: resolve(`packages/${config.package}/dist/index.umd.dev.js`),
            format: 'umd',
            env: 'development',
            moduleName: config.module,
            externals,
            banner: generateBanner(config.package, 'UMD')
        },
        [`${config.package}-umd-prod`]: {
            package: config.package,
            rootDir: resolve(`packages/${config.package}`),
            entry: resolve(`packages/${config.package}/src/index.ts`),
            outputFile: resolve(`packages/${config.package}/dist/index.umd.prod.js`),
            format: 'umd',
            env: 'production',
            moduleName: config.module,
            externals,
            banner: generateBanner(config.package, 'UMD')
        }
    };
}

export const Builds = Object.assign({},
    createBuildVariants({
        package: 'core',
        module: 'BanquetteCore'
    }),
    createBuildVariants({
        package: 'event',
        module: 'BanquetteEvent'
    }),
    createBuildVariants({
        package: 'dom-modules',
        module: 'BanquetteDomModules'
    }),
    createBuildVariants({
        package: 'fingerprint',
        module: 'BanquetteFingerprint'
    }),
    createBuildVariants({
        package: 'log',
        module: 'BanquetteLog'
    }),
    createBuildVariants({
        package: 'http',
        module: 'BanquetteHttp'
    }),
    createBuildVariants({
        package: 'promise',
        module: 'BanquettePromise'
    }),
    createBuildVariants({
        package: 'storage',
        module: 'BanquetteStorage'
    }),
    createBuildVariants({
        package: 'utils-base64',
        module: 'BanquetteUtilsBase64'
    }),
    createBuildVariants({
        package: 'utils',
        module: 'BanquetteUtils'
    }),
    createBuildVariants({
        package: 'utils-easing',
        module: 'BanquetteUtilsEasing'
    }),
    createBuildVariants({
        package: 'utils-json',
        module: 'BanquetteUtilsJson'
    }),
    createBuildVariants({
        package: 'utils-crypto',
        module: 'BanquetteUtilsCrypto'
    }),
    createBuildVariants({
        package: 'utils-color',
        module: 'BanquetteUtilsColor'
    })
);

/**
 * Define the mapping of externals.
 */
export const Globals = {
    'inversify': 'Inversify'
};
for (const build of Object.keys(Builds)) {
    Globals[`@banquette/${Builds[build].package}`] = Builds[build].moduleName;
}
