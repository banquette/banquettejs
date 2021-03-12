const { execSync } = require("child_process");
try {
    const branch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
    if (['main', 'master', 'dev'].indexOf(branch) > -1) {
        execSync("commitlint -E HUSKY_GIT_PARAMS", {stdio: 'inherit'});
    }
} catch (e) {
    process.exit(1);
}
