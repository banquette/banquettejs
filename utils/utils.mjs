import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let version = null;

/**
 * Get the current version of the build.
 */
export function getVersion() {
    if (version === null) {
        version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json')).toString()).version;
    }
    return version;
}

/**
 * Convert a number of bytes into a readable string size in kb.
 */
export function getSize(code) {
    return (code.length / 1024).toFixed(2) + 'kb';
}

/**
 * Set the first character of a string to the uppercase.
 */
export function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

/**
 * Convert a string to the camelCase case.
 */
export function camelCase(input) {
    const string = input.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
        .reduce((result, word) => result + capitalize(word.toLowerCase()));
    return string.charAt(0).toLowerCase() + string.slice(1);
}
