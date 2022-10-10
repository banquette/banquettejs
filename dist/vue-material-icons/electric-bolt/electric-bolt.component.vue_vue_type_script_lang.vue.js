/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-electric-bolt',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '2.5 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 2 2.5 13 13 14l-5 7 1 1 12.5-11L11 10l5-7z"},[])]); }
return h('svg',{"viewBox":c ? '4 2 15.99 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.69 2.21 4.33 11.49c-.64.58-.28 1.65.58 1.73L13 14l-4.85 6.76c-.22.31-.19.74.08 1.01.3.3.77.31 1.08.02l10.36-9.28c.64-.58.28-1.65-.58-1.73L11 10l4.85-6.76c.22-.31.19-.74-.08-1.01a.77.77 0 0 0-1.08-.02z"},[])]);
    }
};

export { script as default };
