/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-mouse',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '4 1.07 16 21.93' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 3.16V9h5a6.005 6.005 0 0 0-5-5.84zm-2 0C8.19 3.63 6.04 6.06 6 9h5V3.16zM11 11H6v4c0 3.31 2.69 6 6 6s6-2.69 6-6v-4h-7z","opacity":"0.3"},[]),h('path',{d:"M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-7-5.84c2.81.47 4.96 2.9 5 5.84h-5V3.16zm-2 0V9H6a6.005 6.005 0 0 1 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '4 1.07 16 21.93' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84zm-7-5.84V9H6a6.005 6.005 0 0 1 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z"},[])]); }
return h('svg',{"viewBox":c ? '4 1.07 16 21.93' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"},[])]);
    }
};

export { script as default };
