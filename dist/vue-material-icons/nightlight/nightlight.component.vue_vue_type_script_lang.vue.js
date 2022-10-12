/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-nightlight',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '4 2 15 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 12c0-4.41 3.59-8 8-8 .34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8z","opacity":"0.3"},[]),h('path',{d:"M14 12c0-3.7 2.01-6.92 5-8.65A9.973 9.973 0 0 0 14 2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65zm1.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '4 2 14.51 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.57 2.3c2.38-.59 4.68-.27 6.63.64.35.16.41.64.1.86C15.7 5.6 14 8.6 14 12s1.7 6.4 4.3 8.2c.32.22.26.7-.09.86-1.28.6-2.71.94-4.21.94-6.05 0-10.85-5.38-9.87-11.6.61-3.92 3.59-7.16 7.44-8.1z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '4 2 15 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 4c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65A9.973 9.973 0 0 0 14 2z"},[])]); }
return h('svg',{"viewBox":c ? '4 2 15 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 2c1.82 0 3.53.5 5 1.35-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.973 9.973 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z"},[])]);
    }
};

export { script as default };