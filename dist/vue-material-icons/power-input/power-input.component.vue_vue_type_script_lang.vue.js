/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-power-input',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 9 19 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 10c0 .55.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1zm1 5h3c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm7 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm7 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1z"},[])]); }
return h('svg',{"viewBox":c ? '2 9 19 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"},[])]);
    }
};

export { script as default };
