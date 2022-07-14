import chalk from 'chalk';
import dependencies from "./get-packages-dependencies.mjs";
import path from "path";
import fs from "fs";
import stringify from "json-stringify-pretty-compact";

const knownPackagesJson = {};
const __dirname = path.resolve('.');

function getPackageJsonPath(packageName) {
    return path.join(__dirname, `/packages/${packageName}/package.json`);
}

function getPackageJsonContent(packageName) {
    if (typeof(knownPackagesJson[packageName]) === 'undefined') {
        const path = getPackageJsonPath(packageName);
        const content = JSON.parse(fs.readFileSync(path));
        if (typeof(content) !== 'object') {
            throw `Failed to decode package.json at "${path}".`;
        }
        knownPackagesJson[packageName] = content;
    }
    return knownPackagesJson[packageName];
}

for (const packageName of Object.keys(dependencies)) {
    const packageJson = getPackageJsonContent(packageName);
    const packageJsonPath = getPackageJsonPath(packageName);
    const newDependencies = Object.assign({}, Object.keys(packageJson.dependencies || {})
        .filter(k =>  k.indexOf('@banquette/') < 0)
        .reduce((obj, i) => {
            obj[i] = packageJson.dependencies[i];
            return obj;
        }, {}));

    console.log(`Update ${chalk.blue(packageName)} dependencies.`);
    for (const dependency of dependencies[packageName]) {
        if (packageName === dependency) {
            continue ;
        }
        const subPackageJson = getPackageJsonContent(dependency);
        if (!subPackageJson.version) {
            throw `Missing version for package "${dependency}".`;
        }
        newDependencies[`@banquette/${dependency}`] = `^${subPackageJson.version}`;
    }
    packageJson.dependencies = newDependencies;
    fs.writeFileSync(packageJsonPath, stringify(packageJson, {indent: 4}) + "\n");
}
