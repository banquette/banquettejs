/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-man-3',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '8 2.41 8 19.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 7H8v8h2v7h4v-7h2zm-4-5.249L14.248 4 12 6.248 9.75 4z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '8 1.95 8 20.05' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 7h-4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h1v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6h1c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2zm-2.35-1.1L10.1 4.35c-.2-.2-.2-.51 0-.71l1.54-1.54c.2-.2.51-.2.71 0l1.54 1.54c.2.2.2.51 0 .71L12.35 5.9c-.19.19-.51.19-.7 0z"},[])]); }
return h('svg',{"viewBox":c ? '8 2.41 8 19.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2zm-2-5.249L14.248 4 12 6.248 9.75 4z"},[])]);
    }
};

export { script as default };
