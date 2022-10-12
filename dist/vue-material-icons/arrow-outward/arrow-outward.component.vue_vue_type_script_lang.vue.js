/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-arrow-outward',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '5.42 6 12.58 12.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z"},[])]); }
return h('svg',{"viewBox":c ? '5 6 13 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"},[])]);
    }
};

export { script as default };