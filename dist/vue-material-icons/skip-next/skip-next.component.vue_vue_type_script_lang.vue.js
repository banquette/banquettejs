/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-skip-next',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 9.86v4.28L11.03 12z","opacity":"0.3"},[]),h('path',{d:"M14.5 12 6 6v12l8.5-6zM8 9.86 11.03 12 8 14.14V9.86zM16 6h2v12h-2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m7.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6 18 8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"},[])]); }
return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z"},[])]);
    }
};

export { script as default };
