/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-repartition',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 2 19 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M15.67 17H19v2h-3.33zm-5.34 0h3.33v2h-3.33zM5 17h3.33v2H5z"},[]),h('path',{d:"M3 21h18v-6H3v6zm12.67-4H19v2h-3.33v-2zm-5.34 0h3.33v2h-3.33v-2zM5 17h3.33v2H5v-2zm1-7 1.42-1.42L5.83 7H17c1.1 0 2 .9 2 2s-.9 2-2 2H3v2h14c2.21 0 4-1.79 4-4s-1.79-4-4-4H5.83l1.59-1.59L6 2 2 6l4 4z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2.42 2.41 18.58 18.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.5 21h15c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-15c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5zm5.83-2v-2h3.33v2h-3.33zM19 19h-3.33v-2H19v2zM5 17h3.33v2H5v-2zm1.71-7.71c.39-.39.39-1.02 0-1.42L5.83 7h11.06c1 0 1.92.68 2.08 1.66C19.18 9.91 18.21 11 17 11H4c-.55 0-1 .45-1 1s.45 1 1 1h12.82c2.09 0 3.96-1.52 4.16-3.6C21.21 7.02 19.34 5 17 5H5.83l.88-.88c.39-.39.39-1.02 0-1.42a.996.996 0 0 0-1.41 0L2.71 5.29a.996.996 0 0 0 0 1.41L5.3 9.29c.38.39 1.02.39 1.41 0z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 19 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 21h18v-6H3v6zm7.33-2v-2h3.33v2h-3.33zM19 19h-3.33v-2H19v2zM5 17h3.33v2H5v-2zm1-7 1.42-1.42L5.83 7H17c1.1 0 2 .9 2 2s-.9 2-2 2H3v2h14c2.21 0 4-1.79 4-4s-1.79-4-4-4H5.83l1.59-1.59L6 2 2 6l4 4z"},[])]);
    }
};

export { script as default };
