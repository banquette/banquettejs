const fs = require('fs');
const cc = require('conventional-changelog');
const version = process.argv[2] || process.env.VERSION
const file = `./changelog/RELEASE_NOTE${version ? `_${version}` : ``}.md`
const fileStream = fs.createWriteStream(file)

cc({
    preset: 'angular',
    pkg: {
        transform (pkg) {
            pkg.version = `v${version}`;
            return pkg;
        }
    }
}).pipe(fileStream).on('close', () => {
    console.log(`Generated release note at ${file}.`);
});
