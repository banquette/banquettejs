/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-balcony',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 16H5v4h2v-4zm4 0H9v4h2v-4zm-5-6v4h5V4.08C8.16 4.56 6 7.03 6 10zm4 2H8v-2h2v2zm3-7.92V14h5v-4c0-2.97-2.16-5.44-5-5.92zM16 12h-2v-2h2v2zm-1 4h-2v4h2v-4zm4 0h-2v4h2v-4z","opacity":"0.3"},[]),h('path',{d:"M10 10v2H8v-2h2zm6 2v-2h-2v2h2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4h1zM7 16H5v4h2v-4zm4 0H9v4h2v-4zm0-11.92C8.16 4.56 6 7.03 6 10v4h5V4.08zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92V14zm2 2h-2v4h2v-4zm4 0h-2v4h2v-4z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 14.27V10c0-4.42-3.58-8-8-8s-8 3.58-8 8v4.27c-.6.34-1 .99-1 1.73v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-.74-.4-1.39-1-1.73zM7 20H5v-4h2v4zm4 0H9v-4h2v4zm0-6H6v-4c0-2.97 2.16-5.44 5-5.92V14zm2-9.92A6 6 0 0 1 18 10v4h-5V4.08zM15 20h-2v-4h2v4zm4 0h-2v-4h2v4zM8 11c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"},[])]); }
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 10v2H8v-2h2zm6 2v-2h-2v2h2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4h1zM7 16H5v4h2v-4zm4 0H9v4h2v-4zm0-11.92C8.16 4.56 6 7.03 6 10v4h5V4.08zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92V14zm2 2h-2v4h2v-4zm4 0h-2v4h2v-4z"},[])]);
    }
};

export { script as default };
