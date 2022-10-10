/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-music-note',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"10.01","cy":"17","opacity":"0.3",r:"2"},[]),h('path',{d:"m12 3 .01 10.55c-.59-.34-1.27-.55-2-.55a4.001 4.001 0 1 0 0 8c2.22 0 3.99-1.79 3.99-4V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5v8.55c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 3 .01 10.55c-.59-.34-1.27-.55-2-.55a4.001 4.001 0 1 0 0 8c2.22 0 3.99-1.79 3.99-4V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},[])]); }
return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"},[])]);
    }
};

export { script as default };
