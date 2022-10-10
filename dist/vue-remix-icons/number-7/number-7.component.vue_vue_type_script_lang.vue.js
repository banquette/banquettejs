/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-number-7',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor';this.version;var c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '6 2 13 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 2v1.5L10.763 22H8.574l8.013-18H6V2z"},[])]);
    }
};

export { script as default };
