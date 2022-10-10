/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-south-east',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '4.42 4.41 14.58 14.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 9c-.56 0-1 .45-1 1v5.59L6.12 4.7a.996.996 0 1 0-1.41 1.41L15.59 17H10c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z"},[])]); }
return h('svg',{"viewBox":c ? '4 4 15 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z"},[])]);
    }
};

export { script as default };
