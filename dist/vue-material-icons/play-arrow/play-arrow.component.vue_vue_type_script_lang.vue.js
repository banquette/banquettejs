/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-play-arrow',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '8 5 11 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 8.64v6.72L15.27 12z","opacity":"0.3"},[]),h('path',{d:"m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '8 5 11 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 5v14l11-7L8 5z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '8 5.82 10.15 12.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '8 5 11 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"},[])]); }
return h('svg',{"viewBox":c ? '8 5 11 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 5v14l11-7z"},[])]);
    }
};

export { script as default };
