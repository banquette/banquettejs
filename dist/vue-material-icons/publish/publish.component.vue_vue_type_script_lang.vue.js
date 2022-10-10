/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-publish',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.83 12H11v6h2v-6h1.17L12 9.83z","opacity":"0.3"},[]),h('path',{d:"M5 4h14v2H5zm7 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2v-6H9.83L12 9.83 14.17 12H13z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1zm2.41 9H9v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 7.7a.996.996 0 0 0-1.41 0l-4.59 4.59c-.63.63-.19 1.71.7 1.71z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 4h14v2H5zm0 10h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2v-6H9.83L12 9.83 14.17 12H13z"},[])]); }
return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"},[])]);
    }
};

export { script as default };
