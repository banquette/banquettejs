/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-manage-search',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 6 20 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 12h5v2H2zm16.17 1.75c.52-.79.83-1.73.83-2.75 0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.02 0 1.96-.31 2.76-.83L20.59 19 22 17.59l-3.83-3.84zM14 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM2 7h5v2H2zm0 10h10v2H2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 6 19.59 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 9H3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm0 3H3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm13.88 6.29-3.12-3.12c-.86.56-1.89.88-3 .82-2.37-.11-4.4-1.96-4.72-4.31a5.013 5.013 0 0 1 5.83-5.61c1.95.33 3.57 1.85 4 3.78.33 1.46.01 2.82-.7 3.9l3.13 3.13c.39.39.39 1.02 0 1.41-.39.39-1.03.39-1.42 0zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM3 19h8c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z"},[])]); }
return h('svg',{"viewBox":c ? '2 6 20 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 9H2V7h5v2zm0 3H2v2h5v-2zm13.59 7-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59 20.59 19zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM2 19h10v-2H2v2z"},[])]);
    }
};

export { script as default };
