/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-airline-seat-legroom-normal',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '3 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 15V3H3v14h11v-2H5zm17 3h-3v-7c0-1.1-.9-2-2-2h-5V3H6v11h10v7h6v-3z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '3 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 12V4c0-.55-.45-1-1-1s-1 .45-1 1v8c0 2.76 2.24 5 5 5h5c.55 0 1-.45 1-1s-.45-1-1-1H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v5c0 1.1.9 2 2 2h2.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"},[])]); }
return h('svg',{"viewBox":c ? '3 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"},[])]);
    }
};

export { script as default };