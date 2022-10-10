/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-new-label',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 5 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M12 17v-4H9v-3H5V7h10l3.55 5L15 17z"},[]),h('path',{d:"m21 12-4.37 6.16c-.37.52-.98.84-1.63.84h-3v-2h3l3.55-5L15 7H5v3H3V7c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84L21 12zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3v-2z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '2 5 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 12-4.97 7H12v-6H9v-3H3V5h13.03L21 12zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3v-2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 5 18.55 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20.18 13.16-3.55 5c-.38.53-.98.84-1.63.84h-3v-3c0-1.66-1.34-3-3-3 0-1.66-1.34-3-3-3H3V7c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84l3.55 5c.49.7.49 1.62 0 2.32zM10 16c0-.55-.45-1-1-1H7v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '2 5 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 12-4.37 6.16c-.37.52-.98.84-1.63.84h-3v-2h3l3.55-5L15 7H5v3H3V7c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84L21 12zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3v-2z"},[])]); }
return h('svg',{"viewBox":c ? '2 5 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 12-4.37 6.16c-.37.52-.98.84-1.63.84h-3v-6H9v-3H3V7c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84L21 12zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3v-2z"},[])]);
    }
};

export { script as default };
