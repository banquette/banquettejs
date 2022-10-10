/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-south-west',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '5 4.41 14.59 14.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 18c0-.56-.45-1-1-1H8.41L19.3 6.11a.996.996 0 1 0-1.41-1.41L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z"},[])]); }
return h('svg',{"viewBox":c ? '5 4 15 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"},[])]);
    }
};

export { script as default };
