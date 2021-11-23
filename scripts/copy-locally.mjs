import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { Builds } from "./build/builds.mjs";
import { fileURLToPath } from 'url';
import stringify from 'json-stringify-pretty-compact';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targets = fs.readFileSync(path.resolve(__dirname, `../.copy-local-targets`)).toString().trim().split(/\r?\n/);

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
    console.log(`Preparing to copy to ${chalk.blue(target)}...`);

    const targetBasePath = path.resolve(target, 'node_modules/@banquette');
    if (fs.existsSync(targetBasePath)) {
        fs.rmdirSync(targetBasePath, {recursive: true});
    }
    fs.mkdirSync(targetBasePath);
    for (const p of packages) {
        console.log(`Copy files for package ${chalk.blue(p)}.`);
        const distBasePath = path.resolve(__dirname, `../dist/${p}`);
        const sourceBasePath = path.resolve(__dirname, `../packages/${p}`);
        const pathsToCopy = [
            [distBasePath, path.join(targetBasePath, `${p}`)],
            [`${sourceBasePath}/package.json`, path.join(targetBasePath, `${p}/package.json`)]
        ];
        for (let i = 0; i < pathsToCopy.length; ++i) {
            if (fs.existsSync(pathsToCopy[i][0])) {
                fse.copySync(pathsToCopy[i][0], pathsToCopy[i][1]);
            }
        }
    }

    // Update the package.json
    const packageJsonPath = path.resolve(target, 'package.json');
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
