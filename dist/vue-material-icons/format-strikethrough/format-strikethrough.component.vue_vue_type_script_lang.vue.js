/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-format-strikethrough',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '3 4 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '3 4 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 19c1.1 0 2-.9 2-2v-1h-4v1c0 1.1.9 2 2 2zM5 5.5C5 6.33 5.67 7 6.5 7H10v3h4V7h3.5c.83 0 1.5-.67 1.5-1.5S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5zM4 14h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z"},[])]); }
return h('svg',{"viewBox":c ? '3 4 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"},[])]);
    }
};

export { script as default };
