/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-mode-night',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '4.5 2 15 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.5 4c-.34 0-.68.02-1.01.07C10.4 6.23 11.5 9.05 11.5 12s-1.1 5.77-3.01 7.93c.33.05.67.07 1.01.07 4.41 0 8-3.59 8-8s-3.59-8-8-8z","opacity":"0.3"},[]),h('path',{d:"M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2zm0 18c-.34 0-.68-.02-1.01-.07 1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '5.49 2 14.01 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.93 2.3c-2.04-.5-4.02-.35-5.77.28-.72.26-.91 1.22-.31 1.71A9.94 9.94 0 0 1 9.5 12a9.94 9.94 0 0 1-3.65 7.71c-.59.49-.42 1.45.31 1.7 1.04.38 2.17.59 3.34.59 6.05 0 10.85-5.38 9.87-11.6-.61-3.92-3.59-7.16-7.44-8.1z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '4.5 2 15 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07 1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4m0-2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"},[])]); }
return h('svg',{"viewBox":c ? '4.5 2 15 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"},[])]);
    }
};

export { script as default };