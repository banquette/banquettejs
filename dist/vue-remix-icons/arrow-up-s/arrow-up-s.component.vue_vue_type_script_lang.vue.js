/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-arrow-up-s',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '5.64 8 12.73 7.78' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 10.828-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"},[])]); }
return h('svg',{"viewBox":c ? '6 8 12 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 8 6 6H6z"},[])]);
    }
};

export { script as default };
