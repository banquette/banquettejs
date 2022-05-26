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

/**
 * Fix the svg viewbox to remove blank spaces.
 */
function getCroppedViewBox(svg) {
    const paths = svg.querySelectorAll('path');
    const viewBox = svg.getAttribute('viewBox');
    const resultRect = {
        top: -Infinity,
        left: -Infinity,
        bottom: Infinity,
        right: Infinity
    };
    for (const path of paths) {
        const localRect = svgPathBbox(path.getAttribute('d'));
        if (localRect.join(' ') === viewBox) {
            path.remove();
            continue;
        }
        resultRect.left = Math.max(resultRect.left, localRect[0]);
        resultRect.top = Math.max(resultRect.top, localRect[1]);
        resultRect.right = Math.min(resultRect.right, localRect[2] - resultRect.left);
        resultRect.bottom = Math.min(resultRect.bottom, localRect[3] - resultRect.top);
    }
    return [formatNumber(resultRect.left), formatNumber(resultRect.top), formatNumber(resultRect.right), formatNumber(resultRect.bottom)].join(' ');
}

/**
 * Optimize a svg source using svgo and add a condition to the viewbox.
 */
function optimizeSvg(svgSource) {
    const dom = new JSDOM(`<!DOCTYPE html>${svgSource}`);
    const svg = dom.window.document.querySelector('svg');
    svg.removeAttribute('xmlns');
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    svgSource = optimize(svg.outerHTML, {
        multipass: true
    }).data;
    const croppedViewBox = getCroppedViewBox(svg);
    return svgSource.replace(/viewBox="([^"]+)"/, `:viewBox="crop ? '${croppedViewBox}' : '$1'"`);
}

const libsImports = [];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configurations = [
    {
        libName: 'material',
        outputDir: path.resolve(__dirname, '../packages/vue-icons/src/material'),
        listFiles: () => {
            const output = [];
            const baseDir = path.resolve(__dirname, '../node_modules/material-design-icons');
            fs.readdirSync(baseDir).forEach(function(type) {
                const typePath = baseDir + "/" + type;
                if (!fs.statSync(typePath).isDirectory()) {
                    return;
                }
                const svgDir = path.join(typePath, 'svg', 'production');
                if (!fs.existsSync(svgDir)) {
                    return;
                }
                fs.readdirSync(svgDir).forEach(function (icon) {
                    if (!icon.match(/24px\.svg$/)) {
                        return;
                    }
                    output.push(path.join(svgDir, icon));
                });
            });
            return output;
        },
        getComponentName: (filename) => {
            return filename.replace(/^ic_(.*)_.*24px\.svg/, '$1').replace(/_/g, '-').replace(/\.svg$/, '');
        }
    },
    {
        libName: 'remix',
        outputDir: path.resolve(__dirname, '../packages/vue-icons/src/remix'),
        listFiles: () => {
            const output = [];
            const baseDir = path.resolve(__dirname, '../packages/vue-icons/lib/remix');
            fs.readdirSync(baseDir).forEach(function(type) {
                const typePath = baseDir + "/" + type;
                if (!fs.statSync(typePath).isDirectory()) {
                    return;
                }
                fs.readdirSync(typePath).forEach(function (icon) {
                    output.push(path.join(typePath, icon));
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
    if (fs.existsSync(configuration.outputDir)) {
        fs.rmdirSync(configuration.outputDir, {recursive: true});
    }
    fs.mkdirSync(configuration.outputDir, {recursive: true});

    const files = configuration.listFiles();
    for (const file of files) {
        const svg = fs.readFileSync(file).toString().replace('<svg ', '<svg :width="size" :height="size" :fill="color"');
        const filename = path.basename(file);
        const componentName = configuration.getComponentName(filename);
        const className = camelize(`Icon-${configuration.libName}-${componentName}`);
        const componentDir = path.join(configuration.outputDir, componentName);
        const componentPath = path.join(componentDir, componentName + '.component.vue');
        if (fs.existsSync(componentDir)) {
            duplicates.push(componentName);
            continue ;
        }
        fs.mkdirSync(componentDir);

        const src = `<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";

@Component('i-${configuration.libName}-${componentName}')
export default class ${className} {
    @Prop({type: [String, Number], default: '1em'}) public size!: string|number|null;
    @Prop({type: String, default: 'currentColor'}) public color!: string|null;
    @Prop({type: Boolean, default: false}) public crop!: boolean;
}
</script>
<template>
    <span>${optimizeSvg(svg)}</span>
</template>`;
        fs.writeFileSync(componentPath, src);

        const indexPath = path.join(componentDir, 'index.ts');
        fs.writeFileSync(indexPath, `export { default as ${ className } } from './${componentName + '.component.vue'}';`);
        imports.push(`import './${componentName}/${componentName + '.component.vue'}';`);
    }
    console.log('Conflicting components names:', duplicates);
    fs.writeFileSync(path.join(configuration.outputDir, 'index.ts'), imports.join("\n") + "\n");
    libsImports.push(`import './${configuration.libName}';`);
}

fs.writeFileSync(path.resolve(__dirname, '../packages/vue-icons/src/index.ts'), libsImports.join("\n") + "\n");
