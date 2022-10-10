/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-flashlight-off',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '1.39 2 19.8 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M16 7H9.83L14 11.17v-.77l2-3.01zm-6 5.83V20h4v-3.17zM16 5V4H6.83l1 1z"},[]),h('path',{d:"M2.81 2.81 1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81zM14 20h-4v-7.17l4 4V20zm2-16v1H7.83l2 2H16v.39l-2 3.01v.77l2 2V11l2-3V2H6v1.17l.83.83z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '1.81 2 18.97 20.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 5V4c0-1.1-.9-2-2-2H8c-.86 0-1.58.54-1.87 1.3L7.83 5H18zm-2 6 2-3V7H9.83L16 13.17zM2.1 3.51a.996.996 0 0 0 0 1.41l5.9 5.9V20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-1.17l3.07 3.07a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '1.39 2 19.8 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.81 2.81 1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81zM14 20h-4v-7.17l4 4V20zm2-16v1H7.83l2 2H16v.39l-2 3.01v.77l2 2V11l2-3V2H6v1.17l.83.83z"},[])]); }
return h('svg',{"viewBox":c ? '1.39 2 19.8 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 5V2H6v1.17L7.83 5zm-2 6 2-3V7H9.83L16 13.17zM2.81 2.81 1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81z"},[])]);
    }
};

export { script as default };
