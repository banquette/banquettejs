/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-filter',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '3 4 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4h18zM6.404 6 11 12.894V20h2v-7.106L17.596 6H6.404z"},[])]); }
return h('svg',{"viewBox":c ? '3 4 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4z"},[])]);
    }
};

export { script as default };
