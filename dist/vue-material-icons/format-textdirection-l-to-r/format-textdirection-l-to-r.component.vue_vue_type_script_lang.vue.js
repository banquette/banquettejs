/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-format-textdirection-l-to-r',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '5 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2z","opacity":"0.3"},[]),h('path',{d:"M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2zm12 14-4-4v3H5v2h12v3z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 2 15.79 19.29' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1H9.17C7.08 2 5.22 3.53 5.02 5.61A3.998 3.998 0 0 0 9 10zm11.65 7.65-2.79-2.79a.501.501 0 0 0-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h11v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '5 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2H9C6.79 2 5 3.79 5 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zm0 12v3H5v2h12v3l4-4-4-4z"},[])]); }
return h('svg',{"viewBox":c ? '5 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8-4-4v3H5v2h12v3l4-4z"},[])]);
    }
};

export { script as default };
