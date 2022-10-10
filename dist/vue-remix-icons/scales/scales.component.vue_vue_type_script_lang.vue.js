/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-scales',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '1 2 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 2v1h7v2h-7v14h4v2H7v-2h4V5H4V3h7V2h2zM5 6.343l2.828 2.829A3.999 3.999 0 0 1 5 16a3.999 3.999 0 0 1-2.828-6.828L5 6.343zm14 0 2.828 2.829A3.999 3.999 0 0 1 19 16a3.999 3.999 0 0 1-2.828-6.828L19 6.343zM5 9.172l-1.414 1.414a2 2 0 1 0 2.828 0L5 9.172zm14 0-1.414 1.414a2 2 0 1 0 2.828 0L19 9.172z"},[])]); }
return h('svg',{"viewBox":c ? '1 2 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 2v1h7v2h-7v14h4v2H7v-2h4V5H4V3h7V2h2zM5 6.343l2.828 2.829A3.999 3.999 0 0 1 5 16a3.999 3.999 0 0 1-2.828-6.828L5 6.343zm14 0 2.828 2.829A3.999 3.999 0 0 1 19 16a3.999 3.999 0 0 1-2.828-6.828L19 6.343zm0 2.829-1.414 1.414A1.986 1.986 0 0 0 17 12l4 .001c0-.54-.212-1.041-.586-1.415L19 9.172zm-14 0-1.414 1.414A1.986 1.986 0 0 0 3 12l4 .001c0-.54-.212-1.041-.586-1.415L5 9.172z"},[])]);
    }
};

export { script as default };
