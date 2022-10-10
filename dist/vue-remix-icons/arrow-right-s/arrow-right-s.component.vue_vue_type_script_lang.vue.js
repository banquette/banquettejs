/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-arrow-right-s',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '8.22 5.64 7.78 12.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"},[])]); }
return h('svg',{"viewBox":c ? '10 6 6 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16 12-6 6V6z"},[])]);
    }
};

export { script as default };
