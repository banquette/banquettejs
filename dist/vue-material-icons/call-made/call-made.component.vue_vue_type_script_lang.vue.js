/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-call-made',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '4 5 15 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.41 20 17 8.41V15h2V5H9v2h6.59L4 18.59z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '4.41 5 14.59 14.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"},[])]); }
if (v === 'outlined' || v === 'sharp')
    { return h('svg',{"viewBox":c ? '4 5 15 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"},[])]); }
return h('svg',{"viewBox":c ? '4 5 15 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"},[])]);
    }
};

export { script as default };
