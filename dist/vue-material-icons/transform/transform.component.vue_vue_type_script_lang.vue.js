/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-transform',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 1 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4v-2H8V4zm10 10V8c0-1.1-.9-2-2-2h-6v2h6v6h2z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '2 1 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v10h10v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V6h-8v2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 1.2 20 21.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 16H9c-.55 0-1-.45-1-1V4h.79c.45 0 .67-.54.35-.85l-1.79-1.8c-.2-.2-.51-.2-.71 0l-1.79 1.8a.5.5 0 0 0 .36.85H6v2H3c-.55 0-1 .45-1 1s.45 1 1 1h3v8c0 1.1.9 2 2 2h8v2h-.79c-.45 0-.67.54-.35.85l1.79 1.79c.2.2.51.2.71 0l1.79-1.79c.32-.31.09-.85-.35-.85H18v-2h3c.55 0 1-.45 1-1s-.45-1-1-1zm-5-2h2V8c0-1.1-.9-2-2-2h-6v2h5c.55 0 1 .45 1 1v5z"},[])]); }
return h('svg',{"viewBox":c ? '2 1 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"},[])]);
    }
};

export { script as default };
