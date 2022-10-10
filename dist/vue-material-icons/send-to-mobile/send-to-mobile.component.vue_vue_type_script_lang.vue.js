/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-send-to-mobile',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '5 1 17 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M7 3h10v1H7zm0 17h10v1H7z"},[]),h('path',{d:"m22 12-4-4v3h-5v2h5v3l4-4zm-5 6H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '5 1 17 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 18H7V6h10v1h2V1H5v22h14v-6h-2z"},[]),h('path',{d:"m22 12-4-4v3h-5v2h5v3z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 1 16.79 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 18H7V6h10c0 .55.45 1 1 1s1-.45 1-1V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1z"},[]),h('path',{d:"m21.65 11.65-2.79-2.79a.501.501 0 0 0-.86.35V11h-4c-.55 0-1 .45-1 1s.45 1 1 1h4v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '5 1 17 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 8 4 4-4 4-1.41-1.41L18.17 13H13v-2h5.17l-1.59-1.59L18 8zM7 1.01 17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99zM7 21h10v-1H7v1zM7 4h10V3H7v1z"},[])]); }
return h('svg',{"viewBox":c ? '5 1 17 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 17h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99L17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1zm5-5-4-4v3h-5v2h5v3l4-4z"},[])]);
    }
};

export { script as default };
