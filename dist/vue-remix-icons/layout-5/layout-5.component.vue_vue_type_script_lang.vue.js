/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-layout-5',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3zm4-11H4v9h3v-9zm13 0H9v9h11v-9zm0-5H4v3h16V5z"},[])]); }
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 10v11H3a1 1 0 0 1-1-1V10h5zm15 0v10a1 1 0 0 1-1 1H9V10h13zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1h18z"},[])]);
    }
};

export { script as default };
