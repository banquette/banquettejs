import fs from 'fs-extra';
import path from 'path';
import {rollup, watch as rollupWatch} from 'rollup';
import buble from 'rollup-plugin-buble';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import { Externals } from './externals.mjs';
import { fileURLToPath } from 'url';
import {Builds, Globals} from "./builds.mjs";
import { terser } from "rollup-plugin-terser";
import chalk from 'chalk';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import nested from 'postcss-nested';

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

function getAllFiles(dirPath, output) {
    let files = fs.readdirSync(dirPath);
    output = output || [];
    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            output = getAllFiles(dirPath + "/" + file, output);
        } else {
            output.push(path.join(dirPath, "/", file));
        }
    });
    return output;
}

/**
 * Generate a rollup configuration base on a more abstract definition.
 */
export function getRollupConfig(buildConfig) {
    const vars = {__VERSION__: getVersion()};
    const externals = Externals.concat(buildConfig.externals || []);
    const rollupConfig = {
        preserveModules: buildConfig.preserveModules || false,
        watch: {
            buildDelay: 0,
            clearScreen: true,
            skipWrite: false
        },
        input: buildConfig.entry,
        external: (candidate) => {

            for (const pattern of externals) {
                if (pattern instanceof RegExp && candidate.match(pattern)) {
                    return true;
                }
                if (pattern === candidate) {
                    return true;
                }
            }
            return false;
        },
        plugins: [].concat(buildConfig.plugins || []),
        output: {
            format: buildConfig.format,
            banner: buildConfig.banner,
            name: buildConfig.moduleName,
            globals: Globals
        }
    };

    rollupConfig.plugins.push(vue({postcssPlugins: [nested]}));
    rollupConfig.plugins.push(postcss());
    if (buildConfig.outputFile) {
        rollupConfig.plugins.push(typescript({
            check: true,
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
            check: true,
            useTsconfigDeclarationDir: true,
            tsconfig: path.join(buildConfig.rootDir, 'tsconfig.json')
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

function writeOutput(config, output) {
    if (config.output.format === 'es') {
        const baseDir = output.dir || path.dirname(output.file);
        const typesDir = path.join(baseDir, 'src');
        fs.copySync(typesDir, baseDir);
        fs.rmdirSync(typesDir, {recursive: true});
        fs.rmdirSync(path.join(baseDir, '__tests__'), {recursive: true});

        const files = getAllFiles(path.resolve(__dirname, '../../', output.dir));
        for (let i = 0; i < files.length; ++i) {
            let fcontent = fs.readFileSync(files[i]).toString();
            let reg = /('|")(\.?\.\/)+node_modules\/style-inject\/[^'|"]+('|")/;
            if (fcontent.match(reg)) {
                fcontent = fcontent.replace(reg, "'style-inject'");
                fs.writeFileSync(files[i], fcontent);
            }
        }

        // Copy package.json and tsconfig.json files
        const packageDir = path.resolve(__dirname, `../../packages/${config._name}`);
        const distDir = path.resolve(__dirname, `../../dist/${config._name}`);
        for (const file of ['package.json', 'tsconfig.json']) {
            fs.copySync(path.join(packageDir, file), path.join(distDir, file));
        }
    }
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
            writeOutput(config, output);
        }).catch((event) => {
            console.log(chalk.red(event.message));
            if (event.stack) {
                console.log(chalk.red(event.stack));
            }
        });
}

/**
 * Call rollup with a finalized configuration and write the output.
 */
export function watch(config, onBeforeBuild, onBuildEnd, onBuildFailed) {
    const output = config.output;
    const watcher = rollupWatch(config);
    watcher.on('event', event => {
        if (event.code === 'START') {
            onBeforeBuild();
        } else if (event.code === 'BUNDLE_START') {
            console.log(`${chalk.red('Building & watching')} package ${chalk.blue(config._name)} in ${chalk.blue(config.output.format)}${config._env !== null ? chalk.yellow(` (${config._env})`) : ''} format.`);
        } else if (event.code === 'BUNDLE_END') {
            writeOutput(config, output);
            onBuildEnd();
        } else if (event.code === 'ERROR') {
            console.log(chalk.red(event.error.code));
            if (typeof(event.error.loc) === 'object') {
                console.log(`in ${chalk.blue(event.error.loc.file)} line ${chalk.magenta(event.error.loc.line + ':' + event.error.loc.column)}`);
            }
            if (event.error.stack) {
                console.log(chalk.red(event.error.stack));
            }
            onBuildFailed();
        }
    });
    watcher.on('event', ({ result }) => {
        if (result) {
            result.close();
        }
    });
}

export function cleanupBuilds(configs) {
    const cleaned = [];
    for (const config of configs) {
        const packageName = config.package;
        if (packageName && cleaned.indexOf(packageName) < 0) {
            console.log(`${chalk.red('Cleaning')} builds of package ${chalk.blue(packageName)}.`);
            const target = path.resolve(__dirname, `../../dist/${packageName}`);
            if (fs.existsSync(target)) {
                fs.rmdirSync(target, {recursive: true});
            }
            cleaned.push(packageName);
        }
    }
    if (cleaned.length > 0) {
        console.log('');
    }
}

export function filterBuilds(builds, filter, isWatch) {
    builds = Object.assign({}, builds);
    const filters = filter ? filter.split(',').map((e) => e[0] === ':' ? e.substring(1) : new RegExp(e)) : [];
    const stripBuild = (i) => i.replace(/-(esm|((cjs|umd)-(dev|prod)))/, '');
    if (!filter) {
        return builds;
    }
    return Object.keys(builds)
        .filter((key) => {
            const pack = stripBuild(key);
            for (const filter of filters) {
                if ((typeof(filter) === 'object' && key.match(filter)) || (typeof(filter) === 'string' && pack === filter)) {
                    return true;
                }
            }
            return false;
        }).filter((key) => {
            return !isWatch || key.match(/esm$/);
        })
        .reduce((obj, key) => {
            obj[key] = builds[key];
            return obj;
        }, {});
}
