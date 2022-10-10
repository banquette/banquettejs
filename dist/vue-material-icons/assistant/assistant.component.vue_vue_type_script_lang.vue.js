/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-assistant',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '3 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m9.83 18 .59.59L12 20.17l1.59-1.59.58-.58H19V4H5v14h4.83zm.29-8.88L12 5l1.88 4.12L18 11l-4.12 1.88L12 17l-1.88-4.12L6 11l4.12-1.88z","opacity":"0.3"},[]),h('path',{d:"M5 20h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 4h14v14h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4zm7 13 1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '3 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 2H3v18h6l3 3 3-3h6V2zm-7.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '3 2 18 20.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '3 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-1 1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z"},[])]); }
return h('svg',{"viewBox":c ? '3 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"},[])]);
    }
};

export { script as default };
