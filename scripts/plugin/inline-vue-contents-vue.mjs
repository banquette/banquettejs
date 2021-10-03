import fs from 'fs';
import path from 'path';

function buildRegex(tag) {
    return new RegExp('<' + tag + '.*src=(?:"((?:[^"\\\\]|\\\\.)*)"|\'((?:[^\'\\\\]|\\\\.)*)\')[^>]*>\\s*<\\/' + tag + '>', 'gm');
}

function extractComponentOptions(code, start) {
    let startChars = ['(', '{'];
    for (start = start + '@Component'.length; start < code.length && startChars.length > 0; ++start) {
        if (code[start].match(/\s/)) {
            continue;
        }
        if (code[start] !== startChars[0]) {
            return {start: start - 1, end: start - 1, options: null};
        }
        startChars.shift();
    }
    let dsLimiters = {'{': [0, 1], '}': [0, -1], '[': [1, 1], ']': [1, -1], '(': [2, 1], ')': [2, -1]};
    let dsCounts = [0 /* {} */, 0 /* [] */, 0 /* () */];
    let strChar = null;
    let escaped = false;
    let i;
    for (i = start; i < code.length; ++i) {
        const c = code[i];
        if (c === '"' || c === "'") {
            if (!strChar) {
                strChar = c;
            } else if (!escaped && c === strChar) {
                strChar = null;
            }
            continue ;
        }
        if (strChar) {
            if (c === '\\') {
                escaped = !escaped;
            }
            continue ;
        }
        if (c === '}' && !dsCounts[0] && !dsCounts[1] && !dsCounts[2]) {
            break ;
        }
        if (typeof(dsLimiters[c]) !== 'undefined') {
            dsCounts[dsLimiters[c][0]] += dsLimiters[c][1];
        }
    }
    if (dsCounts[0] || dsCounts[1] || dsCounts[2]) {
        throw "Syntax error.";
    }
    return {start, end: i, options: code.substring(start, i)};
}

export default function inlineVueContents() {
    return {
        name: 'inline-vue-contents',
        transform(code, id) {
            if (!id.match(/\.vue$/)) {
                return;
            }
            let template = null;
            const base = path.dirname(id);
            code = code.replace(buildRegex('script'), function (match, src) {
                return '<script lang="' + src.substring(src.lastIndexOf('.') + 1) + '">' + fs.readFileSync(path.resolve(base, src)).toString() + '</script>';
            });
            code = code.replace(buildRegex('style'), function (match, src) {
                return '<style lang="' + src.substring(src.lastIndexOf('.') + 1) + '"' + (match.match(/scoped/) ? ' scoped' : '') + '>' + fs.readFileSync(path.resolve(base, src)).toString() + '</style>';
            });
            code = code.replace(buildRegex('template'), function (match, src) {
                template = fs.readFileSync(path.resolve(base, src)).toString();
                return '<template>' + template + '</template>';
            });
            // let pos;
            // if (template !== null && (pos = code.indexOf('@Component')) > -1) {
            //     template = template.replace(/\\([\s\S])|(")/g, "\\$1$2").replace(/\r?\n|\r/g, '');
            //     const result = extractComponentOptions(code, pos);
            //     if (result.options !== null) {
            //         if (result.options.match(/template\s*:\s*(?:"|')/)) {
            //             throw "You cannot define a template both in the @Component() decorator and in the '.vue' file.";
            //         }
            //         result.options = 'template: "' + template + '",' + "\n" + result.options;
            //         code = code.substring(0, result.start) + result.options + code.substring(result.end);
            //     } else {
            //         let t = '{template: "' + template + '"}';
            //         if (code[result.start] !== '(') {
            //             t = '(' + t + ')';
            //         } else {
            //             result.start++;
            //         }
            //         code = code.substring(0, result.start) + t + "\n" + code.substring(result.start);
            //     }
            // }
            return code;
        }
    };
}
