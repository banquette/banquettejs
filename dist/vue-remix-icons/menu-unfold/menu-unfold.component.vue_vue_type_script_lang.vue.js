/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-menu-unfold',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '3 3.9 19 16.1' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 18v2H3v-2h18zM17.404 3.904 22 8.5l-4.596 4.596-1.414-1.414L19.172 8.5 15.99 5.318l1.414-1.414zM12 11v2H3v-2h9zm0-7v2H3V4h9z"},[])]); }
return h('svg',{"viewBox":c ? '3 3.55 19 16.45' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 18v2H3v-2h18zM17.05 3.55 22 8.5l-4.95 4.95v-9.9zM12 11v2H3v-2h9zm0-7v2H3V4h9z"},[])]);
    }
};

export { script as default };