import {Builds} from "./builds.mjs";
import {cleanupBuilds, filterBuilds, getRollupConfig, watch} from './utils.mjs';
import childProcess from 'child_process';

let builds = filterBuilds(Builds, process.argv[2], true);
if (!Object.keys(builds).length) {
    console.log('No build found.');
    process.exit(1);
}
let building = false;
let keys = Object.keys(builds);
let highestBuildWatched = -1;
let startedBuildsCount = 0;
function buildFromIndex(index) {
    watch(getRollupConfig(builds[keys[index]]), () => {
        if ((!startedBuildsCount && highestBuildWatched === keys.length - 1) || highestBuildWatched < 0) {
            cleanupBuilds([builds[keys[index]]]);
        }
        ++startedBuildsCount;
    }, () => {
        building = false;
        --startedBuildsCount;
        highestBuildWatched = Math.max(highestBuildWatched, index);
        if (highestBuildWatched < index + 1 && index < keys.length - 1) {
            buildFromIndex(index + 1);
        } else {
            if (startedBuildsCount <= 0) {
                childProcess.fork('scripts/copy-locally.mjs', {
                    execArgv: [
                        'scripts/copy-locally.mjs',
                        `:${builds[keys[index]].package}`,
                        '--mask',
                        'watch'
                    ]
                });
                startedBuildsCount = 0;
            }
        }
    }, () => {
        --startedBuildsCount;
    });
}
buildFromIndex(0);
