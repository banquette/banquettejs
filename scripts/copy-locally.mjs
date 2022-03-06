import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { Builds } from "./build/builds.mjs";
import { fileURLToPath } from 'url';
import stringify from 'json-stringify-pretty-compact';
import {filterBuilds} from "./build/utils.mjs";

const options = ((args) => {
    const output = {packages: null, mask: null};
    for (let i = 0; i < args.length; ++i) {
        const arg = args[i];
        if (arg.substring(0, 2) === '--') {
            output[arg.substring(2)] = args[++i];
        } else if (!output.packages) {
            output.packages = arg;
        }
    }
    return output;
})(process.argv.splice(2));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targets = fs.readFileSync(path.resolve(__dirname, `../.copy-local-targets`)).toString().trim().split(/\r?\n/).reduce((acc, item) => {
    if (item[0] === '#') {
        return acc;
    }
    const pos = item.indexOf(':');
    acc.push({
        path: pos > -1 ? item.substring(pos + 1) : item,
        mask: pos > -1 ? item.substring(0, pos) : null
    });
    return acc;
}, []);

const packages = Object.values(filterBuilds(Builds, options.packages, false)).reduce((acc, i) => {
    if (acc.indexOf(i.package) < 0) {
        acc.push(i.package);
    }
    return acc;
}, []);
const dependencies = {};
for (const p of packages) {
    const packageJsonPath = path.resolve(__dirname, `../packages/${p}/package.json`);
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
    dependencies[`@banquette/${p}`] = '^'+packageJson.version;
}

for (const target of targets) {
    if (options.mask && target.mask !== options.mask) {
        continue ;
    }
    console.log(`Copying packages into: ${chalk.blue(target.path)}...`);
    const targetBasePath = path.resolve(target.path, 'node_modules/@banquette');

    if (!fs.existsSync(targetBasePath)) {
        fs.mkdirSync(targetBasePath);
    }
    for (const p of packages) {
        console.log(`Copy files for package ${chalk.blue(p)}.`);
        const distBasePath = path.resolve(__dirname, `../dist/${p}`);
        const sourceBasePath = path.resolve(__dirname, `../packages/${p}`);
        const pathsToCopy = [
            [distBasePath, path.join(targetBasePath, `${p}`)],
            [`${sourceBasePath}/package.json`, path.join(targetBasePath, `${p}/package.json`)]
        ];
        if (fs.existsSync(pathsToCopy[0][1])) {
            fs.rmdirSync(pathsToCopy[0][1], {recursive: true});
        }
        fs.mkdirSync(pathsToCopy[0][1]);
        for (let i = 0; i < pathsToCopy.length; ++i) {
            if (fs.existsSync(pathsToCopy[i][0])) {
                fse.copySync(pathsToCopy[i][0], pathsToCopy[i][1]);
            }
        }
    }

    console.log(`Copy ${chalk.blue('object-observer')}.`);
    const localObjectObserverPath = path.resolve(__dirname, '../node_modules/object-observer');
    const targetObjectObserverPath = path.resolve(target.path, 'node_modules/object-observer');
    if (fs.existsSync(targetObjectObserverPath)) {
        fs.rmdirSync(targetObjectObserverPath, {recursive: true});
    }
    fse.copySync(localObjectObserverPath, targetObjectObserverPath);

    // Update the package.json
    const packageJsonPath = path.resolve(target.path, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
    if (typeof(packageJson.dependencies) !== 'object') {
        packageJson.dependencies = {};
    }
    packageJson.dependencies = Object.assign({}, dependencies, Object.keys(packageJson.dependencies)
        .filter(k =>  k.indexOf('@banquette/') < 0)
        .reduce((obj, i) => {
            obj[i] = packageJson.dependencies[i];
            return obj;
        }, {}));
    console.log(`Update ${chalk.blue('package.json')} dependencies.`);
    fs.writeFileSync(packageJsonPath, stringify(packageJson, {indent: 4}) + "\n");
}
