/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-dual-sim-2',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10zm-.829 2H6v16h12V7.829L14.171 4zM12 7.5a3 3 0 0 1 2.009 5.228l-.008-.008.006.01L12.595 14H15v2H9v-1.453l3.67-3.304A1 1 0 1 0 11 10.5H9a3 3 0 0 1 3-3z"},[])]); }
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10zm-3 5.5a3 3 0 0 0-2.995 2.824L9 10.5h2a1 1 0 1 1 1.751.66l-.082.083L9 14.547V16h6v-2h-2.405l1.412-1.27-.006-.01.008.008A3 3 0 0 0 12 7.5z"},[])]);
    }
};

export { script as default };
