/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-chair-alt',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M7 14h10v2H7zm0-9h10v3H7z"},[]),h('path',{d:"M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v7h2v-3h10v3h2v-7c0-1.1-.9-2-2-2h-1v-2h1zm0 4v2H7v-2h10zm-7-2v-2h4v2h-4zM7 8V5h10v3H7z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 10h3V3H5v7h3v2H5v9h2v-3h10v3h2v-9h-3v-2zM7 8V5h10v3H7zm10 8H7v-2h10v2zm-3-4h-4v-2h4v2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v6c0 .55.45 1 1 1s1-.45 1-1v-2h10v2c0 .55.45 1 1 1s1-.45 1-1v-6c0-1.1-.9-2-2-2h-1v-2h1zM7 8V5h10v3H7zm10 8H7v-2h10v2zm-3-4h-4v-2h4v2z"},[])]); }
return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v7h2v-3h10v3h2v-7c0-1.1-.9-2-2-2h-1v-2h1zM7 8V5h10v3H7zm10 8H7v-2h10v2zm-3-4h-4v-2h4v2z"},[])]);
    }
};

export { script as default };
