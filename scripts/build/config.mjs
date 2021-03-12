import { Builds } from './builds.mjs';
import { getRollupConfig } from  './utils.mjs';

const target = process.env.TARGET;
if (!target) {
    console.error('Missing target build name. Please add a TARGET option to the env.');
    process.exit(1);
}
if (typeof(Builds[target]) === 'undefined') {
    console.error(`No build ${target} has been found.`);
    process.exit(1);
}
export default getRollupConfig(Builds[target]);
