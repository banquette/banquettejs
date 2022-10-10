/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-laptop-windows',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 5h16v10H4z","opacity":"0.3"},[]),h('path',{d:"M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 18v-1h1.99L22 3H2v14h2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1h-3zM5 5h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"},[])]); }
return h('svg',{"viewBox":c ? '0 3 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"},[])]);
    }
};

export { script as default };
