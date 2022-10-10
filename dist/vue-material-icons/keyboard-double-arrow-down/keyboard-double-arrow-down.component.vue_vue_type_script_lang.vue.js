/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-keyboard-double-arrow-down',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '6.41 5.41 11.18 13.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.29 5.71a.996.996 0 0 0-1.41 0L12 9.58 8.11 5.7A.996.996 0 1 0 6.7 7.11l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.984.984 0 0 0 0-1.4z"},[]),h('path',{d:"M17.29 12.3a.996.996 0 0 0-1.41 0L12 16.17l-3.88-3.88a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.993.993 0 0 0-.01-1.4z"},[])]); }
return h('svg',{"viewBox":c ? '6 5 12 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},[]),h('path',{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},[])]);
    }
};

export { script as default };
