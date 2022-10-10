/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-horizontal-rule',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '4 11 16 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z","fill-rule":"evenodd"},[])]); }
return h('svg',{"viewBox":c ? '4 11 16 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-rule":"evenodd",d:"M4 11h16v2H4z"},[])]);
    }
};

export { script as default };
