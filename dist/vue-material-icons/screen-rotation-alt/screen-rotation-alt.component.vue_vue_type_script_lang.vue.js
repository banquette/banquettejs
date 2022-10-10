/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-screen-rotation-alt',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '2 1.18 20 21.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m4 7.59 6.41-6.41L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l9.83 9.83L20 16.41V19z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 2 20 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.53 9.29c.63.63.18 1.71-.71 1.71-.27 0-.52-.11-.71-.29L10.4 4 5.41 9H7c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v1.59l5-5c.78-.78 2.05-.78 2.83 0l6.7 6.7zM5.47 14.71c-.63-.63-.18-1.71.71-1.71.27 0 .52.11.71.29L13.6 20l4.99-5H17c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-5 5c-.78.78-2.05.78-2.83 0l-6.7-6.7z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m4 7.59 5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5V19z"},[])]);
    }
};

export { script as default };
