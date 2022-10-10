/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-radio',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 13H4v7h16v-7zM8 18.98a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z","opacity":"0.3"},[]),h('path',{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12zM4 8h16v3h-2V9h-2v2H4V8zm0 5h16v7H4v-7z"},[]),h('circle',{"cx":"8","cy":"16.48",r:"2.5"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 6.67V22h20V6H8.3l8.26-3.34L15.88 1 2 6.67zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 1.27 20 20.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8c0-1.1-.9-2-2-2H8.3l7.43-3c.46-.19.68-.71.49-1.17a.894.894 0 0 0-1.17-.49L3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H4V9c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2zm0 2v3h-2V9h-2v2H4V8h16zM4 20v-7h16v7H4z"},[]),h('circle',{"cx":"8","cy":"16.48",r:"2.5"},[])]); }
return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"},[])]);
    }
};

export { script as default };
