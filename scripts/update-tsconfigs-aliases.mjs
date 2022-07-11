import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import stringify from 'json-stringify-pretty-compact';
import { default as jestConfig } from '../jest.config.js';

function loadTsConfig(path) {
    const config = JSON.parse(fs.readFileSync(path));
    if (!config.compilerOptions) {
        config.compilerOptions = {};
    }
    const paths = config.compilerOptions.paths || {};
    config.compilerOptions.paths = Object.keys(paths)
        .filter(k => k.indexOf('@banquette/') < 0 || k.substring(k.length - 2) !== '/*')
        .reduce((obj, i) => {
            obj[i] = paths[i];
            return obj;
        }, {});
    return config;
}

const ignoredPackages = ['__tests__'];
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');
const packages = fs.readdirSync(packagesDir);

// Update packages' tsconfig.json
for (const packageName of packages) {
    const tsconfigPath = path.join(packagesDir, packageName, 'tsconfig.json');
    if (!fs.existsSync(tsconfigPath)) {
        console.log(chalk.yellow(`No tsconfig.json found for package ${packageName}.`));
        continue ;
    }
    try {
        const config = loadTsConfig(tsconfigPath);
        for (const subPackageName of packages) {
            if (subPackageName !== packageName) {
                if (ignoredPackages.indexOf(subPackageName) > -1) {
                    continue ;
                }
                config.compilerOptions.paths[`@banquette/${subPackageName}/*`] = [`packages/${subPackageName}/src/*`];
            }
        }
        console.log(`Update ${chalk.cyan('tsconfig.json')} of package ${chalk.blue(packageName)}.`);
        fs.writeFileSync(tsconfigPath, stringify(config, {indent: 4}) + "\n");
    } catch (e) {
        console.log(chalk.yellow(`Failed to reach tsconfig.json file of package ${packageName}.`));
        console.error(e);
    }
}

// Update jest's tsconfig.test.json
const testTsConfigPath = path.join(rootDir, 'tsconfig.test.json');
const testConfig = loadTsConfig(testTsConfigPath);
for (const packageName of packages) {
    if (ignoredPackages.indexOf(packageName) > -1) {
        continue ;
    }
    testConfig.compilerOptions.paths[`@banquette/${packageName}/*`] = [`packages/${packageName}/src/*`];
}
console.log(`Update ${chalk.blue('jest')} ${chalk.cyan('tsconfig.json')}.`);
fs.writeFileSync(testTsConfigPath, stringify(testConfig, {indent: 4}) + "\n");

// Update jest.config.js
jestConfig.moduleNameMapper = {};
for (const packageName of packages) {
    if (ignoredPackages.indexOf(packageName) > -1) {
        continue ;
    }
    jestConfig.moduleNameMapper[`@banquette/${packageName}/(.*)$`] = `<rootDir>/packages/${packageName}/src/$1`;
}
console.log(`Update ${chalk.cyan('jest.config.js')}.`);
fs.writeFileSync(path.join(rootDir, 'jest.config.js'), `module.exports = ${stringify(jestConfig, {indent: 4})}\n`);
