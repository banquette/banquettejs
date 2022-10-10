/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-music',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '6 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 13.535V3h8v2h-6v12a4 4 0 1 1-2-3.465zM10 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},[])]); }
return h('svg',{"viewBox":c ? '6 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z"},[])]);
    }
};

export { script as default };
