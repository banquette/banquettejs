/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-bar-chart-horizontal',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '3 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z"},[])]); }
return h('svg',{"viewBox":c ? '3 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3v4H3V3h9zm4 14v4H3v-4h13zm6-7v4H3v-4h19z"},[])]);
    }
};

export { script as default };
