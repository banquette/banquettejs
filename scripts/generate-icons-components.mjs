import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import svgPathBbox from 'svg-path-bbox';
import {JSDOM} from 'jsdom';
import {optimize} from 'svgo';
import {fileURLToPath} from "url";
import {parse} from 'svg-parser';

function camelize(input) {
    return input.substring(0, 1).toUpperCase() + input.replace(/-./g, i => i[1].toUpperCase()).substring(1);
}

function formatNumber(num) {
    return Number(num.toFixed(2)) * 1;
}

function getRectAroundPath(path) {
    return svgPathBbox(path.getAttribute('d'));
}

function getRectAroundRect(rect) {
    const bounds = [
        parseFloat(rect.getAttribute('x') || 0),
        parseFloat(rect.getAttribute('y') || 0),
        parseFloat(rect.getAttribute('width') || 0),
        parseFloat(rect.getAttribute('height') || 0)
    ];
    bounds[2] += bounds[0];
    bounds[3] += bounds[1];
    return bounds;
}

function getRectAroundPolygon(polygon) {
    const points = polygon.getAttribute('points').split(' ').reduce((acc, item) => {
        acc.push(item.split(',').map((i) => parseFloat(i)));
        return acc;
    }, []);
    const bounds = {
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };
    for (const point of points) {
        bounds.minX = Math.min(bounds.minX, point[0]);
        bounds.minY = Math.min(bounds.minY, point[1]);
        bounds.maxX = Math.max(bounds.maxX, point[0]);
        bounds.maxY = Math.max(bounds.maxY, point[1]);
    }
    return [bounds.minX, bounds.minY, bounds.maxX, bounds.maxY];
}

function getRectAroundCircle(circle) {
    const x = parseFloat(circle.getAttribute('cx') || 0);
    const y = parseFloat(circle.getAttribute('cy') || 0);
    const radius = parseFloat(circle.getAttribute('r') || 0);
    return [
        x - radius,
        y - radius,
        x + radius,
        y + radius
    ];
}

function getRectAroundShape(shape) {
    switch (shape.tagName) {
        case 'path': return getRectAroundPath(shape);
        case 'polygon': return getRectAroundPolygon(shape);
        case 'rect': return getRectAroundRect(shape);
        case 'circle': return getRectAroundCircle(shape);
    }
    return false;
}

/**
 * Find the smallest rectangle around the visible part of a svg element.
 */
function getCroppedViewBox(svg) {
    const shapes = svg.querySelectorAll('path, rect, polygon, circle');
    const viewBox = svg.getAttribute('viewBox');
    const bounds = {
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };
    for (const shape of shapes) {
        const localRect = getRectAroundShape(shape);
        if (localRect === false || (localRect.join(' ') === viewBox && shape.getAttribute('fill') === 'none' )) {
            shape.remove();
            continue;
        }
        bounds.minX = Math.min(bounds.minX, localRect[0]);
        bounds.minY = Math.min(bounds.minY, localRect[1]);
        bounds.maxX = Math.max(bounds.maxX, localRect[2]);
        bounds.maxY = Math.max(bounds.maxY, localRect[3]);
    }
    if (bounds.minX === Infinity) {
        return false;
    }
    return [
        formatNumber(bounds.minX),
        formatNumber(bounds.minY),
        formatNumber(bounds.maxX - bounds.minX),
        formatNumber(bounds.maxY - bounds.minY)
    ].join(' ');
}

/**
 * Parse a svg source, optimize it and return an object the represents its structure.
 */
function tokenizeSvg(path) {
    const svgSource = fs.readFileSync(path).toString();
    const dom = new JSDOM(`<!DOCTYPE html>${svgSource}`);
    const svg = dom.window.document.querySelector('svg');
    svg.removeAttribute('xmlns');
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    const croppedViewBox = getCroppedViewBox(svg);
    const parsed = parse(optimize(svg.outerHTML, {
        multipass: true
    }).data).children[0];

    if (!croppedViewBox) {
        console.log(chalk.red('Failed to crop view box') + ' for ' + chalk.blue(path));
        console.log(svg.outerHTML);
    }
    parsed.properties.croppedViewBox = croppedViewBox;
    return parsed;
}

function tokenToRenderCode(token) {
    let h = [`'${token.tagName}'`, {}, []];
    if (token.tagName === 'svg') {
        if (token.properties.croppedViewBox) {
            h[1].viewBox = `c ? '${token.properties.croppedViewBox}' : '${token.properties.viewBox}'`;
        } else {
            h[1].viewBox = `"${token.properties.viewBox}"`;
        }
        h[1].width = "w";
        h[1].height = "s";
        h[1].fill = "f";
    }
    for (const attr of Object.keys(token.properties)) {
        if (attr !== 'viewBox' && attr !== 'croppedViewBox') {
            h[1][attr] = `"${token.properties[attr]}"`;
        }
    }
    for (const children of token.children) {
        h[2].push(tokenToRenderCode(children));
    }
    return `h(${h[0]},{${Object.keys(h[1]).reduce((r, k) => r.concat([`${k.match(/^[a-z0-9]$/i) ? k : ('"'+k+'"')}:${h[1][k]}`]) , [])}},[${h[2].join(',')}])`;
}

