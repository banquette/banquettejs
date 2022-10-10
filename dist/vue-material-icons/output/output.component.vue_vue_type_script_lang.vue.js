/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-output',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '3 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"},[]),h('path',{d:"M19 19H5V5h14v2h2V3H3v18h18v-4h-2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '3 3 18.59 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.71 16.29 3.59-3.59a.996.996 0 0 0 0-1.41L17.71 7.7a.996.996 0 1 0-1.41 1.41L18.17 11H10c-.55 0-1 .45-1 1s.45 1 1 1h8.17l-1.88 1.88a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0z"},[]),h('path',{d:"M19 19H5V5h14v1c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-1c0-.55-.45-1-1-1s-1 .45-1 1v1z"},[])]); }
return h('svg',{"viewBox":c ? '3 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"},[]),h('path',{d:"M19 19H5V5h14v2h2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2h-2v2z"},[])]);
    }
};

export { script as default };
