/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-swipe-right-alt',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '4 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"9","cy":"12","opacity":"0.3",r:"3"},[]),h('path',{d:"M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9zM9 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '4 7 17.58 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.9 11a5 5 0 1 0 0 2h4.27l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L18.7 8.7a.996.996 0 1 0-1.41 1.41l.88.89H13.9z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '4 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9zM9 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"},[])]); }
return h('svg',{"viewBox":c ? '4 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9z"},[])]);
    }
};

export { script as default };
