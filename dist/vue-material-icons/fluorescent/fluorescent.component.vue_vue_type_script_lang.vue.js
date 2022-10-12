/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-fluorescent',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '3.83 2 16.67 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M7 11h10v2H7z"},[]),h('path',{d:"M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-9h2v3h-2zm6.286 4.399 1.79-1.803 1.42 1.41-1.79 1.802zM11 19h2v3h-2zm6.29-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391 5.284 7.798zm-.003 12.066 1.803-1.79 1.409 1.42-1.803 1.79z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '3.91 2 16.17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 15h10c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2zm5-13c-.56 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1zm7.79 3.3a.996.996 0 0 0-1.41 0l-.38.38a.996.996 0 1 0 1.41 1.41l.38-.38a.996.996 0 0 0 0-1.41zM12 22c.56 0 1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zm5.99-3.59.38.39c.39.39 1.02.39 1.41 0l.01-.01a.996.996 0 0 0 0-1.41L19.4 17a.996.996 0 1 0-1.41 1.41zM6 5.69l-.39-.38A.996.996 0 1 0 4.2 6.72l.39.38c.39.39 1.02.39 1.41 0 .38-.39.38-1.03 0-1.41zm-1.8 13.1c.39.4 1.03.4 1.42 0L6 18.4a.996.996 0 1 0-1.41-1.41l-.39.39a.996.996 0 0 0 0 1.41z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '3.83 2 16.67 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-9h2v3h-2zm6.286 4.399 1.79-1.803 1.42 1.41-1.79 1.802zM11 19h2v3h-2zm6.29-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391 5.284 7.798zm-.003 12.066 1.803-1.79 1.409 1.42-1.803 1.79z"},[])]); }
return h('svg',{"viewBox":c ? '3.83 2 16.67 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 9h14v6H5zm6-7h2v3h-2zm6.286 4.399 1.79-1.803 1.42 1.41-1.79 1.802zM11 19h2v3h-2zm6.29-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391 5.284 7.798zm-.003 12.066 1.803-1.79 1.409 1.42-1.803 1.79z"},[])]);
    }
};

export { script as default };