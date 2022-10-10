/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-minimize',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '6 19 12 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z"},[])]); }
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    { return h('svg',{"viewBox":c ? '6 19 12 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 19h12v2H6v-2z"},[])]); }
return h('svg',{"viewBox":c ? '6 19 12 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 19h12v2H6z"},[])]);
    }
};

export { script as default };
