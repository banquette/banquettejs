/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-keyboard-arrow-right',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '9 6.42 6.58 11.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.29 15.88 13.17 12 9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"},[])]); }
return h('svg',{"viewBox":c ? '8.59 6 7.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"},[])]);
    }
};

export { script as default };