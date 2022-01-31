const fs = require('fs');
const path = require('path');
const libBasePath = path.resolve(__dirname, '../node_modules/material-design-icons');
const componentsBasePath = path.resolve(__dirname, '../packages/vue-material-icons/src/component');

function fileToComponentName(filename) {
    return 'icon-' + filename.replace(/^ic_(.*)_.*24px\.svg/, '$1').replace(/_/g, '-');
}

function camelize(input) {
    return input.substring(0, 1).toUpperCase() + input.replace(/-./g, i => i[1].toUpperCase()).substring(1);
}

const imports = [];

if (fs.existsSync(componentsBasePath)) {
    fs.rmdirSync(componentsBasePath, {recursive: true});
}
fs.mkdirSync(componentsBasePath);
fs.readdirSync(libBasePath).forEach(function(type) {
    const typePath = libBasePath + "/" + type;
    if (!fs.statSync(typePath).isDirectory()) {
        return ;
    }
    const svgDir = path.join(typePath, 'svg', 'production');
    if (!fs.existsSync(svgDir)) {
        return ;
    }
    fs.readdirSync(svgDir).forEach(function(icon) {
        if (!icon.match(/24px\.svg$/)) {
            return ;
        }
        const svg = fs.readFileSync(path.join(svgDir, icon)).toString();
        const componentName = fileToComponentName(icon);
        const className = camelize(fileToComponentName(icon));
        const componentDir = path.join(componentsBasePath, type);
        const componentPath = path.join(componentDir, componentName + '.component.vue');
        if (!fs.existsSync(componentDir)) {
            fs.mkdirSync(componentDir);
        }
        const src = `<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";

@Component('${componentName}')
export default class ${className} {
}
</script>
<template>
    ${svg}
</template>`;
        fs.writeFileSync(componentPath, src);
        imports.push(`import './component/${type}/${componentName + '.component.vue'}';`);
    });
});
fs.writeFileSync(path.join(path.dirname(componentsBasePath), 'index.ts'), imports.join("\n"));
