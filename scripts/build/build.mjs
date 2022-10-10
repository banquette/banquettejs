import { Builds } from "./builds.mjs";
import { build, cleanupBuilds, filterBuilds, getRollupConfig } from './utils.mjs';
import path from "path";
import fs from "fs";
import fsExtra from "fs-extra";
import { fileURLToPath } from "url";
import chalk from 'chalk';

let builds = filterBuilds(Builds, process.argv[2], false);
if (!Object.keys(builds).length) {
    console.log('No build found.');
    process.exit(1);
}
let keys = Object.keys(builds);
let index = 0;
const total = keys.length;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '../../dist');

function patchReflectMetadata() {
    console.log('Patch Typescript metadata.');
    const replaceInDir = (path, pattern, replacement) => {
        fs.readdirSync(path).forEach(function (file) {
            const subPath = path + "/" + file;
            if (fs.statSync(subPath).isDirectory()) {
                replaceInDir(subPath, pattern, replacement);
                return;
            }
            let content = fs.readFileSync(subPath).toString();
            if (content.match(pattern)) {
                content = content.replace(pattern, replacement);
                fs.writeFileSync(subPath, content);
            }
        });
    };
    replaceInDir(
        baseDir,
        /"design:paramtypes",\ \[(UIEvent|KeyboardEvent|HTMLElement|MouseEvent|Element|Event)]\)/g,
        '"design:paramtypes", [typeof(window) !== \'undefined\' ? $1 : Object])'
    );

    replaceInDir(
        baseDir,
        /"design:type",\ (UIEvent|KeyboardEvent|HTMLElement|MouseEvent|Element|Event)\)/g,
        '"design:type", typeof(window) !== \'undefined\' ? $1 : Object)'
    );
}

function finalCleanup() {
    console.log('Final cleanup.');
    fs.readdirSync(baseDir).forEach(function (file) {
        const typesDir = path.join(baseDir, file, 'src');
        const testsDir = path.join(baseDir, file, '__tests__');
        if (fs.existsSync(typesDir)) {
            fsExtra.copySync(typesDir, path.join(baseDir, file), {});
            fsExtra.removeSync(typesDir);
        }
        if (fs.existsSync(testsDir)) {
            fsExtra.removeSync(testsDir);
        }
    });
}

function rewriteVueUiIndexes() {
    for (const currentPath of [
        path.join(baseDir, 'vue-ui/_cjs/dev/index.js'),
        path.join(baseDir, 'vue-ui/_cjs/prod/index.js'),
        path.join(baseDir, 'vue-ui/index.js')
    ]) {
        if (fs.existsSync(currentPath)) {
            console.log(`Rewrite "${chalk.blue(currentPath)}."`);
            fs.writeFileSync(currentPath, `console.error('Do not import components by doing "import {...} from \\'@banquette/vue-ui\\';", use specific imports instead, for example: "import { ButtonComponent } from \\'@vue-ui/button\\'".');`);
        }
    }
    if (fs.existsSync(path.join(baseDir, 'vue-ui/index.d.ts'))) {
        fs.rmSync(path.join(baseDir, 'vue-ui/index.d.ts'));
    }
}

function postBuild() {
    patchReflectMetadata();
    rewriteVueUiIndexes();
    finalCleanup();
}

const next = () => {
    build(getRollupConfig(builds[keys[index++]])).then(() => {
        if (index < total) {
            next();
        } else {
           postBuild();
        }
    }).catch(console.error);
}
cleanupBuilds(Object.values(builds));
next();
