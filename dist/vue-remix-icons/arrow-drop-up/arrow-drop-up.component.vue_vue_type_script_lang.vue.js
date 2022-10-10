/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-arrow-drop-up',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '7.76 9 8.49 5.66' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 11.828-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"},[])]); }
return h('svg',{"viewBox":c ? '8 10 8 4' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 10 4 4H8z"},[])]);
    }
};

export { script as default };
