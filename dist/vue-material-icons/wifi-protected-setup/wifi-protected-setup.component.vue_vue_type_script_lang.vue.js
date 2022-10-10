/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-wifi-protected-setup',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '4.45 3.01 15.1 17.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.7 5.3 1.44-1.44c.32-.32.09-.85-.35-.85H11.5c-.28 0-.5.22-.5.5V9.8c0 .45.54.67.85.35L13.3 8.7c1.97 1.46 3.25 3.78 3.25 6.42 0 .66-.08 1.31-.24 1.92-.12.5.48.86.84.49a8.474 8.474 0 0 0 2.4-5.91c0-2.51-1.11-4.76-2.85-6.32zm-4.55 8.56L10.7 15.3c-1.97-1.46-3.25-3.78-3.25-6.42 0-.66.08-1.31.24-1.92.12-.5-.48-.86-.84-.49a8.474 8.474 0 0 0 .44 12.24l-1.44 1.44c-.32.32-.09.85.35.85h6.29c.28 0 .5-.22.5-.5v-6.29a.49.49 0 0 0-.84-.35z"},[])]); }
return h('svg',{"viewBox":c ? '4.46 3 15.09 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.71 5.29 19 3h-8v8l2.3-2.3c1.97 1.46 3.25 3.78 3.25 6.42 0 1.31-.32 2.54-.88 3.63 2.33-1.52 3.88-4.14 3.88-7.13 0-2.52-1.11-4.77-2.84-6.33z"},[]),h('path',{d:"M7.46 8.88c0-1.31.32-2.54.88-3.63a8.479 8.479 0 0 0-3.88 7.13c0 2.52 1.1 4.77 2.84 6.33L5 21h8v-8l-2.3 2.3c-1.96-1.46-3.24-3.78-3.24-6.42z"},[])]);
    }
};

export { script as default };
