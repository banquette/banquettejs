import fs from 'fs';
import path from 'path';

const basePaths = [
    path.resolve(process.cwd(), 'app'),
    path.resolve(process.cwd(), 'packages'),
];

for (const basePath of basePaths) {
    fs.readdirSync(basePath).forEach(function(item) {
        let fullPath = path.join(basePath, item, 'node_modules');
        if (fs.existsSync(fullPath)) {
            fs.rmSync(fullPath, {recursive: true, force: true});
        }
    });
}

const rootNodeModules = path.resolve(process.cwd(), 'node_modules');
if (fs.existsSync(rootNodeModules)) {
    fs.rmSync(rootNodeModules, {recursive: true, force: true});
}
