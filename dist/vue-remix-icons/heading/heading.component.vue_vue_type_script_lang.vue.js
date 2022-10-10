/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-heading',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor';this.version;var c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '5 4 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"},[])]);
    }
};

export { script as default };
