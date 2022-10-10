/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-bookmark-add',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '5 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 17.97V10.9A5 5 0 0 1 13 6c0-.34.03-.68.1-1H7v12.97l5-2.14 5 2.14z","opacity":"0.3"},[]),h('path',{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-4 10.97-5-2.14-5 2.14V5h6.1c.15-.74.46-1.42.9-2H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9c-.32.07-.66.1-1 .1-.34 0-.68-.03-1-.1v7.07z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '5 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V3h9a5.002 5.002 0 0 0 5 7.9V21z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 3 16 17.48' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 6c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V7h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V4c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1zm-2 13.48c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4A.994.994 0 0 1 5 19.48V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9v8.58z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '5 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm4-4h-2v2h-2V7h-2V5h2V3h2v2h2v2z"},[])]); }
return h('svg',{"viewBox":c ? '5 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9V21z"},[])]);
    }
};

export { script as default };