function tokenToRenderTree(token) {
    const tagsMap = ['g', 'path', 'polygon', 'rect', 'circle', 'ellipse', 'defs', 'use', 'clipPath'];
    const children = token.children.reduce((r, i) => r.concat([tokenToRenderTree(i)]), []);
    if (token.tagName === 'svg') {
        const croppedViewBox = token.properties.croppedViewBox;
        return [token.properties.viewBox, croppedViewBox || token.properties.viewBox, children];
    }
    const shapeIndex = tagsMap.indexOf(token.tagName);
    if (shapeIndex < 0) {
        throw `Unsupported element ${token.tagName}.`;
    }
    return [shapeIndex, Object.keys(token.properties).reduce((r, k) => r.concat([[k, token.properties[k]]]) , []), children];
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configurations = [
    {
        libName: 'material',
        outputDir: path.resolve(__dirname, '../packages/vue-material-icons/src'),
        listFiles: () => {
            const output = {};
            const baseDir = path.resolve(__dirname, '../packages/vue-material-icons/lib');
            const scanDir = (_path, nameParts = []) => {
                fs.readdirSync(_path).forEach(function(item) {
                    let fullPath = _path + "/" + item;
                    if (!fs.statSync(fullPath).isDirectory()) {
                        return ;
                    }
                    if (item.indexOf('materialicons') < 0) {
                        scanDir(fullPath, [].concat(nameParts, [item]));
                        return ;
                    }
                    const name = nameParts.slice(1).join('-').replace(/_/g, '-');
                    if (typeof(output[name]) === 'undefined') {
                        output[name] = {};
                    }
                    const category = item.substring(13) || 'default';
                    fullPath += '/24px.svg';
                    if (!fs.existsSync(fullPath)) {
                        return;
                    }
                    output[name][category] = fullPath;
                });
            };
            scanDir(baseDir);
            return output;
        },
        getComponentName: (filename) => {
            return filename.replace(/^ic_(.*)_.*24px\.svg/, '$1').replace(/_/g, '-').replace(/\.svg$/, '');
        }
    },
    {
        libName: 'remix',
        outputDir: path.resolve(__dirname, '../packages/vue-remix-icons/src'),
        listFiles: () => {
            const output = {};
            const baseDir = path.resolve(__dirname, '../packages/vue-remix-icons/lib');
            fs.readdirSync(baseDir).forEach(function(type) {
                const typePath = baseDir + "/" + type;
                if (!fs.statSync(typePath).isDirectory()) {
                    return;
                }
                fs.readdirSync(typePath).forEach(function (icon) {
                    const matches = Array.from(icon.matchAll(/(?:^|-)(\w+)/g));
                    if (!matches.length) {
                        console.error(`Unable to determine version of ${chalk.red(icon)}.`);
                        return ;
                    }
                    const lastMatch = matches[matches.length - 1][1];
                    const version = lastMatch === 'fill' || lastMatch === 'line' ? lastMatch : 'default';
                    if (version !== 'default') {
                        matches.pop();
                    }
                    const name = matches.reduce((r, i) => r.concat([i[1]]), []).join('-');
                    if (typeof(output[name]) === 'undefined') {
                        output[name] = {};
                    }
                    icon = icon.replace(/_/g, '-');
                    output[name][version] = path.join(typePath, icon);
                });
            });
            return output;
        },
        getComponentName: (filename) => {
            return filename.replace(/_/g, '-').replace(/\.svg$/, '');
        }
    }
];

const globalIndex = [[], []];
for (let libIndex = 0; libIndex < configurations.length; ++libIndex) {
    const configuration = configurations[libIndex];
    const imports = [];
    const duplicates = [];

    globalIndex[0].push(configuration.libName);
    globalIndex[1].push({});
    console.log(`Generating ${chalk.blue(configuration.libName)} icons...`);
    if (fs.existsSync(configuration.outputDir)) {
        fs.rmdirSync(configuration.outputDir, {recursive: true});
    }
    fs.mkdirSync(configuration.outputDir, {recursive: true});

    let count = 0;
    const files = configuration.listFiles();
    for (const filename of Object.keys(files)) {
        const componentName = configuration.getComponentName(filename);
        const className = camelize(`Icon-${configuration.libName}-${componentName}`);
        const componentDir = path.join(configuration.outputDir, componentName);
        const componentPath = path.join(componentDir, componentName + '.component.vue');

        if (fs.existsSync(componentDir)) {
            duplicates.push(componentName);
            continue;
        }
        const versions = Object.keys(files[filename]);
        if (!versions.length) {
            console.log(`No version found for "${chalk.blue(filename)}"`);
            continue ;
        }
        const renderCodes = [];
        if (typeof(globalIndex[1][libIndex][componentName]) === 'undefined') {
            globalIndex[1][libIndex][componentName] = [{}];
        }
        for (let i = 0, j; i < versions.length; i++) {
            const token = tokenizeSvg(files[filename][versions[i]]);
            const renderCode = tokenToRenderCode(token);

            for (j = 0; j < renderCodes.length; ++j) {
                if (renderCodes[j].code === renderCode) {
                    renderCodes[j].versions.push(versions[i]);

                    if (typeof(globalIndex[1][libIndex][componentName][0][renderCodes[j].versions[0]]) === 'undefined') {
                        throw `Existing version "${renderCodes[j].versions[0]}" not found for component "${componentName}".`;
                    }
                    globalIndex[1][libIndex][componentName][0][versions[i]] = globalIndex[1][libIndex][componentName][0][renderCodes[j].versions[0]];
                    break ;
                }
            }
            if (j >= renderCodes.length) {
                renderCodes.push({code: renderCode, versions: [versions[i]]});
                globalIndex[1][libIndex][componentName][0][versions[i]] = renderCodes.length;
                globalIndex[1][libIndex][componentName].push(tokenToRenderTree(token));
            }
        }
        const renderLines = [];
        for (let i = renderCodes.length - 1; i >= 0; --i) {
            if (i > 0) {
                renderLines.push(`if (v === '${renderCodes[i].versions.join('\' || v === \'')}')`);
            }
            renderLines.push(`${!!(renderLines.length % 2) ? '    ' : ''}return ${renderCodes[i].code};`);
        }
        let src = `<script>
import { h } from 'vue';

export default {
    name: 'i-${configuration.libName}-${componentName}',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render() {
        let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        ${renderLines.join("\n")}
    }
}
</script>`;
        if (src.indexOf('v-else') > -1 && src.indexOf('v-if') < 0) {
            console.log('found');
        }
        fs.mkdirSync(componentDir);
        fs.writeFileSync(componentPath, src);
        const indexPath = path.join(componentDir, 'index.ts');
        fs.writeFileSync(indexPath, `
import { VueBuilder } from "@banquette/vue-typescript";
import { default as ${className} } from './${componentName + '.component.vue'}';

VueBuilder.RegisterComponent('i-${configuration.libName}-${componentName}', ${className});

export { ${className} }

`);
        imports.push(`import './${componentName}/${componentName + '.component.vue'}';`);
        ++count;
    }
    console.log('Conflicting components names:', duplicates);
    console.log('Total icons:', count);
    fs.writeFileSync(path.join(configuration.outputDir, 'index.ts'), imports.join("\n") + `
//
// Fix to avoid having the following warning when building:
// "createCommentVNode" is imported from external module "vue" but never used in "...".
// for each icon.
//
// TODO: Find a proper fix.
//
export { createCommentVNode } from "vue";
`);
    fs.writeFileSync(path.join(configuration.outputDir, 'vue-shim-d.ts'), `declare module "*.vue" {
    import { defineComponent } from 'vue';

    const component: ReturnType<typeof defineComponent>;
    export default component;
}
`);
}


/**
 * Write ALL icons in a single file.
 */
// let globalIndexBuffer = `export const Icons = [\n    ${JSON.stringify(globalIndex[0])},\n    [\n`;
// for (let i = 0; i < globalIndex[1].length; ++i) {
//     globalIndexBuffer += ' '.repeat(8) + '{\n';
//     for (let j = 0, k = Object.keys(globalIndex[1][i]); j < k.length; ++j) {
//         globalIndexBuffer += ' '.repeat(12) + `'${k[j]}':` + JSON.stringify(globalIndex[1][i][k[j]]) + ',\n';
//     }
//     globalIndexBuffer += ' '.repeat(8) + '},\n';
// }
// globalIndexBuffer += '    ]\n];';
//
// fs.writeFileSync(path.join(__dirname, 'icons.ts'), globalIndexBuffer);

/**
 * Write a file for each set of icons.
 */
for (let i = 0; i < globalIndex[1].length; ++i) {
    let globalIndexBuffer = `export const Icons = {\n`;
    for (let j = 0, k = Object.keys(globalIndex[1][i]); j < k.length; ++j) {
        globalIndexBuffer += ' '.repeat(4) + `'${k[j]}':` + JSON.stringify(globalIndex[1][i][k[j]]) + ',\n';
    }
    globalIndexBuffer += '};';
    fs.writeFileSync(path.join(__dirname, `${globalIndex[0][i]}-icons.ts`), globalIndexBuffer);
}
