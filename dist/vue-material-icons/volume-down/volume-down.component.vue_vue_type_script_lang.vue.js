/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-volume-down',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '5 4 13.5 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 13h2.83L12 15.17V8.83L9.83 11H7z","opacity":"0.3"},[]),h('path',{d:"M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 16 7.97zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 5.41 13.5 13.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L9 9H6c-.55 0-1 .45-1 1z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '5 4 13.5 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 16 7.97zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z"},[])]); }
return h('svg',{"viewBox":c ? '5 4 13.5 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"},[])]);
    }
};

export { script as default };
