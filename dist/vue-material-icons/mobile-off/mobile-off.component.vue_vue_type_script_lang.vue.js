/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-mobile-off',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '1.49 1 20.62 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 5v8.61l2 2V1H5v.61L8.39 5zM2.9 2.35 1.49 3.76 5 7.27V23h14v-1.73l1.7 1.7 1.41-1.41L2.9 2.35zM7 19V9.27L16.73 19H7z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '1.91 1 19.79 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 16.44 3.61 3.05A.996.996 0 1 0 2.2 4.46L5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75L20 22.27a.996.996 0 1 0 1.41-1.41L19 18.44l-2-2zM7 19V9.27L16.73 19H7zM17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5H17z"},[])]); }
if (v === 'outlined' || v === 'twotone')
    { return h('svg',{"viewBox":c ? '1.49 1 20.62 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5H17zM1.49 3.76 5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75l1.72 1.72 1.41-1.41L2.9 2.35 1.49 3.76zM7 9.27 16.73 19H7V9.27z"},[])]); }
return h('svg',{"viewBox":c ? '1.49 1 20.48 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.76 2.49 1.49 3.76 5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75l1.72 1.72 1.27-1.27L2.76 2.49zM7 19V9.27L16.73 19H7zM17 5v9.17l2 2V3c0-1.1-.9-2-2-2H7c-.85 0-1.58.54-1.87 1.3L7.83 5H17z"},[])]);
    }
};

export { script as default };
