/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-shape',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.83 20A3.001 3.001 0 1 1 4 16.17V7.83A3.001 3.001 0 1 1 7.83 4h8.34A3.001 3.001 0 1 1 20 7.83v8.34A3.001 3.001 0 1 1 16.17 20H7.83zm0-2h8.34A3.008 3.008 0 0 1 18 16.17V7.83A3.008 3.008 0 0 1 16.17 6H7.83A3.008 3.008 0 0 1 6 7.83v8.34A3.008 3.008 0 0 1 7.83 18zM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM5 22a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4h6v2H9V4zm0 14h6v2H9v-2zM4 9h2v6H4V9zm14 0h2v6h-2V9z"},[])]);
    }
};

export { script as default };
