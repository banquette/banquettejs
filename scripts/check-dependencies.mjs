import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const __dirname = path.resolve('.');

function analyzeDir(dir) {
    let deps = [];
    fs.readdirSync(dir).forEach(function(item) {
        const itemPath = path.resolve(dir, item);
        if (fs.statSync(itemPath).isDirectory()) {
            deps = deps.concat(analyzeDir(itemPath));
            return ;
        }
        const buffer = fs.readFileSync(itemPath).toString().replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
        const reg = /import\s+(?:[^@]+)@banquette\/([^\/|"|']+)/g;
        let match;
        while ((match = reg.exec(buffer))) {
            deps.push(match[1]);
        }
    });
    return deps.filter((item, idx) => deps.indexOf(item) === idx).sort();
}

function getDeps(basePath) {
    const map = {};
    fs.readdirSync(basePath).forEach(function(packageName) {
        if (['_', '.'].indexOf(packageName[0]) > -1) {
            return ;
        }
        const deps = analyzeDir(path.join(basePath, packageName, '/src'));
        map[packageName] = deps;
    });
    return map;
}

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

const map = getDeps(path.resolve(__dirname, 'packages'));
for (const packageName of Object.keys(map)) {
    const colorized = colorizePackageDeps(packageName, map);
    console.log(`Package ${chalk.blue(packageName)}: ${colorized.length > 0 ? colorized.join(', ') : 'none'}`);
}
