/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-lyrics',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 4v14l2-2h9v-4.03c-.62-.83-1-1.85-1-2.97s.38-2.14 1-2.97V4H4zm6 10H6v-2h4v2zm3-3H6V9h7v2zm0-3H6V6h7v2z","opacity":"0.3"},[]),h('path',{d:"M6 12h4v2H6zm0-6h7v2H6z"},[]),h('path',{d:"M15 11.97V16H6l-2 2V4h11v2.03c.52-.69 1.2-1.25 2-1.6V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9c1.1 0 2-.9 2-2v-2.42a5.16 5.16 0 0 1-2-1.61z"},[]),h('path',{d:"M6 9h7v2H6zm14-2.82c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V3h2V1h-4v5.18z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '2 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 6h7v2H6zm0 6h4v2H6z"},[]),h('path',{d:"M15 11.97V16H6l-2 2V4h11v2.03c.52-.69 1.2-1.25 2-1.6V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9c1.1 0 2-.9 2-2v-2.42a5.16 5.16 0 0 1-2-1.61z"},[]),h('path',{d:"M6 9h7v2H6zm14-2.82c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V3h2V1h-4v5.18z"},[])]); }
return h('svg',{"viewBox":c ? '2 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 9c0-2.04 1.24-3.79 3-4.57V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9c1.1 0 2-.9 2-2v-2.42c-1.76-.78-3-2.53-3-4.58zm-4 5H6v-2h4v2zm3-3H6V9h7v2zm0-3H6V6h7v2z"},[]),h('path',{d:"M20 6.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V3h2V1h-4v5.18z"},[])]);
    }
};

export { script as default };
