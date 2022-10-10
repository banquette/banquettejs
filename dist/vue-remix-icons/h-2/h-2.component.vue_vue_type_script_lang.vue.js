/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-h-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor';this.version;var c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2 4 20.25 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4a3.75 3.75 0 0 1 2.978 6.03l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546a1.75 1.75 0 1 0-3.064-1.292l-.006.144h-2A3.75 3.75 0 0 1 18.5 8z"},[])]);
    }
};

export { script as default };
