/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-expand-less',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '6.41 8.42 11.17 6.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.29 8.71 6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0z"},[])]); }
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    { return h('svg',{"viewBox":c ? '6 8 12 7.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"},[])]); }
return h('svg',{"viewBox":c ? '6 8 12 7.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"},[])]);
    }
};

export { script as default };
