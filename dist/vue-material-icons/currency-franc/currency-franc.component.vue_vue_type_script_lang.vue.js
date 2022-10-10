/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-currency-franc',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 3 13 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-3h7c.55 0 1-.45 1-1s-.45-1-1-1H9V5h8c.55 0 1-.45 1-1z"},[])]); }
return h('svg',{"viewBox":c ? '5 3 13 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z"},[])]);
    }
};

export { script as default };
