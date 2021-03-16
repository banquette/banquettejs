import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { Builds } from "./build/builds.mjs";
import { fileURLToPath } from 'url';
import stringify from 'json-stringify-pretty-compact';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targets = [
    '/var/www/vhosts/banquette/banquette-user-ts'
];
const packages = Object.values(Builds).reduce((acc, i) => {
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
    const targetBasePath = path.resolve(target, 'node_modules/@banquette');
    if (fs.existsSync(targetBasePath)) {
        fs.rmdirSync(targetBasePath, {recursive: true});
    }
    fs.mkdirSync(targetBasePath);
    for (const p of packages) {
        console.log(`Copy files for package ${chalk.blue(p)}.`);
        const sourceBasePath = path.resolve(__dirname, `../packages/${p}`);
        fse.copySync(`${sourceBasePath}/dist`, path.join(targetBasePath, `${p}/dist`));
        fse.copySync(`${sourceBasePath}/build`, path.join(targetBasePath, `${p}/build`));
        fse.copySync(`${sourceBasePath}/package.json`, path.join(targetBasePath, `${p}/package.json`));
    }

    // Update the package.json
    const packageJsonPath = path.resolve(target, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
    if (typeof(packageJson.dependencies) !== 'object') {
        packageJson.dependencies = {};
    }
    const deps = Object.keys(packageJson.dependencies);
    packageJson.dependencies = Object.assign({}, dependencies, deps
        .filter(k =>  k.indexOf('@banquette/'))
        .reduce((obj, i) => {
            obj[i] = deps[i];
            return obj;
        }, {}));
    console.log(`Update ${chalk.blue('package.json')} dependencies.`);
    fs.writeFileSync(packageJsonPath, stringify(packageJson, {indent: 4}) + "\n");
}
