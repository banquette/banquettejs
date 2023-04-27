import chalk from 'chalk';
import dependencies from "./get-packages-dependencies.mjs";

function colorizePackageDeps(packageName, map) {
    const deps = [].concat(map[packageName]);
    for (let i = 0; i < deps.length; ++i) {
        if (deps[i] === packageName) {
            deps[i] = chalk.red('>> SELF' + deps[i] + ' <<');
        }
        else if (typeof(map[deps[i]]) === 'undefined') {
            deps[i] = chalk.red('>> MISSING ' + deps[i] + ' <<');
        } else if (map[deps[i]].indexOf(packageName) > -1) {
            deps[i] = chalk.red('>> CIRCULAR ' + deps[i] + ' <<');
        } else {
            deps[i] = chalk.green(deps[i]);
        }
    }
    return deps;
}

for (const packageName of Object.keys(dependencies)) {
    const colorized = colorizePackageDeps(packageName, dependencies);
    console.log(`Package ${chalk.blue(packageName)}: ${colorized.length > 0 ? colorized.join(', ') : 'none'}`);
}
