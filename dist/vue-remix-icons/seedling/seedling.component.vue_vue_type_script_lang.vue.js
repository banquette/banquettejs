/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-seedling',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 3a7.002 7.002 0 0 1 6.913 5.895A6.479 6.479 0 0 1 17.5 7H22v2.5a6.5 6.5 0 0 1-6.5 6.5H13v5h-2v-8H9a7 7 0 0 1-7-7V3h4zm14 6h-2.5a4.5 4.5 0 0 0-4.5 4.5v.5h2.5A4.5 4.5 0 0 0 20 9.5V9zM6 5H4v1a5 5 0 0 0 5 5h2v-1a5 5 0 0 0-5-5z"},[])]); }
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7v2.5a6.5 6.5 0 0 1-6.5 6.5H13v5h-2v-7l.019-1A6.5 6.5 0 0 1 17.5 7H22zM6 3a7.004 7.004 0 0 1 6.643 4.786A7.477 7.477 0 0 0 10.016 13H9a7 7 0 0 1-7-7V3h4z"},[])]);
    }
};

export { script as default };
