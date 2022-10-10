/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-filter-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '4 3 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5 12 13.394 17.596 5H6.404z"},[])]); }
return h('svg',{"viewBox":c ? '4 3 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 14 4 5V3h16v2l-6 9v6l-4 2z"},[])]);
    }
};

export { script as default };
