import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import svgPathBbox from 'svg-path-bbox';
import { JSDOM } from 'jsdom';
import { optimize } from 'svgo';
import { fileURLToPath } from "url";

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
 * Optimize a svg source using svgo and add a condition to the viewbox.
 */
function getOptimizeSvgSource(path) {
    let svgSource = fs.readFileSync(path).toString();
    const dom = new JSDOM(`<!DOCTYPE html>${svgSource}`);
    const svg = dom.window.document.querySelector('svg');
    svg.removeAttribute('xmlns');
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    const croppedViewBox = getCroppedViewBox(svg);
    svgSource = optimize(svg.outerHTML, {
        multipass: true
    }).data;
    if (croppedViewBox !== false) {
        return svgSource.replace(/viewBox="([^"]+)"/, `:viewBox="crop ? '${croppedViewBox}' : '$1'"`);
    }
    console.log(chalk.red('Failed to crop view box') + ' for ' + chalk.blue(path));
    console.log(svg.outerHTML);
    return svgSource;
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
                    icon = icon.replace(/_/g, '-');
                    output[icon] = {default: path.join(typePath, icon)};
                });
            });
            return output;
        },
        getComponentName: (filename) => {
            return filename.replace(/_/g, '-').replace(/\.svg$/, '');
        }
    }
];

for (const configuration of configurations) {
    const imports = [];
    const duplicates = [];

    console.log(`Generating ${chalk.blue(configuration.libName)} icons...`);
    // if (fs.existsSync(configuration.outputDir)) {
    //     fs.rmdirSync(configuration.outputDir, {recursive: true});
    // }
    // fs.mkdirSync(configuration.outputDir, {recursive: true});

    let count = 0;
    const files = configuration.listFiles();
    for (const filename of Object.keys(files)) {
        const componentName = configuration.getComponentName(filename);
        const className = camelize(`Icon-${configuration.libName}-${componentName}`);
        const componentDir = path.join(configuration.outputDir, componentName);
        const componentPath = path.join(componentDir, componentName + '.component.vue');

        // if (fs.existsSync(componentDir)) {
        //     duplicates.push(componentName);
        //     continue;
        // }
        const svgs = [];
        const versions = Object.keys(files[filename]);
        if (!versions.length) {
            console.log(`No version found for "${chalk.blue(filename)}"`);
            continue ;
        }
        // Generate optimized sources.
        const optimizedSources = [];
        for (let i = 0, j; i < versions.length; i++) {
            const source = getOptimizeSvgSource(files[filename][versions[i]]);
            for (j = 0; j < optimizedSources.length; ++j) {
                if (optimizedSources[j].svg === source) {
                    optimizedSources[j].versions.push(versions[i]);
                    break ;
                }
            }
            if (j >= optimizedSources.length) {
                optimizedSources.push({svg: source, versions: [versions[i]]});
            }
        }
        if (optimizedSources.length >= 5) {
            console.log(filename);
        }

        // So "default" version is last.
        for (let i = optimizedSources.length - 1; i >= 0; i--) {
            const versionCondition = 'version === \'' + optimizedSources[i].versions.join('\' || version === \'') + '\'';
            const condition = optimizedSources.length > 1 ? ((i > 0 ? (('v-' + (i < optimizedSources.length - 1 ? 'else-' : '') + 'if') + `="${versionCondition}" `) : 'v-else ')) : '';
            svgs.push(optimizedSources[i].svg.replace('<svg ', `<svg ${condition}:width="width" :height="height || (!width ? '1em' : null)" :fill="color" `));
        }
        let src = `<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-${configuration.libName}-${componentName}')
export default class ${className} {
    @Prop({type: [String, Number], default: null}) public width!: string|number|null;
    @Prop({type: [String, Number], default: null}) public height!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;`;
        if (optimizedSources.length > 1) {
            src += `
    @Prop({type: String, default: 'default'}) public version!: string;`;
        }
        src += `
}
</script>
<template>
    ${svgs.join("\n    ")}
</template>`;
        if (src.indexOf('v-else') > -1 && src.indexOf('v-if') < 0) {
            console.log('found');
        }
       // fs.mkdirSync(componentDir);
       // fs.writeFileSync(componentPath, src);
        const indexPath = path.join(componentDir, 'index.ts');
        //fs.writeFileSync(indexPath, `export { default as ${className} } from './${componentName + '.component.vue'}';`);
        imports.push(`import './${componentName}/${componentName + '.component.vue'}';`);
        ++count;
        if (count % 100 === 0) {
            console.log(count);
        }
    }
//     console.log('Conflicting components names:', duplicates);
//     console.log('Total icons:', count);
//     fs.writeFileSync(path.join(configuration.outputDir, 'index.ts'), imports.join("\n") + `
// //
// // Fix to avoid having the following warning when building:
// // "createCommentVNode" is imported from external module "vue" but never used in "...".
// // for each icon.
// //
// // TODO: Find a proper fix.
// //
// export { createCommentVNode } from "vue";
// `);
//     fs.writeFileSync(path.join(configuration.outputDir, 'vue-shim-d.ts'), `declare module "*.vue" {
//     import { defineComponent } from 'vue';
//
//     const component: ReturnType<typeof defineComponent>;
//     export default component;
// }
// `);
}
