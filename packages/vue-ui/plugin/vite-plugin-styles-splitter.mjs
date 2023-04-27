import path from 'path';

/**
 * Copy each css file in its own file at the same relative position in the output folder.
 */
export default function StylesSplitter() {
    return {
        name: 'styles-splitter',
        apply: 'build',

        async transform(code, id) {
            if (id.match(/\.css$/) && code.trim().length > 0) {
                this.emitFile({
                    type: 'asset',
                    fileName: id.replace(path.resolve(__dirname,  '../src') + '/', ''),
                    source: code
                });
                return '';
            }
            return null;
        }
    };
}
