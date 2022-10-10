/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-map-pin-5',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '4 2 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 18.485 4.243-4.242a6 6 0 1 0-8.486 0L12 18.485zm5.657-2.828L12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0zM5 22h14v2H5v-2z"},[])]); }
return h('svg',{"viewBox":c ? '4 2 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.657 15.657 12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0zM5 22h14v2H5v-2z"},[])]);
    }
};

export { script as default };
