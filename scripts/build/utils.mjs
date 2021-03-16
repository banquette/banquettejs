import fs from 'fs';
import path from 'path';
import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import { Externals } from './externals.mjs';
import { fileURLToPath } from 'url';
import {Builds, Globals} from "./builds.mjs";
import { terser } from "rollup-plugin-terser";
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let version = null;
/**
 * Get the current version of the build.
 */
export function getVersion() {
    if (version === null) {
        version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json')).toString()).version;
    }
    return version;
}

/**
 * Convert a number of bytes into a readable string size in kb.
 */
export function getSize(code) {
    return (code.length / 1024).toFixed(2) + 'kb';
}

/**
 * Set the first character of a string to the uppercase.
 */
export function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

/**
 * Convert a string to the camelCase case.
 */
export function camelCase(input) {
    const string = input.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
        .reduce((result, word) => result + capitalize(word.toLowerCase()));
    return string.charAt(0).toLowerCase() + string.slice(1);
}

/**
 * Generate a rollup configuration base on a more abstract definition.
 */
export function getRollupConfig(buildConfig) {
    const vars = {__VERSION__: getVersion()};
    const externals = Externals.concat(buildConfig.externals || []);
    const rollupConfig = {
        input: buildConfig.entry,
        external: (candidate) => {
            for (const pattern of externals) {
                if (pattern instanceof RegExp) {
                    return candidate.match(pattern);
                }
                if (pattern === candidate) {
                    return true;
                }
            }
            return false;
        },
        plugins: [
            // alias(Object.assign({}, aliases, buildConfig.alias))
        ].concat(buildConfig.plugins || []),
        output: {
            format: buildConfig.format,
            banner: buildConfig.banner,
            name: buildConfig.moduleName,
            globals: Globals
        }
    };
    if (buildConfig.outputFile) {
        rollupConfig.plugins.push(typescript({
            tsconfig: path.join(buildConfig.rootDir, 'tsconfig.json'),
            tsconfigOverride: {
                compilerOptions: {
                    declaration: false,
                    declarationDir: null
                }
            }
        }));
        rollupConfig.output.file = buildConfig.outputFile;
    } else if (buildConfig.outputDir) {
        rollupConfig.plugins.push(typescript({
            useTsconfigDeclarationDir: true,
            tsconfig: path.join(buildConfig.rootDir, 'tsconfig.json'),
        }));
        rollupConfig.preserveModules = true;
        rollupConfig.output.dir = buildConfig.outputDir;
    }
    if (buildConfig.env === 'production') {
        rollupConfig.plugins.push(terser({
            keep_classnames: true,
            keep_fnames: true
        }));
    }
    if (buildConfig.env) {
        vars['process.env.NODE_ENV'] = JSON.stringify(buildConfig.env);
    }
    rollupConfig.plugins.push(replace(vars));
    if (buildConfig.transpile !== false) {
        rollupConfig.plugins.push(buble());
    }
    Object.defineProperty(rollupConfig, '_name', {
        enumerable: false,
        value: buildConfig.package
    });
    Object.defineProperty(rollupConfig, '_env', {
        enumerable: false,
        value: buildConfig.env || null
    });
    return rollupConfig;
}

/**
 * Call rollup with a finalized configuration and write the output.
 */
export function build(config) {
    const output = config.output;
    console.log(`${chalk.red('Building')} package ${chalk.blue(config._name)} in ${chalk.blue(config.output.format)}${config._env !== null ? chalk.yellow(` (${config._env})`) : ''} format.`);
    return rollup(config)
        .then(bundle => bundle.write(output))
        .then(({ output: [{ code }] }) => {
            if (config.output.format === 'es') {
                const dir = output.dir || path.dirname(output.file);
                const packageRoot = dir.substring(0, dir.length - (4 /* /src */ + config._name.length + 6 /* build/ */));
                fs.renameSync(dir, packageRoot + '_build');
                fs.rmdirSync(packageRoot + 'build', {recursive: true});
                fs.renameSync(packageRoot + '_build', packageRoot + 'build');
            }
        });
}

export function cleanupBuilds(configs) {
    const cleaned = [];
    for (const config of configs) {
        const packageName = config.package;
        if (packageName && cleaned.indexOf(packageName) < 0) {
            console.log(`${chalk.red('Cleaning')} builds of package ${chalk.blue(packageName)}.`);
            const packageRootDir = path.resolve(__dirname, `../../packages/${packageName}`);
            const targets = [
                packageRootDir + '/dist',
                packageRootDir + '/build'
            ];
            for (const target of targets) {
                if (fs.existsSync(target)) {
                    fs.rmdirSync(target, {recursive: true});
                }
            }
            cleaned.push(packageName);
        }
    }
    if (cleaned.length > 0) {
        console.log('');
    }
}

export function filterBuilds(builds, filter) {
    builds = Object.assign({}, builds);
    if (!filter) {
        return builds;
    }
    const filters = filter.split(',').map((e) => new RegExp(e));
    return Object.keys(builds)
        .filter((key) => {
            for (const filter of filters) {
                if (key.match(filter)) {
                    return true;
                }
            }
            return false;
        })
        .reduce((obj, key) => {
            obj[key] = builds[key];
            return obj;
        }, {});
}
