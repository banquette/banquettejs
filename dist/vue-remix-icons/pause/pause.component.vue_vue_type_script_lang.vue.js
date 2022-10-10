/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-pause',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor';this.version;var c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '6 5 12 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 5h2v14H6V5zm10 0h2v14h-2V5z"},[])]);
    }
};

export { script as default };
