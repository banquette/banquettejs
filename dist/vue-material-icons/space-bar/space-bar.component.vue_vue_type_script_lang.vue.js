/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-space-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '4 9 16 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 13H6V9H4v6h16V9h-2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '4 9 16 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 10v3H6v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1z"},[])]); }
if (v === 'outlined' || v === 'sharp')
    { return h('svg',{"viewBox":c ? '4 9 16 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9v4H6V9H4v6h16V9h-2z"},[])]); }
return h('svg',{"viewBox":c ? '4 9 16 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9v4H6V9H4v6h16V9z"},[])]);
    }
};

export { script as default };
