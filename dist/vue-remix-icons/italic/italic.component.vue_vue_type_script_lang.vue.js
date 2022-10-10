/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-italic',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor';this.version;var c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '7 4 10 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z"},[])]);
    }
};

export { script as default };
