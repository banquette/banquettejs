/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-cell-wifi',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '4.39 3 17.61 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.29 7.68 7.7 20.29c-.63.63-.18 1.71.71 1.71H21c.55 0 1-.45 1-1V8.39c0-.89-1.08-1.34-1.71-.71zM20 20h-2v-7.22l2-2V20zM9.61 10.68c-.28.17-.32.56-.09.79l.82.82c.39.39 1.02.39 1.41 0l.82-.82c.23-.23.18-.62-.09-.79-.87-.54-1.99-.54-2.87 0zM8.42 9.3a4.553 4.553 0 0 1 5.27 0c.36.26.85.22 1.16-.1.39-.39.35-1.06-.1-1.38a6.402 6.402 0 0 0-7.4 0c-.45.32-.5.99-.1 1.38a.9.9 0 0 0 1.17.1z"},[]),h('path',{d:"M16.26 6.69c.34.28.83.28 1.14-.03l.12-.12c.35-.35.31-.92-.08-1.24-3.67-3.05-9.02-3.07-12.7-.06-.43.35-.47.99-.08 1.37.32.33.84.37 1.19.08 3.01-2.48 7.4-2.48 10.41 0z"},[])]); }
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    { return h('svg',{"viewBox":c ? '3.93 3 18.07 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 22h16V5.97L6 22zm14-2h-2v-7.22l2-2V20zM5.22 7.22 3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0zm7.71 3.85L11 13l-1.93-1.93a2.74 2.74 0 0 1 3.86 0zm1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5a6.374 6.374 0 0 1 9 0l-1.28 1.29z"},[])]); }
return h('svg',{"viewBox":c ? '3.93 3 18.07 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9.98 6 22h16V5.97l-4 4.01zM20 20h-2v-7.22l2-2V20zM5.22 7.22 3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0zm7.71 3.85L11 13l-1.93-1.93a2.74 2.74 0 0 1 3.86 0zm1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5a6.374 6.374 0 0 1 9 0l-1.28 1.29z"},[])]);
    }
};

export { script as default };
