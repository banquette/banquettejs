import fs from 'fs';
import path from 'path';

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
        map[packageName] = analyzeDir(path.join(basePath, packageName, '/src'));
    });
    return map;
}

const dependencies = getDeps(path.resolve(path.resolve('.'), 'packages'));
export default dependencies;
