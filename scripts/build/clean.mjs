import { Builds } from "./builds.mjs";
import { cleanupBuilds, filterBuilds } from './utils.mjs';
cleanupBuilds(Object.values(filterBuilds(Builds, process.argv[2])));
