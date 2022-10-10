/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-north-west',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 5 14.59 14.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 15c.56 0 1-.45 1-1V8.41L17.89 19.3a.996.996 0 1 0 1.41-1.41L8.41 7H14c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1z"},[])]); }
return h('svg',{"viewBox":c ? '5 5 15 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z"},[])]);
    }
};

export { script as default };
