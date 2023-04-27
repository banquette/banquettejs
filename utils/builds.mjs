import { camelCase, capitalize, getVersion } from './utils.mjs';

function generateBanner(name, format) {
    return (
        '/*!\n' +
        ` * Banquette ${capitalize(
            camelCase(name)
        )} v${getVersion()} (${format})\n` +
        ` * (c) 2022-${new Date().getFullYear()} Julien Pinto\n` +
        ' * Released under Apache License, Version 2.0\n' +
        ' */'
    );
}

function createBuildVariants(config, type = null) {
    const externals = [new RegExp(`@banquette/((?!${config.package}).)+`)];
    const types =
        type === null
            ? ['cjs', 'esm', 'umd']
            : typeof type === 'string'
            ? [type]
            : type;
    const variants = [];

    // CommonJS (for nodejs or bundlers)
    if (types.indexOf('cjs') > -1) {
        variants[`${config.package}-cjs-dev`] = {
            preserveModules: true,
            package: config.package,
            format: 'cjs',
            moduleName: config.module,
            externals,
            banner: generateBanner(config.package, 'CommonJS'),
        };
    }

    // ES (for bundlers)
    if (types.indexOf('esm') > -1) {
        variants[`${config.package}-esm`] = {
            preserveModules: true,
            package: config.package,
            format: 'es',
            moduleName: config.module,
            externals,
            banner: generateBanner(config.package, 'ESM'),
        };
    }
    return variants;
}

export const Builds = Object.assign(
    {},
    createBuildVariants({
        package: 'api',
        module: 'Banquette.Api',
    }),
    createBuildVariants({
        package: 'config',
        module: 'Banquette.Config',
    }),
    createBuildVariants({
        package: 'dependency-injection',
        module: 'Banquette.DI',
    }),
    createBuildVariants({
        package: 'event',
        module: 'Banquette.Event',
    }),
    createBuildVariants({
        package: 'exception',
        module: 'Banquette.Exception',
    }),
    createBuildVariants({
        package: 'dom-modules',
        module: 'Banquette.DomModules',
    }),
    createBuildVariants({
        package: 'fingerprint',
        module: 'Banquette.Fingerprint',
    }),
    createBuildVariants({
        package: 'log',
        module: 'Banquette.Log',
    }),
    createBuildVariants({
        package: 'model',
        module: 'Banquette.Model',
    }),
    createBuildVariants({
        package: 'model-form',
        module: 'Banquette.Model.Form',
    }),
    createBuildVariants({
        package: 'model-validation',
        module: 'Banquette.Model.Validation',
    }),
    createBuildVariants({
        package: 'http',
        module: 'Banquette.Http',
    }),
    createBuildVariants({
        package: 'form',
        module: 'Banquette.Form',
    }),
    createBuildVariants({
        package: 'inversify',
        module: 'Banquette.Inversify',
    }),
    createBuildVariants({
        package: 'promise',
        module: 'Banquette.Promise',
    }),
    createBuildVariants({
        package: 'storage',
        module: 'Banquette.Storage',
    }),
    createBuildVariants({
        package: 'ui',
        module: 'Banquette.Ui',
    }),
    createBuildVariants({
        package: 'object-observer',
        module: 'Banquette.ObjectObserver',
    }),
    createBuildVariants({
        package: 'utils-type',
        module: 'Banquette.Utils.Type',
    }),
    createBuildVariants({
        package: 'utils-misc',
        module: 'Banquette.Utils.Misc',
    }),
    createBuildVariants({
        package: 'utils-array',
        module: 'Banquette.Utils.Array',
    }),
    createBuildVariants({
        package: 'utils-date',
        module: 'Banquette.Utils.Date',
    }),
    createBuildVariants({
        package: 'utils-dom',
        module: 'Banquette.Utils.Dom',
    }),
    createBuildVariants({
        package: 'utils-easing',
        module: 'Banquette.Utils.Easing',
    }),
    createBuildVariants({
        package: 'utils-glob',
        module: 'Banquette.Utils.Glob',
    }),
    createBuildVariants({
        package: 'utils-object',
        module: 'Banquette.Utils.Object',
    }),
    createBuildVariants({
        package: 'utils-random',
        module: 'Banquette.Utils.Random',
    }),
    createBuildVariants({
        package: 'utils-reflection',
        module: 'Banquette.Utils.Reflection',
    }),
    createBuildVariants({
        package: 'utils-string',
        module: 'Banquette.Utils.String',
    }),
    createBuildVariants({
        package: 'utils-crypto',
        module: 'Banquette.Utils.Crypto',
    }),
    createBuildVariants({
        package: 'validation',
        module: 'Banquette.Validation',
    }),
    createBuildVariants({
        package: 'vue-ui',
        module: 'Banquette.Vue.Ui',
    }),
    createBuildVariants({
        package: 'vue-material-icons',
        module: 'Banquette.Vue.MaterialIcons'
    }),
    createBuildVariants({
        package: 'vue-remix-icons',
        module: 'Banquette.Vue.RemixIcons'
    }),
    createBuildVariants({
        package: 'vue-typescript',
        module: 'Banquette.Vue.Typescript',
    }),
    createBuildVariants({
        package: 'vue-dom-module',
        module: 'Banquette.Vue.DomModule',
    })
);

/**
 * Define the mapping of externals.
 */
export const Globals = {
    inversify: 'Inversify',
    vue: 'Vue',
    qs: 'qs',
};
for (const build of Object.keys(Builds)) {
    Globals[`@banquette/${Builds[build].package}`] = Builds[build].moduleName;
}

export function getBuildConfiguration(packageName) {
    for (const key of Object.keys(Builds)) {
        if (Builds[key].package === packageName) {
            return Builds[key];
        }
    }
    return null;
}
