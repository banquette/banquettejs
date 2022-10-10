/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-arrow-left',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '9.41 8.41 4.59 7.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.29 8.71 9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"},[])]); }
return h('svg',{"viewBox":c ? '9 7 5 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 7-5 5 5 5V7z"},[])]);
    }
};

export { script as default };
