/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-hide-source',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '1.81 2 20.19 20.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.1 3.51c-.39.39-.39 1.03 0 1.42l1.56 1.56a9.916 9.916 0 0 0-1.59 6.69c.52 4.54 4.21 8.23 8.75 8.75 2.49.29 4.81-.34 6.69-1.59l1.56 1.56a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0zM12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.94 10.94C14.86 19.59 13.48 20 12 20zM7.94 5.12 6.49 3.66A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.869 7.869 0 0 0 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12z"},[])]); }
return h('svg',{"viewBox":c ? '1.39 2 20.61 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.81 2.81 1.39 4.22l2.27 2.27A9.91 9.91 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.41L2.81 2.81zM12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.94 10.94C14.86 19.59 13.48 20 12 20zM7.94 5.12 6.49 3.66A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.869 7.869 0 0 0 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12z"},[])]);
    }
};

export { script as default };