/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-navigate-before',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '8.2 6 7.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.2 6-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '8.62 6.42 6.59 11.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.91 6.71a.996.996 0 0 0-1.41 0L8.91 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z"},[])]); }
if (v === 'outlined' || v === 'sharp')
    { return h('svg',{"viewBox":c ? '8.2 6 7.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"},[])]); }
return h('svg',{"viewBox":c ? '8 6 7.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"},[])]);
    }
};

export { script as default };
