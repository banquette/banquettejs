/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-web-stories',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 2 20.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M4 4h9v16H4z"},[]),h('path',{d:"M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h9v16zm8-14v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '2 2 20.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 4h2v16h-2V4zM2 2v20h13V2H2zm19 16h1.5V6H21v12z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '2 2 20.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h9v16zm8-14v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2V4zM2 20c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16zm19-2c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5v12z"},[])]);
    }
};

export { script as default };
