/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-holiday-village',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8 6.83-4 4V18h3v-3h2v3h3v-7.17l-4-4zM9 13H7v-2h2v2z","opacity":"0.3"},[]),h('path',{d:"m8 4-6 6v10h12V10L8 4zm4 14H9v-3H7v3H4v-7.17l4-4 4 4V18zm-3-5H7v-2h2v2zm9 7V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 20c.55 0 1-.45 1-1V8.76c0-.27-.11-.52-.29-.71l-3.76-3.76c-.19-.18-.44-.29-.71-.29-.89 0-1.34 1.08-.71 1.71l3.32 3.32c.1.09.15.22.15.35V19c0 .55.45 1 1 1zm4 0c.55 0 1-.45 1-1V7.11c0-.26-.11-.52-.29-.71l-2.1-2.11c-.19-.18-.45-.29-.71-.29-.9 0-1.34 1.08-.71 1.71l1.67 1.67a.5.5 0 0 1 .14.35V19c0 .55.45 1 1 1zM8 15c.55 0 1 .45 1 1v4h4c.55 0 1-.45 1-1v-8.59c0-.27-.11-.52-.29-.71l-5-5a.996.996 0 0 0-1.41 0l-5 5c-.19.19-.3.45-.3.71V19c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1zm0-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8 4-6 6v10h12V10L8 4zm4 14H9v-3H7v3H4v-7.17l4-4 4 4V18zm-3-5H7v-2h2v2zm9 7V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2z"},[])]); }
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 20V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2zM8 4l-6 6v10h5v-5h2v5h5V10L8 4zm1 9H7v-2h2v2z"},[])]);
    }
};

export { script as default };
