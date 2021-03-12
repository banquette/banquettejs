import { Builds } from "./builds.mjs";
import { build, cleanupBuilds, filterBuilds, getRollupConfig } from './utils.mjs';

let builds = filterBuilds(Builds, process.argv[2]);
let keys = Object.keys(builds);
let index = 0;
const total = keys.length;
const next = () => {
    build(getRollupConfig(builds[keys[index++]])).then(() => {
        if (index < total) {
            next();
        }
    }).catch(console.error);
}
cleanupBuilds(Object.values(builds));
next();
