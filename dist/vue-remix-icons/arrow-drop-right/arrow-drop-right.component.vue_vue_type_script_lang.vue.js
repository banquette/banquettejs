/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-arrow-drop-right',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '9.34 7.76 5.66 8.49' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.172 12 9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"},[])]); }
return h('svg',{"viewBox":c ? '10 8 4 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 12-4 4V8z"},[])]);
    }
};

export { script as default };
