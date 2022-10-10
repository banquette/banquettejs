/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-format-italic',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '6 4 12 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '6 4 12 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z"},[])]); }
if (v === 'outlined' || v === 'sharp')
    { return h('svg',{"viewBox":c ? '6 4 12 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"},[])]); }
return h('svg',{"viewBox":c ? '6 4 12 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"},[])]);
    }
};

export { script as default };
