import path from "path";
import fs from "fs";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '../dist');

function replaceInDir(path, pattern, replacement) {
    fs.readdirSync(path).forEach(function (file) {
        const subPath = path + "/" + file;
        if (fs.statSync(subPath).isDirectory()) {
            replaceInDir(subPath, pattern, replacement);
            return ;
        }
        let content = fs.readFileSync(subPath).toString();
        if (content.match(pattern)) {
            content = content.replace(pattern, replacement);
            fs.writeFileSync(subPath, content);
        }
    });
}
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
