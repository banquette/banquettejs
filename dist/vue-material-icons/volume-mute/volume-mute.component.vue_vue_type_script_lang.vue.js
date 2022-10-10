/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-volume-mute',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '7 4 9 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 13h2.83L14 15.17V8.83L11.83 11H9z","opacity":"0.3"},[]),h('path',{d:"M7 9v6h4l5 5V4l-5 5H7zm7-.17v6.34L11.83 13H9v-2h2.83L14 8.83z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '7 5.41 9 13.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L11 9H8c-.55 0-1 .45-1 1z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '7 4 9 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z"},[])]); }
return h('svg',{"viewBox":c ? '7 4 9 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 9v6h4l5 5V4l-5 5H7z"},[])]);
    }
};

export { script as default };
