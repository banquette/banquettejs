/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-swap-horizontal-circle',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 11H9v2.5L5.5 14 9 10.5V13h4v2zm2-1.5V11h-4V9h4V6.5l3.5 3.5-3.5 3.5z","opacity":"0.3"},[]),h('path',{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-13.5V9h-4v2h4v2.5l3.5-3.5zm-6 4L5.5 14 9 17.5V15h4v-2H9z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5 3.15 3.15c.2.2.2.51 0 .71L15 13.5V11h-4V9h4V6.5zm-6 11-3.15-3.15c-.2-.2-.2-.51 0-.71L9 10.5V13h4v2H9v2.5z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-13.5V9h-4v2h4v2.5l3.5-3.5zm-6 4L5.5 14 9 17.5V15h4v-2H9z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5 3.5 3.5-3.5 3.5V11h-4V9h4V6.5zm-6 11L5.5 14 9 10.5V13h4v2H9v2.5z"},[])]);
    }
};

export { script as default };
