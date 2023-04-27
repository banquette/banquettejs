import dependencies from "./get-packages-dependencies.mjs";
import { exec } from 'child_process';

let selectedCount = 0;
const selected = [];
const commandParts = [];
do {
    selectedCount = selected.length;
    outer:
    for (const packageName of Object.keys(dependencies)) {
        if (selected.indexOf(packageName) > -1) {
            continue ;
        }
        for (const dependency of dependencies[packageName]) {
            if (selected.indexOf(dependency) < 0) {
                continue outer;
            }
        }
        selected.push(packageName);
        commandParts.push(`pnpm ${packageName === 'config' ? '_config' : packageName} build`);
    }
} while (selectedCount !== selected.length);

exec(commandParts.join(' && ')).stdout.on('data', console.log);
