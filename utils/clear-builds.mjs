import fs from 'fs';
import path from 'path';
import { Globals } from "./builds.mjs";

const basePath = path.resolve(process.cwd(), 'packages');
for (const key of Object.keys(Globals)) {
    const packageName = key.substring(11);
    const distPath = path.join(basePath, packageName, 'dist');
    if (fs.existsSync(distPath)) {
        fs.rmSync(distPath, {recursive: true, force: true});
    }
}
