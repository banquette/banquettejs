/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-loader-5',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor';this.version;var c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '12 3 9 9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"},[])]);
    }
};

export { script as default };
