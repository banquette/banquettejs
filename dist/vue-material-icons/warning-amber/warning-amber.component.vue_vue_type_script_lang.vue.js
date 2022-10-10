/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-warning-amber',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '1 2 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2.47 3.99 19.06 17.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5.99 19.53 19H4.47L12 5.99M2.74 18c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18zM11 11v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zm0 5h2v2h-2z"},[])]); }
if (v === 'outlined' || v === 'sharp')
    { return h('svg',{"viewBox":c ? '1 2 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"},[])]); }
return h('svg',{"viewBox":c ? '1 2 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"},[]),h('path',{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},[])]);
    }
};

export { script as default };
