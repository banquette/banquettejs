/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-bar-chart-grouped',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor';this.version;var c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '2 2 19 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 12h2v9H2v-9zm3 2h2v7H5v-7zm11-6h2v13h-2V8zm3 2h2v11h-2V10zM9 2h2v19H9V2zm3 2h2v17h-2V4z"},[])]);
    }
};

export { script as default };
