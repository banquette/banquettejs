/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-delete-bin-3',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7H2V5h20v2h-2zM6 7v13h12V7H6zm5 2h2v2h-2V9zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2zM7 2h10v2H7V2z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2h-2zm-9 2v2h2V9h-2zm0 3v2h2v-2h-2zm0 3v2h2v-2h-2zM7 2h10v2H7V2z"},[])]);
    }
};

export { script as default };
