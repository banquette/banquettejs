/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-keyboard-control-key',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '5.42 5.42 13.17 7.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.71 12.71c.39.39 1.02.39 1.41 0L12 7.83l4.88 4.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L5.7 11.3c-.38.38-.38 1.02.01 1.41z"},[])]); }
return h('svg',{"viewBox":c ? '5 5 14 8.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"},[])]);
    }
};

export { script as default };
