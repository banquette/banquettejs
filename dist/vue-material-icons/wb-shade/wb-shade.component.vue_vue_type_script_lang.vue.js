/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-wb-shade',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '2.71 4.21 18.04 15.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 14.13c0 .23.09.46.26.63l4.98 4.98c.17.17.39.26.62.26.79 0 1.18-.95.62-1.51l-4.98-4.98c-.55-.56-1.5-.16-1.5.62zM15 20h2l-3-3v2c0 .55.45 1 1 1zM7.65 4.35l-4.8 4.8a.5.5 0 0 0 .36.85H4v9c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-9h.79c.45 0 .67-.54.35-.85l-4.79-4.8a.501.501 0 0 0-.7 0zM9 14H7v-4h2v4z"},[])]); }
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 12v2.5l5.5 5.5H22l-8-8zm0 8h3l-3-3v3zM8 4l-6 6h2v10h8V10h2L8 4zm1 10H7v-4h2v4z"},[])]); }
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 12v2.5l5.5 5.5H22zm0 8h3l-3-3zM8 4l-6 6h2v10h8V10h2L8 4zm1 10H7v-4h2v4z"},[])]);
    }
};

export { script as default };
