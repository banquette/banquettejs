/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-functions',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '6 4 12 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '6 4 12 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.5 4H7.56C6.7 4 6 4.7 6 5.56c0 .28.12.55.32.74L12.5 12l-6.18 5.7c-.2.19-.32.46-.32.74C6 19.3 6.7 20 7.56 20h8.94c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H11l3.59-3.59c.78-.78.78-2.05 0-2.83L11 7h5.5c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4z"},[])]); }
if (v === 'outlined' || v === 'sharp')
    { return h('svg',{"viewBox":c ? '6 4 12 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z"},[])]); }
return h('svg',{"viewBox":c ? '6 4 12 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"},[])]);
    }
};

export { script as default };
