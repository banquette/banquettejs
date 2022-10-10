/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-tablet-android',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '3 0 18 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.75 3h14.5v16H4.75z","opacity":"0.3"},[]),h('path',{d:"M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '3 0 18 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 0H3v24h18V0zm-7 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '3 0 18 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4.5 22h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5zm5.75-3H4.75V3h14.5v16z"},[])]); }
return h('svg',{"viewBox":c ? '3 0 18 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"},[])]);
    }
};

export { script as default };
